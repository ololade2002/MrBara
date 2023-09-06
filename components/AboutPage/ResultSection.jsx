"use client"

import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ResultSection = () => {
  return (
   <div className="ResultSection mx-auto max-w-7xl mt-10 px-[1.2rem] xs:p-[2rem]">

    <div className='flex flex-col lg:flex-row gap-12 items-center py-8'>
    <div className='flex-1'>
        <h1 className='text-[2.4rem] text-[#4c4037]  xs:text-[3rem] sm:text-[3.5rem] leading-[4rem] font-[500] font-playfair capitalize'>We have impactful results</h1>
        <p className='font-sand text-[18px] pt-5 w-full lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in 
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
            dolor interdum nulla, ut commodo diam.</p>
    </div>

    <div className='flex-1 flex flex-row items-center justify-center gap-12'>
   <Fade cascade damping={0.3} direction='up'>
   <div className='flex-col flex justify-center gap-10'>
   <div>
        <h2 className='font-poppins text-5xl font-[500]  text-[#4c4037] text-center'>800+</h2>
        <p className='font-sand text-[16px] xs:text-[18px]'>Successful Projects</p>
     </div>
     <div>
        <h2  className='font-poppins text-center text-5xl text-[#4c4037] font-[500]'>25+</h2>
        <p className='font-sand text-[16px] xs:text-[18px]'>Years of experience</p>
     </div>
   </div>


   <div className='flex-col flex justify-center gap-10'>
   <div>
        <h2  className='font-poppins text-center text-5xl  text-[#4c4037] font-[500]'>100%</h2>
        <p className='font-sand text-[16px] xs:text-[18px]' >Satisfaction Rate</p>
     </div>
     <div>
        <h2  className='font-poppins text-center text-5xl text-[#4c4037] font-[500]'>40+</h2>
        <p className='font-sand text-[16px] xs:text-[18px]' >Team Members</p>
     </div>
   </div>
    
   </Fade>
    </div>

    </div>
   </div>
  )
}

export default ResultSection