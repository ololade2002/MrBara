"use client"

import React from 'react'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import img from '../../public/h3-4.jpg'
import img2 from '../../public/h2-11.webp'
import img3 from '../../public/h2-1.webp'
import { Fade } from 'react-awesome-reveal';

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
   
  <div className='max-w-7xl mx-auto  p-[1.2rem] xs:p-[2rem] '>
    <Fade damping={0.4} cascade direction='up' >
  <h4 className='text-[16px] font-sand text-[#000] uppercase font-[500] tracking-[0.16rem] mb-3' >Our services</h4>
  <h2 className='text-[2.4rem] xs:text-[3rem] sm:text-[3.8rem] capitalize md:w-70% lg:w-[50%]  leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>
  <span className=''>we provide different types of</span> <span className='font-playfair text-[#4c4037]'> interior design.</span> </h2>
  </Fade>
   </div>

   <div className="overflow-hidden flex">
  <div className="overflow-hidden ">
  <div id="skills" ref={scroller} className=" flex overflow-x-hidden text-white w-[400vw] m-0  relative h-[100vh]">

  <section ref={skills}className="skill-set p-[1.2rem] xs:p-[2rem]  w-screen h-full bg-transparent ns-horizontal-section__item flex items-center  justify-start z-50">
  <div className='flex flex-col items-center lg:flex-row gap-4 xs:gap-6 lg:gap-12'>
  <Image src={img} alt="1st image"  className="w-full lg:w-6/12 h-auto lg:h-[500px] object-cover flex-1"/>
  <div className='flex-1 w-full lg:w-6/12'>
  <h2 className='text-[1.6rem] xs:text-4xl font-playfair font-[400] text-[#4c4037]'>Renovation and Remodelling</h2>
  <p className='text-[#000] font-sand text-[18px] xs:text-[18px] pt-1 xs:pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
  ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
  molestias officia. Rerum minus incidunt illum laudantium.</p>
  <p className='text-[#000] font-sand text-[18px] pt-1 sm:pt-4  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
  ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
  molestias officia. Rerum minus incidunt illum laudantium.</p>
  </div>
  </div>
  </section>

 <section ref={skills} className="skill-set p-[1.2rem] xs:p-[2rem] w-screen h-full bg-transparent ns-horizontal-section__item flex items-center justify-start z-50">
           
 <div className='flex flex-col items-center lg:flex-row gap-4 xs:gap-6 lg:gap-12'>
 <Image src={img2} alt="1st image"  className="w-full lg:w-6/12 h-auto lg:h-[500px] object-cover flex-1"/>
 <div className='flex-1 w-full lg:w-6/12'>
 <h2 className='text-[1.6rem] xs:text-4xl font-playfair font-[400] text-[#4c4037]'>Lighting Design</h2>
 <p className='text-[#000] font-sand text-[18px]  pt-1 xs:pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
 molestias officia. Rerum minus incidunt illum laudantium.</p>
 <p className='text-[#000] font-sand   text-[18px] pt-1 sm:pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
 molestias officia. Rerum minus incidunt illum laudantium.</p>
 </div>
 </div>
 </section>

 <section ref={skills} className="skill-set p-[1.2rem] xs:p-[2rem] w-screen h-full bg-transparent ns-horizontal-section__item flex justify-start items-center z-50">
 <div className='flex flex-col items-center lg:flex-row gap-4 xs:gap-6 lg:gap-12'>
 <Image src={img3} alt="1st image"  className="w-full lg:w-6/12 h-auto lg:h-[500px] object-cover flex-1"/>
 <div className='flex-1 w-full  lg:w-6/12'>
 <h2 className='text-[1.6rem] xs:text-4xl font-playfair font-[400] text-[#4c4037]'>Sustainable Design</h2>
 <p className='text-[#000] font-sand text-[18px] pt-1 xs:pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
 ab voluptas repellendus doloremque nobis quasi quibusdam pariatur temporibus alias, eos 
 molestias officia. Rerum minus incidunt illum laudantium.</p>
 <p className='text-[#000] font-sand  text-[18px] pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusamus magnam repudiandae
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