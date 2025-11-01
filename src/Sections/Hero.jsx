import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-[90vh] text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Keerthi Saranya 👋
      </motion.h1>
      <motion.p
        className="text-xl text-gray-400 dark:text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer | Web Developer | Full Stack web Developer
      </motion.p>

      <a
  href="https://drive.google.com/file/d/1eKNkiW57lpGPJRxOaX6KSdASYHyDvz9u/view?usp=sharing"
  target="blank"
  download="Keerthi_Saranya_Resume.pdf"
  className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
>
  📄 Download Resume
</a>

      <div
        className="flex gap-6 text-5xl text-gray-600 dark:text-gray-300 mt-[40px]"
      >
        <a href="https://github.com/KeerthiSaranya17" target="blank" className="cursor-pointer" ><FaGithub className="text-blue-500" /></a>
        <a href="https://www.linkedin.com/in/muttha-keerthisaranya-b380ba287" target="blank" className="cursor-pointer"><FaLinkedin className="text-green-500" /></a>
        <a href="mailto:mutthakeerthisaranya@gmail.com" className="cursor-pointer" ><FaEnvelope className="text-yellow-500" /></a>
      </div>
    </section>
  );
}

export default Hero;
