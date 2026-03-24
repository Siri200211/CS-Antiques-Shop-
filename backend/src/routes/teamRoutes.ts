import { Router } from 'express';
import {
  getTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from '../controllers/teamController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', getTeamMembers);
router.get('/:id', getTeamMemberById);

// Admin routes
router.post('/', authMiddleware, adminMiddleware, createTeamMember);
router.put('/:id', authMiddleware, adminMiddleware, updateTeamMember);
router.delete('/:id', authMiddleware, adminMiddleware, deleteTeamMember);

export default router;
