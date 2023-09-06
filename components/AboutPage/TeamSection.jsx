"use client"
import { teamSectionData } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'



const TeamSection = () => {
  return (
   <div className="team  mx-auto max-w-7xl mt-7 p-[1.2rem] xs:p-[2rem]">
    <Fade cascade damping={0.3} direction='up'>
     <h4 className='text-[16px] font-sand text-[#000] uppercase font-[500] tracking-[0.16rem] mb-3' >Our Team</h4>
    <h2 className='text-[2.4rem] xs:text-[3rem] sm:text-[3.8rem]  lg:w-[50%] capitalize  leading-[1.2] sm:leading-[4.5rem] font-normal font-playfair text-[#4c4037]'>
      <span className='font-playfair normal  '>The amazing team</span>  behind <span className='font-playfair text-[#4c4037]'>our company</span> </h2>   
      </Fade>
     <div className="team-body mt-[3rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {teamSectionData.map((team) => (
            
        <div  className="team-preview " key={team.id}>
         <div className='w-[100%] h-[80%] relative overflow-hidden '>
         <Image className=' object-cover rounded  hover:scale-110 transition duration-[0.9s] cursor-pointer ' src={team.img} alt='team ' />
         </div>
            
        <div className="team-text mt-3 flex flex-col justify-center items-center ">
        <h2 className='font-poppins pb-[0.2rem] font-[400] text-[#000] text-[24px]'>{team.name}</h2>
        <h4 className='font-sand text-[18px] uppercase tracling-[0.5rem] text-[#4c4037] font-[500] pb-4'>{team.position}</h4>
        </div>
            
        </div>
           
        ))}
     </div>

   </div>
  )
}

export default TeamSection