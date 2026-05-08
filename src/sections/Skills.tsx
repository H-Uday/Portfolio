// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Database, BarChart3, Code2, TerminalSquare, Server, Cpu, BoxSelect, Workflow } from 'lucide-react';

// const SKILLS = [
//   { name: 'SQL', level: 5, category: 'Languages', icon: Database, color: '#00D1FF' },
//   { name: 'Power BI', level: 4, category: 'Tools', icon: BarChart3, color: '#FFB800' },
//   { name: 'React.js', level: 4, category: 'Frameworks', icon: Code2, color: '#00D1FF' },
//   { name: 'Python', level: 4, category: 'Languages', icon: TerminalSquare, color: '#FFB800' },
//   { name: 'Big Data Analytics', level: 4, category: 'Domain', icon: BoxSelect, color: '#00D1FF' },
//   { name: 'GenAI Prompting', level: 4, category: 'Domain', icon: Cpu, color: '#FFB800' },
//   { name: 'MongoDB', level: 3, category: 'Tools', icon: Server, color: '#00D1FF' },
//   { name: 'Node.js', level: 3, category: 'Frameworks', icon: Workflow, color: '#FFB800' },
// ];

// export default function Skills() {
//   const [hoveredSkill, setHoveredSkill] = useState<typeof SKILLS[0] | null>(null);

//   return (
//     <section id="skills" className="relative min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
//       <div className="flex flex-col items-end gap-4 mb-16 text-right">
//         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
//           My Arsenal<span className="text-accent">.</span>
//         </h2>
//         <div className="h-[1px] w-full max-w-md bg-gradient-to-l from-accent/50 to-transparent"></div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
//         {/* Hexagonal Chart Area */}
//         <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
//           {/* Background Guide Lines */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeDasharray="1 3" />
//             <circle cx="50" cy="50" r="25" fill="none" stroke="#E2E8F0" strokeDasharray="1 3" />
//             <line x1="50" y1="10" x2="50" y2="90" stroke="#E2E8F0" strokeDasharray="1 3" />
//             <line x1="10" y1="50" x2="90" y2="50" stroke="#E2E8F0" strokeDasharray="1 3" />
//           </svg>

//           {SKILLS.map((skill, idx) => {
//             const angle = (idx / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
//             const radius = 180; // Distance from center
//             const x = Math.cos(angle) * radius;
//             const y = Math.sin(angle) * radius;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
//                 className="absolute"
//                 style={{ transform: `translate(${x}px, ${y}px)` }}
//                 onMouseEnter={() => setHoveredSkill(skill)}
//                 onMouseLeave={() => setHoveredSkill(null)}
//               >
//                 <div 
//                   className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-none border backdrop-blur-md cursor-crosshair transition-colors duration-200 ${
//                     hoveredSkill?.name === skill.name ? 'border-white bg-white/10' : 'border-cardBorder bg-card/50'
//                   }`}
//                 >
//                   <skill.icon size={24} color={skill.color} strokeWidth={1.5} />
//                 </div>
//               </motion.div>
//             );
//           })}

//           {/* Center Hub */}
//           <div className="absolute w-24 h-24 border-2 border-primary/30 flex items-center justify-center rotate-45 bg-background z-10">
//             <div className="w-16 h-16 border border-accent/50 flex items-center justify-center bg-card/80">
//                <span className="font-mono text-xs -rotate-45 text-muted">CORE</span>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Readout Panel */}
//         <div className="w-full lg:w-1/3 min-h-[250px]">
//           <AnimatePresence mode="wait">
//             {hoveredSkill ? (
//               <motion.div
//                 key={hoveredSkill.name}
//                 initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
//                 animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
//                 exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
//                 transition={{ duration: 0.2 }}
//                 className="p-8 border border-primary/20 bg-card/40 backdrop-blur-md"
//               >
//                 <div className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">{hoveredSkill.category}</div>
//                 <h3 className="text-3xl font-display font-bold text-white mb-6">{hoveredSkill.name}</h3>

//                 <div className="space-y-2">
//                   <div className="flex justify-between text-xs font-mono text-muted">
//                     <span>Proficiency</span>
//                     <span>{hoveredSkill.level}/5</span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((level) => (
//                       <div 
//                         key={level} 
//                         className={`h-2 flex-1 ${level <= hoveredSkill.level ? 'bg-primary' : 'bg-cardBorder'}`}
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="empty"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="h-full flex items-center justify-center border border-cardBorder/30 p-8 border-dashed"
//               >
//                 <p className="text-muted font-mono text-sm uppercase text-center tracking-widest">
//                   Hover over a node <br/>to view telemetry
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BarChart3, Code2, TerminalSquare, Server, Cpu, BoxSelect, Workflow } from 'lucide-react';

