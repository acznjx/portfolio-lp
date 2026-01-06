"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "TorkMotos",
    status: "Projeto Ativo",
    description: "Interface de alta performance com foco em estética minimalista e navegação fluida.",
    tech: ["Next.js", "Tailwind", "Motion"],
    link: "https://torkmotos.vercel.app/",
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-32 bg-[#001220] px-6 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#014f86]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#001220] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col mb-20 border-l-4 border-secondary pl-6">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-2">Trabalhos</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic">
            Projetos <span className="text-secondary/80 not-italic">Ativos</span>
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-secondary/30"
            >
              <div className="relative z-10 flex flex-col h-full">
                
                {/* STATUS INDICATOR */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                  </div>
                  <span className="text-[#25D366] text-[10px] font-bold uppercase tracking-widest italic">
                    {project.status}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase italic leading-none group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/40 text-base mb-10 leading-relaxed max-w-sm">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-4 mt-auto pt-8 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono text-white/20 uppercase tracking-tighter">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* ACTION LINK */}
                <a 
                  href={project.link} 
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white group-hover:gap-4 transition-all"
                >
                  Visualizar Interface <FaArrowRight size={10} className="text-secondary" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}