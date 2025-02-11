import mongoose from "mongoose";


const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true 
    },
    answerer: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    liked: {
        type: [String],
        default: []
    },
    question: {
        type: mongoose.Types.ObjectId,
        ref: 'Question'
    }
}, {timestamps: true});