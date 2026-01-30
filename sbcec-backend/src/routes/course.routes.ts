import { Router } from 'express';
import {
    getAllCourses,
    getCourseById,
    getCoursesByDepartment,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../controllers/course.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.get('/department/:deptId', getCoursesByDepartment);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createCourse);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateCourse);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteCourse);

export default router;
