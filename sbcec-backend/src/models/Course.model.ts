import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
    name: string;
    code: string;
    department: mongoose.Types.ObjectId;
    level: 'UG' | 'PG';
    degree: string;
    duration: number;
    intake: number;
    eligibility?: string;
    syllabus?: string;
    description?: string;
    accreditation?: string;
    isActive: boolean;
    createdBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const courseSchema = new Schema<ICourse>(
    {
        name: {
            type: String,
            required: [true, 'Course name is required'],
            trim: true,
        },
        code: {
            type: String,
            required: [true, 'Course code is required'],
            unique: true,
            uppercase: true,
            trim: true,
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department',
            required: [true, 'Department is required'],
        },
        level: {
            type: String,
            enum: ['UG', 'PG'],
            required: [true, 'Course level is required'],
        },
        degree: {
            type: String,
            required: [true, 'Degree name is required'],
            trim: true, // e.g., 'B.E.', 'M.Tech'
        },
        duration: {
            type: Number,
            required: [true, 'Duration (in years) is required'],
        },
        intake: {
            type: Number,
            required: [true, 'Intake capacity is required'],
        },
        eligibility: {
            type: String,
            trim: true,
        },
        syllabus: {
            type: String, // URL to PDF
        },
        description: {
            type: String,
            trim: true,
        },
        accreditation: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
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
courseSchema.pre(/^find/, function (next) {
    // @ts-ignore
    this.where({ deletedAt: null });
    next();
});

export const Course = mongoose.model<ICourse>('Course', courseSchema);
