import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Now() {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div 
        className="border border-primary/30 bg-[#0A0D18] rounded-none overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Terminal Header */}
        <div className="bg-[#1A2235] px-4 py-2 border-b border-primary/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-widest">
            <Terminal size={14} /> /NOW_STATUS
          </div>
          <div className="text-muted font-mono text-[10px] tracking-widest animate-pulse">
            LIVE_DATA
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-sm space-y-6">
          <div className="flex flex-col gap-2">
             <span className="text-primary/50 text-xs">01 // CURRENTLY BUILDING</span>
             <div className="flex items-start gap-3">
               <span className="text-accent">{'>'}</span>
               <span className="text-white">Creating AI generated Portfolio</span>
             </div>
          </div>

          <div className="flex flex-col gap-2">
             <span className="text-primary/50 text-xs">02 // CURRENTLY READING</span>
             <div className="flex items-start gap-3">
               <span className="text-accent">{'>'}</span>
               <span className="text-white">Storytelling with Data & Data Analytics</span>
             </div>
          </div>

          <div className="flex flex-col gap-2">
             <span className="text-primary/50 text-xs">03 // CURRENTLY DREAMING ABOUT</span>
             <div className="flex items-start gap-3">
               <span className="text-accent">{'>'}</span>
               <span className="text-white">Leading A Data Analyst Team From a Well Known Company</span>
             </div>
          </div>

          <div className="pt-6 border-t border-cardBorder flex items-center justify-between text-xs">
            <span className="text-muted">Last_Updated:</span>
            <span className="text-primary">{time}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
