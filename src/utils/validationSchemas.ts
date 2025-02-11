import { z } from "zod";


export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') 
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-') 
        .trim();
}


export const userSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    email: z.string().min(7, "E-mail must be at least 7 characters").email("Invalid Email"),
    password: z.string({required_error: "Password is required"})
                .min(6, "Password must be not be less than 6 character")
})

export const signInSchema = z.object({
    email: z.string({required_error: "Email is required"}).email("Invalid email"),
    password: z.string({required_error: "Password is required"}).min(7, "Password must be more than 6 character")
})