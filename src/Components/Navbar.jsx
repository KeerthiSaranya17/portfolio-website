import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {

  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">Keerthi<span className="text-gray-900 dark:text-gray-100">.dev</span></h1>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-500 transition">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
