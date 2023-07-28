

import React from 'react'
import Image from 'next/image'
import img from '../../public/h1-11.webp'
import { CiLocationOn } from 'react-icons/ci'

const Office = () => {
  return (
    <div className='p-[2rem]  bg-white mt-24 relative'>

  <div className='flex my-20 flex-row-reverse '>

  <div className='w-[80%]  '>
   <Image  src={img} alt='image' />
   </div>

   <div className='bg-white drop-shadow-lg absolute py-12  left-24 top-[26%] px-6 '>

   <div className='flex flex-col items-start justify-center'>
   <h2 className='text-[26px] font-[500] pb-2.5 ml-2 font-sand '>Our Office</h2>
    <div className='flex flex-col gap-8'>

        <div className='flex flex-row gap-2 '>
            <CiLocationOn  className='w-7 h-7 text-[#000]'/>
         <div className='flex flex-col'>
            <h3 className='text-[20px]  font-sand font-[500]'>New York</h3>
            <p className='text-[17px] font-sand text-[#4c4037]  w-[90%]'>24 East Market Ave. Jamaica, New York 11435</p>
         </div>
        </div>

        <div className='flex flex-row  gap-2  '>
        <CiLocationOn className='w-7 h-7' />
         <div>
            <h3 className='text-[20px] font-sand font-[500]'>Los Angeles</h3>
            <p className='text-[17px] font-sand text-[#4c4037] w-[80%]'>672 Tailwater Lane Massapequa, Los Angeles 11758</p>
         </div>
        </div>

    </div>
   </div>

   </div>
  </div>
    </div>
  )
}

export default Office