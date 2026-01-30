import { Router } from 'express';
import {
    getAllFaculty,
    getFacultyById,
    getFacultyByDepartment,
    createFaculty,
    updateFaculty,
    deleteFaculty,
} from '../controllers/faculty.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllFaculty);
router.get('/:id', getFacultyById);
router.get('/department/:deptId', getFacultyByDepartment);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createFaculty);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateFaculty);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteFaculty);

export default router;
