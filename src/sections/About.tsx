import { motion } from 'framer-motion';

const TimelineSVG = () => (
  <svg viewBox="0 0 100 400" className="w-8 h-full absolute left-0 top-0 hidden md:block">
    <line x1="50" y1="0" x2="50" y2="400" stroke="#232D4E" strokeWidth="2" />
    <motion.line 
      x1="50" y1="0" x2="50" y2="400" 
      stroke="#00D1FF" 
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "circOut" }}
    />
    <circle cx="50" cy="50" r="6" fill="#0B1021" stroke="#00D1FF" strokeWidth="3" />
    <circle cx="50" cy="200" r="6" fill="#0B1021" stroke="#00D1FF" strokeWidth="3" />
    <circle cx="50" cy="350" r="6" fill="#0B1021" stroke="#00D1FF" strokeWidth="3" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          My Origin<span className="text-primary">.</span>
        </h2>
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
        <TimelineSVG />
        
        {/* Main Story */}
        <div className="md:col-span-8 md:pl-16 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg text-muted"
          >
            <p className="font-display text-2xl text-text leading-snug">
              I’ve always been fascinated by how small patterns in data can predict massive real-world outcomes.
            </p>
            <p>
              Whether it’s tracking retail trends or financial document decoding, I love the "Eureka!" moment when a complex dataset finally tells a story that helps a business grow. As a fresh Computer Science graduate and Data Analyst, I bridge the gap between raw data and full-stack development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 border border-cardBorder bg-card/30 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 -rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Superpower</h3>
              <p className="text-sm font-light">Identifying and cleaning "dirty" data that others overlook.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-cardBorder bg-card/30 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 -rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-accent font-mono text-xs tracking-widest uppercase mb-3">Life Philosophy</h3>
              <p className="text-sm font-light italic">"Do Your Karma, Don’t Wait For Results."<br/>— Shri Krishna</p>
            </motion.div>
          </div>
        </div>

        {/* Sidebar Quick Facts */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-4 space-y-6"
        >
          <div className="p-6 border border-cardBorder bg-card/50 backdrop-blur-md">
            <h3 className="text-white font-display text-xl mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-primary"></span>
              Data Readout
            </h3>
            
            <ul className="space-y-6">
              {[
                { label: "INIT", value: "2022 (Started Coding)" },
                { label: "LANG", value: "SQL, JavaScript, Python" },
                { label: "FOCUS", value: "Data Analytics" },
                { label: "LOC", value: "Hyderabad, India" },
                { label: "AUX", value: "Friends, Cricket, Travel" },
              ].map((fact, idx) => (
                <li key={idx} className="flex flex-col gap-1 border-b border-cardBorder/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-primary/70">{fact.label}</span>
                  <span className="text-sm text-text">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
