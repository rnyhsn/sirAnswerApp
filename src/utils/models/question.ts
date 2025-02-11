import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true 
    },
    questioneer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    }
}, {timestamps: true});


export const Question = mongoose.models?.Question || mongoose.model('Question', questionSchema);