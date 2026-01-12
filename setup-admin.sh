#!/bin/bash

# Setup script for uSafe Website Admin
# This script creates the first admin user

echo "======================================"
echo "uSafe Website - Admin Setup"
echo "======================================"
echo ""

# Get backend URL
BACKEND_URL="${REACT_APP_BACKEND_URL:-http://localhost:8001}"

echo "Creating admin user..."
echo ""
echo "Default credentials:"
echo "Username: admin"
echo "Email: admin@usafe.in"
echo "Password: UsafeAdmin@2024"
echo ""
echo "⚠️  IMPORTANT: Change the password after first login!"
echo ""

# Create admin user
curl -X POST "${BACKEND_URL}/api/admin/register?username=admin&email=admin@usafe.in&password=UsafeAdmin@2024" \
  -H "Content-Type: application/json"

echo ""
echo ""
echo "======================================"
echo "Setup Complete!"
echo "======================================"
echo ""
echo "You can now login at:"
echo "http://localhost:3000/admin/login"
echo ""
echo "Credentials:"
echo "Username: admin"
echo "Password: UsafeAdmin@2024"
echo ""
echo "⚠️  Remember to change the password!"
echo ""
