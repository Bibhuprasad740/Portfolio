import React, { useState } from 'react';

const projects = [
  {
    name: "Musicart",
    live: "https://musicart-frontend-omega.vercel.app",
    date: "Mar 2024",
    color: "#8B5CF6", // Purple
    icon: "🎵",
    responsibilities: [
      "Engineered a full-stack, fully responsive e-commerce platform with React.js, Node.js, Express, and MongoDB, featuring JWT authentication for user security.",
      "Developed dynamic product pages with advanced filtering and sorting options, streamlined checkout process, order success feedback.",
      "Designed intuitive feedback mechanisms to gather user input."
    ]
  },
  {
    name: "Pro Manager",
    live: "https://pro-manager-frontend-kappa.vercel.app",
    date: "Feb 2024",
    color: "#10B981", // Green
    icon: "✅",
    responsibilities: [
      "Pro Manager is a task management website built with MERN Stack.",
      "The website offers authentication using Json Web Tokens, state persistence using Redux.",
      "Users can do all CRUD operations on the tasks they create and see the overview in the analytics section.",
      "Users can create a shareable link of the tasks which then does not need authentication to open.",
      "Password change functionality allows users to update their old password."
    ]
  },
  {
    name: "Delicious",
    github: "https://github.com/Bibhuprasad740/Delicious",
    live: "https://delicious-khaki.vercel.app",
    date: "Dec 2023",
    color: "#F59E0B", // Amber
    icon: "🍕",
    responsibilities: [
      "Crafted a food delivery website using React.js, Tailwind CSS, Redux, Firebase and Framer Motion for smooth animations.",
      "Implemented authentication with Google, to facilitate password less login.",
      "Users can order from the menu and the order is received in the firebase database."
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative mb-16 flex items-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Projects
        </h2>
        <div className="ml-6 h-px flex-1 bg-gradient-to-r from-purple-600 to-transparent dark:from-purple-400"></div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group "
          >

            {/* Card Content */}
            <div className="bg-white hover-card dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full text-xl"
                    style={{ backgroundColor: `${project.color}25` }}
                  >
                    {project.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold transition-colors duration-300 dark:text-gray-300"
                    style={{ color: activeProject === index ? project.color : null }}
                  >
                    {project.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 sm:justify-end w-full sm:w-auto">
                  <span className="px-4 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {project.date}
                  </span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-1 text-sm font-medium border rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
                      style={{
                        borderColor: project.color,
                        color: project.color,
                      }}
                    >
                      <span className="text-xs">GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="px-4 py-1 text-sm font-medium text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105"
                      style={{ backgroundColor: project.color }}
                    >
                      <span className="text-xs">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-4">
                {project.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 dark:text-gray-300 relative pl-6 group/item"
                  >
                    <span
                      className="absolute left-0 top-2 h-2 w-2 rounded-full transition-all duration-300 group-hover/item:scale-150"
                      style={{ backgroundColor: project.color }}
                    ></span>
                    <p className="transition-all duration-300 group-hover/item:translate-x-1">
                      {resp}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;