"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projetos = [
  {
    titulo: "Crochê Studio",
    status: "Projeto Ativo",
    descricao: "Landing page artesanal com estética minimalista, focada em experiência do usuário e conversão para ateliês.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://croche-website.vercel.app/",
  },
  {
    titulo: "TorkMotos",
    status: "Projeto Ativo",
    descricao: "Interface de alta performance com foco em estética minimalista e navegação fluida.",
    tech: ["Next.js", "Tailwind", "Motion"],
    link: "https://torkmotos.vercel.app/",
  }
];

export default function Projetos() {
  return (
    <section 
      id="projetos" 
      className="relative min-h-screen w-full py-24 md:py-40 bg-background px-6 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      
      {/* 1. FUNDO UNIFICADO: Luz radial dinâmica */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-mineral)_0.05,transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <header className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-text-oliva text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-text-creme tracking-tighter uppercase italic">
              Projetos <span className="text-mineral not-italic font-light uppercase">Ativos</span>
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projetos.map((projeto, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-mineral/5 rounded-[32px] p-8 md:p-12 transition-all duration-500 hover:bg-mineral/10 shadow-2xl shadow-black/20"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8 bg-background w-fit px-3 py-1.5 rounded-full border border-mineral/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-text-creme text-[9px] font-bold uppercase tracking-widest italic">
                    {projeto.status}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-text-creme mb-6 tracking-tighter uppercase italic group-hover:text-text-oliva transition-colors">
                  {projeto.titulo}
                </h3>

                <p className="text-text-oliva/60 text-sm md:text-base mb-10 leading-relaxed font-light max-w-sm">
                  {projeto.descricao}
                </p>

                <div className="mt-auto pt-8 border-t border-mineral/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-4">
                    {projeto.tech.map((t) => (
                      <span key={t} className="text-[9px] font-medium text-mineral uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={projeto.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-text-creme text-[10px] font-black uppercase tracking-[0.3em] group/link"
                  >
                    Ver Projeto 
                    <div className="w-8 h-8 rounded-full border border-mineral/30 flex items-center justify-center group-hover/link:bg-text-creme group-hover/link:text-background transition-all">
                      <FaArrowRight size={10} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}