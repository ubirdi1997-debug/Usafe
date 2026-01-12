from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib
from models import ContactFormCreate, ContactFormSubmission, AdminLogin, AdminResponse, WebsiteStats, AdminUser
from auth import verify_password, get_password_hash, create_access_token, decode_access_token


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()

# Helper function to get current admin user
async def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    
    username = payload.get("sub")
    if username is None:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    
    admin = await db.admins.find_one({"username": username}, {"_id": 0})
    if admin is None:
        raise HTTPException(status_code=401, detail="User not found")
    
    return AdminUser(**admin)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ========================================
# Contact Form Routes
# ========================================

async def send_email_via_mailtrap(name: str, email: str, message: str, subject: str, phone: Optional[str] = None):
    """Send email using Mailtrap SMTP"""
    try:
        # Get Mailtrap credentials from environment variables
        mailtrap_token = os.environ.get('MAILTRAP_TOKEN', '78e9eb4ea2073696b6201f6c49538f59')
        mailtrap_host = os.environ.get('MAILTRAP_HOST', 'smtp.mailtrap.io')
        mailtrap_port = int(os.environ.get('MAILTRAP_PORT', '2525'))
        mailtrap_user = os.environ.get('MAILTRAP_USER', '')
        mailtrap_password = os.environ.get('MAILTRAP_PASSWORD', '')
        
        # For Mailtrap, we can use token-based auth or SMTP credentials
        # Using SMTP credentials approach
        sender_email = os.environ.get('MAILTRAP_SENDER_EMAIL', 'hello@demomailtrap.co')
        sender_name = os.environ.get('MAILTRAP_SENDER_NAME', 'Mailtrap Test')
        recipient_email = os.environ.get('CONTACT_RECIPIENT_EMAIL', 'admin@usafe.in')
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = f"{sender_name} <{sender_email}>"
        msg['To'] = recipient_email
        msg['Subject'] = f"Contact Form: {subject}"
        
        # Create email body
        body = f"""
New Contact Form Submission

Name: {name}
Email: {email}
Phone: {phone if phone else 'Not provided'}
Subject: {subject}

Message:
{message}
"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        # For Mailtrap, if using token, we need to use API, but for SMTP we use credentials
        # Using SMTP with username/password (Mailtrap provides these in their dashboard)
        if mailtrap_user and mailtrap_password:
            await aiosmtplib.send(
                msg,
                hostname=mailtrap_host,
                port=mailtrap_port,
                username=mailtrap_user,
                password=mailtrap_password,
                use_tls=True
            )
        else:
            # Fallback: Try with token as password (some Mailtrap setups work this way)
            await aiosmtplib.send(
                msg,
                hostname=mailtrap_host,
                port=mailtrap_port,
                username=mailtrap_token,
                password=mailtrap_token,
                use_tls=True
            )
        
        logger.info(f"Email sent successfully to {recipient_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        # Don't raise exception - we still want to save the submission
        return False

@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(form_data: ContactFormCreate, request: Request):
    """Submit a contact form"""
    submission_dict = form_data.model_dump()
    submission_dict['ip_address'] = request.client.host
    submission = ContactFormSubmission(**submission_dict)
    
    # Convert to dict and serialize datetime
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    # Save to database
    await db.contact_submissions.insert_one(doc)
    logger.info(f"Contact form submitted: {submission.email}")
    
    # Send email
    email_sent = await send_email_via_mailtrap(
        name=submission.name,
        email=submission.email,
        message=submission.message,
        subject=submission.subject,
        phone=submission.phone
    )
    
    if not email_sent:
        logger.warning(f"Email sending failed for submission {submission.id}, but submission was saved")
    
    return submission

@api_router.get("/admin/contacts", response_model=List[ContactFormSubmission])
async def get_all_contacts(
    current_admin: AdminUser = Depends(get_current_admin),
    status: Optional[str] = None,
    skip: int = 0,
    limit: int = 100
):
    """Get all contact form submissions (Admin only)"""
    query = {}
    if status:
        query['status'] = status
    
    contacts = await db.contact_submissions.find(query, {"_id": 0}).sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
    
    # Convert ISO string timestamps back to datetime objects
    for contact in contacts:
        if isinstance(contact['created_at'], str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    
    return contacts

@api_router.put("/admin/contacts/{contact_id}/status")
async def update_contact_status(
    contact_id: str,
    status: str,
    current_admin: AdminUser = Depends(get_current_admin)
):
    """Update contact form status (Admin only)"""
    result = await db.contact_submissions.update_one(
        {"id": contact_id},
        {"$set": {"status": status}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return {"message": "Status updated successfully"}

@api_router.delete("/admin/contacts/{contact_id}")
async def delete_contact(
    contact_id: str,
    current_admin: AdminUser = Depends(get_current_admin)
):
    """Delete a contact submission (Admin only)"""
    result = await db.contact_submissions.delete_one({"id": contact_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    return {"message": "Contact deleted successfully"}

# ========================================
# Admin Authentication Routes
# ========================================

@api_router.post("/admin/register")
async def register_admin(username: str, email: str, password: str):
    """Register a new admin (for initial setup only - disable in production)"""
    # Check if admin already exists
    existing_admin = await db.admins.find_one({"username": username})
    if existing_admin:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Create admin user
    admin = AdminUser(
        username=username,
        email=email,
        password_hash=get_password_hash(password)
    )
    
    doc = admin.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    if doc['last_login']:
        doc['last_login'] = doc['last_login'].isoformat()
    
    await db.admins.insert_one(doc)
    logger.info(f"Admin user created: {username}")
    
    return {"message": "Admin user created successfully"}

@api_router.post("/admin/login", response_model=AdminResponse)
async def login_admin(login_data: AdminLogin):
    """Admin login"""
    admin = await db.admins.find_one({"username": login_data.username}, {"_id": 0})
    
    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    if not verify_password(login_data.password, admin['password_hash']):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Update last login
    await db.admins.update_one(
        {"username": login_data.username},
        {"$set": {"last_login": datetime.utcnow().isoformat()}}
    )
    
    # Create access token
    access_token = create_access_token(data={"sub": admin['username']})
    
    return AdminResponse(
        id=admin['id'],
        username=admin['username'],
        email=admin['email'],
        token=access_token
    )

@api_router.get("/admin/me", response_model=AdminUser)
async def get_current_admin_info(current_admin: AdminUser = Depends(get_current_admin)):
    """Get current admin user info"""
    return current_admin

# ========================================
# Admin Dashboard Routes
# ========================================

@api_router.get("/admin/stats", response_model=WebsiteStats)
async def get_website_stats(current_admin: AdminUser = Depends(get_current_admin)):
    """Get website statistics (Admin only)"""
    total_contacts = await db.contact_submissions.count_documents({})
    new_contacts = await db.contact_submissions.count_documents({"status": "new"})
    read_contacts = await db.contact_submissions.count_documents({"status": "read"})
    replied_contacts = await db.contact_submissions.count_documents({"status": "replied"})
    
    # Get recent 5 submissions
    recent = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).limit(5).to_list(5)
    
    # Convert timestamps
    for contact in recent:
        if isinstance(contact['created_at'], str):
            contact['created_at'] = datetime.fromisoformat(contact['created_at'])
    
    return WebsiteStats(
        total_contacts=total_contacts,
        new_contacts=new_contacts,
        read_contacts=read_contacts,
        replied_contacts=replied_contacts,
        recent_submissions=recent
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()