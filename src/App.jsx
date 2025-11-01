import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-blue-900
                    transition-colors duration-300 font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
