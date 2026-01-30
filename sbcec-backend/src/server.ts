import app from './app';
import { config } from './config/env';
import { connectDatabase } from './config/database';

const startServer = async (): Promise<void> => {
    try {
        // Connect to database
        await connectDatabase();

        // Start server
        app.listen(config.port, () => {
            console.log(`\n🚀 Server running in ${config.env} mode on port ${config.port}`);
            console.log(`📍 API available at http://localhost:${config.port}/api`);
            console.log(`🏥 Health check: http://localhost:${config.port}/api/health\n`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
    console.error('❌ Unhandled Promise Rejection:', err);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

startServer();
