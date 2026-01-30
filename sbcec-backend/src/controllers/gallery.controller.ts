import { Request, Response, NextFunction } from 'express';
import { Gallery } from '../models/Gallery.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllGalleries = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { page = 1, limit = 10, category } = req.query;

        const query: any = { isActive: true };
        if (category) {
            query.category = category;
        }

        const galleries = await Gallery.find(query)
            .sort({ createdAt: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .populate('eventId', 'title eventDate');

        const total = await Gallery.countDocuments(query);

        res.json(
            new ApiResponse(
                200,
                {
                    galleries,
                    pagination: {
                        total,
                        page: Number(page),
                        pages: Math.ceil(total / Number(limit)),
                    },
                },
                'Galleries retrieved successfully'
            )
        );
    }
);

export const getGalleryById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const gallery = await Gallery.findById(id).populate('eventId', 'title eventDate');

        if (!gallery) {
            throw new ApiError(404, 'Gallery not found');
        }

        res.json(new ApiResponse(200, gallery, 'Gallery details retrieved successfully'));
    }
);

export const createGallery = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const galleryData = {
            ...req.body,
            createdBy: req.user?._id,
        };

        const gallery = await Gallery.create(galleryData);

        res.status(201).json(
            new ApiResponse(201, gallery, 'Gallery created successfully')
        );
    }
);

export const updateGallery = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const gallery = await Gallery.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!gallery) {
            throw new ApiError(404, 'Gallery not found');
        }

        res.json(new ApiResponse(200, gallery, 'Gallery updated successfully'));
    }
);

export const deleteGallery = asyncHandler(
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const gallery = await Gallery.findByIdAndUpdate(
            id,
            { deletedAt: new Date(), isActive: false },
            { new: true }
        );

        if (!gallery) {
            throw new ApiError(404, 'Gallery not found');
        }

        res.json(new ApiResponse(200, null, 'Gallery deleted successfully'));
    }
);
