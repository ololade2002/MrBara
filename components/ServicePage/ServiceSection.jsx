"use client"

import Image from 'next/image'
import React from 'react'
import img from '../../public/h2-6.webp'
import { BsArrowRight } from 'react-icons/bs'
import img1 from '../../public/architecture.jpg'
import img2 from '../../public/design.jpg'
import img3 from '../../public/shop.jpg'
import img4 from '../../public/project.jpg'
import { Fade } from 'react-awesome-reveal'

const ServiceSection = () => {
  return (
    <div id='service' className="service  max-w-7xl p-[1.2rem] xs:p-[2rem] pb-12  mx-auto">
    
    <div className='flex flex-col items-center '>
     <Fade cascade damping={0.5} direction='up'>\
     <h1 className='text-[2.3rem] px-1  sm:text-[3.8rem] sm:text-center text-left  capitalize mb-2 leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>Explore Our Design Service</h1>
     <p className='text-[18px] w-[100%] lg:w-[78%] mx-auto font-sand text-[#000] sm:text-center text-left font-[500]  '>We feel the design process should be exciting, fun, and most -importantly, stress-free! That
      is what we hope to achieve when we work with you on your next design project! Reykjavik takes the time to listen and understand our clients.</p>
      </Fade>
     </div>
     
     <div className='flex flex-col mt-8 items-center justify-center flex-wrap md:flex-row gap-7 md:gap-12 py-8'>

     <div className='w-full md:w-[40%] xl:w-[30%] '>
     <div className='w-[100%] h-[80%] relative overflow-hidden '>
     <Image className='h-[350px] object-cover hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img1} alt='img'/>
     </div>
     <div className='flex flex-row gap-1 '>
     <h2 className='counter-main w-9/12 hover:opacity-90'>Architectural Services</h2>
     <div className='w-3/12 bg-[#eae5e0] flex items-center justify-center hover:opacity-90 '>
       <BsArrowRight className='text-[#000] text-[26px] hover:opacity-80 '/></div>
     </div>
     </div>

     <div className=' w-full md:w-[40%] xl:w-[30%]'>
     <div className='w-[100%] h-[80%] relative overflow-hidden '>
     <Image className='h-[350px] object-cover hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img2} alt='img'/>
     </div>
     <div className='flex flex-row gap-1 '>
     <h2 className='counter-main w-9/12 hover:opacity-90'>Design Consultaions</h2>
     <div className='w-3/12 bg-[#eae5e0] flex items-center justify-center hover:opacity-90 '>
       <BsArrowRight className='text-[#000] text-[26px] hover:opacity-80 '/></div>
     </div>
     </div>

     <div className=' w-full md:w-[40%] xl:w-[30%]'>
     <div className='w-[100%] h-[80%] relative overflow-hidden '>
     <Image className='h-[350px] object-cover hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img} alt='img'/>
     </div>
     <div className='flex flex-row gap-1 '>
     <h2 className='counter-main w-9/12 hover:opacity-90'>Interior Design</h2>
     <div className='w-3/12 bg-[#eae5e0] flex items-center justify-center hover:opacity-90 '>
       <BsArrowRight className='text-[#000] text-[26px] hover:opacity-80 '/></div>
     </div>
    </div>

    <div className=' w-full md:w-[40%] xl:w-[30%]'>
    <div className='w-[100%] h-[80%] relative overflow-hidden '>
     <Image className='h-[350px] object-cover hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img3} alt='img'/>
     </div>
     <div className='flex flex-row gap-1 '>
     <h2 className='counter-main w-9/12 hover:opacity-90'>Shopping Assistance</h2>
     <div className='w-3/12 bg-[#eae5e0] flex items-center justify-center hover:opacity-90 '>
       <BsArrowRight className='text-[#000] text-[26px] hover:opacity-80 '/></div>
     </div>
    </div>

    <div className=' w-full md:w-[40%] xl:w-[30%]'>
    <div className='w-[100%] h-[80%] relative overflow-hidden '>
     <Image className='h-[350px] object-cover hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={img4} alt='img'/>
     </div>
     <div className='flex flex-row gap-1 '>
     <h2 className='counter-main w-9/12 hover:opacity-90'>Project Management</h2>
     <div className='w-3/12 bg-[#eae5e0] flex items-center justify-center hover:opacity-90 '>
       <BsArrowRight className='text-[#000] text-[26px] hover:opacity-80 '/></div>
     </div>
    </div>
       
     </div>
   </div>
  )
}

export default ServiceSection