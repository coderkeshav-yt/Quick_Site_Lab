const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure CI=false is set to prevent treating warnings as errors
process.env.CI = 'false';

console.log('🚀 Starting Vercel-optimized build process...');

// Run the standard build
try {
  console.log('📦 Building React application...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

// Copy index.html to 200.html if it doesn't exist
const buildDir = path.join(__dirname, 'build');
const indexPath = path.join(buildDir, 'index.html');
const fallbackPath = path.join(buildDir, '200.html');

if (fs.existsSync(indexPath) && !fs.existsSync(fallbackPath)) {
  console.log('📄 Creating fallback 200.html...');
  fs.copyFileSync(indexPath, fallbackPath);
}

// Create a _redirects file for client-side routing
const redirectsPath = path.join(buildDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200');
console.log('🔀 Created _redirects file for SPA routing');

console.log('✅ Build completed successfully!');
