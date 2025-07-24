import React from 'react';
import { myProjects } from '../constants';
import { Particles } from '../components/Particles';

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
    checkcircle : "/assets/cb (1).png",
  
}
const Projects = () => {
  return (
    <div className="relative container mx-auto bg-aqua/5 p-10  rounded-2xl shadow-2xl mt-30 ">
        <Particles
            className='absolute inset-0 -z-10'
            quantity={1000}
            ease={80}
            color={"#ffffff"}
            />
            <div className='flex justify-center'>
            <p className="mb-5 uppercase text-2xl font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent text-center ">
                Featured Projects
            </p>
            </div>


<p className="text-center text-base text-white/60 italic tracking-wide mb-8 max-w-xl mx-auto">
  I try to transforme my ideas into engaging digital experiences. Each project is built with love, passion, and obsession.
</p>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            //bg-[#0f0f34]}   
            //bg-[#07071a]
        className=" relative bg-gray-800  overflow-hidden items-center justify-around border border-lavender/30 rounded-3xl shadow-lg  hover:shadow-lavender/50 transition-shadow p-6 flex flex-col"
          >
            <h3 className="text-2xl font-serif text-amber-50 font-semibold -mt-1 mb-3">
              {project.title}

            </h3>
            <div className="w-full h-[1px] bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-5" />

            

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
              className="w-full h-56 object-center rounded-xl mb-4"
            />

            {/* <p className="text-gray-300 mb-3">{project.description}</p> */}

            <ul className="text-gray-400 text-sm space-y-2 mb-4">
  {project.subDescription.map((sub, index) => (
    <li key={index} className="flex items-start gap-2">
      <img src={icons.checkcircle} alt="check" className="w-4 h-4 mt-1" />
      <span>{sub}</span>
    </li>
  ))}
</ul>


     <div className="flex gap-4 justify-around md:justify-between w-full">
  {project.livhref && (
    <a
      href={project.livhref}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center text-white hover:text-white border
       border-lavender/50 hover:bg-royal/30
       text-md px-5 py-1.5 rounded-lg transition w-full md:w-auto"
    >
      Live
    </a>
  )}
  {project.githref && (
    <a
      href={project.githref}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center gap-3 text-white hover:text-white border
       border-lavender/50 hover:bg-royal/30
       text-md px-5 py-1.5 rounded-lg transition w-full md:w-auto"
    >
      <img src={icons.github} alt="GitHub" className="w-4 h-4" />
      <p>GitHub </p>
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
