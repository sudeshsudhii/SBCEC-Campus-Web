import { Request, Response, NextFunction } from 'express';
import { Faculty } from '../models/Faculty.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllFaculty = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const faculty = await Faculty.find({ isActive: true })
            .populate('user', 'firstName lastName email')
            .populate('department', 'name code')
            .sort({ displayOrder: 1, 'user.firstName': 1 });

        res.json(
            new ApiResponse(200, { faculty, count: faculty.length }, 'Faculty retrieved successfully')
        );
    }
);

export const getFacultyById = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const faculty = await Faculty.findById(id)
            .populate('user', 'firstName lastName email')
            .populate('department', 'name code');

        if (!faculty) {
            throw new ApiError(404, 'Faculty not found');
        }

        res.json(new ApiResponse(200, faculty, 'Faculty details retrieved successfully'));
    }
);

export const getFacultyByDepartment = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { deptId } = req.params;

        const faculty = await Faculty.find({ department: deptId, isActive: true })
            .populate('user', 'firstName lastName email')
            .sort({ displayOrder: 1 });

        res.json(
            new ApiResponse(200, { faculty, count: faculty.length }, 'Department faculty retrieved successfully')
        );
    }
);

export const createFaculty = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const faculty = await Faculty.create(req.body);

        res.status(201).json(
            new ApiResponse(201, faculty, 'Faculty profile created successfully')
        );
    }
);

export const updateFaculty = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const faculty = await Faculty.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!faculty) {
            throw new ApiError(404, 'Faculty not found');
        }

        res.json(new ApiResponse(200, faculty, 'Faculty profile updated successfully'));
    }
);

export const deleteFaculty = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const faculty = await Faculty.findByIdAndUpdate(
            id,
            { deletedAt: new Date() },
            { new: true }
        );

        if (!faculty) {
            throw new ApiError(404, 'Faculty not found');
        }

        res.json(new ApiResponse(200, null, 'Faculty profile deleted successfully'));
    }
);
