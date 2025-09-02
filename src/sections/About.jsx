import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import javascript from "/assets/logos/javascript.svg";
import typescript from "/assets/logos/typescript.svg";
import react from "/assets/logos/react.svg";
import nextjs from "/assets/logos/nextjs.svg";
import tailwindcss from "/assets/logos/tailwindcss.svg";
import nodejs from "/assets/logos/nodejs.svg";
import postgresql from "/assets/logos/postgresql.svg";
import python from "/assets/logos/python.svg";
import express from "/assets/logos/express.png";
import mongodb from "/assets/logos/mongodb.jpg";
import redis from "/assets/logos/redis.png";
import redux from "/assets/logos/redux.svg";

const icons = {
  star: "/assets/star.png",
  bookcover: "/assets/bookcover.jpg",
};

const toolboxItems = [
  // Frontend
  { title: "JavaScript (ES6+)", iconType: javascript },
  { title: "TypeScript", iconType: typescript },
  { title: "React.js", iconType: react },
  { title: "Next.js", iconType: nextjs },
  { title: "Tailwind CSS", iconType: tailwindcss },
  { title: "Redux Toolkit", iconType: redux }, // add a redux icon if available
  
  // Backend
  { title: "Node.js", iconType: nodejs },
  { title: "Express.js", iconType: express }, // add icon if available
  { title: "MongoDB", iconType: mongodb },
  { title: "Redis", iconType: redis }, // add icon if available
  
  // Database
  { title: "PostgreSQL", iconType: postgresql },
  
  // Language
  { title: "Python", iconType: python },
];


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },
};

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative container mx-auto max-w-5xl bg-aqua/5 p-10 rounded-2xl shadow-2xl mt-10">
      {/* Header */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white uppercase mb-2 tracking-widest font-serif">
            About Me
          </h2>
          <p className="text-white/60 italic text-sm max-w-xl mx-auto">
            Take a glimpse into my world — what I love and what inspires me.
          </p>
        </div>
      </Section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 min-h-[650px]">
        {/* Left column */}
        <div className="flex flex-col gap-5 h-full">
          <Section>
            <div className="bg-gray-800/60 border border-gray-400/50 rounded-3xl shadow-lg p-6 flex flex-col h-full max-h-[28rem]">
              <div className="flex items-center gap-2 font-serif text-2xl font-semibold mb-2">
                <img src={icons.star} alt="star" className="w-5 h-5" />
                My Reads
              </div>
              <p className="text-sm text-white/60 mb-4">
                Explore the books shaping my perspectives.
              </p>
              <div className="w-51 mt-7 mx-auto flex-grow overflow-hidden rounded-xl">
                <img
                  src={icons.bookcover}
                  alt="Book Cover"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Section>

          <Section>
            <div className="bg-gray-800/60 border border-gray-400/50 rounded-3xl shadow-lg p-6 flex flex-col max-h-[28rem] overflow-auto">
              <div className="flex items-center gap-2 font-serif text-2xl font-semibold mb-2">
                <img src={icons.star} alt="star" className="w-5 h-5" />
                Beyond the Code
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Reading 📚",
                  "Music 🎵",
                  "Photography 📸",
                  "Gaming 🎮",
                  "Traveling 🌍",
                  "Writing 📝",
                  "Fitness 🧘‍♂️",
                ].map((hobby) => (
                  <span
                    key={hobby}
                    className="bg-cyan-600/20 px-3 py-1 rounded-full text-white text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 h-full">
          <Section>
            <div className="bg-gray-800/60 border border-gray-400/50 rounded-3xl shadow-lg p-5 flex flex-col max-h-[28rem]">
              <div className="flex items-center gap-2 font-serif text-2xl font-semibold mb-2">
                <img src={icons.star} alt="star" className="w-5 h-5 " />
                My Toolbox
              </div>
              <p className="text-sm text-white/60 mb-4">
                Technologies and tools I love to use to build digital
                experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {toolboxItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 border-1 border-gray-500 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    <img src={item.iconType} alt={item.title} className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section>
            <div className="h-full max-h-[27rem] bg-gray-800/60 border border-gray-400/50 rounded-3xl shadow-lg flex flex-col items-center justify-center">
              <div className="rounded-xl overflow-hidden w-full h-full bg-slate-700">
                <iframe
                  title="Dhaka,Bangladesh"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9367644083614!2d90.37601531538598!3d23.777176884579176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.0!3m3!1m2!1s0x3755b85e062c7fb7%3A0x9e90e3e6333e6e5c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1692176743147!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-none rounded-xl"
                ></iframe>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default About;