const SKILLS = [
  { name: 'SQL', level: 5, category: 'Languages', icon: Database, color: '#00D1FF' },
  { name: 'Power BI', level: 4, category: 'Tools', icon: BarChart3, color: '#FFB800' },
  { name: 'React.js', level: 4, category: 'Frameworks', icon: Code2, color: '#00D1FF' },
  { name: 'Python', level: 4, category: 'Languages', icon: TerminalSquare, color: '#FFB800' },
  { name: 'Big Data', level: 4, category: 'Domain', icon: BoxSelect, color: '#00D1FF' },
  { name: 'GenAI', level: 4, category: 'Domain', icon: Cpu, color: '#FFB800' },
  { name: 'MongoDB', level: 3, category: 'Tools', icon: Server, color: '#00D1FF' },
  { name: 'Node.js', level: 3, category: 'Frameworks', icon: Workflow, color: '#FFB800' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<typeof SKILLS[0] | null>(null);

  // Generate points for the radar polygon based on skill levels
  const radarPoints = SKILLS.map((skill, idx) => {
    const angle = (idx / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
    // Scale the level (1-5) to a percentage of the radius (max 40 units in SVG viewbox)
    const r = (skill.level / 5) * 40;
    const x = 50 + Math.cos(angle) * r;
    const y = 50 + Math.sin(angle) * r;
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id="skills" className="relative min-h-screen py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-visible">
      <div className="flex flex-col items-end gap-4 mb-16 text-right">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
          My Arsenal<span className="text-cyan-400">.</span>
        </h2>
        <div className="h-[1px] w-full max-w-md bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-center justify-center">
        {/* Hexagonal Chart Area */}
        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">

          {/* THE SVG RADAR WEB */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
            {/* Background Grid Circles */}
            {[20, 30, 40].map((r) => (
              <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="gray" strokeWidth="0.2" strokeDasharray="1" className="opacity-30" />
            ))}

            {/* The Dynamic Skill Shape */}
            <motion.polygon
              points={radarPoints}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              fill="rgba(0, 209, 255, 0.2)"
              stroke="#00D1FF"
              strokeWidth="0.5"
            />
          </svg>

          {/* Skill Nodes (Icons) */}
          {SKILLS.map((skill, idx) => {
            const angle = (idx / SKILLS.length) * Math.PI * 2 - Math.PI / 2;
            // Radius 160 works better for a 400px container
            const radius = 150;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="absolute z-20"
                style={{ x, y }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border backdrop-blur-xl cursor-pointer transition-all duration-300 ${hoveredSkill?.name === skill.name ? 'border-cyan-400 bg-cyan-400/20 scale-110' : 'border-white/10 bg-white/5'
                  }`}
                >
                  <skill.icon size={22} color={skill.color} />
                </div>
              </motion.div>
            );
          })}

          {/* Center Hub */}
          <div className="absolute w-16 h-16 border border-white/20 flex items-center justify-center rotate-45 bg-slate-900 z-10 shadow-[0_0_30px_rgba(0,209,255,0.2)]">
            <span className="font-mono text-[10px] -rotate-45 text-cyan-400 font-bold tracking-tighter">CORE</span>
          </div>
        </div>

        {/* Dynamic Readout Panel */}
        <div className="w-full lg:w-80">
          <AnimatePresence mode="wait">
            {hoveredSkill ? (
              <motion.div
                key={hoveredSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-6 border border-white/10 bg-white/5 backdrop-blur-lg"
              >
                <div className="text-[10px] font-mono text-cyan-400 mb-1 uppercase tracking-[0.2em]">{hoveredSkill.category}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{hoveredSkill.name}</h3>

                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-mono text-gray-400 uppercase">
                    <span>Expertise</span>
                    <span>{hoveredSkill.level} / 5</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 transition-colors duration-500 ${level <= hoveredSkill.level ? 'bg-cyan-400' : 'bg-white/10'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-32 flex items-center justify-center border border-dashed border-white/10 p-6">
                <p className="text-gray-500 font-mono text-[10px] uppercase text-center tracking-widest">
                  Initialize Telemetry <br /> [Hover Node]
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}