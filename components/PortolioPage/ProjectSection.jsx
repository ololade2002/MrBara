


import { portfolioData } from '@/utils/utils';
import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

const ProjectSection = () => {
  return (
    <div className="projectSection max-w-7xl mt-12 mb-16 mx-auto px-[1.2rem] xs:px-[2rem]">
    <div className='projectCard flex flex-col md:grid md:grid-cols-3 gap-6 '>
   
    {portfolioData.map((portfolio) => (
    <Link className='card-a card-af flex flex-col gap-8 space-y-6  lg:gap-0 lg:flex-row items-end flex-wrap justify-between lg:justify-between' href={`/portfolio/${portfolio.id}`} >
      <ProjectCard key={portfolio.id} {...portfolio} />
    </Link>
  ))}
    
    </div>
   </div>
  )
}

export default ProjectSection


