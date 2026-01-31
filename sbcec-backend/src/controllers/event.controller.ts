import { Request, Response, NextFunction } from 'express';
import { Event } from '../models/Event.model';
import { ApiError } from '../utils/ApiError';
import { ApiResponse } from '../utils/ApiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { AuthRequest } from '../middleware/auth.middleware';

export const getAllEvents = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { page = 1, limit = 10, category } = req.query;

        const query: any = { status: 'published', isActive: true };
        if (category) {
            query.category = category;
        }

        const events = await Event.find(query)
            .sort({ eventDate: -1 }) // Newest first
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit))
            .populate('createdBy', 'firstName lastName');

        const total = await Event.countDocuments(query);

        res.json(
            new ApiResponse(
                200,
                {
                    events,
                    pagination: {
                        total,
                        page: Number(page),
                        pages: Math.ceil(total / Number(limit)),
                    },
                },
                'Events retrieved successfully'
            )
        );
    }
);

export const getEventById = asyncHandler(
    async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const event = await Event.findById(id).populate('createdBy', 'firstName lastName');

        if (!event) {
            throw new ApiError(404, 'Event not found');
        }

        // Only allow admin to view drafts/archived if not creator
        if (event.status !== 'published') {
            // Logic to check if user is admin can be added here if needed to be strict
            // For now, assuming public endpoint gets detail only if they know ID (but maybe restricted ideally)
        }

        res.json(new ApiResponse(200, event, 'Event details retrieved successfully'));
    }
);

export const createEvent = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const eventData = {
            ...req.body,
            createdBy: req.user?._id,
        };

        const event = await Event.create(eventData);

        res.status(201).json(
            new ApiResponse(201, event, 'Event created successfully')
        );
    }
);

export const updateEvent = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const event = await Event.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true, runValidators: true }
        );

        if (!event) {
            throw new ApiError(404, 'Event not found');
        }

        res.json(new ApiResponse(200, event, 'Event updated successfully'));
    }
);

export const publishEvent = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;
        const { status } = req.body; // 'published' or 'archived' or 'draft'

        if (!['published', 'archived', 'draft'].includes(status)) {
            throw new ApiError(400, 'Invalid status');
        }

        const event = await Event.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!event) {
            throw new ApiError(404, 'Event not found');
        }

        res.json(new ApiResponse(200, event, `Event status updated to ${status}`));
    }
);

export const deleteEvent = asyncHandler(
    async (req: AuthRequest, res: Response, _next: NextFunction): Promise<void> => {
        const { id } = req.params;

        const event = await Event.findByIdAndUpdate(
            id,
            { deletedAt: new Date() },
            { new: true }
        );

        if (!event) {
            throw new ApiError(404, 'Event not found');
        }

        res.json(new ApiResponse(200, null, 'Event deleted successfully'));
    }
);
