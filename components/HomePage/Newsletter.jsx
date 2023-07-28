

import React from 'react'
import banner from '../../public/banner.svg';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <Image className='w-[90%] mx-auto h-[90vh]' src={banner} alt='banner' />
    </div>
  )
}

export default Newsletter