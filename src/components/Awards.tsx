const awards = [
  {
    title: "LeetCode",
    description: "Solved 380+ questions on Leetcode and achieved 1450+ contest rating.",
    date: "Nov, 2023",
    link: "https://leetcode.com/u/19btcse09"
  },
  {
    title: "TechGig Code Gladiators Finalist",
    description: "Semi finalist among the top 2400 participants to be shortlisted to the final round.",
    date: "Sept, 2023",
    link: "https://www.techgig.com/codegladiators/event-result?round=semifinal"
  },
  {
    title: "Institute Rank 12 at Geeksforgeeks",
    description: "400+ coding scores with more than 150 problem solved obtaining an institute rank 12 at Geeksforgeeks.",
    date: "Sept, 2023",
    link: "https://auth.geeksforgeeks.org/user/19btcse09/practice"
  },
  {
    title: "Android Developer Certificate",
    description: "Certified by IIT Bhubaneswar for participating in the android development workshop.",
    date: "Jan, 2020",
    link: "https://drive.google.com/file/u/2/d/1mMUZaU0xvSaIFDX12v1_aeoYw9xY3l95/view"
  },
  {
    title: "HackerRank Problem Solver",
    description: "Awarded for clearing problem solving round of hackerrank.",
    date: "Jan, 2020",
    link: "https://www.hackerrank.com/certificates/c4970491d0dc"
  }
];

const Awards = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 relative">
        Awards & Achievements
        <div className="absolute -bottom-5 left-0 w-20 h-1 bg-pink-600 rounded-full"></div>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="section-card p-6 dark:bg-gray-900 hover-card">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">{award.title}</h3>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400 text-sm">{award.date}</span>
                <a href={award.link} target="_blank" className="px-3 py-1 text-sm font-medium text-pink-600 border border-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300">
                  Link
                </a>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;