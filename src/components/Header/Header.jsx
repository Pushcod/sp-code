import React from 'react'
import { Search } from 'lucide-react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='w-full py-4'>
      <div className="container mx-auto">
        <div className="w-full flex justify-between " >
          <div className="flex gap-2">
            <input className='px-4 py-2 rounded-md' type="text" placeholder='Поиск...' />
            <button className='bg-stone-950 text-white rounded-md w-[40px] flex items-center justify-center' >
              <Search size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link href={''} className='text-gray-400 font-medium hover:text-blue-500'>Зарегистрироваться</Link>
            <Link href={''} className='px-4 py-2 rounded-md bg-stone-950 text-white font-medium hover:bg-stone-800'>Войти</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
