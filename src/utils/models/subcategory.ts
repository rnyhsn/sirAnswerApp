import mongoose from "mongoose";


const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    slug: {
        type: String,
        required: true 
    },
    description: {
        type: String 
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    }
}, {timestamps: true});

export const SubCategory = mongoose.models?.SubCategory || mongoose.model('SubCategory', subCategorySchema);