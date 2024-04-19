import Link from 'next/link'
import React from 'react'

const Banner = ({getData}) => {
  return (
    <section className='w-full ' id='banner'>
      <div className="container mx-auto">
        <div className="w-full rounded-3xl px-16 py-12 bg-indigo-200 flex flex-col gap-10">
            <h2 className="text-stone-950 text-4xl leading-relaxed font-bold max-w-[40%]">{getData.title}</h2>
            <ul className="flex items-center gap-3">
                <li className="inline-flex">
                    <Link href={'/articles/' + getData.slug } className='py-3 px-5 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all'>Подробнее</Link>
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Banner
