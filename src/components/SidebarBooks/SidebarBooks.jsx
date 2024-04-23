import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SidebarBooks = ({ getBooks, className = null }) => {
    return (
        <div className={className + 'w-full bg-white rounded-lg p-4 shadow-sm'}>
            <div className="w-full flex items-center justify-between">
                <h3 className="text-lg text-stone-900 font-medium">Книга разработчиков</h3>
                <Link href={'/'} className='text-sm text-blue-500 '>Смотреть все</Link>
            </div>
            <ul className="w-full flex flex-col gap-3 pt-5">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <li className="w-full inline-flex">
                            <Link href={''} className='w-full flex items-start justify-between group'>
                                <div className="flex items-center gap-2">
                                    <Image src={'/assets/img/projects/nier.jpeg'} alt='' width={50} height={50} className='w-[50px] h-[50px] rounded-lg object-cover' />
                                    <div className="flex flex-col">
                                        <h4 className="text-stone-900 font-medium group-hover:text-blue-500 transition-colors">Laravel для чайников</h4>
                                        <span className='text-stone-900 text-sm font-medium'>Олегов И.Ш.</span>
                                    </div>
                                </div>
                                <span className="text-green-500 text-sm font-medium">2024 г.</span>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </div>
    )
}

export default SidebarBooks
