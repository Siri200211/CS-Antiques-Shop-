"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.register = exports.login = void 0;
const database_1 = require("../config/database");
const jwt_1 = require("../utils/jwt");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mssql_1 = __importDefault(require("mssql"));
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password required' });
            return;
        }
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('email', mssql_1.default.NVarChar, email)
            .query(`SELECT * FROM AdminUsers WHERE email = @email`);
        if (result.recordset.length === 0) {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
            return;
        }
        const user = result.recordset[0];
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
            return;
        }
        if (!user.isActive) {
            res.status(403).json({ success: false, message: 'Account is inactive' });
            return;
        }
        const token = (0, jwt_1.generateToken)(user.id, user.email, user.role);
        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: { id: user.id, email: user.email, role: user.role },
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password required' });
            return;
        }
        const pool = (0, database_1.getPool)();
        // Check if user exists
        const existingUser = await pool.request()
            .input('email', mssql_1.default.NVarChar, email)
            .query(`SELECT * FROM AdminUsers WHERE email = @email`);
        if (existingUser.recordset.length > 0) {
            res.status(400).json({ success: false, message: 'User already exists' });
            return;
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Create user
        const result = await pool.request()
            .input('email', mssql_1.default.NVarChar, email)
            .input('password', mssql_1.default.NVarChar, hashedPassword)
            .query(`
        INSERT INTO AdminUsers (email, password, role, isActive)
        VALUES (@email, @password, 'manager', 1);
        SELECT SCOPE_IDENTITY() as id;
      `);
        const userId = result.recordset[0].id;
        const token = (0, jwt_1.generateToken)(userId, email, 'manager');
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            user: { id: userId, email, role: 'manager' },
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.register = register;
const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({ success: false, message: 'Not authenticated' });
            return;
        }
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('id', mssql_1.default.Int, userId)
            .query(`SELECT id, email, role FROM AdminUsers WHERE id = @id`);
        if (result.recordset.length === 0) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.json({ success: true, data: result.recordset[0] });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getCurrentUser = getCurrentUser;
//# sourceMappingURL=authController.js.map