import mongoose, { Document, Schema } from 'mongoose';

export interface IGallery extends Document {
    title: string;
    description?: string;
    category: string;
    images: {
        url: string;
        caption?: string;
        order?: number;
    }[];
    eventId?: mongoose.Types.ObjectId;
    coverImage?: string;
    isActive: boolean;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const gallerySchema = new Schema<IGallery>(
    {
        title: {
            type: String,
            required: [true, 'Gallery title is required'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            default: 'general', // e.g., 'events', 'infrastructure', 'cultural'
        },
        images: [{
            url: { type: String, required: true },
            caption: String,
            order: { type: Number, default: 0 },
        }],
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
        coverImage: {
            type: String, // URL
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

// Exclude soft-deleted documents by default
gallerySchema.pre(/^find/, function (next) {
    // @ts-ignore
    this.where({ deletedAt: null });
    next();
});

export const Gallery = mongoose.model<IGallery>('Gallery', gallerySchema);
