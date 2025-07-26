import React from "react";
import javascript from "/assets/logos/javascript.svg";
import typescript from "/assets/logos/typescript.svg";
import react from "/assets/logos/react.svg";
import nextjs from "/assets/logos/nextjs.svg";
import tailwindcss from "/assets/logos/tailwindcss.svg";
import nodejs from "/assets/logos/nodejs.svg";
import postgresql from "/assets/logos/postgresql.svg";
import python from "/assets/logos/python.svg";

const icons = {
  star: "/assets/star.png",
  bookcover: "/assets/bookcover.jpg",
};

const toolboxItems = [
  { title: "JavaScript", iconType: javascript },
  { title: "TypeScript", iconType: typescript },
  { title: "React", iconType: react },
  { title: "Next.js", iconType: nextjs },
  { title: "TailwindCSS", iconType: tailwindcss },
  { title: "Node.js", iconType: nodejs },
  { title: "PostgreSQL", iconType: postgresql },
  { title: "Python", iconType: python },
];

const About = () => {
  return (

<div className="relative container mx-auto max-w-5xl bg-aqua/5 p-6 rounded-2xl shadow-2xl mt-10">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white uppercase mb-2 tracking-widest font-serif">
          About Me
        </h2>
        <p className="text-white/60 italic text-sm max-w-xl mx-auto">
          Take a glimpse into my world — what I love and what inspires me.
        </p>
      </div>

      {/* Grid Layout (2 cols on lg screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 min-h-[650px]">
        {/* Left column */}
        <div className="flex flex-col gap-5 h-full">
            
        <div className="bg-gray-800/60 border
        border-royal/50 rounded-3xl shadow-lg p-6
          flex flex-col h-full max-h-[28rem]">
          {/* Header */}
          <div className="flex items-center gap-2 font-serif text-2xl font-semibold mb-2">
            <img src={icons.star} alt="star" className="w-5 h-5" />
            My Reads
          </div>
          <p className="text-sm text-white/60 mb-4">
            Explore the books shaping my perspectives.
          </p>

          {/* Image container fills remaining space */}
          <div className="w-51 mt-7 mx-auto flex-grow overflow-hidden rounded-xl">
            <img
              src={icons.bookcover}
              alt="Book Cover"
              className="w-full h-full object-cover object-top"
            />
          </div>

        
          </div>

              {/* Beyond the Code - grow to fill remaining space */}
                    <div className="bg-gray-800/60 border border-royal/50 rounded-3xl shadow-lg p-6 flex flex-col max-h-[28rem] overflow-auto">
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



    
  </div>

  {/* Right column */}
  <div className="flex flex-col gap-5 h-full">
    {/* My Toolbox - grow to fill remaining space */}
<div className=" bg-gray-800/60 border border-royal/50 rounded-3xl shadow-lg p-5 flex flex-col max-h-[28rem] ">
      <div className="flex items-center gap-2 font-serif text-2xl font-semibold mb-2">
        <img src={icons.star} alt="star" className="w-5 h-5 " />
        My Toolbox
      </div>
      <p className="text-sm text-white/60 mb-4">
        Technologies and tools I use to craft exceptional digital experiences.
      </p>
      <div className="flex flex-wrap gap-3">
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-2  border-1 border-cyan-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            <img src={item.iconType} alt={item.title} className="w-5 h-5" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Location / Map - natural height */}
   <div className="h-full max-h-[27rem] bg-gray-800/60 border border-royal/50 rounded-3xl shadow-lg  flex flex-col items-center justify-center">
  
  <div className="rounded-xl overflow-hidden w-full h-full bg-slate-700">
   <iframe
      title="Dhaka,Bangladesh"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9367644083614!2d90.37601531538598!3d23.777176884579176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.0!3m3!1m2!1s0x3755b85e062c7fb7%3A0x9e90e3e6333e6e5c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1692176743147!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full h-full border-none rounded-xl"


    ></iframe>
  </div>
</div>
  </div>
</div>
    </div>
  );
};

export default About;
