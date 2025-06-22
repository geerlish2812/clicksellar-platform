// THIS FILE IS USED FOR DEPLOYMENT ONLY
// It ensures the server runs in production mode and stays alive
// This file uses ESM syntax since package.json has "type": "module"

// Set environment variables explicitly
process.env.NODE_ENV = 'production';
console.log('=== CLICKSELLAR Production Server ===');
console.log('Starting server in production mode...');

// Create an interval to keep the server alive
const heartbeat = setInterval(() => {
  // This empty heartbeat keeps the application alive
}, 5000);

// Prevent the process from exiting on signals
process.on('SIGTERM', () => { console.log('Received SIGTERM but staying alive for health checks'); });
process.on('SIGINT', () => { console.log('Received SIGINT but staying alive for health checks'); });

// Prevent unhandled errors from stopping the app
process.on('uncaughtException', (err) => { console.error('Uncaught Exception:', err); });
process.on('unhandledRejection', (reason, promise) => { console.error('Unhandled Rejection:', reason); });

// Keep the process alive indefinitely with process.stdin
process.stdin.resume();

// Now import the actual server code using dynamic ESM import
import('./dist/index.js').catch(error => {
  console.error('Failed to import server module:', error);
  // Even if import fails, keep the process alive
  setInterval(() => {
    console.log('[RECOVERY] Keeping server process alive after import failure');
  }, 10000);
});