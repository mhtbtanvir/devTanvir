import React from 'react'
import { motion} from 'framer-motion';
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" >
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#social" >
          Social
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
    const[isOpen, setIsOpen] = React.useState(false);
  return (
    <div 
        className='fixed py-1 inset-x-0 w-full 
        z-20 backdrop-blur-xl rounded-b-lg 
        bg-primary/20'>

        <div className='mx-auto c-space max-w-7xl '>
            <div className='flex items-center 
                 justify-between py-2 sm:py-1 '>

                  <a
                    href="#home"
                    className="text-xl font-dancing
                      font-bold tracking-wide
                      text-neutral-400
                      hover:text-white 
                      drop-shadow-sm transition-all 
                      duration-300
                      cursor-pointer nav-link"
                  >
                    Tanvir Mahtab
                  </a>
                    <button onClick={() => setIsOpen(!isOpen)} 
                    className="flex cursor-pointer
                    text-neutral-400
                    hover:text-white 
                    focus:outline-none
                    sm:hidden">

                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                        className="w-6 h-6" alt="toggle" 
                    />

                </button>
                <nav className="hidden sm:flex">
                    <Navigation />
                </nav>
                


            </div>
            

        </div>
         {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}


    </div>
  )
}

export default Navbar