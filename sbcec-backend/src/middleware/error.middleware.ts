import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { config } from '../config/env';

export const errorHandler = (
    err: Error | ApiError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    let error = err;

    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
        const message = Object.values((err as any).errors)
            .map((val: any) => val.message)
            .join(', ');
        error = new ApiError(400, message);
    }

    // Handle Mongoose duplicate key errors
    if ((err as any).code === 11000) {
        const field = Object.keys((err as any).keyPattern)[0];
        error = new ApiError(400, `${field} already exists`);
    }

    // Handle Mongoose cast errors
    if (err.name === 'CastError') {
        error = new ApiError(400, 'Invalid ID format');
    }

    // Handle JWT errors
    if (err.name === 'JsonWebTokenError') {
        error = new ApiError(401, 'Invalid token');
    }

    if (err.name === 'TokenExpiredError') {
        error = new ApiError(401, 'Token expired');
    }

    const statusCode = (error as ApiError).statusCode || 500;
    const message = error.message || 'Internal server error';

    // Log error in development
    if (config.env === 'development') {
        console.error('❌ Error:', error);
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        ...(config.env === 'development' && { stack: error.stack }),
    });
};
