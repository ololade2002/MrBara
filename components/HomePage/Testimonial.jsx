"use client"

import { testimonialData } from '@/utils/utils';
import React, { useState } from 'react';
import Image from 'next/image';
import larrow from '../../public/left arrow.svg';
import rarrow from '../../public/right arrow.svg';
import img1 from '../../public/h3-1.jpg'
import img2 from '../../public/h3-7.jpg'
import img3 from '../../public/h3-8.jpg'
import { FaStar } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';


const Testimonial = () => {
const [select,setSelect] = useState(0);
const tLength = testimonialData.length;


  return (
<div  className=''>
<div className="testimonial max-w-7xl   mx-auto  p-[1.2rem] xs:p-[2rem] ">

<Fade cascade direction='up' damping={0.5}>
<h4 className='text-[16px] font-sand pt-6 text-[#000] uppercase font-[500] tracking-[0.16rem] -mb-2' >Testimonials</h4>
<h2 className='text-[2.4rem] xs:text-[3rem] sm:text-[3.8rem]  lg:w-[50%] capitalize  leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>
<span className=''>See what our awesome</span>  <span className='font-playfair text-[#4c4037]'>clients say</span> </h2>
</Fade>

<div className="testimonial-body mt-16 mb-8 items-center gap-10 flex flex-col lg:flex-row">

<div className='grid h-[400px] grid-cols-4 gap-5 grid-rows-4 w-full lg:w-6/12'>
 <div className='row-span-4 col-span-2  '>
 <Image className=' h-[100%] object-cover rounded-tl-[6rem] rounded-br-[6rem] p ' src={img1} alt='image' />
 </div>
 <div className='col-span-2 row-span-2'>
 <Image className='h-[100%] object-cover rounded-tl-[6rem]' src={img2} alt='image' />
 </div>
 <div className='col-span-2 row-span-2'>
 <Image className='h-[100%] object-cover rounded-tr-[6rem]' src={img3} alt='image' />
 </div>
</div>

<div className='w-full lg:w-6/12'>
<div className=" w-full  mx-auto  lg:w-10/12 flex flex-col items-start  ">
  <Fade direction='up' cascade damping={0.2}>
 <div className='flex flex-row gap-2 mb-3'>
  <FaStar className='h-5 w-5 text-yellow-500'/>
  <FaStar className='h-5 w-5 text-yellow-500'/>
  <FaStar className='h-5 w-5 text-yellow-500'/>
  <FaStar className='h-5 w-5 text-yellow-500'/>
  <FaStar className='h-5 w-5 text-yellow-500'/>
 </div>

<p className='text-[18px] font-[500] leading-7 text-[#4c4037] font-sand  text-left pb-5'>{testimonialData[select].text}</p>

<div className="redd flex flex-row  gap-3 items-center justify-center">
<Image className='w-16 h-16 rounded-full object-cover  ' src={testimonialData[select].img} alt='img'/> 
<div className='flex flex-col'>
  <h4 className=' text-[22px] font-sand font-[500] text-[#000]'>{testimonialData[select].name}</h4>
  <p className='uppercase text-[17px] -mt-3 font-sand font-[500]  text-[#554131]'>{testimonialData[select].location}</p>
</div> 
</div>   

</Fade>
</div>
</div>
</div>

{/*Arrow */}

<div className="arrow relative z-10 gap-3 sm:-translate-y-10 -translate-y-8 flex text-white  justify-end mr-[5rem] ">
<Image src={larrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full  ' alt='img1' onClick={() => {
select === 0 ? setSelect(tLength - 1) : setSelect((prev) => prev - 1)
}} />

<Image src={rarrow} className='h-12 w-12 p-2 hover:bg-[#e5d9cf] rounded-full' alt='img2' onClick={() => {
select === tLength - 1 ? setSelect(0) : setSelect((prev) => prev + 1)
}} />
</div>

</div>
   </div>
  )
}

export default Testimonial