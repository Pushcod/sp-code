import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SidebarProject = ({getProject, className = null}) => {
  return (
    <div className={className + 'w-full bg-white rounded-lg p-4 shadow-sm'}>
        <div className="relative w-full mb-4 aspect-square rounded-lg overflow-hidden">
            <Image fill loading='lazy' src={'/assets/img/projects/nier.jpeg'} alt='Картинка популярного проекта' className='w-full h-full object-cover object-center' />
        </div>
        <h3 className="text-xl text-stone-900">Лучший андроид на земле</h3>
        <ul className="w-full inline-flex gap-2 mb-2">
            {[1,2,3,4,5,6,7].map((item,index)=> {
                return(
                    <li key={index} className='text-sm text-stone-500 inline-table'>#JS</li>
                );
            })}
            
        </ul>
        <Link href={'/'} className='w-full py-3 rounded-lg bg-blue-500 text-white font-medium block text-center '>Подробнее</Link>
    </div>
  )
}

export default SidebarProject
