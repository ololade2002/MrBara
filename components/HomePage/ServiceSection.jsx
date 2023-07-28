
import React from 'react'

const ServiceSection = () => {
  return (
    <div className="service max-w-7xl py-12 px-6 mx-auto">
     <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] -mb-5' >Our Service</h4>

     <div className='flex flex-col gap-3 sm:flex-row py-4 justify-between'>
     <h2 className='text-[3.5rem] sm:text-[3.8rem] font-normal leading-[4rem] font-playfair text-[#000]'>We do it <span className='font-playfair  text-[#4c4037]'>best.</span> </h2>
     <button class="px-7 pt-0.5 pb-2.5 relative  group overflow-hidden font-normal bg-[#4c4037] text-white inline-block">
<span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#957f72] group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white uppercase text-[17px] font-sand">Learn More</span>
     </button>
     </div>
     
     <div className='flex flex-col  sm:flex-row gap-6 py-8'>
     <div className='flex flex-col items-start'>
     <p className='counter-sub '>01</p>
     <h2 className='counter-main'>Furniture Selection</h2>
     <h4 className='counter-text '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse varius enim in eros elementum tristique. 
     Duis cursus, mi quis viverra ornare.</h4>
     </div>

     <div>
     <p className='counter-sub'>02</p>
     <h2 className='counter-main'>Lighting For Ambience</h2>
     <h4 className='counter-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse varius enim in eros elementum tristique. 
     Duis cursus, mi quis viverra ornare.</h4>
     </div>

     <div>
     <p className='counter-sub'>03</p>
     <h2 className='counter-main'>Decoration And Color Design</h2>
     <h4 className='counter-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse varius enim in eros elementum tristique. 
     Duis cursus, mi quis viverra ornare.</h4>
    </div>

       
     </div>
   </div>
  )
}

export default ServiceSection