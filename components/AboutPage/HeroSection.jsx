
import React from 'react'
import Image from 'next/image'
import brand1 from '../../public/b-1.png';
import brand2 from '../../public/b-2.png';
import brand3 from '../../public/b-3.png';
import brand4 from '../../public/b-4.png';

const HeroSection = () => {
  return (
 
  <div className='heroSection mt-[100vh] mx-auto max-w-7xl p-[2rem]  mb-24'>
  <div className='flex flex-col sm:flex-row'>

  <div className='flex-1'>
  <h4 className='text-[16px] font-sand text-[#4c4037] uppercase font-[500] tracking-[0.16rem] pb-2' >About Us</h4>
   <h1 className='text-8xl  font-playfair font-[400] text-[#4c4037]'> <span className='text-8xl'>25</span> years of experience</h1>
   </div>

   <div className='flex-1'>
   <div className='flex flex-col gap-3 text-[18px] text-[#000] font-sand'>
   <h3>At Reykjavik, we are passionate about creating captivating and inspiring
   spaces the brings life and beauty into your everyday living. As a leading interior decor company,
   we’re here to help you create a space that reflects you and what you love.
   We’ll put it all together for you. Free one-on-one design help, in our store or in your home!</h3>

   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minus sit distinctio 
   expedita ea illo. Nesciunt, nam, provident ratione modi suscipit quam perferendis
   molestiae, autem dolorem officia odio ut.</h3>

   <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minus sit distinctio 
   expedita ea illo. Nesciunt, nam, provident ratione modi suscipit quam perferendis
   molestiae, autem dolorem officia odio ut.</h3>   
   </div>

   <div className='brands flex flex-row mt-8'>
    <Image src={brand1} alt='brands' />
    <Image src={brand2} alt='brands' />
    <Image src={brand3} alt='brands' />
    <Image src={brand4} alt='brands' />
          
   </div>
   </div>

  </div>
 
  </div>

   

   
  )
}

export default HeroSection

