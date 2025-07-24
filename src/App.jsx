import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import { Analytics } from "@vercel/analytics/react"
import Contact from './sections/Contact.jsx'
import Footer from "./sections/Footer.jsx"
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import { Particles } from './components/Particles.jsx'
const App = () => {
  return (
    <div className=' container mx-auto max-w-7xl'>
    
      {/*sections*/}
      <Navbar />

      <Hero/>
      <About/>
  
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