import Image from 'next/image';
import React from 'react'

const Banner = ({ getBanner, className = null }) => {
  return (
    <div className={className + ' w-full'}>
      <div className="container mx-auto">
        <div className="relative w-full h-[440px] rounded-lg overflow-hidden">
          <Image fill src={getBanner} alt='Изображение' className='w-full h-full object-cover object-center' />
        </div>
      </div>
    </div>
  )
}

export default Banner;