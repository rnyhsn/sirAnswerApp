import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true 
    },
    commentor: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    answer: {
        type: mongoose.Types.ObjectId,
        ref: 'Answer'
    }
}, {timestamps: true});


export const Comment = mongoose.models?.Comment || mongoose.model('Comment', commentSchema);