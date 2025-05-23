const fs = require('fs');
const path = require('path');

console.log('🔍 Testing React Router DOM setup...');

// Check if react-router-dom is installed
const nodeModulesPath = path.join(__dirname, 'node_modules', 'react-router-dom');
if (!fs.existsSync(nodeModulesPath)) {
  console.error('❌ react-router-dom is not installed!');
  process.exit(1);
}

// Check if the dist directory exists
const distPath = path.join(nodeModulesPath, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ react-router-dom/dist directory is missing!');
  process.exit(1);
}

// Check for the index.js file
const indexJsPath = path.join(distPath, 'index.js');
if (!fs.existsSync(indexJsPath)) {
  console.error('❌ react-router-dom/dist/index.js is missing!');
  process.exit(1);
}

// Check for the index.mjs file (the one that was causing the error)
const indexMjsPath = path.join(distPath, 'index.mjs');
if (!fs.existsSync(indexMjsPath)) {
  console.warn('⚠️ react-router-dom/dist/index.mjs is missing!');
  
  // If the .mjs file is missing but the .js file exists, we can create a simple copy
  console.log('🔧 Creating index.mjs as a copy of index.js...');
  try {
    const indexJsContent = fs.readFileSync(indexJsPath, 'utf8');
    fs.writeFileSync(indexMjsPath, indexJsContent);
    console.log('✅ Successfully created index.mjs');
  } catch (error) {
    console.error('❌ Failed to create index.mjs:', error);
    process.exit(1);
  }
} else {
  console.log('✅ react-router-dom/dist/index.mjs exists');
}

console.log('✅ React Router DOM setup looks good!');
