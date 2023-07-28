
import Image from 'next/image'
import React from 'react'
import img from '../../public/team8.jpg'

const HeaderSection = () => {
  return (
  
   
      
    <div className='object-cover top-0 absolute  w-full  '>
        <Image className= ' h-[100vh] w-full object-cover' src={img} alt='img' />
    
    </div>
  
  )
}

export default HeaderSection