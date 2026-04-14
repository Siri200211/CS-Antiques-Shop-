/**
 * Quick verification script to test image uploads
 * Run: node test-uploads.js
 */

const fs = require("fs");
const path = require("path");

const uploadsDir = path.join(__dirname, "uploads");

console.log("\n🔍 Checking uploads folder...\n");

if (!fs.existsSync(uploadsDir)) {
  console.log("❌ /uploads folder does NOT exist!");
  console.log(`   Creating: ${uploadsDir}`);
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log("✅ Created /uploads folder\n");
} else {
  console.log("✅ /uploads folder exists\n");
  
  const files = fs.readdirSync(uploadsDir);
  if (files.length === 0) {
    console.log("📁 /uploads folder is EMPTY (no files uploaded yet)");
  } else {
    console.log(`📊 Found ${files.length} file(s) in /uploads:\n`);
    files.forEach((file) => {
      const filePath = path.join(uploadsDir, file);
      const stat = fs.statSync(filePath);
      const size = (stat.size / 1024).toFixed(2);
      console.log(`   📷 ${file} (${size} KB)`);
    });
  }
}

console.log("\n✅ Test complete!\n");
console.log("🚀 API Status:");
console.log("   - API should serve files at: http://localhost:5000/uploads/[filename]");
console.log("   - Frontend should display: http://localhost:5000/uploads/[filename]\n");

process.exit(0);
