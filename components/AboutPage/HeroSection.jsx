"use client"

import React from 'react'
import Image from 'next/image'
import brand1 from '../../public/b-1.png';
import brand2 from '../../public/b-2.png';
import brand3 from '../../public/b-3.png';
import brand4 from '../../public/b-4.png';
import { Fade } from 'react-awesome-reveal';

const HeroSection = () => {
  return (
 
  <div className='heroSection mt-12  mx-auto max-w-7xl p-[1.2rem] xs:p-[2rem]  mb-14'>
  <div className='flex flex-col lg:flex-row pt-[2rem]'>

  <div className='flex-1'>
    <Fade cascade direction='up' damping={0.5}>
  <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-2' >About Us</h4>
   <h1 className='text-[4rem] leading-[1.2]  pb-8 sm:text-8xl font-playfair font-[400] text-[#4c4037]'> <span className=''>25</span> years of experience</h1>
   </Fade>
   </div>

   <div className='flex-1'>
   <div className='flex flex-col gap-3 text-[18px] text-[#000] font-sand'>
   <h3>At Reykjavik, we are passionate about creating captivating and inspiring
   spaces the brings life and beauty into your everyday living. As a leading interior decor company,
   we’re here to help you create a space that reflects you and what you love.
   We’ll put it all together for you. Free one-on-one design help, in our store or in your home!</h3>

   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minus sit distinctio 
   expedita ea illo. Nesciunt, nam, provident ratione modi suscipit quam perferendis
   molestiae, autem dolorem officia odio ut.</h3>

   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minus sit distinctio 
   expedita ea illo. Nesciunt, nam, provident ratione modi suscipit quam perferendis
   molestiae, autem dolorem officia odio ut.</h3>   
   </div>

   <div className='brands flex flex-row mt-8'>
    <Image src={brand1} alt='brands' />
    <Image src={brand2} alt='brands' />
    <Image src={brand3} alt='brands' />
    <Image src={brand4} alt='brands' />
          
   </div>
   </div>

  </div>
 
  </div>

   

   
  )
}

export default HeroSection

