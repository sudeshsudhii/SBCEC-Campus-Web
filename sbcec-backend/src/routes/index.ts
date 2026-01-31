import { Router } from 'express';
import authRoutes from './auth.routes';
import departmentRoutes from './department.routes';
import facultyRoutes from './faculty.routes';
import courseRoutes from './course.routes';
import eventRoutes from './event.routes';
import noticeRoutes from './notice.routes';
import galleryRoutes from './gallery.routes';

const router = Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/departments', departmentRoutes);
router.use('/faculty', facultyRoutes);
router.use('/courses', courseRoutes);
router.use('/events', eventRoutes);
router.use('/notices', noticeRoutes);
router.use('/gallery', galleryRoutes);

// Health check
router.get('/health', (_req, res) => {
    res.json({
        success: true,
        message: 'API is running',
        timestamp: new Date().toISOString(),
    });
});

export default router;
