"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables FIRST
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
console.log('📋 Environment Variables:');
console.log(`  DB_SERVER: ${process.env.DB_SERVER}`);
console.log(`  DB_PORT: ${process.env.DB_PORT}`);
console.log(`  DB_USER: ${process.env.DB_USER}`);
console.log(`  DB_NAME: ${process.env.DB_NAME}`);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Database connection failed',
            error: error.message,
        });
    }
});
// API Routes
app.use('/api/products', productRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('/api/team', teamRoutes_1.default);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Endpoint not found' });
});
// Start server
const startServer = async () => {
    try {
        // Initialize database connection
        await (0, database_1.initializeDatabase)();
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
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received, closing database connection...');
    await (0, database_1.closeDatabase)();
    process.exit(0);
});
startServer();
//# sourceMappingURL=server.js.map