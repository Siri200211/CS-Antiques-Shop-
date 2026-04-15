const express = require("express");
const { z } = require("zod");
const { getPool, sql } = require("../config/db");
const { requireAuth } = require("../middleware/auth");
const upload = require("../utils/uploadHandler");

const router = express.Router();

function normalizeMainImage(value) {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
}

const productSchema = z.object({
  name: z.string().min(1),
  category: z.string().nullable().optional(),
  price: z.number().nonnegative(),
  originalPrice: z.number().nonnegative().nullable().optional(),
  description: z.string().nullable().optional(),
  condition: z.string().nullable().optional(),
  mainImage: z.string().nullable().optional(),
});

router.get("/", async (_req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT id, name, category, price, originalPrice, description, condition, mainImage
      FROM Products
      ORDER BY id DESC
    `);

    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid product id" });
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(`
        SELECT id, name, category, price, originalPrice, description, condition, mainImage
        FROM Products
        WHERE id = @id
      `);

    const product = result.recordset[0];
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.json({ success: true, data: product });
  } catch (error) {
    return next(error);
  }
});

router.post("/", requireAuth, async (req, res, next) => {
  try {
    const parsed = productSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Invalid product payload" });
    }

    const { name, category, price, originalPrice, description, condition, mainImage } = parsed.data;
    const mainImageDb = normalizeMainImage(mainImage);

    const pool = await getPool();
    const result = await pool
      .request()
      .input("name", sql.NVarChar(255), name)
      .input("category", sql.NVarChar(120), category ?? null)
      .input("price", sql.Decimal(18, 2), price)
      .input("originalPrice", sql.Decimal(18, 2), originalPrice ?? null)
      .input("description", sql.NVarChar(sql.MAX), description ?? null)
      .input("condition", sql.NVarChar(120), condition ?? null)
      .input("mainImage", sql.NVarChar(sql.MAX), mainImageDb)
      .query(`
        INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
        OUTPUT inserted.*
        VALUES (@name, @category, @price, @originalPrice, @description, @condition, @mainImage)
      `);

    return res.status(201).json({ success: true, data: result.recordset[0] });
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", requireAuth, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid product id" });
    }

    const parsed = productSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Invalid product payload" });
    }

    const { name, category, price, originalPrice, description, condition, mainImage } = parsed.data;
    const mainImageDb = normalizeMainImage(mainImage);

    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("name", sql.NVarChar(255), name)
      .input("category", sql.NVarChar(120), category ?? null)
      .input("price", sql.Decimal(18, 2), price)
      .input("originalPrice", sql.Decimal(18, 2), originalPrice ?? null)
      .input("description", sql.NVarChar(sql.MAX), description ?? null)
      .input("condition", sql.NVarChar(120), condition ?? null)
      .input("mainImage", sql.NVarChar(sql.MAX), mainImageDb)
      .query(`
        UPDATE Products
        SET
          name = @name,
          category = @category,
          price = @price,
          originalPrice = @originalPrice,
          description = @description,
          condition = @condition,
          mainImage = @mainImage
        OUTPUT inserted.*
        WHERE id = @id
      `);

    if (!result.recordset[0]) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.json({ success: true, data: result.recordset[0] });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", requireAuth, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ success: false, message: "Invalid product id" });
    }

    const pool = await getPool();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(`
        DELETE FROM Products
        WHERE id = @id
      `);

    if (!result.rowsAffected[0]) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    return next(error);
  }
});

// Upload image endpoint
router.post("/upload-image", requireAuth, upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    return res.status(201).json({ 
      success: true, 
      data: { 
        imagePath,
        filename: req.file.filename,
        size: req.file.size
      } 
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
