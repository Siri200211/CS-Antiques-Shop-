const multer = require("multer");
const path = require("path");
const fs = require("fs");

// For Azure App Service, use memory storage instead of disk storage
// This prevents issues with ephemeral storage
const storage = multer.memoryStorage();

// File filter - allow only images
const fileFilter = (req, file, cb) => {
  const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpeg, png, gif, webp)"), false);
  }
};

// Create upload middleware
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;
