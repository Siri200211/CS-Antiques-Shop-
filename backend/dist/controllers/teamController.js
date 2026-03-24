"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamMember = exports.updateTeamMember = exports.createTeamMember = exports.getTeamMemberById = exports.getTeamMembers = void 0;
const database_1 = require("../config/database");
const mssql_1 = __importDefault(require("mssql"));
const getTeamMembers = async (req, res) => {
    try {
        const pool = (0, database_1.getPool)();
        const result = await pool.request().query(`
      SELECT * FROM TeamMembers ORDER BY displayOrder ASC
    `);
        res.json({ success: true, data: result.recordset });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getTeamMembers = getTeamMembers;
const getTeamMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('id', mssql_1.default.Int, id)
            .query(`SELECT * FROM TeamMembers WHERE id = @id`);
        if (result.recordset.length === 0) {
            res.status(404).json({ success: false, message: 'Team member not found' });
            return;
        }
        res.json({ success: true, data: result.recordset[0] });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.getTeamMemberById = getTeamMemberById;
const createTeamMember = async (req, res) => {
    try {
        const { name, role, bio, position, photo, displayOrder } = req.body;
        if (!name) {
            res.status(400).json({ success: false, message: 'Name is required' });
            return;
        }
        const pool = (0, database_1.getPool)();
        const result = await pool.request()
            .input('name', mssql_1.default.NVarChar, name)
            .input('role', mssql_1.default.NVarChar, role || null)
            .input('bio', mssql_1.default.NVarChar, bio || null)
            .input('position', mssql_1.default.NVarChar, position || null)
            .input('photo', mssql_1.default.NVarChar, photo || null)
            .input('displayOrder', mssql_1.default.Int, displayOrder || 0)
            .query(`
        INSERT INTO TeamMembers (name, role, bio, position, photo, displayOrder)
        VALUES (@name, @role, @bio, @position, @photo, @displayOrder);
        SELECT SCOPE_IDENTITY() as id;
      `);
        const memberId = result.recordset[0].id;
        res.status(201).json({ success: true, message: 'Team member created', id: memberId });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.createTeamMember = createTeamMember;
const updateTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, bio, position, photo, displayOrder } = req.body;
        const pool = (0, database_1.getPool)();
        await pool.request()
            .input('id', mssql_1.default.Int, id)
            .input('name', mssql_1.default.NVarChar, name)
            .input('role', mssql_1.default.NVarChar, role || null)
            .input('bio', mssql_1.default.NVarChar, bio || null)
            .input('position', mssql_1.default.NVarChar, position || null)
            .input('photo', mssql_1.default.NVarChar, photo || null)
            .input('displayOrder', mssql_1.default.Int, displayOrder || 0)
            .query(`
        UPDATE TeamMembers 
        SET name = @name, role = @role, bio = @bio, position = @position, 
            photo = @photo, displayOrder = @displayOrder, updatedAt = GETDATE()
        WHERE id = @id
      `);
        res.json({ success: true, message: 'Team member updated' });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.updateTeamMember = updateTeamMember;
const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = (0, database_1.getPool)();
        await pool.request()
            .input('id', mssql_1.default.Int, id)
            .query(`DELETE FROM TeamMembers WHERE id = @id`);
        res.json({ success: true, message: 'Team member deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
exports.deleteTeamMember = deleteTeamMember;
//# sourceMappingURL=teamController.js.map