"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductsByCategory = exports.getProductById = exports.getProducts = void 0;
const database_1 = require("../config/database");
const mssql_1 = __importDefault(require("mssql"));
const getProducts = async (req, res) => {
    try {
        const pool = (0, database_1.getPool)();
        const result = await pool.request().query(`
      SELECT * FROM Products ORDER BY createdAt DESC
    `);
        res.json({ success: true, data: result.recordset });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('id', mssql_1.default.Int, id)
            .query(`
        SELECT * FROM Products WHERE id = @id
      `);
        if (result.recordset.length === 0) {
            res.status(404).json({ success: false, message: 'Product not found' });
            return;
        }
        res.json({ success: true, data: result.recordset[0] });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getProductById = getProductById;
const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('category', mssql_1.default.NVarChar, category)
            .query(`
        SELECT * FROM Products WHERE category = @category ORDER BY createdAt DESC
      `);
        res.json({ success: true, data: result.recordset });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getProductsByCategory = getProductsByCategory;
const createProduct = async (req, res) => {
    try {
        const { name, category, price, originalPrice, description, condition, mainImage } = req.body;
        if (!name || !category || !price) {
            res.status(400).json({ success: false, message: 'Missing required fields' });
            return;
        }
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('name', mssql_1.default.NVarChar, name)
            .input('category', mssql_1.default.NVarChar, category)
            .input('price', mssql_1.default.Decimal, price)
            .input('originalPrice', mssql_1.default.Decimal, originalPrice || null)
            .input('description', mssql_1.default.NVarChar, description || null)
            .input('condition', mssql_1.default.NVarChar, condition || null)
            .input('mainImage', mssql_1.default.NVarChar, mainImage || null)
            .query(`
        INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
        VALUES (@name, @category, @price, @originalPrice, @description, @condition, @mainImage);
        SELECT SCOPE_IDENTITY() as id;
      `);
        const productId = result.recordset[0].id;
        res.status(201).json({ success: true, message: 'Product created', id: productId });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category, price, originalPrice, description, condition, mainImage } = req.body;
        const pool = (0, database_1.getPool)();
        await pool.request()
            .input('id', mssql_1.default.Int, id)
            .input('name', mssql_1.default.NVarChar, name)
            .input('category', mssql_1.default.NVarChar, category)
            .input('price', mssql_1.default.Decimal, price)
            .input('originalPrice', mssql_1.default.Decimal, originalPrice || null)
            .input('description', mssql_1.default.NVarChar, description || null)
            .input('condition', mssql_1.default.NVarChar, condition || null)
            .input('mainImage', mssql_1.default.NVarChar, mainImage || null)
            .query(`
        UPDATE Products 
        SET name = @name, category = @category, price = @price, 
            originalPrice = @originalPrice, description = @description, 
            condition = @condition, mainImage = @mainImage, updatedAt = GETDATE()
        WHERE id = @id
      `);
        res.json({ success: true, message: 'Product updated' });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = (0, database_1.getPool)();
        await pool.request()
            .input('id', mssql_1.default.Int, id)
            .query(`DELETE FROM Products WHERE id = @id`);
        res.json({ success: true, message: 'Product deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map