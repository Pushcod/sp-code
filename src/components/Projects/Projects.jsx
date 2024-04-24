import React from 'react'
import ProjectCards from '../ProjectCard/ProjectCard'
import Heading from '@/components/Ui/Heading/Heading';
import Link from 'next/link';


const Projects = ({getData}) => {
    return (
        <section className='w-full py-10 '>
          <div className="container mx-auto">
            <div className="w-full flex items-center justify-between">
                <Heading text='Готовые проекты' className={'mb-5'}/>
                <Link href={'/soft'} className='text-blue-500'>Показать всё</Link>
            </div>
            <ProjectCards getData={''} />
          </div>
        </section>
      )
}

export default Projects
