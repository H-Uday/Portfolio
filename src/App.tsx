import { useEffect } from 'react';
import Lenis from 'lenis';
import Cursor from './components/ui/Cursor';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import IntraPersonalEdge from './sections/IntraPersonalEdge';
import InterPersonalEdge from './sections/InterPersonalEdge';
import Certifications from './sections/Certifications';
import Now from './sections/Now';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-white">
      <div className="noise-overlay"></div>
      <div className="fixed inset-0 bg-grid pointer-events-none -z-10"></div>
      
      <Cursor />
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <IntraPersonalEdge />
        <InterPersonalEdge />
        <Certifications />
        <Now />
        <Contact />
      </main>
    </div>
  );
}

export default App;
