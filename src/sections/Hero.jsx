import React from 'react'
import HeroText from '../components/HeroText.jsx'
import ParallaxBackground from '../components/ParallaxBackground.jsx'
import Dp from '../components/Dp.jsx'
const Hero = () => {
  return (
    <section className='md:flex items-center justify-between
    md:items-start min-h-screen overflow-hidden
    c-space '>
     
    <HeroText />
   
    <Dp/>
    
    <ParallaxBackground />

 
      
    </section>

  )
}

export default Hero