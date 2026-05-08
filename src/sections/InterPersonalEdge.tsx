import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Uday has a rare ability to stay calm during complex debugging sessions and always finds a data-driven solution.",
    author: "Classmate / Team Lead"
  },
  {
    quote: "Highly disciplined and technically sound, especially in database architecture.",
    author: "Mentor"
  }
];

export default function InterPersonalEdge() {
  return (
    <section className="relative py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-cardBorder/50">
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
          Inter-Personal Edge<span className="text-accent">.</span>
        </h2>
        <p className="text-muted font-mono text-sm uppercase tracking-widest">How I work with others</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 border border-cardBorder bg-background/50 relative"
          >
            <Quote className="absolute top-4 right-4 text-primary/20" size={48} />
            
            {/* Generative Corner Decor */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>

            <p className="text-lg font-display text-text leading-relaxed mb-6 italic relative z-10">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-muted/50"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {item.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
