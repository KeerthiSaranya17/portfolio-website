const Experience = () => {
  const internships = [
    {
      role: "Frontend React Developer",
      company: "Innocito",
      duration: "June 2024 – August 2024",
      description:
        "Developed interactive React components, implemented OTP-based login using Redux Toolkit, and optimized UI with Tailwind CSS for a seamless user experience.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-left">
        {internships.map((exp, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {exp.role}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {exp.company} • <span className="italic">{exp.duration}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-200 shadow-sm hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
