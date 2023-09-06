

"use client"

import { DesignData } from '@/utils/utils';
import React, { useState } from 'react';
import Image from 'next/image';
import larrow from '../../public/left arrow.svg';
import rarrow from '../../public/right arrow.svg';
import { Fade } from 'react-awesome-reveal';

const DesignSection = () => {
    const [select,setSelect] = useState(0);
    const tLength = DesignData.length;

  return (
    <div className='pb-[5rem]'>
    <div className='max-w-7xl mx-auto  px-[1.2rem] sm:px-[2rem] '>

    <div className='flex flex-col items-center mb-12 '>
      <Fade cascade damping={0.5} direction='up'>
     <h1 className='text-[2.2rem] px-1  sm:text-[3.6rem] sm:text-center text-left   capitalize mb-2 leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>Personalized Design Process</h1>
     <p className='text-[18px] w-[100%] lg:w-[100%] text-left sm:text-center font-sand text-[#000]  font-[500]  '>We Have Created a Personalized 10-Step Design Process</p>
     </Fade>
     </div>   
      
    <div className='flex flex-col-reverse gap-6 items-center lg:flex-row'>
    <div className='w-full lg:w-6/12'>
    <Image className='h-[400px] lg:h-[100vh] object-cover' src={DesignData[select].img} alt='image' />
    </div>

    <div className='w-full bg-white  lg:w-6/12 '>
        
        <div className='bg-[#fff] py-4 border border-b-2'>
        <h1 className='text-[#000] font-sand font-[500] text-center text-[25px]'>{DesignData[select].theme}</h1>
        </div>

       <div className='flex flex-col py-8 px-2 sm:px-8 gap-6'>
       <div>
        <div  className='flex gap-2 pb-1 flex-row'>
        <h2  className='text-[1.6rem] sm:text-[1.8rem]  font-[400] text-[#000]  font-sand'>{DesignData[select].n1}</h2>
        <span  className='text-[1.6rem] sm:text-[1.8rem]  font-[400] text-[#000]  font-sand' >-</span>
        <h2 className='text-[1.6rem]  sm:text-[1.8rem] font-[400] text-[#000] font-sand'>{DesignData[select].title}</h2>
        </div>
        <p className='font-sand font-[400] text-[#4c4037] text-[18px]  '>{DesignData[select].text}</p>
       </div>

       <div>
        <div  className='flex gap-2 pb-1 flex-row'>
        <h2  className='text-[1.6rem] sm:text-[1.8rem]  font-[400] text-[#000]  font-sand'>{DesignData[select].n2}</h2>
        <span  className='text-[1.6rem] sm:text-[1.8rem]  font-[400] text-[#000]  font-sand' >-</span>
        <h2 className='text-[1.6rem] sm:text-[1.8rem] font-[400] text-[#000] font-sand'>{DesignData[select].title1}</h2>
        </div>
        <p className='font-sand font-[400] text-[#4c4037] text-[18px]  '>{DesignData[select].text1}</p>
       </div>

       <div className="arrow relative z-10 gap-3 -translate-y-2 flex text-white  justify-end mr-[0rem] ">
   <Image src={larrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full  ' alt='img1' onClick={() => {
    select === 0 ? setSelect(tLength - 1) : setSelect((prev) => prev - 1)
   }} />
  
   <Image src={rarrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full' alt='img2' onClick={() => {
    select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1)
   }} />
    </div>

       </div>
    </div>
    </div>

      

  

    </div>
    </div>
  )
}

export default DesignSection