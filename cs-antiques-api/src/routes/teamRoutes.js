const express = require("express");
const { z } = require("zod");
const { getPool, sql } = require("../config/db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

const teamMemberSchema = z.object({
  fullName: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().nullable().optional(),
  photoUrl: z.string().nullable().optional(),
  sortOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

router.get("/", async (_req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, fullName, role, bio, photoUrl, sortOrder, isActive
      FROM TeamMembers
      ORDER BY sortOrder ASC, id ASC
    `);

    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const parsed = teamMemberSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Invalid team member payload" });
    }

    const { fullName, role, bio, photoUrl, sortOrder, isActive } = parsed.data;
    const pool = await getPool();
    const result = await pool
      .request()
      .input("fullName", sql.NVarChar(255), fullName)
      .input("role", sql.NVarChar(120), role)
      .input("bio", sql.NVarChar(sql.MAX), bio ?? null)
      .input("photoUrl", sql.NVarChar(500), photoUrl ?? null)
      .input("sortOrder", sql.Int, sortOrder)
      .input("isActive", sql.Bit, isActive)
      .query(`
        INSERT INTO TeamMembers (fullName, role, bio, photoUrl, sortOrder, isActive)
        OUTPUT inserted.*
        VALUES (@fullName, @role, @bio, @photoUrl, @sortOrder, @isActive)
      `);

    return res.status(201).json({ success: true, data: result.recordset[0] });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
