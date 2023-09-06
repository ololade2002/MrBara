
"use client"

import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { Parallax } from 'react-parallax'



const HeaderSection = () => {
  return (
   
    <Parallax className='object-cover' bgImage='/blog1.jpg' strength={270}>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    <div style={{ height: 600 }}>
    <div className=" heroTextView absolute z-10">
    <div className="heroText-1 flex mt-12  flex-col lg:items-center items-center mx-auto max-w-7xl p-[1.2rem] xs:p-[2rem]  ">
      <Fade cascade damping={0.5} direction='up'>
    <h2 className='  pb-4 w-[100%] sm:w-[100%]  font-playfair text-[#fff] font-[400]  lg:text-7xl sm:text-[3rem] text-[2.6rem] leading-[3.6rem] sm:leading-[4rem] sm:tracking-[0.06rem] text-center  sm:pb-8'>CONTACT US</h2>
   
    <div className='flex sm:flex-row flex-col gap-6 mb-8'>
      <div className='flex flex-row items-center gap-1 text-[18px] text-[#fff] font-sand font-[300]  '>
        <AiOutlineMail className='w-7 h-7'/>
        <p>Reykjavik@gmail.com</p>
      </div>

      <div className='flex flex-row items-center gap-1 text-[18px] text-[#fff] font-sand font-[300]  '>
        <AiOutlinePhone className='w-7 h-7'/>
        <p>Call Us At <span className='underline'>562-357-1258</span> </p>
      </div>
    </div>
   
    <p className=' mb-7 font-sand font-[300] mx-auto text-[#fff] text-[16px] sm:text-[18px] leading-[1.9rem]  text-center lg:w-[88%] w-[100%] '>Please contact us for information on our interior design & decorating services or if you would like to schedule a discovery call
     to discuss your design project in more detail. We look forward to having the opportunity to work with you on your project.</p>
    </Fade>
    </div>

    </div>
    </div>
  </Parallax>

  )
}

export default HeaderSection

