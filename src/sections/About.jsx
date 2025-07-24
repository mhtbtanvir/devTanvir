import React from 'react'

const About = () => {
  return (
       <div className="relative container mx-auto bg-aqua/5 p-10  rounded-2xl shadow-2xl mt-30 ">
           {/* <Particles
               className='absolute inset-0 -z-10'
               quantity={1000}
               ease={80}
               color={"#ffffff"}
               /> */}
            <div className='flex justify-center'>
            <p className="mb-5 uppercase text-2xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent text-center ">
                About Me
            </p>
            </div>
            
            
            
            <p className="text-center text-base text-white/60 italic tracking-wide mb-8 max-w-xl mx-auto">
            Take A glimpse into my world.What i Love & what inspires me.
            </p>


    </div>
  )
}

export default About