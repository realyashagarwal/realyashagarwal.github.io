import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <div id="experience" className="bg-white">
          <Experience />
        </div>
        <div id="projects" className="bg-slate-50">
          <Projects />
        </div>
        <div id="skills" className="bg-white">
          <Skills />
        </div>
        <div id="education" className="bg-slate-50">
          <Education />
        </div>
        <div id="certifications" className="bg-white">
          <Certifications />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;