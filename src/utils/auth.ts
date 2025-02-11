import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "./dbConnect";
import { User } from "./models/user";
import Credentials from "next-auth/providers/credentials";
import  bcrypt from 'bcryptjs';
import { signInSchema } from "./validationSchemas";
import { ZodError } from "zod";

export const {signIn, signOut, handlers, auth} = NextAuth({
    providers: [
        Google,
        // Credentials({
        //     async authorize(credentials) {
        //         console.log("Credentials: ", credentials);
        //         if(credentials=== null) {
        //             console.log("Credential is not provided");
        //             return null;
        //         }
        //         try {
        //             await connectToDB();
        //             const user = await User.findOne({email: credentials?.email});
        //             if(user) {
        //                 const isPasswordMatch = await bcrypt.compare(credentials?.password as string, user?.password);
        //                 console.log("Password Matched");
        //                 if(isPasswordMatch) {
        //                     return user;
        //                 } else {
        //                     throw new Error("Password does not match");
        //                 }
        //             } else {
        //                 throw new Error("User not found");
        //             }
        //         } catch (error) {
                    
        //         }

               
        //     },
        // })

        Credentials({
            async authorize(credentials) {
                try {
                    await connectToDB();
                    let user = null;

                    const {email, password} = await signInSchema.parseAsync(credentials);
                    
                    user = await User.findOne({email});
                    if(user) {
                        const matched = await bcrypt.compare(password, user.password);
                        if(matched) {
                            return user;
                        } else {
                            throw new Error("Password does not match");
                        }
                    } else {
                        // return null;
                        throw new Error("Invalid credentials");
                    }

                } catch (error) {
                    // return null;
                    if(error instanceof ZodError) {
                        return null;
                    }
                }

            }
        })

    ],
    callbacks: {
        async signIn({user, account}) {
            await connectToDB();
            const existingUser = await User.findOne({email: user.email});
            if(!existingUser) {
                let newUser = new User({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: account?.provider,
                })

                await newUser.save();
                console.log("User created successfully");
            }
            return true;
        },
        async session({session, user}) {
            console.log("Callbacks:", user);

            return session;
        }
    }
})