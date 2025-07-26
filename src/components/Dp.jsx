import React from 'react';
import { motion } from 'framer-motion';

const Dp = () => {
  return (
 <div className="-z-50 relative mt-10 md:mt-40  ">
      {/* Image container: hidden on small/medium, visible on large+ */}
      <motion.div
        className="hidden md:block w-full h-[50vh] overflow-hidden rounded-xl shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1.5 }}
      >
        <img
          src="/assets/profilepf.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Image for small screens */}
            <motion.div
            className=" block  md:hidden w-full justify-center  h-[40vh] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 2 }}
            >
            <img
                src="/assets/profilepf.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
            />
            </motion.div>

    </div>
    
  );
};

export default Dp;
