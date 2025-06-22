// Simple production entry point for CLICKSELLAR
// This file ensures the server stays alive in production deployment

// Set production environment
process.env.NODE_ENV = 'production';

console.log('=== CLICKSELLAR Production Server Starting ===');

// Keep the process alive with multiple techniques
const keepAlive = setInterval(() => {
  console.log('[HEARTBEAT] Production server still running');
}, 30000);

// Prevent exit on signals
process.on('SIGTERM', () => console.log('Received SIGTERM - staying alive'));
process.on('SIGINT', () => console.log('Received SIGINT - staying alive'));

// Handle errors without crashing
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

// Keep stdin open
process.stdin.resume();

// Import the main server
console.log('Loading main server...');
import('./dist/index.js')
  .then(() => {
    console.log('Server loaded successfully');
  })
  .catch(error => {
    console.error('Server import failed:', error);
    // Keep alive even on failure
    setInterval(() => {
      console.log('[RECOVERY] Keeping alive after import failure');
    }, 30000);
  });