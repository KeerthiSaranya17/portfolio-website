const Projects = () => {
  const miniProjects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive shopping platform with cart, product filters, and checkout using React and Tailwind CSS.",
      tech: ["React", "JavaScript"],
      image:
        "https://images04.nicepage.com/feature/5767957/e-commerce-cms-plugin-.jpg",
      githud: "https://github.com/KeerthiSaranya17/Ecommerce-Website",
      // demo: "ndfkudhg",
    },
    {
      title: "Dishcovey",
      description:
        "A recipe explorer app with search and API integration to browse delicious dishes easily.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      image:
        "https://www.plantoeat.com/wp-content/uploads/2025/02/mobile-and-laptop-screenshot-devices-dark-1.webp",
      githud: "https://github.com/KeerthiSaranya17/Dishcovery",
      demo: "https://4lrvsd-5173.csb.app/",
    },
    {
      title: "Memory Game",
      description:
        "A fun and interactive card-flipping memory game built with HTML, CSS, JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/002/416/083/small/memory-game-for-kids-free-vector.jpg",
      githud: "https://github.com/KeerthiSaranya17/Memory-Game-",
      // demo : "fghj",
    },
    {
      title: "Signsense",
      description:
        "An AI-powered web application that translates sign language gestures into readable text for inclusive communication.",
      tech: ["Node.js", "Tailwind CSS", "MySQL"],
      image:
        "https://www.bioeng.ucla.edu/wp-content/uploads/bioeng/200630063233-restricted-03-sign-language-glove-exlarge-169.jpg",
      githud: "https://github.com/KeerthiSaranya17/Signsense-Project",
      // demo: "fghj",
    },
    {
      title: "Hotel website",
      description:
        "A responsive hotel booking website featuring room details, gallery, and contact form built using React and Tailwind CSS.",
      tech: ["React", "Javascript"],
      image:
        "https://img.freepik.com/free-vector/flat-landing-page-template-hotel-accommodation_23-2150312508.jpg",
      githud: "https://github.com/KeerthiSaranya17",
      demo: "https://c676qy-5173.csb.app/",
    },
  ];
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjects.map((project, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl pb-8 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
          >
            <div>
              <img src={project.image} className="w-full h-48" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="pr-8 pl-8 text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
            </div>
            <div className="">
              <div className="flex flex-wrap pl-8 pr-8 gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-200 shadow-sm hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex pl-8 gap-2">
                <a
                  href={project.githud}
                  target="blank"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
                >
                  github
                </a>
                {project.demo && (
                <a
                  href={project.demo}
                  target="blank"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
                >
                  Demo
                </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
