import React from 'react'
import { motion } from "motion/react"
import { Particles } from "./Particles"

const ParallaxBackground = () => {
  return (
    <div className='absolute inset-0 w-full h-full -z-10'>
      <Particles
        className='absolute inset-0 -z-10'
        quantity={100}
        ease={80}
        color={"#ffffff"}
      />
      <motion.div
        className='w-full h-full object-cover opacity-50'
        style={{
          backgroundImage: "url(/assets/sky1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  )
}

export default ParallaxBackground
