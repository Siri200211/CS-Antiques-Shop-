const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const env = require("./config/env");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter, authLimiter, uploadLimiter } = require("./middleware/rateLimiter");

const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const productsRoutes = require("./routes/productsRoutes");
const offersRoutes = require("./routes/offersRoutes");
const teamRoutes = require("./routes/teamRoutes");
const siteSettingsRoutes = require("./routes/siteSettingsRoutes");

const app = express();

// Security: Helmet configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      imgSrc: ["'self'", "data:", "https:", "http:"],
    },
  },
  crossOriginResourcePolicy: { policy: "cross-origin" },
}));

// Security: CORS configuration (environment-aware)
const setupCors = () => {
  const isProduction = env.nodeEnv === "production";
  
  // For production, restrict to your domain
  const allowedOrigins = isProduction 
    ? [
        "https://wonderful-pond-0f05e1700.7.azurestaticapps.net",
        "https://698ff5393ea9ca87ce90a744--csantiquess.netlify.app",
        "https://yourdomain.com", // Add your production domain
      ]
    : ["http://localhost:5173", "http://localhost:3000"];

  return cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`⚠️ CORS rejected origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  });
};

app.use(setupCors());

// Security: Rate limiting
app.use(generalLimiter); // Apply to all routes
app.use("/api/auth/login", authLimiter); // Stricter on login
app.use("/api/auth/register", authLimiter); // Stricter on register
app.use("/api/products/upload-image", uploadLimiter); // Moderate on uploads

// Middleware
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

// Serve uploaded images with CORS headers
app.use("/uploads", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  res.header("Cache-Control", "public, max-age=86400"); // Cache for 24 hours
  
  express.static(path.join(__dirname, "../uploads"), {
    maxAge: "1d",
    etag: false,
  })(req, res, next);
});

// Health check
app.get("/", (_req, res) => {
  return res.json({ success: true, message: "CS Antiques API running" });
});

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/offers", offersRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/site-settings", siteSettingsRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(env.port, () => {
  console.log(`🚀 CS Antiques API listening on port ${env.port}`);
  console.log(`📍 Environment: ${env.nodeEnv || "development"}`);
});
