import React from 'react'
import { FlipWords } from './FlipWords'

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40
     md:text-left rounded-3xl
      bg-clip-text">
        {/*big Screen */}
        <div className="flex-col hidden md:flex c-space">
            <h1 className= "text-4xl font-medium text-transparent bg-gradient-to-r from-blue-600 to-teal-100 bg-clip-text"  >
                
                Hi I'm Tanvir 
            </h1>
            <div className='flex flex-col items-start'>
                <p className='text-5xl font-medium text-neutral-300'>
                    A Developer <br/>
                    dedicated to Crafting
                </p>
               <div>
                <FlipWords 
                words={["Secure","Scalable","Robust","Modern","Innovative"]} 
                className='text-7xl font-black text-White'/>

               </div>
               <p className='text-4xl font-medium text-transparent bg-gradient-to-r from-gray-300 to-teal-200 bg-clip-text'>
                Web Solutions
               </p>
                

            </div>
            
        </div>
        {/*small Screen */}
        <div className='flex-col flex space-y-6 md:hidden'>
            <p className='text-4xl font-medium text-transparent bg-gradient-to-r from-blue-600 to-teal-200 bg-clip-text'>Hi I'm Tanvir</p>
            <div>
                <p className='text-5xl font-black text-neutral-300'>Building</p>
                <FlipWords
                    words={["Secure", "Scalable", "Robust", "Modern", "Innovative"]}
                    className='text-6xl font-black text-White' />
                
                <p className='text-5xl font-black text-neutral-300'>Web Applications</p>
            </div>

        </div>


    </div>
  )
}

export default HeroText