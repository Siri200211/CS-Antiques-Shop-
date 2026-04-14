const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const env = require("../config/env");
const { getPool, sql } = require("../config/db");
const { requireAuth, requireRole } = require("../middleware/auth");

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

router.post("/login", async (req, res, next) => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Invalid login payload" });
    }

    const { email, password } = parsed.data;

    const pool = await getPool();
    const result = await pool
      .request()
      .input("email", sql.NVarChar(255), email)
      .query(`
        SELECT TOP 1 id, email, role, [password] AS passwordHash
        FROM AdminUsers
        WHERE email = @email AND isActive = 1
      `);

    const user = result.recordset[0];
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const stored = user.passwordHash || "";
    const valid = await bcrypt.compare(password, stored);
    if (!valid) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role || "manager",
      },
      env.jwtSecret,
      { expiresIn: env.jwtExpiresIn }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: null,
        role: user.role,
      },
    });
  } catch (error) {
    return next(error);
  }
});

// GET all admin users (protected)
router.get("/admin-users", requireAuth, async (req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, email, role, isActive, createdAt FROM AdminUsers ORDER BY createdAt DESC
    `);
    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

// POST create new admin user (protected)
router.post("/admin-users", requireAuth, async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || password.length < 6) {
      return res.status(400).json({ success: false, message: "Email and password (min 6 chars) are required" });
    }

    const pool = await getPool();

    // Check if email already exists
    const existing = await pool
      .request()
      .input("email", sql.NVarChar(255), email)
      .query("SELECT id FROM AdminUsers WHERE email = @email");

    if (existing.recordset.length > 0) {
      return res.status(409).json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role || "admin";

    await pool
      .request()
      .input("email", sql.NVarChar(255), email)
      .input("password", sql.NVarChar(255), hashedPassword)
      .input("role", sql.NVarChar(50), userRole)
      .query(`
        INSERT INTO AdminUsers (email, [password], role, isActive, createdAt)
        VALUES (@email, @password, @role, 1, SYSUTCDATETIME())
      `);

    return res.json({ success: true, message: "Admin user created successfully" });
  } catch (error) {
    return next(error);
  }
});

// PUT reset password for an admin user (protected)
router.put("/admin-users/:id/reset-password", requireAuth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ success: false, message: "New password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, parseInt(id))
      .input("password", sql.NVarChar(255), hashedPassword)
      .query(`
        UPDATE AdminUsers SET [password] = @password, updatedAt = GETDATE()
        WHERE id = @id
      `);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ success: false, message: "Admin user not found" });
    }

    return res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
