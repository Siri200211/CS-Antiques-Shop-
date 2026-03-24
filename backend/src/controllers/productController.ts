import { Request, Response } from 'express';
import { getPool } from '../config/database';
import sql from 'mssql';

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const pool = getPool();
    const result = await pool.request().query(`
      SELECT * FROM Products ORDER BY createdAt DESC
    `);
    res.json({ success: true, data: result.recordset });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pool = getPool();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(`
        SELECT * FROM Products WHERE id = @id
      `);

    if (result.recordset.length === 0) {
      res.status(404).json({ success: false, message: 'Product not found' });
      return;
    }

    res.json({ success: true, data: result.recordset[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getProductsByCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.params;
    const pool = getPool();
    const result = await pool.request()
      .input('category', sql.NVarChar, category)
      .query(`
        SELECT * FROM Products WHERE category = @category ORDER BY createdAt DESC
      `);

    res.json({ success: true, data: result.recordset });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, category, price, originalPrice, description, condition, mainImage } = req.body;

    if (!name || !category || !price) {
      res.status(400).json({ success: false, message: 'Missing required fields' });
      return;
    }

    const pool = getPool();
    const result = await pool.request()
      .input('name', sql.NVarChar, name)
      .input('category', sql.NVarChar, category)
      .input('price', sql.Decimal, price)
      .input('originalPrice', sql.Decimal, originalPrice || null)
      .input('description', sql.NVarChar, description || null)
      .input('condition', sql.NVarChar, condition || null)
      .input('mainImage', sql.NVarChar, mainImage || null)
      .query(`
        INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
        VALUES (@name, @category, @price, @originalPrice, @description, @condition, @mainImage);
        SELECT SCOPE_IDENTITY() as id;
      `);

    const productId = result.recordset[0].id;
    res.status(201).json({ success: true, message: 'Product created', id: productId });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, category, price, originalPrice, description, condition, mainImage } = req.body;

    const pool = getPool();
    await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.NVarChar, name)
      .input('category', sql.NVarChar, category)
      .input('price', sql.Decimal, price)
      .input('originalPrice', sql.Decimal, originalPrice || null)
      .input('description', sql.NVarChar, description || null)
      .input('condition', sql.NVarChar, condition || null)
      .input('mainImage', sql.NVarChar, mainImage || null)
      .query(`
        UPDATE Products 
        SET name = @name, category = @category, price = @price, 
            originalPrice = @originalPrice, description = @description, 
            condition = @condition, mainImage = @mainImage, updatedAt = GETDATE()
        WHERE id = @id
      `);

    res.json({ success: true, message: 'Product updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pool = getPool();

    await pool.request()
      .input('id', sql.Int, id)
      .query(`DELETE FROM Products WHERE id = @id`);

    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};
