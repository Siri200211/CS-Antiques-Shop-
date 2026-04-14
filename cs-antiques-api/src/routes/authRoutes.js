const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const env = require("../config/env");
const { getPool, sql } = require("../config/db");

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
    // Real admin accounts live in AdminUsers (SSMS). Users table may be empty or legacy.
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

module.exports = router;
