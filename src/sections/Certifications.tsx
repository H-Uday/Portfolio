import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const CERTS = [
  {
    title: "Infosys Springboard",
    topics: "SQL, Power BI, BDA",
    icon: Award
  },
  {
    title: "Google Cloud AI",
    topics: "Virtual Internship",
    icon: ShieldCheck
  }
];

export default function Certifications() {
  return (
    <section className="relative py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
          Certifications<span className="text-primary">.</span>
        </h2>
        <div className="h-[1px] w-24 bg-primary"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {CERTS.map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative w-full md:w-[400px] h-[200px] border border-cardBorder bg-card/10 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            
            <cert.icon className="w-12 h-12 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-display font-bold text-white relative z-10">{cert.title}</h3>
            <p className="text-muted font-mono text-sm relative z-10">{cert.topics}</p>
            
            {/* SVG Certificate Badge Pattern */}
            <svg viewBox="0 0 100 100" className="absolute right-[-20px] bottom-[-20px] w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#00D1FF" strokeWidth="2" strokeDasharray="5 5" />
              <polygon points="50,10 60,30 80,30 65,45 70,65 50,55 30,65 35,45 20,30 40,30" fill="none" stroke="#FFB800" strokeWidth="2" />
            </svg>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
