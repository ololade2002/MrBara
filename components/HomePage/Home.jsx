
import React from 'react'
import ServiceSection from './ServiceSection'
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
import ProjectSection from './ProjectSection'
import Hero from './Hero'
import DesignSection from './DesignSection'
import HeroSection from './HeroSection'

const Home = () => {
  return (
   <div  >
    <Hero/>
    <DesignSection/>
    <ServiceSection/>
    <HeroSection/>
    <ProjectSection/>
    <Testimonial/>
    <Newsletter/>
   </div>
  )
}

export default Home