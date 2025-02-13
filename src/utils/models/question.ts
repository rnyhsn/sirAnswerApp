import mongoose from "mongoose";


const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true 
    },
    categories: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubCategory'
            }
        ]
    },
    answer: {
        type: String 
    },
    qsnrEmail: {
        type: String,
        required: true 
    }
}, {timestamps: true});


export const Question = mongoose.models?.Question || mongoose.model('Question', questionSchema);