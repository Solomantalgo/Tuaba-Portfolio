import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import FAB from './components/FAB';
import './index.css';

function App() {
  useEffect(() => {
    // Simple reveal animation observer
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </>
  );
}

export default App;
