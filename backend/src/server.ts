import dotenv from 'dotenv';
import path from 'path';

// Load environment variables FIRST
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import { initializeDatabase, closeDatabase } from './config/database';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import teamRoutes from './routes/teamRoutes';

console.log('📋 Environment Variables:');
console.log(`  DB_SERVER: ${process.env.DB_SERVER}`);
console.log(`  DB_PORT: ${process.env.DB_PORT}`);
console.log(`  DB_USER: ${process.env.DB_USER}`);
console.log(`  DB_NAME: ${process.env.DB_NAME}`);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// Test database connection endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const pool = require('./config/database').getPool();
    const result = await pool.request().query('SELECT @@SERVERNAME as serverName, @@VERSION as version');
    res.json({
      success: true,
      message: 'Database connection successful!',
      data: result.recordset[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: (error as Error).message,
    });
  }
});

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Start server
const startServer = async () => {
  try {
    // Initialize database connection
    await initializeDatabase();
    
    // Start Express server
    app.listen(PORT, () => {
      console.log(`\n🚀 Server running on http://localhost:${PORT}`);
      console.log(`📝 Test endpoint: http://localhost:${PORT}/api/health`);
      console.log(`🗄️  DB test endpoint: http://localhost:${PORT}/api/test-db`);
      console.log(`\n📚 API Routes:`);
      console.log(`  🛍️  Products: GET/POST http://localhost:${PORT}/api/products`);
      console.log(`  🔐 Auth: POST http://localhost:${PORT}/api/auth/login`);
      console.log(`  👥 Team: GET/POST http://localhost:${PORT}/api/team\n`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing database connection...');
  await closeDatabase();
  process.exit(0);
});

startServer();
