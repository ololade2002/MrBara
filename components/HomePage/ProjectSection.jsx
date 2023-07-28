

import Image from 'next/image';
import React from 'react';
import img1 from '../../public/h1-13.webp';
import img2 from '../../public/h2-5.webp';
import img3 from '../../public/h1-14.webp';
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';


const ProjectSection = () => {
  return (
    <div className="projectSection max-w-7xl  mx-auto p-[2rem]">
      <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-2' >Portfolio</h4>
     <h2 className='text-[3.8rem]  w-[50%] leading-[4.5rem] font-normal font-playfair text-[#000]'>
      <span className=''>Check Out Some</span> Of Our <span className='font-playfair text-[#4c4037]'>Selected Projects.</span> </h2>

       <div className="project-body my-20 flex flex-col gap-24">

       <div className="first flex flex-row items-center gap-12">
       <div className='w-6/12'>
        <h5 className='counter-sub'>01</h5>
        <h1 className='font-[600] text-[30px] uppercase py-3 font-sand text-[#000]'>Cascade High Flats</h1>
        <p className='text-[#4c4037] opacity-90 leading-normal font-sand font-[500] text-[18px] pb-2 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing 
          praesent velit viverra sit semper lorem eu cursus vel hendrerit  elementum morbi curabitur 
          etiam nibh justo, lorem aliquet donec sed similem lorem ipsum dolor.</p>
          <Link href='/portfolio/delta' >
          <button  className='line  text-[18px] opacity-90 text-[#4c4037] font-sand font-[500] my-2 flex flex-row gap-2 items-center'>View More   </button>
          </Link>
       </div>
       
       <div className='w-6/12 relative h-[450px] overflow-hidden'>
       <Link className='' href='/portfolio/delta'>
        <Image className=' object-cover hover:scale-110 transition duration-[1.6s] cursor-pointer ' src={img1} alt='img' />
        </Link>
       </div>
       </div>

       <div className="second flex flex-row-reverse items-center gap-12">
       <div className='w-6/12'>
        <h5 className='counter-sub'>02</h5>
        <h1 className='font-[500] text-[35px] uppercase py-4 font-sand text-[#000]'>Smith's Residence</h1>
        <p className='text-[#000] leading-normal font-sand font-normal text-[18px] pb-2 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing 
          praesent velit viverra sit semper lorem eu cursus vel hendrerit  elementum morbi curabitur 
          etiam nibh justo, lorem aliquet donec sed similem lorem ipsum dolor.</p>
          <Link href='/portfolio/loridans' >
          <button  className='line text-[18px] text-[#000] font-sand font-[500] my-2 flex flex-row gap-2 items-center'>View More  <BsArrowRight/> </button>
          </Link>
      
       </div>
       <div className='w-6/12 relative h-[450px] overflow-hidden'>
       <Link href='/portfolio/loridans'>
       <Image className=' object-cover  hover:scale-110 transition duration-[1.6s] cursor-pointer ' src={img2} alt='img' />
       </Link>
       </div>
       </div>

       <div className="third flex flex-row items-center gap-12">
       <div className='w-6/12'>
        <h5 className='counter-sub'>03</h5>
        <h1 className='font-[500] text-[35px] uppercase py-4 font-sand text-[#000]'>La-Noxe Lounge</h1>
        <p className='text-[#000] leading-normal font-sand font-normal text-[18px] pb-2 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing 
          praesent velit viverra sit semper lorem eu cursus vel hendrerit  elementum morbi curabitur 
          etiam nibh justo, lorem aliquet donec sed similem lorem ipsum dolor.</p>
          <Link href='/portfolio/lanoxe' >
          <button  className='line text-[18px] text-[#000] font-sand font-[500] my-2 flex flex-row gap-2 items-center'>View More  <BsArrowRight/> </button>
          </Link>
       </div>

       <div className='w-6/12 relative h-[450px] overflow-hidden'>
       <Link href='/portfolio/lanoxe' >
       <Image className=' object-cover  hover:scale-110 transition duration-[1.6s] cursor-pointer ' src={img3} alt='img' />
       </Link>
       </div>
       </div>    
        
      
       </div>
    </div>
  )
}

export default ProjectSection