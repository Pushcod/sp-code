import Link from 'next/link'
import React from 'react'

const Category = ({getCategory}) => {
  return (
    <ul className='w-full flex gap-4 py-5'>
      <li className="inline-flex">
        <Link href={''} className='py-3 px-5 bg-white rounded-full font-medium shadow-sm'>HTML</Link>
      </li>
    </ul>
  )
}

export default Category
