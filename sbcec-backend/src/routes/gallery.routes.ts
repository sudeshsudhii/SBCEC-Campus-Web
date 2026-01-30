import { Router } from 'express';
import {
    getAllGalleries,
    getGalleryById,
    createGallery,
    updateGallery,
    deleteGallery,
} from '../controllers/gallery.controller';
import { authenticate } from '../middleware/auth.middleware';
import { authorize } from '../middleware/rbac.middleware';

const router = Router();

// Public routes
router.get('/', getAllGalleries);
router.get('/:id', getGalleryById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('super_admin', 'admin'), createGallery);
router.put('/:id', authenticate, authorize('super_admin', 'admin'), updateGallery);
router.delete('/:id', authenticate, authorize('super_admin', 'admin'), deleteGallery);

export default router;
