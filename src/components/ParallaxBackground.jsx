import React from 'react'
import {motion} from "motion/react"
const ParallaxBackground = () => {
   
  return (
    <section className='absolute inset-0 bg-black/4'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background layers for parallax effect */}
            <motion.div 
            className='absolute inset-0 w-full h-screen -z-50 opacity-50'
            style ={{
                backgroundImage:"url(/assets/sky.jpg",
                backgroundSize: "cover",
                backgroundPosition: "center",
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