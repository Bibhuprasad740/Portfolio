const Education = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 relative">
        Education
        <div className="absolute bottom-10 left-0 w-20 h-1 bg-green-600 rounded-full"></div>
      </h2>
      <div className="section-card p-8 hover-card">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mb-2">Sambalpur University Institute of Information Technology</h3>
            <p className="text-lg text-green-600 font-medium">B.Tech in Computer Science</p>
          </div>
          <div className="md:text-right mt-4 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400 font-medium">Sambalpur, India</p>
            <p className="text-gray-500">Aug 2019 – Jun 2023</p>
            <p className="text-lg font-semibold text-green-600">CGPA: 8.1/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;