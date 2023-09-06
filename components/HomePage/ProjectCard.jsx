
import Image from 'next/image'
import React from 'react'

const ProjectCard = ({img,title,service}) => {
  return (
    <div className='ProjectCard '>
        <Image className='' src={img} alt='img' />
       <div className="projectCard-text">
       <h3 className='font-sand'>{title}</h3>
        <p className='font-sand'>{service}</p>
       </div>
       
    </div>
  )
}

export default ProjectCard