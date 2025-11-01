import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Contact
      </h2>
      <div className="flex justify-center gap-10 mb-12">
        <a
          href="mailto:mutthakeerthisaranya@gmail.com"
          className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/muttha-keerthisaranya-b380ba287"
          target="_blank"
          className="text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KeerthiSaranya17"
          target="_blank"
          className="text-4xl text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
        >
          <FaGithub />
        </a>
      </div>

     
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Get In Touch 💬
        </h3>
        <form
          action="https://formspree.io/f/xnnoodlj" 
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
