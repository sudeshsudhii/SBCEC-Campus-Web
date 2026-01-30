import jwt from 'jsonwebtoken';
import { config } from '../config/env';
import { IUser } from '../models/User.model';

export const generateAccessToken = (user: IUser): string => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };

    return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
};

export const generateRefreshToken = (user: IUser): string => {
    const payload = {
        id: user._id,
    };

    return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.refreshTokenExpiresIn,
    });
};

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, config.jwt.secret);
    } catch (error) {
        throw new Error('Invalid token');
    }
};
