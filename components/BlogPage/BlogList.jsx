
import React from 'react'
import { BlogData } from '@/utils/utils'
import Link from 'next/link'
import { FaChevronRight}  from 'react-icons/fa'
import Image from 'next/image'

const BlogList = () => {
  return (
      <div className='head bg-blue-300 mt-[100vh] '>
      <div className='max-w-7xl mx-auto p-[2rem]'>
      <div className="blog-body flex flex-col sm:flex-row flex-wrap gap-8 justify-evenly ">
       {BlogData.map((blog) => (
       <Link href={`${blog.id}`} className="blog-preview  " key={blog.id}>
       
        <Image src={blog.img} className='w-full h-[300px] object-cover' alt="blog" />
        
         <div className='drop-shadow-2xl '>
          <h1 className='font-sand'>{blog.date}</h1>
          <h4 className='font-sand'>{blog.month}</h4>
         </div>
          <p className=' pb-8 font-sand text-[#000] opacity-70'>By: {blog.author}</p>
          
          <h1 className='font-sand font-[500] text-[#000] capitalize'>{blog.title}</h1>
          <p className='font-sand pb-5 text-[#000] opacity-80'>{blog.text}</p>

          <button class="blog-btn mb-8 px-6 py-3 relative  group overflow-hidden font-normal bg-[#4c4037] text-white inline-block">
          <span class="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#957f72] group-hover:h-full opacity-90"></span>
          <span class=" relative flex items-center gap-2 group-hover:text-white capitalise font-[400] text-[16px] font-sand">{blog.btn} <FaChevronRight className='chev mt-1 '/>  </span>
          </button>
     
      </Link>
    ))}
   </div>
      </div>
    </div>
  )
}

export default BlogList