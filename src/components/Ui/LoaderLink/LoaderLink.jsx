'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import { useRouter } from 'next/navigation';

const LoaderLink = ({ href }) => {
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setIsLoader(true);
    router.push(href)
  }
  return (
    <Link onClick={handleClick} href={href} className='text-blue-500 hover:underline'>
      {isLoader ? <>Смотреть подробнее <Loader /></> : "Сомтреть подробнее"}
    </Link>
  )
}

export default LoaderLink
