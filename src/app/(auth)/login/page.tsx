import LoginForm from '@/components/auth/LoginForm';
import { signIn } from '@/utils/auth';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";



const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[28%] px-7 py-8 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary">
            <div className="mt-4">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <LoginForm />
                <p className="text-sm mt-3"> Don't have any Account?  <Link href="/register" className="text-btnLink font-semibold">Sign Up</Link> </p>
            </div>
            <div className="flex items-center gap-1 justify-center mt-4">
                <hr className="w-[40%] border-gray-500" />
                <span>OR</span>
                <hr className="w-[40%] border-gray-500" />
            </div>
            <form className="w-full mt-5" action={async ()=> {
                'use server';
                await signIn('google', {redirectTo: "/"});
            }}>
                <button className="py-2 px-4 bg-red-500 text-white rounded-md w-full flex items-center gap-2"><FcGoogle className="text-3xl" /> Continue With Google</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
