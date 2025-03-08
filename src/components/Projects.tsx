const projects = [
  {
    name: "Musicart",
    live: "https://musicart-frontend-omega.vercel.app",
    date: "Mar 2024",
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
    responsibilities: [
      "Crafted a food delivery website using React.js, Tailwind CSS, Redux, Firebase and Framer Motion for smooth animations.",
      "Implemented authentication with Google, to facilitate password less login.",
      "Users can order from the menu and the order is received in the firebase database."
    ]
  }
];

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 relative">
        Projects
        <div className="absolute bottom-10 left-0 w-20 h-1 bg-purple-600 rounded-full"></div>
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="section-card p-8 hover-card">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">{project.name}</h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" className="px-4 py-1 text-sm font-medium text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
                      Github
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" className="px-4 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      Live
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{project.date}</p>
            </div>
            <ul className="space-y-3 text-gray-700">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start dark:text-gray-400">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-600"></span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;