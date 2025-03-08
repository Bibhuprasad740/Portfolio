const experiences = [
  {
    company: "Cobalt",
    location: "Remote, India",
    position: "Backend Developer",
    duration: "May 2024 – Present",
    type: "Full Time",
    responsibilities: [
      "Worked on multiple authentication flows like Basic, Oauth2.0 and Mixed authentication flows.",
      "Integrated 15+ third party apps like Humaans, GetResponse Twilio, Freshservice and many more end-to-end using Node, Express, Mongo.",
      "Worked on webhook listening methods to instantly update the client after some server operation.",
      "Worked on multiple pagination standards to paginate through the response data in case of huge response.",
      "Fixed multiple production bugs in apps like Intercom, Outreach, Freshdesk, Freshsales, Mailchimp",
      "Thoroughly understood of caching mechanism in backend using Redis server"
    ]
  },
  {
    company: "SUIIT",
    location: "Sambalpur, India",
    position: "Android Developer Intern",
    duration: "Feb 2022 – Nov 2022",
    type: "Internship",
    responsibilities: [
      "Developed a full stack android app using Flutter and Firebase for the alumni of the university with features like authentication, admin panel and user control.",
      "Smoothened state management using Provider package.",
      "Implemented a web compatible version of the app using Flutter Web."
    ]
  }
];

const Experience = () => {
  return (
    <section className="sm:px-6 lg:px-8 relative py-12">
      <style>{`
        @keyframes flowAnimation {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        
        .animate-flow {
          background: linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 1) 50%, rgba(249, 115, 22, 0.1) 100%);
          background-size: 200% 100%;
          animation: flowAnimation 3s linear infinite;
        }
      `}</style>

      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 relative">
        Experience
        <div className="absolute -bottom-5 left-0 w-24 h-1.5 bg-orange-600 rounded-full"></div>
      </h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-blue-300 dark:bg-gray-600 transform -translate-x-1/2"></div>

        {/* Animated Current Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 animate-flow transform -translate-x-1/2"></div>

        {/* Experiences */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 h-5 w-5 bg-orange-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Card */}
              <div
                className={`group bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-16' : 'md:ml-1/2 md:pl-16'
                  }`}
                style={{
                  width: 'calc(100% - 48px)',
                  maxWidth: '100%',
                  [index % 2 === 0 ? 'marginRight' : 'marginLeft']: 'auto'
                }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-orange-500 font-medium">{exp.position}</p>
                  </div>
                  <div className="md:text-right mt-4 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.location}</p>
                    <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
                    <p className="text-sm text-orange-500 font-medium mt-1">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-4 relative z-10">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-400 transition-transform duration-200 hover:translate-x-2"
                    >
                      <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Final Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 bottom-0 h-4 w-4 bg-orange-500 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;