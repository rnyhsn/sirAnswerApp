import Link from 'next/link'
import React from 'react'

const Category = ({category}: {category: {name: string, slug: string}}) => {
  
  return (
    <Link href={category.slug} >
        {category.name}
    </Link>
  )
}

export default Category
