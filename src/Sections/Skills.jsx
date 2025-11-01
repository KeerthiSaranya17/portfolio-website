import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-indigo-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      // { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray-200" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "Others",
    skills: [
       { name: "Prompt Engineering", icon: <FaReact className="text-purple-400" /> },
      { name: "Problem Solving", icon: <FaDatabase className="text-pink-400" /> },
      // { name: "Communication", icon: <FaDatabase className="text-green-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-gray-900 dark:text-gray-100 px-6">
      <h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800"
            
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-500 text-center">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <divS
                  key={index}
                  className="flex w-ful items-center gap-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition "
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-base font-medium">{skill.name}</span>
                </divS>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
