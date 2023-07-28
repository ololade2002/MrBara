
import React from 'react'
import HeroSection from './HeroSection'
import TeamSection from './TeamSection'
import ResultSection from './ResultSection'
import ProvideSection from './ProvideSection'
import VisitSection from './VisitSection'
import HeaderSection from './HeaderSection'


const About = () => {
  return (
   <div className="about ">
    <HeaderSection/>
     <HeroSection/>
    <ProvideSection/>
    <ResultSection/>
    <TeamSection/>
    <VisitSection/>
    
   </div>
  )
}

export default About