import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    title: string;
    description?: string;
    eventDate: Date;
    endDate?: Date;
    venue?: string;
    organizer?: string;
    category: 'seminar' | 'workshop' | 'cultural' | 'sports' | 'technical';
    image?: string;
    attachments?: string[];
    featured: boolean;
    createdBy: mongoose.Types.ObjectId;
    status: 'draft' | 'published' | 'archived';
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const eventSchema = new Schema<IEvent>(
    {
        title: {
            type: String,
            required: [true, 'Event title is required'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        eventDate: {
            type: Date,
            required: [true, 'Event date is required'],
        },
        endDate: {
            type: Date,
        },
        venue: {
            type: String,
            trim: true,
        },
        organizer: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            enum: ['seminar', 'workshop', 'cultural', 'sports', 'technical'],
            default: 'technical',
        },
        image: {
            type: String, // URL
        },
        attachments: [{
            type: String, // URLs to PDFs
        }],
        featured: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        status: {
            type: String,
            enum: ['draft', 'published', 'archived'],
            default: 'draft',
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
eventSchema.pre(/^find/, function (next) {
    // @ts-ignore
    this.where({ deletedAt: null });
    next();
});

export const Event = mongoose.model<IEvent>('Event', eventSchema);
