"use client"


import React from 'react'
import { portfolioData } from '@/utils/utils'
import Image from 'next/image'
import { Parallax } from 'react-parallax'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'


const PortfolioDetails = ({params}) => {
const selectedPortfolio = portfolioData.find((portfolio) => portfolio.id === params.slug ) 


  return (
   <div  className="portfolioDetails  ">

    
 <Parallax className='object-cover' bgImage='/h3-1.jpg' strength={170}>
    <div className="absolute top-0  left-0 w-full h-full b bg-stone-700 opacity-80"></div>
    <div style={{ height: 600 }}>
    <div className=" heroTextView absolute z-10">
    <div className="heroText-1 flex mt-12  flex-col lg:items-center items-center mx-auto max-w-7xl p-[1.2rem] xs:p-[2rem]  ">
      <Fade cascade damping={0.5} direction='up'>
    <h2 className='  pb-4 w-[100%] sm:w-[100%]  font-playfair text-[#fff] font-[300]  lg:text-7xl sm:text-[3rem] text-[2.1rem] leading-[3.6rem] sm:leading-[4rem] sm:tracking-[0.06rem] text-center  sm:pb-8'>{selectedPortfolio.title}</h2>
    <div className='flex flex-row gap-2'>
      <Link className='text-white font-sand uppercase text-[17px] sm:text-[18px] hover:text-black font-[400]' href='/'>Home</Link>
      <p className='text-white'>-</p>
      <Link className='text-white font-sand uppercase text-[17px] sm:text-[18px] hover:text-black font-[400]' href='/portfolio'>Portfolio</Link>
      <p className='text-white'>-</p>
       <p className='text-white font-sand uppercase text-[17px] sm:text-[18px]  font-[400]'>{selectedPortfolio.title}</p>
    </div>
    <p className=' mb-7 font-sand font-[300] text-[#fff] text-[16px] sm:text-[18px] leading-[1.9rem] tracking-widest sm:tracking-[0.2rem] text-center lg:w-[70%] w-[100%] '></p>
    </Fade>
    </div>
    </div>
    </div>
  </Parallax>
 
    
    <div className='pt-8 bg-white'>
    <div className="aboutProject  max-w-7xl p-[1.2rem] sm:p-[2rem] mx-auto ">
    <div className='flex flex-col gap-12 text-center lg:text-left lg:gap-8 justify-between lg:flex-row-reverse items-center' >  
    <div className='w-full lg:w-6/12'>
      <Fade cascade damping={0.5} direction='up'>
    <h2 className='text-[2.3rem] px-1  sm:text-[3rem]   capitalize pb-3 sm:leading-[4rem] font-normal font-playfair text-[#000] '>About The Project</h2>
    <p className='text-[20px] font-sand font-[400]'>Reykjavik is thrilled to share our lovely interior design project,
     “{selectedPortfolio.title},” where we had the pleasure of creating a stunning and 
     functional kitchen and living space for our clients. Inspired by 
     the classic contemporary style, this transformation brought together
     a harmonious blend of classic design elements and a neural colour 
     palette, resulting in a truly remarkable space.</p>
     </Fade>
    </div>

    <div className='w-full lg:w-6/12'>
    <Image className='h-[400px] object-cover' src={selectedPortfolio.img} alt='img' />
    </div>
    </div>
    </div>
    </div>
   

   <div className="bg-white ">
   <div className='portfolio-projectdetails pt-2'>
     <div className='mx-auto  p-[1.2rem] sm:p-[2rem] max-w-7xl'>

     <div className='w-full  border-b border-[rgba(76,64,55,0.5)] '>
      <h3 className='pro relative  font-sand pb-4 md:pb-16  text-[19px] uppercase font-[500]'>
        <span className='mr-6'>Project Details</span>
      </h3>
      <div className='flex md:flex-row flex-col flex-wrap justify-center   md:justify-between gap-6 '>
        <Fade cascade damping={0.5} direction='up'>
        <div className='flex flex-col items-center  md:items-start md:gap-2 '>
         <p className='text-[18px]  font-[300] font-poppins '>Client:</p>
         <h2 className='text-[25px] font-sand font-[500] '>{selectedPortfolio.client}</h2>
        </div>

        <div className='flex flex-col items-center  md:items-start md:gap-2 '>
         <p className='text-[18px]  font-[300] font-poppins '>Budget:</p>
         <h2 className='text-[25px] font-sand font-[500] '>{selectedPortfolio.budget}</h2>
        </div>

        <div className='flex flex-col items-center  md:items-start md:gap-2 '>
         <p className='text-[18px]  font-[300] font-poppins '>Date:</p>
         <h2 className='text-[25px] font-sand font-[500] '>{selectedPortfolio.date}</h2>
        </div>

        <div className='flex flex-col items-center  md:items-start md:gap-2 '>
         <p className='text-[18px]  font-[300] font-poppins '>Location:</p>
         <h2 className='text-[25px] font-sand font-[500] '>{selectedPortfolio.Location}</h2>
        </div>

        <div className='flex flex-col items-center  md:items-start md:gap-2 pb-16 '>
         <p className='text-[18px]  font-[300] font-poppins '>Service:</p>
         <h2 className='text-[25px] font-sand font-[500] '>{selectedPortfolio.service}</h2>
        </div>

        </Fade>

      </div>
     </div>


     </div>
    </div>
   </div>


   <div className=' '>
   <div className='portfolio-images  bg-white'>

<div className='px-[1.2rem] pt-8 pb-2' >
<div className=" flex flex-col md:grid md:grid-cols-3  gap-6 ">
<div className=''><Image className=' h-[400px] object-cover'  alt={selectedPortfolio.title} src={selectedPortfolio.img1} /></div>
<div className=''><Image className=' h-[400px] object-cover' alt={selectedPortfolio.title} src={selectedPortfolio.img2} /></div>
<div className=''><Image className=' h-[400px] object-cover'  alt={selectedPortfolio.title}src={selectedPortfolio.img4} /></div>
<div className='col-span-2'><Image className=' h-[400px] object-cover' alt={selectedPortfolio.title} src={selectedPortfolio.img3} /></div>
<div className=''><Image className=' h-[400px] object-cover' alt={selectedPortfolio.title} src={selectedPortfolio.img5} /></div>
<div className=''><Image className=' h-[400px] object-cover' alt={selectedPortfolio.title} src={selectedPortfolio.img3} /></div>
<div className='col-span-2'><Image className=' h-[400px] object-cover' alt={selectedPortfolio.title} src={selectedPortfolio.img2} /></div>
</div>
</div>
</div>
   </div>

   <div className='sm:h-[90vh] h-auto sm:py-0 py-12 bg-white flex items-center justify-center'>
    <div className="max-w-7xl mx-auto p-[1.2rem] sm:p-[2rem] ">
     <div className='flex flex-col items-center'>
      <Fade damping={0.5} direction='up' cascade>
      <h2 className='  w-[100%] md:w-[70%] font-[500] text-center sm:leading-[4rem] font-playfair text-[#4c4037]  mx-auto  lg:text-[3.6rem]  text-[28px] sm:text-[2.5rem]    sm:pb-4'>Subscribe to our Newsletter to get latest update and news</h2>
      <p className='sm:text-[18px] text-[17px] font-sand w-[100%] md:w-[56%] text-center pt-5 pb-8 mx-auto font-[500]'>We recommended you to subscribe to our newsletter, enter your email below to get our latest updates, news, promotions and so on.</p>
      </Fade>
      <form className='flex flex-col sm:flex-row mx-auto w-full items-center justify-center gap-5 sm:gap-3 '>
        <input className='px-4 font-sand py-4 w-10/12 sm:w-5/12  bg-gray-100 rounded-sm placeholder:text-[#000] ' type='text' placeholder='Enter Your Email Here'/>
        <button className=' bg-[#4c4037] py-3 px-5 rounded-sm hover:opacity-90  text-white font-sand text-[20px]  font-[500] '>Subscribe</button>
      </form>
     </div>
    </div>
   </div>


   </div>
  )
}

export default PortfolioDetails