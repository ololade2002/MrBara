

import React from 'react'

const Newsletter = () => {
<div className="newsletter">
<div className='sm:h-[90vh] h-auto sm:py-0 py-12 bg-white flex items-center justify-center'>
    <div className="max-w-7xl mx-auto p-[1.2rem] sm:p-[2rem] ">
     <div className='flex flex-col items-center'>
      <h2 className='  w-[100%] md:w-[70%] font-[500] text-center sm:leading-[4rem] font-playfair text-[#4c4037]   lg:text-[3.6rem]  text-[28px] sm:text-[2.5rem]    sm:pb-4'>Subscribe to our Newsletter to get latest update and news</h2>
      <p className='sm:text-[18px] text-[17px] font-sand w-[100%] md:w-[50%] text-center pt-5 pb-8 font-[500]'>We recommended you to subscribe to our newsletter, enter your email below to get our latest updates, news, promotions and so on.</p>
      <form className='flex flex-col sm:flex-row w-full items-center justify-center gap-5 sm:gap-3 '>
        <input className='px-4 font-sand py-4 w-10/12 sm:w-5/12  bg-gray-100 rounded-sm placeholder:text-[#000] ' type='text' placeholder='Enter Your Email Here'/>
        <button className=' bg-[#4c4037] py-3 px-5 rounded-sm hover:opacity-90  text-white font-sand text-[20px]  font-[500] '>Subscribe</button>
      </form>
     </div>
    </div>
   </div>
</div>
}

export default Newsletter