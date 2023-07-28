"use client"

import React from 'react'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import img from '../../public/h1-1.jpg'
import img2 from '../../public/h2-11.webp'
import img3 from '../../public/h2-1.webp'

gsap.registerPlugin(ScrollTrigger);


const ProvideSection = () => {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);



  return (
   <div className='provide '>
   
   <div className='max-w-7xl mx-auto p-[2rem] '>
  
  

   <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-1' >Our services</h4>
    <h2 className='text-[3.8rem] capitalize w-[50%] leading-[4.5rem] font-normal font-playfair text-[#000]'>
    <span className=''>we provide different types of</span> <span className='font-playfair text-[#4c4037]'> intertior design.</span> </h2>

   </div>

   <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div id="skills" ref={scroller} className=" flex overflow-x-hidden text-white w-[400vw] m-0   relative h-[95vh]">

          <section ref={skills}className="skill-set  w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50">

           <div className='flex flex-col items-center sm:flex-row gap-12'>
           <Image src={img} alt="1st image"  className=" w-6/12 h-[400px] flex-1"/>
            <div className='flex-1 w-6/12'>
              <h2 className='text-4xl font-playfair font-[400] text-[#000]'>Renovation and Remodelling</h2>
              <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
                 <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
            </div>
           </div>

          </section>

          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50">
           
           <div className='flex flex-col items-center sm:flex-row gap-12'>
           <Image src={img2} alt="1st image"  className=" w-6/12 h-[400px] flex-1"/>
            <div className='flex-1 w-6/12'>
              <h2 className='text-4xl font-playfair font-[400] text-[#000]'>Lighting Design</h2>
              <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
                 <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
            </div>
           </div>


          </section>

          <section
            ref={skills}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >

           <div className='flex flex-col items-center sm:flex-row gap-12'>
           <Image src={img3} alt="1st image"  className=" w-6/12 h-[400px] flex-1"/>
            <div className='flex-1 w-6/12'>
              <h2 className='text-4xl font-playfair font-[400] text-[#000]'>Sustainable Design</h2>
              <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
                 <p className='text-[#4c4037] font-sand text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
                 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
                 molestias officia. Rerum minus incidunt illum laudantium.</p>
            </div>
           </div>

          
          </section>
        </div>
      </div>
    </div>
  

   </div>
  )
}

export default ProvideSection