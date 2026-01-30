import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User.model';
import { RefreshToken } from '../models/RefreshToken.model';
import {
    generateAccessToken,
    generateRefreshToken,
} from '../services/token.service';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const register = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { email, password, firstName, lastName, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new ApiError(400, 'User already exists with this email');
        }

        // Create user
        const user = await User.create({
            email,
            password,
            firstName,
            lastName,
            role: role || 'public',
        });

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json(
            new ApiResponse(201, userResponse, 'User registered successfully')
        );
    }
);

export const login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            throw new ApiError(400, 'Please provide email and password');
        }

        // Find user (explicitly select password)
        const user = await User.findOne({ email, isActive: true }).select('+password');
        if (!user) {
            throw new ApiError(401, 'Invalid email or password');
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            throw new ApiError(401, 'Invalid email or password');
        }

        // Generate tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save refresh token to database
        await RefreshToken.create({
            token: refreshToken,
            user: user._id,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        });

        // Update last login
        user.lastLogin = new Date();
        await user.save();

        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;

        res.json(
            new ApiResponse(
                200,
                {
                    user: userResponse,
                    accessToken,
                    refreshToken,
                },
                'Login successful'
            )
        );
    }
);

export const refreshAccessToken = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            throw new ApiError(400, 'Refresh token is required');
        }

        // Verify refresh token exists in database
        const tokenDoc = await RefreshToken.findOne({ token: refreshToken });
        if (!tokenDoc || tokenDoc.expiresAt < new Date()) {
            throw new ApiError(401, 'Invalid or expired refresh token');
        }

        // Get user
        const user = await User.findById(tokenDoc.user);
        if (!user || !user.isActive) {
            throw new ApiError(401, 'User not found or inactive');
        }

        // Generate new access token
        const newAccessToken = generateAccessToken(user);

        res.json(
            new ApiResponse(
                200,
                { accessToken: newAccessToken },
                'Token refreshed successfully'
            )
        );
    }
);

export const logout = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { refreshToken } = req.body;

        if (refreshToken) {
            await RefreshToken.deleteOne({ token: refreshToken });
        }

        res.json(new ApiResponse(200, null, 'Logout successful'));
    }
);

export const getMe = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        if (!req.user) {
            throw new ApiError(401, 'Not authenticated');
        }

        const user = await User.findById(req.user._id).populate('department', 'name code');

        res.json(new ApiResponse(200, user, 'User profile retrieved'));
    }
);
