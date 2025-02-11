'use server';
import  bcrypt from 'bcryptjs';
import { userSchema } from '../validationSchemas';
import { connectToDB } from '../dbConnect';
import { User } from '../models/user';
import { signIn } from '../auth';

export const createUser = async ({name, email, password}: {name: string|undefined, email: string|undefined, password: string|undefined}) => {
    console.log(name, email, password);
    try {
        await connectToDB();

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return {
                success: false,
                statusCode: 409 ,
                message: "This Email has already been used"
            }
        }

        const validatedFields = userSchema.safeParse({
            name,
            email,
            password
        })
        if(!validatedFields.success) {
            console.log(validatedFields.error.flatten().fieldErrors);
            return {
                success: false,
                statusCode: 400,
                message: "",
                error: validatedFields.error.flatten().fieldErrors
            }
        }
        if(validatedFields.success) {
            let hashPassword = await bcrypt.hash(validatedFields.data.password, 10);
            let newUser = new User({
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                password: hashPassword
            });
            await newUser.save();

            return {
                success: true,
                statusCode: 201,
                message: "User Registered successfully"
            }
        }
    } catch (error: any) {
        return {
            success: false,
            statusCode: 500,
            message: error.message
        }
    }
}


export const getUsers = async () => {
    try {
        await connectToDB();
        const users = await User.find().sort({createdAt: -1}).lean();

        return {
            success: true,
            message: "User Fetched successfully",
            statusCode: 200,
            payload: users 
        }
    } catch (error) {
        return {
            success: false,
            message: "Failed to fetched users",
            statusCode: 500
        }
    }
}


// export const doCredentialLogin = async (formData: FormData) => {
//     try {
//         const resp = signIn('credentials', {
//             email: formData.get('email'),
//             password: formData.get('password'),
//             redirect: false
//         })

//         return resp;
//     } catch (error) {
        
//     }
// }

export const doCredentialLogin = async (formData: FormData) => {
   const {email, password} = Object.fromEntries(formData);

   try {
    const resp = await signIn('credentials', {
        email,
        password,
        redirect: false 
       })
    
       console.log(resp);
    
       return {
        success: true,
        payload: resp
       }
   } catch (error: any) {
        // console.log(error);
        return {
            success: false,
            error: error.message
        }
   }

}