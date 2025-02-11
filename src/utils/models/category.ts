import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    slug: {
        type: String,
        required: true 
    },
    description: String,
    status: {
        type: Boolean,
        default: true 
    }
}, {
    timestamps: true 
})


export const Category = mongoose.models?.Category || mongoose.model('Category', categorySchema);