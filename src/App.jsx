import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import { Analytics } from "@vercel/analytics/react"
import Contact from './sections/Contact.jsx'
const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/*sections*/}
      <Navbar />

      <Hero/>

      {/* about */}
      {/* projects*/}
      
      <Contact/>
      
      {/* footer */}

    </div>
  )
}

export default App