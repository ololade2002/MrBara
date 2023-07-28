"use client"
import React, { useState } from 'react';
import {HeroSectionData} from '@/utils/utils';
import Image from 'next/image';
import { CiCircleChevLeft } from 'react-icons/ci';
import {CiCircleChevRight} from 'react-icons/ci';
import styled from 'styled-components';


const HeroSection = () => {
const [selected,setSelected] = useState(0);
const heroLength = HeroSectionData.length

  return (
    <HeroSectionView className="hero absolute top-0 z-10 w-full">
    <div>
   
   <div className=' overflow-hidden ' >
   <Image className=' w-full h-[100vh] object-cover  hover:scale-125 transition duration-500  ' src={HeroSectionData[selected].img}/>
   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
   </div>

   <HeroTextView className="  absolute z-10">
    
    <div className="heroText-1 flex flex-col lg:items-start items-start mx-auto max-w-7xl p-[2rem]   ">
    <h2 className='text-shadow font-playfair text-white font-[500] lg:text-7xl text-[3.5rem] leading-[4rem] tracking-[0.06rem] text-left pb-5'>{HeroSectionData[selected].title}</h2>
    <p className='text-shadow font-sand text-white text-[20px] leading-[1.9rem] lg:text-left lg:w-[70%] w-[100%]  pb-5'>{HeroSectionData[selected].text}</p>
    <button className='bg-[#fff] text-[#000] py-2 px-6 text-[19px] font-sand font-medium'>Explore</button>
    </div>


    <div className="arrow  absolute right-0  bottom-0 z-10 gap-5 flex text-white  mr-[5rem] ">
   <CiCircleChevLeft className='h-10 w-10 hover:text-black' onClick={() => {
    selected === 0 ? setSelected(heroLength - 1) : setSelected((prev) => prev - 1)
   }} />
   <CiCircleChevRight className='h-10  w-10' onClick={() => {
    selected === heroLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
   }} />
    </div>


   </HeroTextView>
    </div>
    </HeroSectionView>
  )
}

export default HeroSection;

const HeroSectionView = styled.div`
  width: 100%;
`

const HeroTextView = styled.div`
width: 100%;
transform: translate(-50%,-50%);
left: 50%;
top: 58%;
`;
/*
translate-y-[9rem] justify-end*/