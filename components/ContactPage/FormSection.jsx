
import React from 'react'


const FormSection = () => {
  return (
    <div className='max-w-[80%] mx-auto  bg-white drop-shadow-lg mt-[80vh]'>
        

    <form className='flex-1 mx-auto w-9/12 py-24 drop-shadow-sm '>
    <div class="mb-8">
    <input type="text" id="text" className="font-sand border border-[#e5d9cf]  placeholder:text-[#4c4037] font-[500] rounded   block w-full px-4 py-3 text-[19px]  " placeholder="Full Name" required/>
    </div>

    <div class="mb-8">
    <input type="email" id="email" className="font-sand  border border-[#e5d9cf] placeholder:text-[#4c4037] font-[500] rounded block w-full px-4 py-3 text-[19px]  " placeholder="Email" required/>
    </div>

    <div class="mb-8">
    <input type="text"  className="font-sand  border border-[#e5d9cf] rounded placeholder:text-[#4c4037] font-[500] block w-full px-4 py-3 text-[19px]  " placeholder="Phone Number" required/>
    </div>

    <div className="mb-8">
    <textarea id="message" rows="4" className="font-sand block px-4 py-3 text-[19px] w-full placeholder:text-[#4c4037] font-[500] rounded  border-[#e5d9cf]  border-[1px] " placeholder="Message"></textarea>  
    </div> 

     <button class="px-9 py-3.5 relative  group overflow-hidden font-normal bg-[#4c4037] text-white inline-block">
     <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#957f72] group-hover:h-full opacity-90"></span>
     <span class="relative group-hover:text-white uppercase text-[18px] font-sand">Submit</span>
     </button>

     </form>

    </div>
  )
}

export default FormSection