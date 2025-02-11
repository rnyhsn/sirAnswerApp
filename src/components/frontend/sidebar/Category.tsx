import Link from 'next/link'
import React from 'react'

const Category = ({title, slug}: {title: string, slug: string}) => {
  return (
    <Link href={slug} >
        {title}
    </Link>
  )
}

export default Category
