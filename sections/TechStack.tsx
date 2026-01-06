"use client";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

export default function TechStack() {
  return (
    <section id="stacks" className="relative py-48 bg-[#001220] px-6 overflow-hidden">
      
      {/* VISUAL ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#014f86]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#001220] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#001220] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col mb-32 border-l-4 border-secondary pl-6">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-2">Stacks</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic">
            Tecnologias <span className="text-secondary/80 not-italic">Utilizadas</span>
          </h2>
        </div>

        {/* TECH GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-12 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center gap-8 hover:border-secondary/30 transition-all duration-500"
            >
              <div className="text-6xl text-white/10 group-hover:text-secondary transition-all duration-500 transform group-hover:scale-110">
                {tech.icon}
              </div>
              
              <span className="text-[10px] font-bold text-white/20 group-hover:text-white uppercase tracking-[0.3em] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}