"use client"

import React from 'react'
import Image from 'next/image'
import img from '../../public/h3-1.jpg'
import { Fade } from 'react-awesome-reveal'


const Hero = () => {
  return (
   <div className='pt-6 sm:pt-10 pb-12 mb-6 bg-white'>
     <div className='max-w-7xl  mx-auto p-[1.2rem] sm:p-[2rem] '>
     
     <div className='flex flex-col items-center b border-[#e1d8d1] border-b '>
      <Fade cascade damping={0.5} direction='up'  >
     <p className='text-[16px] font-sand text-center text-[#000] uppercase font-[500] leading-[2]  tracking-[0.16rem]'>OUR EXPERIENCE & KNOWLEDGE IN THE DESIGN INDUSTRY IS KEY IN</p>
     <h1 className='text-[2.3rem] px-1 text-center sm:text-[3.5rem]   capitalize mb-8 leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>Helping On Your New Home Renovation</h1>
     </Fade>
     </div>

      <div className='flex mt-12 flex-col items-center lg:flex-row gap-16'>
      <div className='w-full lg:w-6/12'>
      <p className='text-[18px] font-[500]  leading-7 text-[#000] font-sand w-[100%]  '>Reykjavik offers complete design services for your interior design project. 
       We offer onsite design project management throughout the construction
       process if you feel that you need that extra help navigating the 
       decisions and changes that always happen during a renovation project.
       Don’t worry – We will be with you every step of the way.</p>

      <ul className='list-disc list-inside ml-4 sm:ml-6 text-[18px] py-5 font-[500] leading-7 text-[#000] font-sand w-[100%] '>
        <li>RENDERED 3D CONCEPT DESIGNS</li>
        <li>FINAL CONSTRUCTION DRAWINGS</li>
        <li>COLOUR COORDINATIONS</li>
        <li>SELECTION OF MATERIAL/PRODUCTS</li>
      </ul>

      <p className='text-[18px] font-[500] leading-7 text-[#000] font-sand w-[100%] '>Does this sound like something that would make your 
      renovation process easier? YES! We can’t wait to hear
      about how we can work together on your project. </p>
      </div>

      <div className='w-full lg:w-6/12'>
      <Image className='h-[500px] object-cover' src={img} alt='img' />
      </div>

      </div>

    </div>
   </div>
  )
}

export default Hero