
import React from 'react'
import { BsDashLg, BsDiscord, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'

const HeaderSection = () => {
  return (
    <div className=' w-full absolute top-0 h-[80vh]    '>
    <div className='max-w-7xl p-[2rem] mx-auto cente'>
    <h2 className='text-[#4c4037] text-8xl font-playfair flex flex-row pb-6'> <BsDashLg/> Get In Touch</h2>

    <div className='flex flex-col sm:flex-row gap-6'>
    <p className='font-sand flex-1 text-[#4c4037] text-left text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, recusandae ullam rem sit amet commodi
       nisi ducimus ut soluta molestias nemo similique, corporis eligendi totam cumque suscipit nihil, quis laboriosam!</p>

     <div className='flex-1  flex flex-col gap-4 items-start justify-center md:ml-60 '>
      <h3 className='text-[20px] font-[500] text-[#4c4037] font-sand'>Follow us:</h3>
      <div className="social-icons flex flex-row gap-5">
       <div className='w-10 h-10 border-[1px] border-[#4c4037] hover:border-[#957f72] rounded-full flex items-center justify-center'><BsTwitter  className='w-5 h-5 hover:text-[#957572] text-[#4c4037]'/></div>
       <div className='w-10 h-10 border-[1px] border-[#4c4037] hover:border-[#957f72] rounded-full flex items-center justify-center'><BsInstagram className='w-5 h-5 hover:text-[#957572] text-[#4c4037]'/></div>
       <div className='w-10 h-10 border-[1px] border-[#4c4037] hover:border-[#957f72] rounded-full flex items-center justify-center'><BsYoutube className='w-5 h-5 hover:text-[#957572] text-[#4c4037]'/></div>
       <div className='w-10 h-10 border-[1px] border-[#4c4037] hover:border-[#957f72] rounded-full flex items-center justify-center'><BsLinkedin className='w-5 h-5 hover:text-[#957572] text-[#4c4037]' /></div>
       <div className='w-10 h-10 border-[1px] border-[#4c4037] hover:border-[#957f72] rounded-full flex items-center justify-center'><BsDiscord className='w-5 h-5 hover:text-[#957572] text-[#4c4037]' /></div>
       
        
      </div>
     </div>

    </div>
    </div>
    </div>
  )
}

export default HeaderSection