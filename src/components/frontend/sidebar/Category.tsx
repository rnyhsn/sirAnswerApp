import Link from 'next/link'
import React from 'react'

const Category = ({category}: {category: {title: string, slug: string}}) => {
  return (
    <Link href={category.slug} >
        {category.title}
    </Link>
  )
}

export default Category
