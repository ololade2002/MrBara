"use client"

import Image from 'next/image'
import React from 'react'
import img from '../../public/h1-11.webp'
import { Fade } from 'react-awesome-reveal'


const HeaderSection = () => {
  return (
    <div className='HeaderSection  mx-auto '>

    <div className='flex  flex-col pb-8 sm:pb-0 lg:flex-row gap-12 items-center '>
    <div className=''>
      <Image className='object-cover h-[100vh] ' src={img} alt='image' />
    </div>

    <div className='px-[1.2rem] sm:px-[2rem]'>
      <Fade cascade damping={0.5} direction='up'>
      <p className=' mb-2 font-sand font-[500] text-[#000] text-[18px] leading-[1.9rem] tracking-widest sm:tracking-[0.2rem]  w-[100%] '>OTTAWA INTERIOR DESIGN</p>
      <h1 className='  w-[100%] sm:w-[100%]  font-playfair text-[#4c4037] font-[400]  lg:text-[2.7rem] sm:text-[2.5rem] text-[2.6rem] leading-[3rem] sm:leading-[3.2rem] pb-8 sm:pb-8' >Need Help Planning A Main Floor Renovation Or Home Redesign?</h1>
      <h4 className='text-[18px] font-[500] leading-7 text-[#000] font-sand w-[100%] -mt-[1rem] '>Our team is committed to offering you the highest quality of interior design 
        and decorating services to ensure you have a well-organized and planned successful
        renovation project with stunning end results. Reykjavik offers complete 
        design services for your interior design project.</h4>
        </Fade>
  
    </div>
    </div>
    </div>
  )
}

export default HeaderSection