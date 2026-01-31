import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config/env';
import routes from './routes';
import { errorHandler } from './middleware/error.middleware';

const app: Application = express();

// CORS Configuration
app.use(
    cors({
        origin: config.cors.allowedOrigins,
        credentials: true,
    })
);

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static files (uploads)
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (_req, res) => {
    res.json({
        success: true,
        message: 'SBCEC College Backend API',
        version: '1.0.0',
        documentation: '/api/health',
    });
});

// Error handler (must be last)
app.use(errorHandler);

export default app;
