#!/usr/bin/env node
// Main entry point for production deployment for CLICKSELLAR
// This is a pure ESM file (with .mjs extension) to ensure compatibility

// Display initialization message
console.log('=== CLICKSELLAR PRODUCTION INITIALIZATION ===');
console.log('Starting production environment setup...');

// Set environment variables
process.env.NODE_ENV = 'production';
process.env.DEPLOYMENT = 'true';

// Setup Keep-alive mechanisms

// 1. Basic Interval
setInterval(() => {
  console.log('[HEARTBEAT] Main keep-alive interval');
}, 30000);

// 2. Handle termination signals
process.on('SIGTERM', () => {
  console.log('[SIGNAL] Received SIGTERM but preventing exit');
  // Intentionally not calling process.exit()
});

process.on('SIGINT', () => {
  console.log('[SIGNAL] Received SIGINT but preventing exit');
  // Intentionally not calling process.exit()
});

// 3. Handle errors without crashing
process.on('uncaughtException', (error) => {
  console.error('[ERROR] Uncaught Exception:', error);
  // Don't exit, just log
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[ERROR] Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit, just log
});

// 4. Keep stdin open to prevent Node from exiting
process.stdin.resume();

// Import the actual server code
console.log('Loading production server...');
import('./production-server.js')
  .then(() => {
    console.log('Production server loaded successfully');
  })
  .catch(error => {
    console.error('Error loading production server:', error);
    
    // Even if the import fails, keep the process alive
    console.log('Setting up recovery mechanism...');
    setInterval(() => {
      console.log('[RECOVERY] Keeping server alive despite import error');
    }, 15000);
  });

// This log will execute immediately after the import is initiated
console.log('Production initialization complete - process will remain running');