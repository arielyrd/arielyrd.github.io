import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Experience from './components/Home/Experience';
import Resume from './components/Home/Resume';
import Contact from './components/Home/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;