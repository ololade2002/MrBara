
"use client"
import { portfolioData } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'


const HeroSection = () => {
  return (
  <div className="Hero">
  {portfolioData.map((port) => (
    <div className="preview" key={port.id}>
     
     <div>
      <p>01</p>
      <h2>{port.title}</h2>
      <p>{port.text1}</p>
      <button>View Project</button>
     </div>

     <div>
      <Image src={port.img}/>
     </div>

    </div>
  ))}
  </div>
  )
}

export default HeroSection