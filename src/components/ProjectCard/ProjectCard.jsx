"use client"
import Image from 'next/image'
import Link from 'next/link'
import Loader from '../Ui/Loader/Loader'
import React, { useState } from 'react'
import LoaderLink from '../Ui/LoaderLink/LoaderLink'
const ProjectCard = ({ getData }) => {
 
  return (
    <div className='w-full grid grid-cols-3 gap-5'>
      {getData.map((item, index) => {
        return (
          <article key={index} className="w-full h-full bg-white rounded-md p-5">
            <div className="relative w-full h-[230px] rounded-md overflow-hidden mb-7">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 py-1 px-2 rounded-full bg-white z-[99]">
                <span className="text-xs text-black font-medium cursor-default">{item.attributes?.category_id?.data.attributes?.name}</span>
              </div>
              <Image fill loading='lazy' src={'/assets/img/projects/nier.jpeg'} alt='Изображение проекта' className='w-full h-full object-cover object-top' />
            </div>
            <h3 className="text-lg font-medium mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores?</h3>
            <LoaderLink href={'/projects/' + 'web-project'} />
          </article>
        );
      })}
    </div>
  )
}

export default ProjectCard
