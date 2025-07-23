import React from 'react';
import { myProjects } from '../constants';
import { Particles } from '../components/Particles';
import { g } from 'framer-motion/client';
const icons = {
    react: "/assets/logos/react.svg",
    tailwindcss: "/assets/logos/tailwindcss.svg",
    vite: "/assets/logos/vite.svg",
    threejs: "/assets/logos/threejs.svg",
    csharp: "/assets/logos/csharp.svg",
    dotnet: "/assets/logos/dotnet.svg",
    efcore: "/assets/logos/efcore.svg",
    sqlserver: "/assets/logos/sqlserver.svg",
    git: "/assets/logos/git.svg",
    github: "/assets/socials/github-mark-white.svg",
    vscode: "/assets/logos/vscode.svg",
    azure: "/assets/logos/azure.svg",
    stripe: "/assets/logos/stripe.svg",
    auth0: "/assets/logos/auth0.svg",
  
}
const Projects = () => {
  return (
    <div className="relative container mx-auto bg-aqua/5 p-10  rounded-2xl shadow-2xl mt-30 ">
        <Particles
            className='absolute inset-0 -z-10'
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh/>

 <h2 className="text-4xl mb-4 font-semibold tracking-wide text-center text-gray-100 drop-shadow-lg font-serif">
  Featured Projects
</h2>


<p className="text-center text-base text-white/60 italic tracking-wide mb-8 max-w-xl mx-auto">
  Explore how I’ve transformed ideas into engaging digital experiences. Each project built with love, passion, and obsession.
</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            //bg-[#0f0f34]} 
        className=" bg-[#07071a] border border-lavender/20 rounded-2xl shadow-lg hover:shadow-blue-100 transition-shadow p-6 flex flex-col"
          >
            <h3 className="text-2xl text-amber-50 font-semibold -mt-1 mb-3">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="flex items-center gap-2 bg-black/30 px-2 py-1 rounded text-sm text-white"
                >
                  <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                  {tag.name}
                </span>
              ))}
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <p className="text-gray-300 mb-3">{project.description}</p>

            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
              {project.subDescription.map((sub, index) => (
                <li key={index}>{sub}</li>
              ))}
            </ul>

            <div className="mt-auto flex gap-4">

             {project.livhref && (
        <a
            href={project.livhref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center text-white hover:text-white border
             border-lavender/50 hover:bg-royal/30
             text-md px-5 py-1.5 rounded-lg  transition"
        >
            Live Demo
                </a>
                )}
                {project.githref && (
                <a
                    href={project.githref}
                    target="_blank"
                    rel="noopener noreferrer"

                    className=" flex gap-8 items-center w-full text-center text-white hover:text-white
                     border
                        border-royal/30 hover:bg-gray-800
                         text-md px-5 py-1.5 rounded-lg  transition">
                        <img src={icons.github} alt="GitHub" className="w-4 h-4" />
                    GitHub
                </a>
        )}

                    </div>
                </div>
                ))}
            </div>
    </div>
  );
};

export default Projects;
