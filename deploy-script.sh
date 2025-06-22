#!/bin/bash

# This script is intended to be used prior to deployment
# It ensures that the server is launched in production mode
# while keeping it alive for Replit's health checks

# 1. Create a production server startup script
echo "console.log('Starting CLICKSELLAR server in production mode...');
process.env.NODE_ENV = 'production';
require('./dist/index.js');" > production-server.js

# 2. Add a message to indicate how to run the server for deployment
echo ""
echo "=== DEPLOYMENT SCRIPT READY ==="
echo "To deploy the application, ensure you:"
echo "1. Build the application with 'npm run build'"
echo "2. Deploy using 'node production-server.js'"
echo "==========================================="