import { Request, Response, NextFunction } from 'express';
import { Course } from '../models/Course.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllCourses = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const courses = await Course.find({ isActive: true })
            .populate('department', 'name code')
            .sort({ level: 1, name: 1 });

        res.json(
            new ApiResponse(200, { courses, count: courses.length }, 'Courses retrieved successfully')
        );
    }
);

export const getCourseById = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const course = await Course.findById(id)
            .populate('department', 'name code')
            .populate('createdBy', 'firstName lastName');

        if (!course) {
            throw new ApiError(404, 'Course not found');
        }

        res.json(new ApiResponse(200, course, 'Course details retrieved successfully'));
    }
);

export const getCoursesByDepartment = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { deptId } = req.params;

        const courses = await Course.find({ department: deptId, isActive: true })
            .sort({ level: 1 });

        res.json(
            new ApiResponse(200, { courses, count: courses.length }, 'Department courses retrieved successfully')
        );
    }
);

export const createCourse = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const courseData = {
            ...req.body,
            createdBy: req.user?._id,
        };

        const course = await Course.create(courseData);

        res.status(201).json(
            new ApiResponse(201, course, 'Course created successfully')
        );
    }
);

export const updateCourse = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const course = await Course.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!course) {
            throw new ApiError(404, 'Course not found');
        }

        res.json(new ApiResponse(200, course, 'Course updated successfully'));
    }
);

export const deleteCourse = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const course = await Course.findByIdAndUpdate(
            id,
            { deletedAt: new Date() },
            { new: true }
        );

        if (!course) {
            throw new ApiError(404, 'Course not found');
        }

        res.json(new ApiResponse(200, null, 'Course deleted successfully'));
    }
);
