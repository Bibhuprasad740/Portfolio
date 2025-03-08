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
    <section className="sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 relative">
        Experience
        <div className="absolute bottom-10 left-0 w-24 h-1.5 bg-orange-600 rounded-full"></div>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-card transition-shadow duration-300 checkerboard-pattern"
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
            <ul className="space-y-4">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-700 dark:text-gray-400 transition-transform duration-200 hover:translate-x-2"
                >
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400"></span>
                  {resp}
                </li>
              ),)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;