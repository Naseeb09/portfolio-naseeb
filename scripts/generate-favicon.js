#!/usr/bin/env node

/**
 * Favicon Generator Script
 * 
 * This script generates favicon files from your profile photo.
 * 
 * Requirements:
 * - Node.js
 * - sharp package: npm install sharp --save-dev
 * 
 * Usage:
 * 1. Place your profile photo in the project root as "profile-photo.jpg" (or update the path below)
 * 2. Run: node scripts/generate-favicon.js
 * 3. The generated favicons will be placed in the /public directory
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../profile-photo.jpg'); // Update this path to your photo
const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateFavicons() {
  try {
    // Check if input image exists
    if (!fs.existsSync(inputImage)) {
      console.error(`❌ Error: Input image not found at ${inputImage}`);
      console.log('\n📝 Instructions:');
      console.log('1. Place your profile photo in the project root');
      console.log('2. Rename it to "profile-photo.jpg" (or update the path in this script)');
      console.log('3. Run this script again\n');
      process.exit(1);
    }

    console.log('🎨 Generating favicons from your profile photo...\n');

    // Generate favicon.ico (16x16, 32x32, 48x48)
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✅ Generated favicon.ico (32x32)');

    // Generate icon-light-32x32.png
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .toFile(path.join(publicDir, 'icon-light-32x32.png'));
    console.log('✅ Generated icon-light-32x32.png');

    // Generate icon-dark-32x32.png (slightly darker for dark mode)
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .modulate({ brightness: 0.9 })
      .toFile(path.join(publicDir, 'icon-dark-32x32.png'));
    console.log('✅ Generated icon-dark-32x32.png');

    // Generate apple-icon.png (180x180 for Apple devices)
    await sharp(inputImage)
      .resize(180, 180, { fit: 'cover' })
      .toFile(path.join(publicDir, 'apple-icon.png'));
    console.log('✅ Generated apple-icon.png (180x180)');

    // Generate icon.svg (simplified SVG version)
    const svgContent = `
<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <image href="/icon-light-32x32.png" width="32" height="32"/>
</svg>`.trim();
    
    fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);
    console.log('✅ Generated icon.svg');

    console.log('\n🎉 All favicons generated successfully!');
    console.log('📁 Files are in the /public directory');
    console.log('\n💡 Tip: You may want to manually optimize the SVG for better results.\n');

  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    console.log('\n💡 Alternative: Use an online tool like:');
    console.log('   - https://realfavicongenerator.net/');
    console.log('   - https://favicon.io/\n');
    process.exit(1);
  }
}

// Check if sharp is installed
try {
  require.resolve('sharp');
  generateFavicons();
} catch (e) {
  console.error('❌ Error: sharp package not found');
  console.log('\n📦 Install it with: npm install sharp --save-dev\n');
  process.exit(1);
}
