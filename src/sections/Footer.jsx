import React from "react";
import { mySocials } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  const handleOpen = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Function to create subtle random shiver for each icon
  const randomShiver = () => ({
   x: [0, 4, -4, 4, -4, 0], // increased from 1 → 4
    y: [0, -4, 4, -4, 4, 0], // increased from 1 → 2
    transition: {
      duration: 1 + Math.random() * 0.7,
      repeat: Infinity,
      repeatType: "loop",
    },
  });

  return (
    <footer className=" px-4 md:px-20 md:py-10 pt-5 text-sm ">
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mb-5" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Terms and Privacy */}
        <div className="flex gap-3 items-center">
          <button className="hover:underline cursor-pointer bg-transparent">
            Terms & Conditions
          </button>
          <span>|</span>
          <button className="hover:underline cursor-pointer bg-transparent">
            Privacy Policy
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 z-20">
          {mySocials.map((social, index) => (
            <motion.button
              key={index}
              onClick={() => handleOpen(social.href)}
              className="hover:opacity-50 transition p-1 rounded-full cursor-pointer"
              aria-label={social.name}
              animate={randomShiver()}
              whileHover={{ x: 0, y: 0, transition: { duration: 0.2 } }}
            >
              <img src={social.icon} alt={social.name} className="w-5 h-5" />
            </motion.button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center">© 2025 Tanvir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
