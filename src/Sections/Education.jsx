const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science and Engineering",
      college: "Avanthi Institute of Engineering and Technology",
      duration: "2021 – 2025",
   },
  ];

  return (
    <section id="education" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-left">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {edu.degree}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {edu.branch}
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400 mb-2">
              {edu.college}
            </p>
            <p className="italic text-gray-500 dark:text-gray-400 mb-4">
              {edu.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
