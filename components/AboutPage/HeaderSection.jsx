"use client"

import React from 'react'
import { Parallax } from 'react-parallax'


const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};


const HeaderSection = () => {
  return (
  
    <Parallax bgImage='/team2.jpg' strength={270}>
    <div style={{ height: 600 }}>
    
    </div>
  </Parallax>
   
  )
}

export default HeaderSection