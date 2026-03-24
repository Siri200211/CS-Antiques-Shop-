import { Request, Response } from 'express';
import { getPool } from '../config/database';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcryptjs';
import sql from 'mssql';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, message: 'Email and password required' });
      return;
    }

    const pool = getPool();
    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .query(`SELECT * FROM AdminUsers WHERE email = @email`);

    if (result.recordset.length === 0) {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
      return;
    }

    const user = result.recordset[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
      return;
    }

    if (!user.isActive) {
      res.status(403).json({ success: false, message: 'Account is inactive' });
      return;
    }

    const token = generateToken(user.id, user.email, user.role);

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ success: false, message: 'Email and password required' });
      return;
    }

    const pool = getPool();

    // Check if user exists
    const existingUser = await pool.request()
      .input('email', sql.NVarChar, email)
      .query(`SELECT * FROM AdminUsers WHERE email = @email`);

    if (existingUser.recordset.length > 0) {
      res.status(400).json({ success: false, message: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, hashedPassword)
      .query(`
        INSERT INTO AdminUsers (email, password, role, isActive)
        VALUES (@email, @password, 'manager', 1);
        SELECT SCOPE_IDENTITY() as id;
      `);

    const userId = result.recordset[0].id;
    const token = generateToken(userId, email, 'manager');

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: { id: userId, email, role: 'manager' },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getCurrentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;

    if (!userId) {
      res.status(401).json({ success: false, message: 'Not authenticated' });
      return;
    }

    const pool = getPool();
    const result = await pool.request()
      .input('id', sql.Int, userId)
      .query(`SELECT id, email, role FROM AdminUsers WHERE id = @id`);

    if (result.recordset.length === 0) {
      res.status(404).json({ success: false, message: 'User not found' });
      return;
    }

    res.json({ success: true, data: result.recordset[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};
