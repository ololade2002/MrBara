
"use client"

import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { Parallax } from 'react-parallax'


const Hero = () => {




  return (
    
     <Parallax className='object-cover' bgImage='/h3-11.webp' strength={270}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
    <div style={{ height: 640 }}>
    <div className=" heroTextView absolute z-10">
    <div className="heroText-1 flex  flex-col lg:items-center items-center mx-auto max-w-7xl p-[1.2rem] xs:p-[2rem]  ">
      <Fade cascade damping={0.5} direction='up'>
    <p className='text-shadow pb-5 font-sand font-[400] text-[#fff] text-[16px] sm:text-[18px] leading-[1.9rem] tracking-widest sm:tracking-[0.2rem] mx-auto text-center lg:w-[100%] w-[100%] '>OUR MAIN MISSION IS TO HELP YOU</p>
    <h2 className=' text-shadow w-[100%] sm:w-[70%]  font-playfair text-[#fff] font-[500]  lg:text-7xl sm:text-[3rem] text-[2.6rem] leading-[3.6rem] mx-auto sm:leading-[4rem] sm:tracking-[0.06rem] text-center pb-2 sm:pb-6'>Design The Home Of Your Dreams</h2>

    <Link href='/services' className='px-6 py-3 text-[20px] text-[#fff] font-sand  bg-stone-900 hover:opacity-90 mt-2  tracking-[0.06rem] font-[300] uppercase ' > Explore  </Link>
    </Fade>
    
    </div>
    </div>
    </div>
  </Parallax>
   

  )
}

export default Hero