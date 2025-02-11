'use client';

import { createUser } from "@/utils/actions/user";
import { redirect } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const nameRef = useRef<null|HTMLInputElement>(null);
    const emailRef = useRef<null|HTMLInputElement>(null);
    const passwordRef = useRef<null|HTMLInputElement>(null);
    const [errors, setErrors] = useState<any>(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let user = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }
        let resp = await createUser(user);
        if(!resp?.success && resp?.statusCode == 409) {
            setError(resp.message);
        } else if(!resp?.success && resp?.statusCode === 400) {
            setErrors(resp.error);
        } else if(resp?.success && resp.statusCode === 201) {
            toast.success(resp.message, {
                position: "bottom-right",
            })
            redirect("/login");
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Name</label>
            <input type="text" name="name" ref={nameRef} placeholder="Enter Your Name" className="py-2 px-4 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
            
            {
                errors?.name && <p className="text-sm text-red-500 font-semibold"> {errors?.name[0]} </p>
            }
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">E-mail</label>
            <input type="email" name="email" ref={emailRef} placeholder="Enter Your E-mail" className="py-2 px-4 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
            {
                error && <p className="text-sm text-red-500 font-semibold"> {error} </p>
            }
            {
                errors?.email && <p className="text-sm text-red-500 font-semibold"> {errors.email[0]} </p>
            }
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input type="password" name="password" ref={passwordRef} placeholder="Enter Your Password" className="py-2 px-4 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
            {
                errors?.password && <p className="text-sm text-red-500 font-semibold"> {errors.password[0]} </p>
            }
        </div>
        <button className="py-2 bg-btnPrimary text-white rounded-md font-semibold hover:bg-btnPrimary/90">Sign Up</button>
    </form>
  )
}

export default RegisterForm
