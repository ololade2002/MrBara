"use client"

import Link from 'next/link';
import React from 'react'
import { Parallax } from 'react-parallax'

const Newsletter = () => {
  const insideStyles = {
    background: "white",

    position: "absolute",
    top: "50%",
    left:'50%',
    
    transform: "translate(-50%,-50%)",
  
  };

  return (
    <Parallax bgImage='./h3-1.jpg' strength={300}>
    <div style={{ height: 580 }}>
      <div className=' py-8 md:px-12 px-2 md:w-[70%] w-[95%]' style={insideStyles}>
       <div className='flex flex-col items-center justify-center py-6 '>
      
       <p className='font-sand  text-[#000] text-[16px] sm:text-[18px] w leading-[1.9rem] tracking-widest sm:tracking-[0rem] text-center  w-[100%] pb-0'>WHEN IT COMES TO ANY DESIGN PROJECT, IT&apos;S GOING TO BE OVERWHELMING.</p>
        <h2 className='w-[100%]  pt-[1rem] md:pt-0 pb-[1.2rem] font-playfair text-[#000] font-[400] w lg:text-[2.7rem] sm:text-[2.5rem] text-[2.3rem] leading-[3rem] sm:leading-[4rem] sm:tracking-[0rem] text-center  sm:pb-5' >That Is Why We are Here To Help!</h2>
       <Link href='/contact'>
       <button className='bg-[#4c4037] mt-2 uppercase text-center mx-auto hover:opacity-90 text-[#fff] py-2 px-6 text-[16px] font-sand font-[400]'>Send us an inquiry</button>
      
       </Link>
       </div>
      </div>
    </div>
  </Parallax>
  )
}

export default Newsletter