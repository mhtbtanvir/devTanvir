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
};

const Projects = () => {
  return (
    <div className="relative container mx-auto bg-aqua/5 p-10 rounded-2xl shadow-2xl mt-30 ">
      {/* Uncomment Particles component below if you want animated background particles */}
      {/* 
      <Particles
          className='absolute inset-0 -z-10'
          quantity={1000}
          ease={80}
          color={"#ffffff"}
      /> 
      */
      
      }

      {/* Section Title */}
      <div className=" text-center">
        <p className="mb-5 uppercase text-3xl font-serif font-bold tracking-widest text-white text-center drop-shadow-md">
          Featured Projects
        </p>
       
      

      {/* Introductory paragraph */}
      <p className=" text-base text-white/60 italic tracking-wide mb-8 max-w-xl mx-auto">
        I try to transform my ideas into engaging digital experiences. Each project is built with love, passion, and obsession.
      </p>
      </div>

      {/* Projects grid - 1 column on small screens, 3 columns on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-800/60 overflow-hidden flex flex-col items-center justify-around border
             border-gray-400/50 rounded-3xl
              shadow-lg hover:shadow-lavender/50 transition-shadow p-6"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-serif  text-amber-50 font-semibold -mt-1 mb-3">
              {project.title}
            </h3>

            {/* Decorative horizontal divider */}
              <div
                className="w-[calc(100%+48px)] -mx-6 h-[0.5px]
                bg-gradient-to-r from-neutral-600
              via-neutral-300 to-neutral-600 mb-5"
              />

            {/* Tags / Tech used */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="flex items-center gap-2 bg-gray-600 px-2 py-1 rounded text-sm text-white"
                >
                  <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-center rounded-xl mb-4"
            />

            {/* Project Sub-description (bullet points) */}
            <ul className="text-gray-400 text-sm space-y-2 mb-4">
              {project.subDescription.map((sub, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src={icons.checkcircle} alt="check" className="w-4 h-4 mt-1" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>

            {/* Action buttons: Live site and GitHub repo */}
            <div className="flex gap-4 justify-around md:justify-between w-full">
              {project.livhref && (
                <a
                  href={project.livhref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-white hover:text-white border border-lavender/50 hover:bg-royal/30 text-md px-5 py-1.5 rounded-lg transition w-full md:w-auto"
                >
                  Live
                </a>
              )}
              {project.githref && (
                <a
                  href={project.githref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-3 text-white hover:text-white border border-lavender/50 hover:bg-royal/30 text-md px-5 py-1.5 rounded-lg transition w-full md:w-auto"
                >
                  <img src={icons.github} alt="GitHub" className="w-4 h-4" />
                  <p>GitHub</p>
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
