'use client'

import React from 'react'
import CountUp from 'react-countup';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlinePercentage} from 'react-icons/ai';



const CounterSection = () => {
  return (
   <div className="counter max-w-7xl mx-auto p-[2rem] flex  justify-center md:justify-between flex-row flex-wrap items-center gap-[1.4rem] mt-[97vh] mb-6 ">
    <div className='flex flex-col items-center ' >
        <div className='  flex flex-row items-baseline '>
        <CountUp start={700} delay={2} end={740} className='service-text' ></CountUp>
        <span className='text-[#4c4037]'><AiOutlinePlus/></span>
        </div>
        <p className='service-sub '>Succesful projects</p>
    </div>

    <div className='flex flex-col items-center '>
        <div className="flex flex-row ">
        <CountUp start={45} delay={2} end={65} className='service-text' ></CountUp>
        <span  className='text-[#4c4037]'><AiOutlinePlus/></span>
        </div>
        <p className='service-sub' >Unique Assortments</p>
    </div>

    <div className='flex flex-col items-center '>
       <div className="flex flex-row ">
       <CountUp start={80} delay={2} end={100} className='service-text'>100%</CountUp>
       <span  className='text-[#4c4037]'><AiOutlinePercentage/></span>
       </div>
        <p className='service-sub' >Clients Satisfaction</p>
    </div>

    <div className='flex flex-col items-center '>
       <div className="flex flex-row">
       <CountUp start={320} delay={2} end={340} className='service-text'>340+</CountUp>
       <span  className='text-[#4c4037]'><AiOutlinePlus/></span>
       </div>
        <p className='service-sub' >Across The Country</p>
    </div>

   
   </div>
  )
}

export default CounterSection