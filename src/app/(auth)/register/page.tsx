import RegisterForm from '@/components/auth/RegisterForm'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-[30%] px-5 py-10 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
            <h1 className="text-center text-3xl font-semibold">Sign Up</h1>
            <RegisterForm />
            <p className=" mt-3">Have already an Account?  <Link href="/login" className="text-btnLink font-semibold">Login</Link> </p>
        </div>
      
    </div>
  )
}

export default RegisterPage
