import { Router } from 'express';
import {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    publishEvent,
    deleteEvent,
} from '../controllers/event.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllEvents);
router.get('/:id', getEventById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createEvent);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateEvent);
router.patch('/:id/publish', authenticate, authorize('super_admin', 'admin'), publishEvent);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteEvent);

export default router;
