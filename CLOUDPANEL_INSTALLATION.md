# CloudPanel Installation Guide for uSafe Website

This guide will help you install the uSafe website on CloudPanel.

## Prerequisites

- CloudPanel installed on your server
- Node.js 18+ installed (for frontend)
- Python 3.9+ installed (for backend)
- MongoDB installed and running
- Domain name configured and pointing to your server

## Step 1: Create Site in CloudPanel

1. Log in to your CloudPanel dashboard
2. Click **"Sites"** in the left sidebar
3. Click **"Add Site"**
4. Enter your domain name (e.g., `usafe.in`)
5. Select **"Static"** as the site type (since we'll serve the built React app)
6. Click **"Create"**

## Step 2: Install Dependencies

### Frontend Dependencies

1. SSH into your server
2. Navigate to the project directory:
   ```bash
   cd /root/Usafe/frontend
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

### Backend Dependencies

1. Navigate to the backend directory:
   ```bash
   cd /root/Usafe/backend
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Step 3: Configure Environment Variables

### Backend Environment Variables

1. Create a `.env` file in the backend directory:
   ```bash
   cd /root/Usafe/backend
   nano .env
   ```

2. Add the following environment variables:
   ```env
   # MongoDB Configuration
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=usafe

   # CORS Configuration
   CORS_ORIGINS=https://usafe.in,https://www.usafe.in

   # Mailtrap Configuration (for contact form emails)
   MAILTRAP_HOST=live.smtp.mailtrap.io
   MAILTRAP_PORT=587
   MAILTRAP_USER=api
   MAILTRAP_PASSWORD=78e9eb4ea2073696b6201f6c49538f59
   MAILTRAP_SENDER_EMAIL=hello@demomailtrap.co
   MAILTRAP_SENDER_NAME=uSafe Contact Form
   CONTACT_RECIPIENT_EMAIL=admin@usafe.in
   ```

   **Note:** The Mailtrap SMTP credentials are configured above. Update `MAILTRAP_SENDER_EMAIL` and `CONTACT_RECIPIENT_EMAIL` as needed.

### Frontend Environment Variables

1. Create a `.env` file in the frontend directory:
   ```bash
   cd /root/Usafe/frontend
   nano .env
   ```

2. Add the following:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8000
   ```

   **For production**, update this to your backend URL:
   ```env
   REACT_APP_BACKEND_URL=https://api.usafe.in
   ```

## Step 4: Build Frontend

1. Navigate to the frontend directory:
   ```bash
   cd /root/Usafe/frontend
   ```

2. Build the production version:
   ```bash
   npm run build
   # or
   yarn build
   ```

3. The build output will be in the `build` directory.

## Step 5: Configure CloudPanel Site

1. In CloudPanel, go to your site settings
2. Set the **Document Root** to:
   ```
   /root/Usafe/frontend/build
   ```

3. **Configure Nginx for SPA Routing** (IMPORTANT - Prevents 404 errors on direct route access):
   - Go to your site's **"Nginx"** or **"Custom Config"** section in CloudPanel
   - Add the following configuration:
   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
       
       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       # Don't cache HTML files
       location ~* \.html$ {
           expires -1;
           add_header Cache-Control "no-cache, no-store, must-revalidate";
       }
   }
   ```
   - This configuration ensures that all routes (like `/products`, `/services`, etc.) are handled by React Router
   - Without this, direct access to routes will result in 404 errors

4. Enable **"Force HTTPS"** if you have SSL certificate
5. Save the settings

## Step 6: Set Up Backend API (Using CloudPanel Node.js App or Systemd)

### Option A: Using CloudPanel Node.js App (Recommended)

1. In CloudPanel, create a new **Node.js** site for the API:
   - Domain: `api.usafe.in` (or subdomain of your choice)
   - Node.js Version: 18 or higher
   - Document Root: `/root/Usafe/backend`

2. Set the **Start Command** to:
   ```
   uvicorn server:app --host 0.0.0.0 --port 3000
   ```

3. Set **Environment Variables** in CloudPanel:
   - Add all the variables from your `.env` file

### Option B: Using Systemd Service

1. Create a systemd service file:
   ```bash
   sudo nano /etc/systemd/system/usafe-backend.service
   ```

2. Add the following content:
   ```ini
   [Unit]
   Description=uSafe Backend API
   After=network.target

   [Service]
   Type=simple
   User=root
   WorkingDirectory=/root/Usafe/backend
   Environment="PATH=/root/Usafe/backend/venv/bin"
   ExecStart=/root/Usafe/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8000
   Restart=always
   RestartSec=10

   [Install]
   WantedBy=multi-user.target
   ```

3. Enable and start the service:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable usafe-backend
   sudo systemctl start usafe-backend
   ```

4. Check status:
   ```bash
   sudo systemctl status usafe-backend
   ```

## Step 7: Configure Nginx Reverse Proxy (if using Option B)

If you're using systemd service, you'll need to configure Nginx to proxy requests to the backend:

1. In CloudPanel, go to your API site settings
2. Add a **Custom Nginx Configuration**:
   ```nginx
   location / {
       proxy_pass http://localhost:8000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_cache_bypass $http_upgrade;
   }
   ```

## Step 8: Set Up MongoDB

1. Ensure MongoDB is running:
   ```bash
   sudo systemctl status mongod
   ```

2. If not running, start it:
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

3. Create the database (MongoDB will create it automatically on first use)

## Step 9: Set Up SSL Certificates

1. In CloudPanel, go to your site settings
2. Click **"SSL"**
3. Select **"Let's Encrypt"**
4. Enter your email address
5. Click **"Install"**

Repeat for your API subdomain if using one.

## Step 10: Test the Installation

1. **Frontend**: Visit `https://usafe.in` - should load the website
2. **Backend API**: Visit `https://api.usafe.in/api/` - should return `{"message": "Hello World"}`
3. **Contact Form**: Submit a test message through the contact form
4. **Check Email**: Verify that emails are being sent to `admin@usafe.in`

## Step 11: Set Up Auto-Deployment (Optional)

### For Frontend (when code changes):

1. Create a deployment script:
   ```bash
   nano /root/Usafe/deploy-frontend.sh
   ```

2. Add:
   ```bash
   #!/bin/bash
   cd /root/Usafe/frontend
   git pull origin main
   npm install
   npm run build
   ```

3. Make it executable:
   ```bash
   chmod +x /root/Usafe/deploy-frontend.sh
   ```

### For Backend (when code changes):

1. Create a deployment script:
   ```bash
   nano /root/Usafe/deploy-backend.sh
   ```

2. Add:
   ```bash
   #!/bin/bash
   cd /root/Usafe/backend
   git pull origin main
   source venv/bin/activate
   pip install -r requirements.txt
   sudo systemctl restart usafe-backend
   ```

3. Make it executable:
   ```bash
   chmod +x /root/Usafe/deploy-backend.sh
   ```

## Troubleshooting

### Frontend not loading:
- Check that the build directory exists and has files
- Verify document root in CloudPanel is correct
- Check Nginx error logs: `tail -f /var/log/nginx/error.log`

### 404 errors when accessing routes directly (e.g., /products, /services):
- **This is the most common issue with React SPAs**
- Make sure you've added the Nginx SPA configuration (see Step 5)
- The `try_files $uri $uri/ /index.html;` directive is essential
- Verify the Nginx configuration was saved and Nginx was reloaded
- Check Nginx configuration: `sudo nginx -t`
- Reload Nginx: `sudo systemctl reload nginx`
- The Nginx config should be in your site's custom configuration section

### Backend not responding:
- Check if the service is running: `sudo systemctl status usafe-backend`
- Check logs: `sudo journalctl -u usafe-backend -f`
- Verify MongoDB is running: `sudo systemctl status mongod`
- Check environment variables are set correctly

### Emails not sending:
- Verify Mailtrap credentials in `.env` file
- Check backend logs for email errors
- Test Mailtrap connection manually

### CORS errors:
- Verify `CORS_ORIGINS` in backend `.env` includes your frontend domain
- Ensure backend URL in frontend `.env` is correct

## Maintenance

### Update Frontend:
```bash
cd /root/Usafe/frontend
git pull
npm install
npm run build
```

### Update Backend:
```bash
cd /root/Usafe/backend
git pull
source venv/bin/activate
pip install -r requirements.txt
sudo systemctl restart usafe-backend
```

### View Backend Logs:
```bash
sudo journalctl -u usafe-backend -f
```

### View MongoDB Logs:
```bash
sudo tail -f /var/log/mongodb/mongod.log
```

## Security Notes

1. **Never commit `.env` files** to version control
2. **Use strong passwords** for MongoDB
3. **Keep dependencies updated** regularly
4. **Enable firewall** and only allow necessary ports
5. **Use HTTPS** for all connections
6. **Regular backups** of MongoDB database

## Support

For issues or questions:
- Email: admin@usafe.in
- Website: https://usafe.in
