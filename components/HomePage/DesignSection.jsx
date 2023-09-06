"use client"

import React from 'react'
import { Fade } from "react-awesome-reveal";


const DesignSection = () => {
  return (
    <div className="designSection  mt-[3rem] gap-3 flex items-center justify-center p-[1.2rem] xs:p-[2rem]" id='' >

      <div className='flex gap-1 pb-6 flex-col items-center justify-center text-center'>

       <Fade cascade damping={0.5} delay={0.5} direction='up' >
       <p className='text-[16px] font-sand text-[#000] uppercase font-[500] leading-[2]  tracking-[0.16rem]'>ATLANTA BASED RESIDENTIAL DESIGN COMPANY</p>
      <h1 className='text-[2.1rem] px-1 xs:text-[3rem] sm:text-[3.8rem]   capitalize  leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>Our Design Approach & Philosophy</h1>
      <h4 className='text-[18px] font-[500] leading-7 mx-auto text-[#4c4037] font-sand w-[100%] md:w-[71%] pt-3 text-center '>To create a personal experience with each client. We take care of you not just during the design process,
       but help you to navigate throughout your renovation. Guiding you 
       through the design process to understand your specific functionality, needs, aesthetic and the overall vision of your dream home.</h4>
      
        </Fade>  
      
      </div>
      </div>
  )
}

export default DesignSection