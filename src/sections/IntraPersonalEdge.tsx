import { motion } from 'framer-motion';
import { useState } from 'react';

const Traits = [
  {
    name: 'Logical Reasoning',
    desc: 'Connecting disparate data points to form a cohesive narrative.',
    svg: (isActive: boolean) => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle cx="30" cy="50" r="5" fill="#00D1FF" animate={{ scale: isActive ? 1.5 : 1 }} />
        <motion.circle cx="70" cy="30" r="5" fill="#FFB800" animate={{ scale: isActive ? 1.5 : 1 }} />
        <motion.circle cx="60" cy="80" r="5" fill="#E2E8F0" animate={{ scale: isActive ? 1.5 : 1 }} />
        <motion.path 
          d="M30 50 L70 30 L60 80 Z" 
          fill="none" 
          stroke="#232D4E" 
          strokeWidth="2"
          animate={{ strokeDasharray: isActive ? "5 5" : "0 0", stroke: isActive ? "#00D1FF" : "#232D4E" }}
        />
      </svg>
    )
  },
  {
    name: 'Problem Solving',
    desc: 'Breaking down complex challenges into manageable, algorithmic steps.',
    svg: (isActive: boolean) => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.rect x="20" y="40" width="20" height="20" fill="none" stroke="#FFB800" strokeWidth="2" animate={{ rotate: isActive ? 90 : 0, transformOrigin: '30px 50px' }} />
        <motion.rect x="60" y="40" width="20" height="20" fill="none" stroke="#00D1FF" strokeWidth="2" animate={{ rotate: isActive ? -90 : 0, transformOrigin: '70px 50px' }} />
        <motion.path d="M45 50 L55 50" stroke="#E2E8F0" strokeWidth="2" animate={{ opacity: isActive ? 1 : 0.2 }} />
      </svg>
    )
  },
  {
    name: 'Curiosity',
    desc: 'Constantly exploring new tools and methodologies to stay ahead.',
    svg: (isActive: boolean) => (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.circle cx="50" cy="50" r="20" fill="none" stroke="#00D1FF" strokeWidth="2" animate={{ r: isActive ? 30 : 20 }} />
        <motion.circle cx="50" cy="50" r="10" fill="#FFB800" animate={{ scale: isActive ? 0.5 : 1 }} />
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#232D4E" strokeWidth="1" strokeDasharray="2 4" animate={{ rotate: isActive ? 180 : 0, transformOrigin: 'center' }} transition={{ duration: 2, ease: "linear" }} />
      </svg>
    )
  }
];

export default function IntraPersonalEdge() {
  const [activeTrait, setActiveTrait] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
          Intra-Personal Edge<span className="text-primary">.</span>
        </h2>
        <p className="text-muted font-mono text-sm uppercase tracking-widest">What Makes Me Human</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Traits.map((trait, idx) => (
          <motion.div 
            key={idx}
            className="border border-cardBorder bg-card/20 p-8 cursor-pointer relative overflow-hidden group"
            onMouseEnter={() => setActiveTrait(idx)}
            onMouseLeave={() => setActiveTrait(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mb-8 mx-auto">
                {trait.svg(activeTrait === idx)}
              </div>
              <h3 className="text-xl font-display text-white text-center mb-4">{trait.name}</h3>
              <p className="text-muted text-sm text-center font-light">{trait.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
