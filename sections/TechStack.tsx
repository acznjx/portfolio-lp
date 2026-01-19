"use client";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql } from "react-icons/si";

const tecnologias = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

export default function TechStack() {
  return (
    <section 
      id="stacks" 
      className="relative min-h-screen w-full py-24 md:py-40 bg-background px-6 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      
      {/* 1. FUNDO UNIFICADO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--grid-line),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <header className="mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <span className="text-text-oliva text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block text-center lg:text-left">
              Stacks
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-text-creme tracking-tighter uppercase italic text-center lg:text-left">
              Tecnologias <span className="text-mineral not-italic font-light uppercase">Utilizadas</span>
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {tecnologias.map((tech, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-mineral/5 rounded-[32px] p-10 md:p-14 flex flex-col items-center justify-center gap-8 transition-all duration-500 hover:bg-mineral/10 shadow-2xl shadow-black/10"
            >
              <div className="text-5xl md:text-6xl text-mineral/40 group-hover:text-text-oliva transition-all duration-500 transform group-hover:scale-110">
                {tech.icon}
              </div>
              
              <span className="text-[10px] font-bold text-text-oliva/30 group-hover:text-text-creme uppercase tracking-[0.4em] transition-colors text-center">
                {tech.name}
              </span>

              {/* Reflexo interno dinâmico */}
              <div className="absolute inset-0 bg-gradient-to-b from-text-oliva/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}