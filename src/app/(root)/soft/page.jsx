import React from 'react'
import Heading from '@/components/Ui/Heading/Heading';
import Cards from '@/components/Cards/Cards';


export default function soft() {
  return (
    <>
        <section className='w-full '>
            <div className="container mx-auto">
                <Heading text='Софт для разработчиков' className={'mb-5'}/>
                <Cards getData={''}/>
                <button className="mt-5 w-full py-5 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-colors">Показать больше</button>
            </div>
        </section>
    </>
  )
}
