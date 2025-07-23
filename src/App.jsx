import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import { Analytics } from "@vercel/analytics/react"
import Contact from './sections/Contact.jsx'
import Footer from "./sections/Footer.jsx"
import Projects from './sections/Projects.jsx'
import { Particles } from './components/Particles.jsx'
const App = () => {
  return (
    <div className='relative container mx-auto max-w-7xl'>
      <Particles
                  className='absolute inset-0 -z-10'
                  quantity={1000}
                  ease={80}
                  color={"#ffffff"}
                  refresh
      />
      {/*sections*/}
      <Navbar />

      <Hero/>

      <Projects/>

      {/* about */}
      {/* projects*/}
      
      <Contact/>

      {/* Footer */}
      <Footer/>

    </div>
  )
}

export default App