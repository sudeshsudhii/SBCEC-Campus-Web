import { Router } from 'express';
import {
    getAllNotices,
    getNoticeById,
    createNotice,
    updateNotice,
    pinNotice,
    deleteNotice,
} from '../controllers/notice.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllNotices);
router.get('/:id', getNoticeById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createNotice);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateNotice);
router.patch('/:id/pin', authenticate, authorize('super_admin', 'admin'), pinNotice);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteNotice);

export default router;
