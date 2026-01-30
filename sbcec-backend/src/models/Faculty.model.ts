import mongoose, { Document, Schema } from 'mongoose';

export interface IFaculty extends Document {
    user: mongoose.Types.ObjectId;
    department: mongoose.Types.ObjectId;
    designation: string;
    qualification: string;
    specialization: string[];
    experience: number;
    photo?: string;
    bio?: string;
    publications: {
        title: string;
        journal: string;
        year: number;
        link?: string;
    }[];
    researchInterests: string[];
    email: string;
    phone?: string;
    displayOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const facultySchema = new Schema<IFaculty>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User reference is required'],
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department',
            required: [true, 'Department is required'],
        },
        designation: {
            type: String,
            required: [true, 'Designation is required'],
            trim: true,
        },
        qualification: {
            type: String,
            required: [true, 'Qualification is required'],
            trim: true,
        },
        specialization: [{
            type: String,
            trim: true,
        }],
        experience: {
            type: Number,
            default: 0,
        },
        photo: {
            type: String,
        },
        bio: {
            type: String,
            trim: true,
        },
        publications: [{
            title: String,
            journal: String,
            year: Number,
            link: String,
        }],
        researchInterests: [{
            type: String,
            trim: true,
        }],
        email: {
            type: String,
            required: [true, 'Email is required'],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        displayOrder: {
            type: Number,
            default: 0,
        },
        isActive: {
            type: Boolean,
            default: true,
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
facultySchema.pre(/^find/, function (next) {
    // @ts-ignore
    this.where({ deletedAt: null });
    next();
});

export const Faculty = mongoose.model<IFaculty>('Faculty', facultySchema);
