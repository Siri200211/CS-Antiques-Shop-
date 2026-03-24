"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = require("../controllers/teamController");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Public routes
router.get('/', teamController_1.getTeamMembers);
router.get('/:id', teamController_1.getTeamMemberById);
// Admin routes
router.post('/', auth_1.authMiddleware, auth_1.adminMiddleware, teamController_1.createTeamMember);
router.put('/:id', auth_1.authMiddleware, auth_1.adminMiddleware, teamController_1.updateTeamMember);
router.delete('/:id', auth_1.authMiddleware, auth_1.adminMiddleware, teamController_1.deleteTeamMember);
exports.default = router;
//# sourceMappingURL=teamRoutes.js.map