import Link from 'next/link'
import React from 'react'

const PageTitle = ({title, link}: {title: string, link?: string}) => {
  return (
    <div className="px-4 py-4 rounded-md bg-bgLightSecondary dark:bg-bgDarkSecondary flex justify-between items-center mb-5">
      <h1 className="text-2xl font-semibold"> {title} </h1>
      {
        link && (
            <Link href={link} className="px-4 py-2 bg-btnPrimary rounded-md text-white font-semibold hover:bg-btnPrimary/90"> Add New </Link>
        )
      }
    </div>
  )
}

export default PageTitle
