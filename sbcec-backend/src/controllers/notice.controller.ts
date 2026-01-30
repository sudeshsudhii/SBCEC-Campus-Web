import { Request, Response, NextFunction } from 'express';
import { Notice } from '../models/Notice.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllNotices = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { page = 1, limit = 10, category } = req.query;

        const query: any = { isActive: true };
        if (category) {
            query.category = category;
        }

        // Sort by pinned first, then by priority (urgent > high > medium > low), then updated date
        const notices = await Notice.find(query)
            .sort({ isPinned: -1, priority: -1, updatedAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .populate('createdBy', 'firstName lastName');

        const total = await Notice.countDocuments(query);

        res.json(
            new ApiResponse(
                200,
                {
                    notices,
                    pagination: {
                        total,
                        page: Number(page),
                        pages: Math.ceil(total / Number(limit)),
                    },
                },
                'Notices retrieved successfully'
            )
        );
    }
);

export const getNoticeById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const notice = await Notice.findById(id).populate('createdBy', 'firstName lastName');

        if (!notice) {
            throw new ApiError(404, 'Notice not found');
        }

        res.json(new ApiResponse(200, notice, 'Notice details retrieved successfully'));
    }
);

export const createNotice = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const noticeData = {
            ...req.body,
            createdBy: req.user?._id,
        };

        const notice = await Notice.create(noticeData);

        res.status(201).json(
            new ApiResponse(201, notice, 'Notice created successfully')
        );
    }
);

export const updateNotice = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const notice = await Notice.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!notice) {
            throw new ApiError(404, 'Notice not found');
        }

        res.json(new ApiResponse(200, notice, 'Notice updated successfully'));
    }
);

export const pinNotice = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;
        const { isPinned } = req.body; // boolean

        const notice = await Notice.findByIdAndUpdate(
            id,
            { isPinned },
            { new: true }
        );

        if (!notice) {
            throw new ApiError(404, 'Notice not found');
        }

        res.json(new ApiResponse(200, notice, `Notice ${isPinned ? 'pinned' : 'unpinned'} successfully`));
    }
);

export const deleteNotice = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const notice = await Notice.findByIdAndUpdate(
            id,
            { deletedAt: new Date(), isActive: false },
            { new: true }
        );

        if (!notice) {
            throw new ApiError(404, 'Notice not found');
        }

        res.json(new ApiResponse(200, null, 'Notice deleted successfully'));
    }
);
