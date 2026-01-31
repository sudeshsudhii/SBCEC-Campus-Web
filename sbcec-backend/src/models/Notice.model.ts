import mongoose, { Document, Schema } from 'mongoose';

export interface INotice extends Document {
    title: string;
    content?: string;
    category: 'academic' | 'exam' | 'admission' | 'general';
    targetAudience: string[];
    priority: 'low' | 'medium' | 'high' | 'urgent';
    expiryDate?: Date;
    attachments?: string[];
    isActive: boolean;
    isPinned: boolean;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const noticeSchema = new Schema<INotice>(
    {
        title: {
            type: String,
            required: [true, 'Notice title is required'],
            trim: true,
        },
        content: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            enum: ['academic', 'exam', 'admission', 'general'],
            default: 'general',
        },
        targetAudience: [{
            type: String, // e.g., 'students', 'faculty', 'public'
        }],
        priority: {
            type: String,
            enum: ['low', 'medium', 'high', 'urgent'],
            default: 'medium',
        },
        expiryDate: {
            type: Date,
        },
        attachments: [{
            type: String, // URLs to PDFs
        }],
        isActive: {
            type: Boolean,
            default: true,
        },
        isPinned: {
            type: Boolean,
            default: false,
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
noticeSchema.pre(/^find/, function (this: any) {
    this.where({ deletedAt: null });
});

export const Notice = mongoose.model<INotice>('Notice', noticeSchema);
