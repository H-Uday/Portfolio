import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background large SVG */}
      <svg viewBox="0 0 800 400" className="absolute top-0 right-0 w-[800px] h-auto opacity-5 pointer-events-none -z-10">
        <circle cx="400" cy="200" r="300" fill="none" stroke="#00D1FF" strokeWidth="2" strokeDasharray="10 20" />
        <circle cx="400" cy="200" r="200" fill="none" stroke="#FFB800" strokeWidth="1" strokeDasharray="4 8" />
        <rect x="250" y="50" width="300" height="300" fill="none" stroke="#E2E8F0" strokeWidth="1" transform="rotate(45 400 200)" />
      </svg>

      <div className="flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-accent font-mono text-sm tracking-widest uppercase mb-4">Let's Build Something</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase font-display text-white">
            Initiate Contact<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.a 
          href="mailto:hanumanthuudaykiran30@gmail.com"
          className="relative group overflow-hidden border border-primary/50 bg-primary/5 px-8 py-6 mb-16 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="relative z-10 flex items-center gap-4">
            <Mail className="text-primary group-hover:text-white transition-colors" />
            <span className="font-mono text-lg md:text-xl text-white tracking-wider">hanumanthuudaykiran30@gmail.com</span>
          </div>
        </motion.a>

        <div className="flex gap-8 mb-16">
          <motion.a 
            href="https://www.linkedin.com/in/hanumanthu-uday-kiran-2a741b312" 
            target="_blank" rel="noopener noreferrer"
            className="p-4 border border-cardBorder hover:border-primary transition-colors hover:text-primary text-muted"
            whileHover={{ y: -5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>
          <motion.a 
            href="https://github.com/H-Uday" 
            target="_blank" rel="noopener noreferrer"
            className="p-4 border border-cardBorder hover:border-primary transition-colors hover:text-primary text-muted"
            whileHover={{ y: -5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </motion.a>
        </div>

        <motion.a
          href="/Hanumanthu_Uday_Kiran_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-12 py-4 border-2 border-primary overflow-hidden group flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          
          <span className="relative z-10 font-display font-bold uppercase tracking-widest text-primary group-hover:text-background transition-colors">
            Extract Data (Resume)
          </span>

          <svg width="24" height="24" viewBox="0 0 24 24" className="relative z-10 text-primary group-hover:text-background transition-colors" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 4L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
             <path d="M7 11L12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.a>
      </div>
      
      <div className="mt-32 text-center text-xs font-mono text-muted/50 uppercase tracking-widest">
        <p>Built by Hanumanthu Uday Kiran © {new Date().getFullYear()}</p>
        <p className="mt-2 text-[10px]">Generative Art Portfolio · React · Tailwind · Framer Motion</p>
      </div>
    </section>
  );
}
