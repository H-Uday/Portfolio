import { motion } from 'framer-motion';

const NameSVG = () => (
  <svg viewBox="0 0 800 200" className="w-full max-w-5xl h-auto" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#00D1FF" />
        <stop offset="100%" stopColor="#00D1FF" stopOpacity="0.2" />
      </linearGradient>
      <pattern id="dotGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#FFB800" fillOpacity="0.3" />
      </pattern>
    </defs>
    
    <text 
      x="50%" 
      y="50%" 
      textAnchor="middle" 
      dominantBaseline="middle"
      fill="url(#textGrad)"
      className="font-display font-bold uppercase text-[70px] tracking-tighter"
      style={{ WebkitUserSelect: 'none' }}
    >
      Hanumanthu Uday Kiran
    </text>
    <text 
      x="50%" 
      y="50%" 
      textAnchor="middle" 
      dominantBaseline="middle"
      fill="url(#dotGrid)"
      className="font-display font-bold uppercase text-[70px] tracking-tighter mix-blend-overlay"
      style={{ WebkitUserSelect: 'none' }}
    >
      Hanumanthu Uday Kiran
    </text>
  </svg>
);

const AbstractAvatar = () => (
  <motion.svg 
    viewBox="0 0 200 200" 
    className="w-48 h-48 md:w-64 md:h-64 mb-8"
    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
    animate={{ rotate: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    {/* Geometric Generative Art Avatar for "The Pragmatic Visionary" */}
    <motion.circle 
      cx="100" cy="100" r="90" 
      fill="none" 
      stroke="#232D4E" 
      strokeWidth="2" 
      strokeDasharray="4 8"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
    <motion.rect 
      x="50" y="50" width="100" height="100" 
      fill="none" 
      stroke="#00D1FF" 
      strokeWidth="3"
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: 'center' }}
    />
    <motion.path 
      d="M100 20 L180 100 L100 180 L20 100 Z" 
      fill="none" 
      stroke="#FFB800" 
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <circle cx="100" cy="100" r="10" fill="#00D1FF" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 4" />
  </motion.svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 pt-24 pb-8">
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <AbstractAvatar />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <NameSVG />
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-4 max-w-2xl"
        >
          <div className="inline-block px-4 py-1 border border-primary/20 bg-primary/5 text-primary text-sm tracking-widest mb-6 uppercase">
            The Pragmatic Visionary
          </div>
          <h2 className="text-xl md:text-2xl text-muted font-light leading-relaxed">
            Turning <span className="text-white line-through decoration-accent decoration-2">chaotic datasets</span> into clear, actionable business narratives.
          </h2>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col items-center gap-4 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-muted uppercase">Initiate Scroll</span>
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="#232D4E" strokeWidth="2"/>
          <motion.rect 
            x="10" y="6" width="4" height="8" rx="2" fill="#00D1FF"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
