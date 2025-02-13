'use server';

import { revalidatePath } from "next/cache";
import { connectToDB } from "../dbConnect";
import { Category } from "../models/category";
import { SubCategory } from "../models/subcategory";
import { Response } from "../types";
import { slugify } from "../validationSchemas";


export const createCategory = async (preState: Response, formData: FormData) => {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    
    try {
        await connectToDB();
        if(name.length === 0) {
            throw new Error("Category Name must not be empty");
        }

        const slug = slugify(name);
        const category = new Category({
            name,
            slug,
            description
        });

        await category.save();
        return {
            success: true,
            statusCode: 200,
            message: "Category created successfully"
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
            statusCode: 401
        }
    }
}


export const getCategories = async (query?: string) => {

    try {
        await connectToDB();
        let categories = query ? await Category.find({name: { $regex: query, $options: "i" }}).lean() : await Category.find().lean();
        if(categories.length === 0) {
            throw new Error("Category List is Empty")
        }

        let newCategories = categories.map((category) => ({...category, _id: String(category._id)}));

        return {
            success: true,
            message: "Category Fetched successfully",
            statusCode: 200,
            payload: newCategories
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
            statusCode: 401
        }
    }
}

export const deleteCategory = async (formData: FormData) => {
    const id = formData.get('id');

    try {
        await connectToDB();
        await SubCategory.deleteMany({parentCategory: id});
        await Category.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/category");
}






/**
 * Sub Category Actions are here
 */

export const createSubCategory = async (prevState: Response, formData: FormData) => {
    // const {name, description, parentCategory} = Object.fromEntries(formData);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const parentCategory = formData.get('parentCategory') as string;

    try {
        await connectToDB();
        if(name.length === 0) {
            throw new Error("Sub Category Field must not be empty");
        }
        const findCategory = await Category.findById(parentCategory);
        console.log(findCategory);
        if(!findCategory) {
            return {
                success: false,
                message: "Parent Category Not found",
                statusCode: 404
            }
        }

        let slug = slugify(name);
        const subCategory = new SubCategory({
            name,
            slug,
            description,
            parentCategory
        })
        await subCategory.save();

        return {
            success: true,
            message: "Sub Category created successfully",
            statusCode: 202
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
            statusCode: 401
        }
    }
}


export const getSubCategories = async (query: string) => {

    try {
        await connectToDB();
        const subCategories = query ? await SubCategory.find({name: {$regex: query, $options: "i" }}).lean() :  await SubCategory.find().sort({createdAt: -1}).populate('parentCategory').lean();
        if(subCategories.length === 0) {
            return {
                success: true,
                message: "No Sub Category is added. Add Sub Categories",
                statusCode: 401,
                payload: []
            }
        }

        const polishedSubCategories = subCategories.map((category) => ({...category, _id: String(category._id), parentCategory: category.parentCategory ? {...category.parentCategory, _id: String(category.parentCategory._id)} : null}));

        return {
            success: true,
            message: "Sub categories fetched successfully",
            statusCode: 202,
            payload: polishedSubCategories
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while Fetching Sub Categories",
            statusCode: 500
        }
    }
}

export const deleteSubCategories = async (formData: FormData) => {
    const id = formData.get('id');
    console.log(id);
    try {
        await connectToDB();
        const subCategory = await SubCategory.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/sub-category");
}