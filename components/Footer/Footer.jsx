
import Image from 'next/image'
import img from '../../public/logo4.svg'
import React from 'react'
import Link from 'next/link';
import {FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import {AiOutlineMail } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='Footer  '>
   <div className=' max-w-7xl mx-auto py-16 px-[1.2rem] sm:px-[2rem]'>
   <div className='flex pb-2 flex-col md:flex-row justify-center items-center'>

<div>
 <Image className='w-[150px] fil' src={img} alt='logo' />
</div>

</div>
   

     <div className='pt-4 pb-6 text-center mx-auto w-[100%] md:w-[70%]'>
      <h4 className='font-sand font-[500] text-[#4c4037]'>&copy; 2022 REYKJAVIK  |  PRIVACY POLICY  |  TERMS & CONDITIONS  |  SITE DESIGN CREDIT
BRANDING PHOTOS TAKEN AT TERZETTO HOMES SHOWROOM  </h4>
     </div>
     </div>
    </div>
  )
}

export default Footer