"use client"

import { portfolioData } from '@/utils/utils';
import ProjectCard from './ProjectCard'
import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";



const ProjectSection = () => {
const firstTwo = portfolioData.slice(0,3);

  return (
    <div className="project">
     <div className='max-w-7xl  mx-auto p-[1.2rem] xs:p-[2rem]'>
      <Fade cascade direction='up' damping={0.5}>
     <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-2' >Portfolio</h4>
     <div className="flex flex-col md:flex-row justify-between items-left md:items-center">
     <h2 className='text-[2.3rem] xs:text-[3rem] sm:text-[3.8rem]  lg:w-[50%]  leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>
     Our Favorite Project  </h2>

     <Link href="/portfolio" className=" f-btn w-auto mt-[0.7rem] md:mt-0 px-5 py-1.5 text-[17px] font-[300] uppercase font-sand overflow-hidden group bg-[#4c4037] relative hover:bg-gradient-to-r hover:from-[#4c4037] hover:to-[#4c4037] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4c4037] transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative uppercase">View More</span>
    </Link> 
  
     </div>
     </Fade> 
      </div>

    <div className="projectSection max-w-7xl mt-4 mb-16 mx-auto px-[1.2rem] xs:px-[2rem]">
       <div className='projectCard flex flex-col md:grid md:grid-cols-3 gap-6  '>
       {firstTwo.map((portfolio) => (
      <Link className='card-a flex flex-col gap-6 space-y-6  lg:gap-0 lg:flex-row items-end flex-wrap justify-between lg:justify-between' href={`/portfolio/${portfolio.id}`} >
       <ProjectCard key={portfolio.id} {...portfolio} />
      </Link>
     ))}
       </div>
      </div>

     </div>
   
  )
}

export default ProjectSection