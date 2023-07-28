
import React from 'react'
import HeroSection from './HeroSection'
import CounterSection from './CounterSection'
import ServiceSection from './ServiceSection'
import Testimonial from './Testimonial'
import Newsletter from './Newsletter'
import ProjectSection from './ProjectSection'

const Home = () => {
  return (
   <div  >
    <HeroSection/>
    <CounterSection/>
    <ServiceSection/>
    <ProjectSection/>
    <Testimonial/>
    <Newsletter/>
   </div>
  )
}

export default Home