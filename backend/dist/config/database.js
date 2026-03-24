"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabase = exports.getPool = exports.initializeDatabase = void 0;
const sql = __importStar(require("mssql"));
const config = {
    server: process.env.DB_SERVER || 'localhost',
    port: parseInt(process.env.DB_PORT || '1433'),
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || 'Admin@123!',
    database: process.env.DB_NAME,
    authentication: {
        type: 'default',
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
        connectionTimeout: 30000,
        requestTimeout: 30000,
    },
};
let pool = null;
const initializeDatabase = async () => {
    try {
        console.log(`🔗 Attempting DB connection: ${config.server}:${config.port}/${config.database} as ${config.user}`);
        pool = new sql.ConnectionPool(config);
        await pool.connect();
        console.log('✅ Database connected successfully!');
        console.log(`📊 Connected to: ${config.server}:${config.port}/${config.database}`);
        return pool;
    }
    catch (error) {
        console.error('❌ Database connection failed:', error);
        throw error;
    }
};
exports.initializeDatabase = initializeDatabase;
const getPool = () => {
    if (!pool) {
        throw new Error('Database pool not initialized. Call initializeDatabase first.');
    }
    return pool;
};
exports.getPool = getPool;
const closeDatabase = async () => {
    if (pool) {
        await pool.close();
        console.log('✅ Database connection closed');
    }
};
exports.closeDatabase = closeDatabase;
exports.default = sql;
//# sourceMappingURL=database.js.map