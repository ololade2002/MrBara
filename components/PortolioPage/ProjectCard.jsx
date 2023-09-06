
import React from 'react'
import Image from 'next/image'

const ProjectCard = ({title,img,service}) => {
  return (
    <div className='ProjectCard'>
      <Image className='' src={img} alt='img' />
       <div className="projectCard-text">
       <h3 className='font-sand'>{title}</h3>
        <p className='font-sand'>{service}</p>
    </div>
    </div>
  )
}

export default ProjectCard