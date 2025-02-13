'use server';
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { connectToDB } from "../dbConnect";
import { Question } from "../models/question";
import { redirect } from "next/navigation";

export const createQuestion = async (formData: FormData, categories?: {id: string, name: string}[]) => {
    const session = await auth();
    const {question, answer} = Object.fromEntries(formData);
    console.log(formData);
    console.log(categories);
    let newCategories = categories?.map((category) => category.id);
    console.log(newCategories);
    try {
        await connectToDB();
        let newQuestion = new Question({
            question,
            categories: newCategories,
            answer,
            qsnrEmail: session?.user?.email
        })
        console.log(newQuestion);
        const resp = await newQuestion.save();
        console.log(resp);
        return {
            success: true,
            message: "Question created successfully",
            statusCode: 202 
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to create question",
            statusCode: 500
        }
    }
}


export const getQuestions = async () => {
    try {
        await connectToDB();
        const questions = await Question.find().populate('categories').lean();
        console.log(questions[0].categories[0].name);
        if(questions.length === 0) {
            return {
                success: true,
                message: "Question is not created",
                statusCode: 400 
            }
        }

        return {
            success: true,
            message: "Question found",
            statusCode: 200,
            payload: questions 
        }
    } catch (error) {
        console.log(error);
    }
}


export const deleteQuestion = async (formData: FormData) => {
    const id = formData.get('id');
    try {
        await connectToDB();
        await Question.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    revalidatePath("/dashboard/question");
    redirect("/dashboard/question");
}