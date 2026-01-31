# Favicon Setup Instructions

To set your profile photo as the website favicon (the icon that appears in browser tabs), follow these steps:

## Option 1: Using the Script (Recommended)

1. **Place your profile photo** in the project root directory
   - Name it: `profile-photo.jpg` (or update the path in the script)
   - Supported formats: JPG, PNG, WebP

2. **Install the required package:**
   ```bash
   npm install sharp --save-dev
   ```

3. **Run the script:**
   ```bash
   node scripts/generate-favicon.js
   ```

4. The script will generate all required favicon files in the `/public` directory:
   - `favicon.ico` (32x32)
   - `icon-light-32x32.png` (for light mode)
   - `icon-dark-32x32.png` (for dark mode)
   - `apple-icon.png` (180x180 for Apple devices)
   - `icon.svg` (SVG version)

## Option 2: Using Online Tools

If you prefer using online tools:

1. **Visit one of these sites:**
   - https://realfavicongenerator.net/ (Recommended - most comprehensive)
   - https://favicon.io/
   - https://www.favicon-generator.org/

2. **Upload your profile photo**

3. **Generate and download** the favicon package

4. **Extract and place** the following files in the `/public` directory:
   - `favicon.ico`
   - `icon-light-32x32.png` (or `favicon-32x32.png`)
   - `icon-dark-32x32.png` (or create a darker version)
   - `apple-icon.png` (or `apple-touch-icon.png` - 180x180)
   - `icon.svg` (optional but recommended)

## Option 3: Manual Creation

If you want to create them manually:

1. **Resize your photo** to these sizes:
   - 32x32 pixels (for favicon.ico and icon PNGs)
   - 180x180 pixels (for Apple icon)

2. **Use an image editor** (Photoshop, GIMP, or online tools) to:
   - Crop to square aspect ratio
   - Resize to required dimensions
   - Optimize for web (reduce file size)

3. **Save files** with these exact names in `/public`:
   - `favicon.ico` (convert PNG to ICO format)
   - `icon-light-32x32.png`
   - `icon-dark-32x32.png` (slightly darker version)
   - `apple-icon.png`

## Tips

- **Best results:** Use a square photo with your face centered
- **File size:** Keep favicons small (< 50KB) for fast loading
- **Format:** PNG for icons, ICO for favicon.ico
- **Testing:** After adding favicons, hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R) to see changes

## Current Setup

The favicon configuration is already set up in `app/layout.tsx`. Once you add the files to `/public`, they will automatically be used.
