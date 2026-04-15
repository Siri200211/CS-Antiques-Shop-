const express = require("express");
const { z } = require("zod");
const { getPool, sql } = require("../config/db");
const { requireAuth } = require("../middleware/auth");
const upload = require("../utils/uploadHandler");

const router = express.Router();

const offerSchema = z.object({
  title: z.string().min(1),
  description: z.string().nullable().optional(),
  imageUrl: z.string().min(1).nullable().optional(),
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

// Upload offer image
router.post("/upload-image", requireAuth, upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }
    const imagePath = `/uploads/${req.file.filename}`;
    return res.status(201).json({
      success: true,
      data: { imagePath, filename: req.file.filename, size: req.file.size },
    });
  } catch (error) {
    return next(error);
  }
});

// Create offer (admin) - simple JSON-only endpoint
router.post("/", requireAuth, async (req, res, next) => {
  try {
    const { title, description, promoCode, discount, validFrom, validUntil, imageUrl } = req.body;

    // Validate required fields
    if (!title) return res.status(400).json({ success: false, message: "Title is required" });
    if (!promoCode) return res.status(400).json({ success: false, message: "Promo code is required" });
    if (discount === undefined || discount === null) return res.status(400).json({ success: false, message: "Discount is required" });
    if (!validFrom) return res.status(400).json({ success: false, message: "Valid from date is required" });
    if (!validUntil) return res.status(400).json({ success: false, message: "Valid until date is required" });

    // Validate discount is number between 0-100
    const discountNum = Number(discount);
    if (isNaN(discountNum) || discountNum < 0 || discountNum > 100) {
      return res.status(400).json({ success: false, message: "Discount must be a number between 0 and 100" });
    }

    // Get database connection
    const pool = await getPool();

    // Insert into database
    const result = await pool
      .request()
      .input("title", sql.NVarChar, title)
      .input("description", sql.NVarChar, description || null)
      .input("imageUrl", sql.NVarChar(sql.MAX), imageUrl || null)
      .input("promoCode", sql.NVarChar, promoCode)
      .input("discount", sql.Int, discountNum)
      .input("validFrom", sql.DateTime2, new Date(validFrom).toISOString())
      .input("validUntil", sql.DateTime2, new Date(validUntil).toISOString())
      .input("createdBy", sql.Int, req.user.id)
      .query(`
        INSERT INTO Offers (title, description, imageUrl, promoCode, discount, validFrom, validUntil, createdBy)
        VALUES (@title, @description, @imageUrl, @promoCode, @discount, @validFrom, @validUntil, @createdBy);
        SELECT CAST(SCOPE_IDENTITY() as int) as id;
      `);

    return res.status(201).json({
      success: true,
      message: "Offer created successfully",
      data: { id: result.recordset[0].id },
    });
  } catch (error) {
    console.error("Error creating offer:", error);
    return next(error);
  }
});

// Update offer (admin) - accepts both FormData and JSON
router.put("/:id", requireAuth, (req, res, next) => {
  const isFormData = req.headers["content-type"]?.includes("multipart/form-data");
  
  if (isFormData) {
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error("❌ Multer error:", err.message);
        return res.status(400).json({ success: false, message: err.message });
      }
      updateOffer(req, res, next);
    });
  } else {
    updateOffer(req, res, next);
  }
});

async function updateOffer(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid offer id" });
    }

    console.log("✏️ UPDATE OFFER - Request received for ID:", id);

    const { title, description, promoCode, discount, validFrom, validUntil, isActive, imageUrl: bodyImageUrl } = req.body;
    let imageUrl = bodyImageUrl;

    // If file uploaded (FormData), convert to base64 data URL
    if (req.file) {
      console.log("Converting file to base64...");
      const base64 = req.file.buffer.toString("base64");
      imageUrl = `data:${req.file.mimetype};base64,${base64}`;
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
      params.imageUrl = sql.NVarChar(sql.MAX);
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

    console.log("✅ Offer updated successfully:", id);
    return res.json({ success: true, message: "Offer updated" });
  } catch (error) {
    console.error("❌ ERROR in PUT /offers:", error.message);
    return next(error);
  }
}

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
