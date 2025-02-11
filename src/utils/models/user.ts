import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String 
    },
    image: {
        type: String
    },
    status: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    provider: String,
    providerId: String,
}, {timestamps: true});


export const User = mongoose.models.User || mongoose.model('User', userSchema);