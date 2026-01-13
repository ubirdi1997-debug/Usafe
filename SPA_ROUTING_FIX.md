# Fixing 404 Errors on Direct Route Access (React SPA)

## Problem
When you directly access routes like `/products`, `/services`, `/contact`, etc., you get a 404 error. This happens because the web server doesn't know about React Router's client-side routes.

## Solution
Configure your web server to serve `index.html` for all routes, allowing React Router to handle the routing client-side.

## For CloudPanel (Nginx)

### Step 1: Add Nginx Configuration
1. Log in to CloudPanel
2. Go to your site settings
3. Navigate to **"Nginx"** or **"Custom Config"** section
4. Add this configuration:

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

### Step 2: Save and Reload
1. Click **"Save"** in CloudPanel
2. Nginx should automatically reload, but if not, SSH into your server and run:
   ```bash
   sudo nginx -t  # Test configuration
   sudo systemctl reload nginx  # Reload Nginx
   ```

### Step 3: Test
1. Try accessing routes directly:
   - `https://usafe.in/products`
   - `https://usafe.in/services`
   - `https://usafe.in/contact`
2. All routes should now load correctly!

## Alternative: Manual Nginx Configuration

If CloudPanel's custom config doesn't work, you can manually edit the Nginx config:

1. Find your site's Nginx config file (usually in `/etc/nginx/sites-available/`)
2. Edit the file and add the `try_files` directive
3. Test and reload Nginx

## For Apache (if not using Nginx)

If you're using Apache instead of Nginx, create or edit `.htaccess` in your build directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## How It Works

The `try_files $uri $uri/ /index.html;` directive tells Nginx:
1. First, try to serve the requested file (`$uri`)
2. If not found, try the requested URI as a directory (`$uri/`)
3. If still not found, serve `/index.html` (the React app entry point)

This way, React Router receives all requests and can handle routing client-side, preventing 404 errors.

## Verification

After implementing the fix:
- ✅ Direct URL access works (e.g., `https://usafe.in/products`)
- ✅ Browser refresh works on any route
- ✅ Bookmarked URLs work
- ✅ SEO crawlers can access all routes
