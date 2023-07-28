"use client"

import { testimonialData } from '@/utils/utils';
import React, { useState } from 'react';
import Image from 'next/image';
import larrow from '../../public/left arrow.svg';
import rarrow from '../../public/right arrow.svg';



const Testimonial = () => {
const [select,setSelect] = useState(0);
const tLength = testimonialData.length;


  return (
   <div className="testimonial max-w-7xl  mx-auto p-[2rem] ">

      <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-2' >Testimonials</h4>
     <h2 className='text-[3.8rem]  w-[50%] leading-[4.5rem] font-normal font-playfair capitalize text-[#000]'>
      <span className=''>See what our awesome</span>  <span className='font-playfair text-[#4c4037]'>clients say</span> </h2>

    <div className="testimonial-body w-full lg:w-8/12 mx-auto mt-8 mb-8 flex flex-col items-start  ">
    <h2 className='text-[28px] text-[#000] font-sand font-[500] capitalize pb-2'>"{testimonialData[select].title}"</h2>
    <p className='text-[18px] font-[500] leading-7 text-[#4c4037] font-sand  text-left pb-5'>{testimonialData[select].text}</p>

     <div className="redd flex flex-row gap-6 items-center justify-center">
     <Image className='w-24 h-24 rounded-lg object-cover  ' src={testimonialData[select].img} alt='img'/> 
     <div className='flex flex-col'>
        <h4 className=' text-[24px] text-[#000]'>{testimonialData[select].name}</h4>
        <p className='uppercase text-[16px] -mt-2 font-sand font-[600] text-[#392e26]'>{testimonialData[select].location}</p>
    </div> 
    </div>   

     

    </div>

      {/*Arrow */}

      <div className="arrow relative z-10 gap-3 -translate-y-10 flex text-white  justify-end mr-[5rem] ">
   <Image src={larrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full  '  onClick={() => {
    select === 0 ? setSelect(tLength - 1) : setSelect((prev) => prev - 1)
   }} />
  
   <Image src={rarrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full' onClick={() => {
    select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1)
   }} />
    </div>
    
   </div>
  )
}

export default Testimonial