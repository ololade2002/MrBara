
import React from 'react'
import {  BsDashLg } from 'react-icons/bs'

const HeaderSection = () => {
  return (
    <div className='w-full absolute top-0 h-[70vh] bg-slate-200 '>

    <div className='max-w-7xl p-[2rem] mx-auto cente'>
    <h2 className='text-[#4c4037] text-8xl font-playfair flex flex-row pb-6'> <BsDashLg/> Our Blog</h2>
    <p className='font-sand w-[60%] text-[#4c4037] text-left text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, recusandae ullam rem sit amet commodi
       nisi ducimus ut soluta molestias nemo similique, corporis eligendi totam cumque suscipit nihil, quis laboriosam!</p>

    </div>
    </div>

  
  )
}

export default HeaderSection