"use client";
import Link from 'next/link'
import React from 'react'
import Menu from '../../collections/Menu'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const path = usePathname();

  return (
    <aside className='w-[85px] min-h-[calc(100vh_-_40px)] bg-white rounded-2xl shadow-sm'>
      <div className="w-full py-7 flex justify-center">
        <Link href={'/'} className='p-2 text-lg font-medium text-stone-900 '>
          <span className='text-blue-600 font-semibold'>Sp</span>code
        </Link>
      </div>
      <nav className="w-full sm:pt-24">
        <menu className="w-full flex flex-col items-center justify-center gap-5">
          {Menu.map((item, index) => {
            return (
              <li key={index} className="inline-flex">
                <Link href={item.url} className={`${path === item.url ? 'bg-blue-500 text-white' : 'text-black/50'} p-2 hover:bg-blue-500 hover:text-white rounded-md `}>
                  <item.icon/>
                </Link>
              </li>
            );
          })}
        </menu>
      </nav>
    </aside >
  )
}

export default Sidebar
