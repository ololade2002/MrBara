"use client"


import React from 'react'
import { Parallax } from 'react-parallax'
import { BsSearch } from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'

const HeaderSection = () => {


  return (


    <Parallax className='object-cover' bgImage='/decor.jpg' strength={-170}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    <div style={{ height: 600 }}>
    <div className=" heroTextView absolute z-10">
    <div className="heroText-1 flex mt-12  flex-col lg:items-center items-center mx-auto max-w-7xl p-[1.2rem] xs:p-[2rem]  ">
     <Fade cascade damping={0.5} direction='up'>
    <p className=' mb-7 font-sand font-[300] text-[#fff] text-[16px] sm:text-[18px] leading-[1.9rem] tracking-widest sm:tracking-[0.2rem] text-center lg:w-[100%] mx-auto w-[100%] '>RESIDENTIAL DESIGN COMPANY LOCATED IN ATLANTA, USA</p>
    <h2 className='  pb-4 w-[100%] sm:w-[100%]  font-playfair text-[#fff] font-[300]  lg:text-7xl sm:text-[3rem] text-[2.6rem] leading-[3.6rem] sm:leading-[4rem] sm:tracking-[0.06rem] text-center  sm:pb-8'>WELCOME TO THE BLOG</h2>
    
  <div className="relative mt-5">
  <input type="text" class="pl-3 pr-3 py-3   placeholder:text-[#616060]  rounded-sm  w-72 focus:outline-none text-black focus:ring-2 focus:ring-[#616060] " placeholder="Search And Enter"/>
  <div class="absolute inset-y-0 right-0 pr-5 flex items-center">
   <BsSearch  className='text-[#616060]'/>
  </div>
  </div>

  </Fade>
    </div>
    </div>
    </div>
  </Parallax>

   
  
  )
}

export default HeaderSection