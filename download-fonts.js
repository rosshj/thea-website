// This script helps download the Open Runde font files
// Run with: node download-fonts.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const fontWeights = ['Regular', 'Medium', 'SemiBold', 'Bold'];
const fontFormats = ['otf']; // Only OTF is available on the repo
const targetDir = path.join(__dirname, 'public', 'fonts', 'open-runde');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Function to download a file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, response => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${dest}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(dest, () => {}); // Delete the file if download failed
        reject(`Failed to download ${url} - Status: ${response.statusCode}`);
      }
    }).on('error', err => {
      file.close();
      fs.unlink(dest, () => {}); // Delete the file on error
      reject(`Error downloading ${url}: ${err.message}`);
    });
  });
}

// Download all font files
async function downloadFonts() {
  console.log('Starting download of Open Runde font files...');
  
  for (const weight of fontWeights) {
    for (const format of fontFormats) {
      const filename = `OpenRunde-${weight}.${format}`;
      const url = `https://raw.githubusercontent.com/lauridskern/open-runde/main/src/${filename}`;
      const dest = path.join(targetDir, filename);
      
      try {
        await downloadFile(url, dest);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  console.log('Font download complete.');
  console.log('Note: You may need to convert the OTF files to WOFF/WOFF2 formats for better web performance.');
}

downloadFonts(); 