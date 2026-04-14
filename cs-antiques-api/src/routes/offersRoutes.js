const express = require("express");
const { z } = require("zod");
const { getPool, sql } = require("../config/db");
const { requireAuth } = require("../middleware/auth");
const upload = require("../utils/uploadHandler");

const router = express.Router();

const offerSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable().optional(),
  imageUrl: z.string().min(1),
  promoCode: z.string().nullable().optional(),
  discount: z.number().min(0).max(100).nullable().optional(),
  validFrom: z.string().datetime(),
  validUntil: z.string().datetime(),
});

// Get all active offers
router.get("/", async (_req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, title, description, imageUrl, promoCode, discount, validFrom, validUntil, createdAt
      FROM Offers
      WHERE isActive = 1 AND validUntil > SYSUTCDATETIME()
      ORDER BY validFrom DESC
    `);

    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

// Get all offers (admin - includes inactive)
router.get("/admin/all", requireAuth, async (_req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, title, description, imageUrl, promoCode, discount, validFrom, validUntil, isActive, createdAt, updatedAt
      FROM Offers
      ORDER BY validFrom DESC
    `);

    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

// Get single offer
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid offer id" });
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT id, title, description, imageUrl, promoCode, discount, validFrom, validUntil FROM Offers WHERE id = @id");

    if (result.recordset.length === 0) {
      return res.status(404).json({ success: false, message: "Offer not found" });
    }

    return res.json({ success: true, data: result.recordset[0] });
  } catch (error) {
    return next(error);
  }
});

// Create offer (admin)
router.post("/", requireAuth, upload.single("image"), async (req, res, next) => {
  try {
    const { title, description, promoCode, discount, validFrom, validUntil } = req.body;
    let imageUrl = req.body.imageUrl;

    // If file uploaded, use that
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    // Validate
    const validation = offerSchema.safeParse({
      title,
      description,
      imageUrl,
      promoCode,
      discount: discount ? Number(discount) : null,
      validFrom,
      validUntil,
    });

    if (!validation.success) {
      return res.status(400).json({ success: false, errors: validation.error.errors });
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input("title", sql.NVarChar, title)
      .input("description", sql.NVarChar, description || null)
      .input("imageUrl", sql.NVarChar, imageUrl)
      .input("promoCode", sql.NVarChar, promoCode || null)
      .input("discount", sql.Int, discount ? Number(discount) : null)
      .input("validFrom", sql.DateTime2, validFrom)
      .input("validUntil", sql.DateTime2, validUntil)
      .input("createdBy", sql.Int, req.user.id)
      .query(`
        INSERT INTO Offers (title, description, imageUrl, promoCode, discount, validFrom, validUntil, createdBy)
        VALUES (@title, @description, @imageUrl, @promoCode, @discount, @validFrom, @validUntil, @createdBy);
        SELECT CAST(SCOPE_IDENTITY() as int) as id;
      `);

    return res.status(201).json({
      success: true,
      message: "Offer created",
      data: { id: result.recordset[0].id },
    });
  } catch (error) {
    return next(error);
  }
});

// Update offer (admin)
router.put("/:id", requireAuth, upload.single("image"), async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid offer id" });
    }

    const { title, description, promoCode, discount, validFrom, validUntil, isActive } = req.body;
    let imageUrl = req.body.imageUrl;

    // If file uploaded, use that
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const pool = await getPool();

    const updates = [];
    const params = { id: sql.Int };
    const values = { "@id": id };

    if (title !== undefined) {
      updates.push("title = @title");
      params.title = sql.NVarChar;
      values["@title"] = title;
    }
    if (description !== undefined) {
      updates.push("description = @description");
      params.description = sql.NVarChar;
      values["@description"] = description || null;
    }
    if (imageUrl) {
      updates.push("imageUrl = @imageUrl");
      params.imageUrl = sql.NVarChar;
      values["@imageUrl"] = imageUrl;
    }
    if (promoCode !== undefined) {
      updates.push("promoCode = @promoCode");
      params.promoCode = sql.NVarChar;
      values["@promoCode"] = promoCode || null;
    }
    if (discount !== undefined) {
      updates.push("discount = @discount");
      params.discount = sql.Int;
      values["@discount"] = discount ? Number(discount) : null;
    }
    if (validFrom !== undefined) {
      updates.push("validFrom = @validFrom");
      params.validFrom = sql.DateTime2;
      values["@validFrom"] = validFrom;
    }
    if (validUntil !== undefined) {
      updates.push("validUntil = @validUntil");
      params.validUntil = sql.DateTime2;
      values["@validUntil"] = validUntil;
    }
    if (isActive !== undefined) {
      updates.push("isActive = @isActive");
      params.isActive = sql.Bit;
      values["@isActive"] = isActive ? 1 : 0;
    }

    updates.push("updatedAt = SYSUTCDATETIME()");

    if (updates.length === 0) {
      return res.status(400).json({ success: false, message: "No fields to update" });
    }

    const request = pool.request();
    Object.entries(params).forEach(([key, type]) => {
      request.input(key === "id" ? key : key.substring(1), type, values[`@${key.substring(1)}`] || values[key]);
    });

    await request.query(`UPDATE Offers SET ${updates.join(", ")} WHERE id = @id`);

    return res.json({ success: true, message: "Offer updated" });
  } catch (error) {
    return next(error);
  }
});

// Delete offer (admin)
router.delete("/:id", requireAuth, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid offer id" });
    }

    const pool = await getPool();
    await pool
      .request()
      .input("id", sql.Int, id)
      .query("UPDATE Offers SET isActive = 0 WHERE id = @id");

    return res.json({ success: true, message: "Offer deleted" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
