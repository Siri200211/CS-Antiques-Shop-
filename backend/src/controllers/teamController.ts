import { Request, Response } from 'express';
import { getPool } from '../config/database';
import sql from 'mssql';

export const getTeamMembers = async (req: Request, res: Response): Promise<void> => {
  try {
    const pool = getPool();
    const result = await pool.request().query(`
      SELECT * FROM TeamMembers ORDER BY displayOrder ASC
    `);
    res.json({ success: true, data: result.recordset });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getTeamMemberById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pool = getPool();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(`SELECT * FROM TeamMembers WHERE id = @id`);

    if (result.recordset.length === 0) {
      res.status(404).json({ success: false, message: 'Team member not found' });
      return;
    }

    res.json({ success: true, data: result.recordset[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const createTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, role, bio, position, photo, displayOrder } = req.body;

    if (!name) {
      res.status(400).json({ success: false, message: 'Name is required' });
      return;
    }

    const pool = getPool();
    const result = await pool.request()
      .input('name', sql.NVarChar, name)
      .input('role', sql.NVarChar, role || null)
      .input('bio', sql.NVarChar, bio || null)
      .input('position', sql.NVarChar, position || null)
      .input('photo', sql.NVarChar, photo || null)
      .input('displayOrder', sql.Int, displayOrder || 0)
      .query(`
        INSERT INTO TeamMembers (name, role, bio, position, photo, displayOrder)
        VALUES (@name, @role, @bio, @position, @photo, @displayOrder);
        SELECT SCOPE_IDENTITY() as id;
      `);

    const memberId = result.recordset[0].id;
    res.status(201).json({ success: true, message: 'Team member created', id: memberId });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const updateTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, role, bio, position, photo, displayOrder } = req.body;

    const pool = getPool();
    await pool.request()
      .input('id', sql.Int, id)
      .input('name', sql.NVarChar, name)
      .input('role', sql.NVarChar, role || null)
      .input('bio', sql.NVarChar, bio || null)
      .input('position', sql.NVarChar, position || null)
      .input('photo', sql.NVarChar, photo || null)
      .input('displayOrder', sql.Int, displayOrder || 0)
      .query(`
        UPDATE TeamMembers 
        SET name = @name, role = @role, bio = @bio, position = @position, 
            photo = @photo, displayOrder = @displayOrder, updatedAt = GETDATE()
        WHERE id = @id
      `);

    res.json({ success: true, message: 'Team member updated' });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const deleteTeamMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pool = getPool();

    await pool.request()
      .input('id', sql.Int, id)
      .query(`DELETE FROM TeamMembers WHERE id = @id`);

    res.json({ success: true, message: 'Team member deleted' });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};
