import { Router } from 'express';
import {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
} from '../controllers/department.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllDepartments);
router.get('/:id', getDepartmentById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createDepartment);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateDepartment);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteDepartment);

export default router;
