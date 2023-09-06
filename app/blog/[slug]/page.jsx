"use client"

import React from 'react'
import { BlogData } from '@/utils/utils';
import Image from 'next/image';
import { BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import logo from '../../../public/logo4.svg';
//import { Parallax } from 'react-parallax'


const BlogDetails = ({ params } ) => {
const selectedBlog = BlogData.find((blog) => blog.id ===  params.slug);
const fiveBlog = BlogData.slice(3,7);

  return (
    <div>
    <div className=''>

   
     <div className='mx-auto max-w-7xl p-[5rem]   sm:p-[6rem]'>
     <div className='flex flex-col sm:flex-row items-center justify-between'>
      <Fade cascade damping={0.5} direction='up'>
      <div>
        <Image className='w-32 h-32' src={logo} alt='img'/>
      </div>

      <div className='flex -mt-4 sm:mt-0 flex-row gap-2'>
        <Link className='font-sand text-[17px] font-[400] hover:text-blue-600 hover:underline-offset-1 hover:underline ' href='/'>Home</Link>
        <span className='font-sand text-[17px] font-[400]'>/</span>
        <Link className='font-sand text-[17px] font-[400] hover:text-blue-600 hover:underline-offset-1 hover:underline ' href='/blog'>Blog</Link>
        <span className='font-sand text-[17px] font-[400]'>/</span>
        <Link className='font-sand text-[17px] font-[400] hover:text-blue-600 hover:underline-offset-1 hover:underline ' href='/'>Modern</Link>
      </div>
      </Fade>
     </div>
     </div>

    <div className='bg-white py-12' >
     <div className="blogDetails-body  max-w-7xl px-[1.2rem] sm:px-[2rem]   mx-auto gap-20 flex flex-col md:flex-row">
    
     <div className='left-blogDetails relative flex flex-col w-full lg:w-8/12'>
      <Image src={selectedBlog.img} className='w-full h-[500px] object-cover' alt='img' />
     <Fade damping={0.5} cascade direction='up'>
     <h1 className='text-[2.1rem]  sm:text-[2.3rem] pt-4  pb-2 font-[500] capitalize font-sand '>{selectedBlog.title}</h1>
      </Fade>
      <div className='drop-shadow-2xl burner '>
      <div className="flex flex-col items-center">
      <h1 className='font-sand text-[27px] font-[700]'>{selectedBlog.date}</h1>
      <h4 className='font-sand text-[18px] font-[500] '>{selectedBlog.month}</h4>
      </div>
      </div>
      
     <div className=''>
      <Fade damping={0.5} cascade direction='up'>
     <p className='font-sand text-[18px] '>{selectedBlog.text1}</p>
     <h1 className='font-sand  py-5 text-[1.8rem] sm:text-[2rem] font-[400] text-[#000]'>{selectedBlog.title2}</h1>
     <p className='font-sand text-[18px]'>{selectedBlog.text2}</p>
    
     
     <div className='bottom flex flex-col gap-4 sm:flex-row justify-between pt-6'>
        <p className='flex flex-row  items-center font-sand gap-2'>By {selectedBlog.author}  /  3250 <AiFillHeart/> </p>
        <p className='flex flex-row text-[#000] items-center font-sand gap-2'>Share : 
        <BiLogoFacebook className='w-5 h-5 '/> 
        <AiFillInstagram className='w-5 h-5 '/>
        <AiOutlineTwitter className='w-5 h-5 '/>
        <BiLogoLinkedin className='w-5 h-5 '/> </p>
        </div>

       
        </Fade>
      </div> 



     </div>

     <div className='right-blogDetails    w-4/12 '>
     <div className='flex flex-col'>
     <h2 className='text-[1.8rem] font-sand  uppercase  border-b pb-3 border-[#dad4d4] font-[400] '>Recent Posts  </h2>
         
    
         <div className='recent pt-10 flex flex-col gap-6'>
            {fiveBlog.map((blog) => (
           <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="recent-preview  flex flex-row gap-4 items-center" >
               
               <Image className='w-6/12 h-[146px] object-cover'  src={blog.img} alt="image" />
               <div className='w-6/12'>
                <h4 className='font-sand text-[16px]' >{blog.fullDate}</h4>
                <h2 className='font-sand text-[20px] hover:opacity-95 font-[500] capitalize'>{blog.title}</h2>
               </div>
                  
              </div>
           </Link>
           ))}
          
          </div>
        
     </div>
    </div>  
    </div> 
    </div> 

    </div> 
   </div>
  )
}

export default BlogDetails