import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Contact from './sections/Contact.jsx'
import Footer from "./sections/Footer.jsx"
import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />

      {/* Sections with IDs for scroll targeting */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
       <section id="social">
        <Footer />
      </section>

      
      <Analytics />
    </div>
  )
}

export default App
