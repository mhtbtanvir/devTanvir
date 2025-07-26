import React from 'react'
import { motion } from "motion/react"
import { Particles } from "./Particles"

const ParallaxBackground = () => {
  return (
    <section className='fixed inset-0 -z-50'>
      <div className='relative h-screen w-full'>
        <Particles
            className='absolute inset-0 -z-50'
            quantity={500}
            ease={80}
            color={"#ffffff"}
            />
        {/* Background layer with fixed positioning */}
        <motion.div
          className='fixed inset-0 w-full h-screen object-cover opacity-50'
          style={{
            backgroundImage: "url(/assets/sky1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  )
}

export default ParallaxBackground
