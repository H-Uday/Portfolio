import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Gemini Pro Financial Decoder',
    desc: 'Uses LLMs to parse and visualize complex financial statements (P&L, Cash Flow).',
    tech: ['Google GenAI', 'React.js', 'Node.js'],
    live: 'https://uday-financial-decoder.streamlit.app/',
    code: 'https://github.com/H-Uday/Gemini-Pro-Financial-Decoder-Transforming-Complex-Data-into-Actionable-Insights',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#00D1FF" strokeWidth="2" strokeDasharray="4" />
        <path d="M30 70 L50 40 L60 50 L80 20" fill="none" stroke="#FFB800" strokeWidth="3" />
        <circle cx="80" cy="20" r="4" fill="#00D1FF" />
      </svg>
    )
  },
  {
    title: 'Home Inventory & Warranty Tracker',
    desc: 'A full-stack solution to manage household assets and expiration alerts.',
    tech: ['React.js', 'MySQL', 'Express'],
    live: '#',
    code: 'https://github.com/H-Uday/Home-Inventory-Waranty-Tracker',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
        <polygon points="50,20 80,40 80,80 20,80 20,40" fill="none" stroke="#00D1FF" strokeWidth="2" />
        <line x1="30" y1="50" x2="70" y2="50" stroke="#FFB800" strokeWidth="2" strokeDasharray="2" />
        <line x1="30" y1="65" x2="60" y2="65" stroke="#FFB800" strokeWidth="2" strokeDasharray="2" />
      </svg>
    )
  },
  {
    title: 'Walmart Retail Data Analytics',
    desc: 'End-to-end SQL analysis of retail trends to optimize inventory management.',
    tech: ['MySQL', 'Python', 'Power BI'],
    live: '#',
    code: 'https://github.com/H-Uday/walmart_test',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
        <circle cx="50" cy="50" r="30" fill="none" stroke="#00D1FF" strokeWidth="2" />
        <path d="M50 20 A30 30 0 0 1 80 50 L50 50 Z" fill="#FFB800" fillOpacity="0.5" />
        <line x1="10" y1="90" x2="90" y2="90" stroke="#232D4E" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Generative AI Portfolio',
    desc: 'An interactive, generative art portfolio using React, Framer Motion, and GSAP.',
    tech: ['React.js', 'Framer Motion', 'TailwindCSS'],
    live: '#',
    code: '#',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
        <circle cx="50" cy="50" r="35" fill="none" stroke="#232D4E" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="40" y="40" width="20" height="20" fill="none" stroke="#00D1FF" strokeWidth="2" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="5" fill="#FFB800" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          What I've Built<span className="text-primary">.</span>
        </h2>
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative border border-cardBorder bg-card/20 backdrop-blur-sm overflow-hidden"
          >
            {/* Hover Glitch Effect Background */}
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="w-full h-40 mb-8 border border-cardBorder/50 bg-background/50 flex items-center justify-center p-4">
                {project.svg}
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-card border border-cardBorder text-primary/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto border-t border-cardBorder/50 pt-4">
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} /> LIVE
                </a>
                <a
                  href={project.code}
                  className="flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-primary transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> CODE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
