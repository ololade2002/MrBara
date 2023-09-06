
import React from 'react'
import { BlogData } from '@/utils/utils'
import Link from 'next/link'
import { FaChevronRight}  from 'react-icons/fa'
import Image from 'next/image'

const BlogList = () => {
  return (
      <div className='  bg-white'>
      <div className='max-w-7xl mx-auto p-[1.2rem] xs:px-[2rem] py-20'>
      <div className="blog-body flex flex-col-reverse md:flex-row flex-wrap gap-8 justify-evenly ">
       {BlogData.map((blog) => (
       <Link href={`/blog/${blog.id}`} className="blog-preview  " key={blog.id}>
       
        <Image src={blog.img} className='w-full h-[300px] object-cover' alt="blog" />
        
         <div className='drop-shadow-2xl '>
          <h1 className='font-sand'>{blog.date}</h1>
          <h4 className='font-sand'>{blog.month}</h4>
         </div>
         
          <h1 className='font-sand mt-0 font-[500] text-[#000] capitalize'>{blog.title}</h1>
          <p className='font-sand -mt-4 pb-4  text-[#000] opacity-80'>{blog.text}</p>
           

          <Link href={`/blog/${blog.id}`} className=" f-btn flex items-center px-4 py-2 gap-1.5 text-[16px] bg-stone-800 text-[#fff] font-sand font-[400] hover:opacity-90">
            {blog.btn} <FaChevronRight/>
     </Link> 
           

      
     
      </Link>
    ))}
   </div>

 

      </div>
    </div>
  )
}

export default BlogList