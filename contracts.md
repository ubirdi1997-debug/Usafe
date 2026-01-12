# uSafe Website - API Contracts & Implementation Guide

## Frontend Routes
- `/` - Home page
- `/products` - Products listing
- `/services` - Services detail
- `/legal-services` - Legal services marketing page
- `/about` - About Urbanesafe LLP
- `/contact` - Contact form
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard (protected)

## Backend API Endpoints

### Public Endpoints

#### POST /api/contact
Submit contact form
```json
Request:
{
  "name": "string",
  "email": "string",
  "phone": "string" (optional),
  "subject": "string",
  "message": "string"
}

Response:
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "status": "new",
  "created_at": "datetime",
  "ip_address": "string"
}
```

### Admin Endpoints (Requires Authentication)

#### POST /api/admin/login
Admin login
```json
Request:
{
  "username": "string",
  "password": "string"
}

Response:
{
  "id": "uuid",
  "username": "string",
  "email": "string",
  "token": "jwt_token"
}
```

#### GET /api/admin/contacts
Get all contact submissions
- Query params: `status` (optional), `skip`, `limit`
- Returns: Array of ContactFormSubmission

#### GET /api/admin/stats
Get website statistics
```json
Response:
{
  "total_contacts": number,
  "new_contacts": number,
  "read_contacts": number,
  "replied_contacts": number,
  "recent_submissions": []
}
```

#### PUT /api/admin/contacts/{contact_id}/status
Update contact status
- Body: { "status": "new|read|replied" }

#### DELETE /api/admin/contacts/{contact_id}
Delete a contact submission

## Database Collections

### contact_submissions
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "status": "new|read|replied",
  "created_at": "datetime",
  "ip_address": "string"
}
```

### admins
```json
{
  "id": "uuid",
  "username": "string",
  "email": "string",
  "password_hash": "string",
  "created_at": "datetime",
  "last_login": "datetime"
}
```

## Frontend-Backend Integration

### Contact Form (Contact.jsx)
- Form submits to `/api/contact`
- Shows success toast on submission
- Clears form after successful submission
- No mock data - fully integrated

### Admin Dashboard
- Login via `/api/admin/login`
- Token stored in localStorage
- All admin API calls include: `Authorization: Bearer {token}`
- Protected routes check authentication

## Setup Instructions

### Create First Admin User
```bash
curl -X POST "http://localhost:8001/api/admin/register?username=admin&email=admin@usafe.in&password=YourSecurePassword"
```

### Environment Variables
- `JWT_SECRET_KEY` - Secret key for JWT tokens (set in production)
- `MONGO_URL` - MongoDB connection string
- `REACT_APP_BACKEND_URL` - Backend URL for frontend

## Features Implemented
✅ Contact form with backend storage
✅ Admin authentication with JWT
✅ Admin dashboard with stats
✅ Contact management (view, update status, delete)
✅ WhatsApp floating button
✅ Login button in header (links to crm.usafe.in)
✅ All pages (Home, Products, Services, Legal, About, Contact)
✅ Responsive design with dark theme
✅ 3D Spline integration on hero section
