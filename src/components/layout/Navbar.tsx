import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-6 md:px-12 backdrop-blur-sm"
    >
      <div className="font-display font-bold text-xl text-primary tracking-tighter">
        H-Uday<span className="text-accent">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted">
        <a href="#about" className="hover:text-primary transition-colors">Origin</a>
        <a href="#skills" className="hover:text-primary transition-colors">Arsenal</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#experience" className="hover:text-primary transition-colors">Journey</a>
      </div>

      <a 
        href="/Hanumanthu_Uday_Kiran_Resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative group px-6 py-2 border border-primary/30 rounded-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        <span className="relative z-10 text-sm font-bold tracking-wider group-hover:text-background transition-colors duration-300">
          RESUME
        </span>
      </a>
    </motion.nav>
  );
}
