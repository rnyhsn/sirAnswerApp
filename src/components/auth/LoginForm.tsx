"use client";
import { doCredentialLogin } from '@/utils/actions/user';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const resp = await doCredentialLogin(formData);
      // console.log(resp?.error);
      // console.log(resp);
      // console.log(resp);
      if(resp.success) {
        toast.success("Login Successfully")
        router.push("/");
      } else {
        setError("Wrong Credentials, Check your email & password");
      }
    } catch (error) {
      console.error(error);
      // setError("Wrong Credential")
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">              
        <div className="flex flex-col gap-1">
            <label className="font-semibold">E-mail</label>
            <input type="email" name="email" placeholder="Enter Your E-mail" className="py-2 px-4 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input type="password" name="password" placeholder="Enter Your Password" className="py-2 px-4 rounded-md outline-none bg-bgLightPrimary dark:bg-bgDarkPrimary" />
            {
              error && <p className="text-red-500 text-sm"> {error} </p>
            }
        </div>
        <button className="py-2 bg-btnPrimary text-white rounded-md font-semibold hover:bg-btnPrimary/90">Sign Up</button>
    </form>
  )
}

export default LoginForm
