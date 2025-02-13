import { auth, signOut } from '@/utils/auth'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const LoginBtn = async () => {
    const session  = await auth();
  return (
    <div>
    {
        session?.user ? (
            <div>
                <Image src={session.user?.image || "/avatar.jpg"} alt="" width={30} height={30} className="rounded-full" />
                <form action={async () => {
                    'use server';
                    await signOut()
                }}>
                    <button>Logout</button>
                </form>
            </div>
        ) : (
            <Link href="/login">Login</Link>
        )
    }
    </div>
  )
}

export default LoginBtn
