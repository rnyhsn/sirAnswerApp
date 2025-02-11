import DarkToggle from '@/components/DarkToggle'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="my-5 flex items-center justify-between w-full pr-5">
      <div className="px-4 py-4 bg-bgLightSecondary dark:bg-bgDarkSecondary w-[400px]">
          Dashboard
      </div>
      <Link href="/" className="px-5 py-1.5 bg-btnPrimary rounded-md">Go to Frontend</Link>
      <DarkToggle />
    </div>
  )
}

export default Header
