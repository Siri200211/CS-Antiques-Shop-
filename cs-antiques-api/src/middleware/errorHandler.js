function errorHandler(error, _req, res, _next) {
  console.error("❌ ERROR:", error.message);
  console.error("Stack:", error.stack);

  // Send detailed error in development, generic in production
  const isDev = process.env.NODE_ENV !== "production";
  
  return res.status(error.status || 500).json({
    success: false,
    message: isDev ? error.message : "Internal server error",
    error: isDev ? error.toString() : undefined,
  });
}

module.exports = errorHandler;
