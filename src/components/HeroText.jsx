import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from "motion/react"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
const HeroText = () => {
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    }
  return (
    <div className="z-10 mt-40 text-center md:mt-40
     md:text-left rounded-3xl
      bg-clip-text">
        {/*big Screen */}
        <div className=" flex-col hidden md:flex c-space">
            <motion.h1 
            className= "text-4xl font-medium text-transparent bg-gradient-to-r from-blue-600 to-teal-100 bg-clip-text" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8}}
       
             >
                
                Hi I'm Tanvir 
            </motion.h1>
            <div className='flex flex-col items-start'>
                <motion.p className='text-5xl font-medium text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2, ease: "easeOut"  }}>
                    A Developer <br/>
                    dedicated to Creating
                </motion.p>
               <motion.div
               variants={variants}
               initial="hidden"
               animate="visible"
               transition={{ delay: 1.4, ease: "easeOut" }}>
                <FlipWords 
                words={["Secure","Scalable","Robust","Modern","Innovative"]} 
                className='text-7xl font-black text-White'
                />

               </motion.div>
               <motion.p className='text-4xl font-medium text-transparent bg-gradient-to-r from-gray-200 to-teal-200 bg-clip-text'
               variants={variants}
               initial="hidden"
               animate="visible"
               transition={{ delay: 1.8, ease: "easeOut" }}>
                Web Solutions
               </motion.p>
                

            </div>
            
        </div>
        {/*small Screen */}
        <div className='flex-col flex space-c md:hidden'>
            <motion.h1 className='text-4xl font-medium text-transparent bg-gradient-to-r from-blue-600 to-teal-200 bg-clip-text'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6}}
            >Hi I'm Tanvir</motion.h1>
            
            <motion.p className='text-5xl font-black text-neutral-300'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2, ease: "easeOut" }}>Building
            </motion.p>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.4, ease: "easeOut" }}
            >
                <FlipWords
                    words={["Secure", "Scalable", "Robust", "Modern", "Innovative"]}
                    className='text-6xl font-black text-White'
                />
                
                
            </motion.div>
            <motion.p className='text-4xl font-black
                 text-neutral-300'
                 variants={variants}
                 initial="hidden"
                 animate="visible"
                 transition={{ delay: 1.8, ease: "easeOut" }}>
                 Web Applications
            </motion.p>

        </div>
        {/* Download CV Button big */}
        <div className="mt-20 ml-15 hidden md:block">
        <motion.a
            href="/assets/Tanvir_CV.pdf"
            download
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-2xl font-bold text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
            <span className="flex gap-4 font-light relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Download CV
            <ArrowDownTrayIcon className=" transform translate-y-1 translate-x-2  justify-center w-6 h-6" />

            </span>
        </motion.a>
        </div>

        {/* Small Screen Button */}
        <div className="mt-12 ml-4 md:hidden">
        <motion.a
            href="/assets/Tanvir_CV.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-2xl font-bold text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
            <span className=" flex gap-4 font-light relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        Download CV
                <ArrowDownTrayIcon className=" transform translate-y-1 translate-x-2 justify-center w-6 h-6" />

            

            </span>
        </motion.a>
        </div>



    </div>
  )
}

export default HeroText