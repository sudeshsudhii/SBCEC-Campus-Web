import { Request, Response, NextFunction } from 'express';
import { Department } from '../models/Department.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllDepartments = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const departments = await Department.find({ isActive: true })
            .populate('headOfDepartment', 'firstName lastName email')
            .sort({ name: 1 });

        res.json(
            new ApiResponse(200, { departments, count: departments.length }, 'Departments retrieved successfully')
        );
    }
);

export const getDepartmentById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const department = await Department.findById(id)
            .populate('headOfDepartment', 'firstName lastName email')
            .populate('createdBy', 'firstName lastName email');

        if (!department) {
            throw new ApiError(404, 'Department not found');
        }

        res.json(new ApiResponse(200, department, 'Department retrieved successfully'));
    }
);

export const createDepartment = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const departmentData = {
            ...req.body,
            createdBy: req.user?._id,
        };

        const department = await Department.create(departmentData);

        res.status(201).json(
            new ApiResponse(201, department, 'Department created successfully')
        );
    }
);

export const updateDepartment = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const department = await Department.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!department) {
            throw new ApiError(404, 'Department not found');
        }

        res.json(new ApiResponse(200, department, 'Department updated successfully'));
    }
);

export const deleteDepartment = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        // Soft delete
        const department = await Department.findByIdAndUpdate(
            id,
            { deletedAt: new Date() },
            { new: true }
        );

        if (!department) {
            throw new ApiError(404, 'Department not found');
        }

        res.json(new ApiResponse(200, null, 'Department deleted successfully'));
    }
);
