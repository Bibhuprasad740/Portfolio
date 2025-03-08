const skills = {
  Languages: ['C/C++', 'JavaScript', 'Python', 'Dart'],
  Technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Firebase', 'ChatGPT', 'Express.js', 'Git', 'Latex']
};

const Skills = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 relative">
        Skills
        <div className="absolute bottom-10 left-0 w-16 h-1 bg-orange-600 rounded-full"></div>
      </h2>
      <div className="section-card p-8 hover-card space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4">{category}:</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-800 text-orange-700 dark:text-gray-400 rounded-lg text-sm font-medium border border-orange-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;