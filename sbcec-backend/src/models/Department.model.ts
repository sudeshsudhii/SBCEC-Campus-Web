import mongoose, { Document, Schema } from 'mongoose';

export interface IDepartment extends Document {
    name: string;
    code: string;
    description?: string;
    vision?: string;
    mission?: string;
    headOfDepartment?: mongoose.Types.ObjectId;
    establishedYear?: number;
    image?: string;
    facilities?: string[];
    isActive: boolean;
    createdBy?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

const departmentSchema = new Schema<IDepartment>(
    {
        name: {
            type: String,
            required: [true, 'Department name is required'],
            trim: true,
        },
        code: {
            type: String,
            required: [true, 'Department code is required'],
            unique: true,
            uppercase: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        vision: {
            type: String,
            trim: true,
        },
        mission: {
            type: String,
            trim: true,
        },
        headOfDepartment: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        establishedYear: {
            type: Number,
            min: 1900,
            max: new Date().getFullYear(),
        },
        image: {
            type: String,
        },
        facilities: [{
            type: String,
        }],
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
departmentSchema.pre(/^find/, function (this: any) {
    this.where({ deletedAt: null });
});

export const Department = mongoose.model<IDepartment>('Department', departmentSchema);
