import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: "Google Cloud GenAI Intern",
    company: "SmartBridge",
    period: "Dec 2025 – Feb 2026",
    desc: "Virtual internship focusing on Generative AI applications using Google Cloud."
  },
  {
    role: "Data Analytics Intern",
    company: "Vagnoore",
    period: "3 Months",
    desc: "Hands-on experience with data cleaning, visualization, and extracting actionable business insights."
  },
  {
    role: "Learner / Developer",
    company: "Infosys SpringBoard",
    period: "Ongoing",
    desc: "Gained expertise in SQL, Power BI, and Big Data Analytics through structured coursework."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-4 mb-24">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-center">
          Learning Journey<span className="text-accent">.</span>
        </h2>
        <div className="h-[1px] w-24 bg-accent"></div>
      </div>

      <div className="relative">
        {/* Main Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-cardBorder transform md:-translate-x-1/2"></div>
        
        <motion.div 
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary transform md:-translate-x-1/2 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        <div className="space-y-16 relative z-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block md:w-[45%]"></div>
              
              {/* Marker */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-none border-2 border-primary bg-background rotate-45"></div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}
              >
                <div className="p-6 border border-cardBorder bg-card/20 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                  <div className="text-accent font-mono text-xs tracking-widest mb-2 uppercase">{exp.period}</div>
                  <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                  <div className="text-primary text-sm mb-4 font-mono">@ {exp.company}</div>
                  <p className="text-muted text-sm font-light leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
