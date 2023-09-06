"use client"

import Image from 'next/image'
import img from '../../public/team5.jpg'
import React from 'react'
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className='different mb-[2rem]'>
    <div className='max-w-7xl flex flex-col mb-10 mt-4 sm:my-16  items-center gap-14 lg:flex-row  mx-auto p-[1.2rem] xs:p-[2rem]'>
     
    <div className='flex-1 w-full lg:w-6/12 '>
      <Fade cascade direction='up' damping={0.2} >
      <p className='text-[#000] pb-3 leading-normal tracking-[0.1rem] font-sand font-[500] text-[16px] xs:text-[16px]  w-[100%] '>WHAT MAKES US DIFFERENT</p>
      
      <div className='border-b border-[#eae5e0] '>
      <h2 className='font-[300] text-[25px] sm:text-[32px]  py-1.5 sm:py-3 font-playfair text-[#4c4037]'>Our Experience</h2>
      <p className='text-[#4c4037] mb-4 lint leading-normal pb-2 font-sand font-[500] text-[16px] xs:text-[18px]  w-[100%]'>We have over 20 years of experience within the interior design and 
        decorating industry, approaching each project with enthusiasm and professionalism.</p>
      </div>

      <div className='border-b mt-4 border-[#eae5e0]'>
      <h2  className='font-[300] text-[25px] sm:text-[32px]  py-1.5 sm:py-3 font-playfair text-[#4c4037]'>Client Satisfaction</h2>
      <p className='text-[#4c4037] mb-4  leading-normal font-sand font-[500] text-[16px] xs:text-[18px]  w-[100%]'>Our custom interior design services are offered at competitive pricing
         while ensuring client satisfaction.</p>
      </div>

      <div className='border-b mt-4 border-[#eae5e0]'>
      <h2  className='font-[300] text-[25px] sm:text-[32px]  py-1.5 sm:py-3 font-playfair text-[#4c4037]'>Personalized Process</h2>
      <p className='text-[#4c4037] mb-4 leading-normal font-sand font-[500] text-[16px] xs:text-[18px]  w-[100%]'>We take pride to effectively communicate and understand the unique needs
         of each client throughout the design & renovation process</p>
      </div>
     
      </Fade>
    </div>

    <div className='flex-1 w-full lg:w-6/12'>
      <Image src={img} className='h-[520px] object-cover' alt='img' />
    </div>

    </div>
    </div>
  )
}

export default HeroSection