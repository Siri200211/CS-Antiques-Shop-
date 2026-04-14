/**
 * Rate Limiting Middleware
 * Prevents abuse by limiting requests per IP/user
 */

const rateLimit = require("express-rate-limit");

// General API rate limiter
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

// Stricter limit for authentication routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  skipSuccessfulRequests: true, // Don't count successful requests
  message: "Too many login attempts, please try again later.",
});

// Upload limiter - moderate
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // Max 20 uploads per hour per IP
  message: "Too many uploads. Please try again later.",
});

module.exports = {
  generalLimiter,
  authLimiter,
  uploadLimiter,
};
