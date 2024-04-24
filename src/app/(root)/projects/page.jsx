import React from 'react';
import Heading from '@/components/Ui/Heading/Heading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';


export default function projects() {
  return (
    <>
        <section className='w-full '>
            <div className="container mx-auto">
                <Heading className={'mb-5'} text='ПО для разработчиков' />
                <ProjectCard getData={''}/>
                <button className="mt-5 w-full py-5 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-colors">Показать больше</button>
            </div>
        </section>
    </>
  )
}
