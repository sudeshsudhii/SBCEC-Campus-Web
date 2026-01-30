import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User.model';
import { ApiError } from '../utils/ApiError';
import { config } from '../config/env';

export interface AuthRequest extends Request {
    user?: IUser;
}

export const authenticate = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new ApiError(401, 'No authentication token provided');
        }

        const token = authHeader.substring(7);

        // Verify token
        const decoded = jwt.verify(token, config.jwt.secret) as any;

        // Get user from database
        const user = await User.findById(decoded.id).select('+password');

        if (!user || !user.isActive) {
            throw new ApiError(401, 'User not found or inactive');
        }

        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            next(new ApiError(401, 'Invalid or expired token'));
        } else {
            next(error);
        }
    }
};
