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
      // min-h-screen e flex-col justify-center garantem que fique igual ao Contato
      className="relative min-h-screen w-full py-24 md:py-40 bg-[#01161e] px-6 overflow-hidden flex flex-col justify-center"
    >
      
      {/* 1. FUNDO IGUAL AO CONTATO: Luz radial idêntica para eliminar linhas de divisão */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59839210,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <header className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#aec3b0] text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#eff6e0] tracking-tighter uppercase italic">
              Projetos <span className="text-[#598392] not-italic font-light uppercase">Ativos</span>
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
              // Designer dos cards mantendo a paleta de cores
              className="group relative bg-[#598392]/5 border border-[#598392]/10 rounded-[32px] p-8 md:p-12 transition-all duration-500 hover:border-[#aec3b0]/30 hover:bg-[#598392]/10 shadow-2xl shadow-black/20"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8 bg-[#01161e] w-fit px-3 py-1.5 rounded-full border border-[#598392]/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[#eff6e0] text-[9px] font-bold uppercase tracking-widest italic">
                    {projeto.status}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-[#eff6e0] mb-6 tracking-tighter uppercase italic group-hover:text-[#aec3b0] transition-colors">
                  {projeto.titulo}
                </h3>

                <p className="text-[#aec3b0]/60 text-sm md:text-base mb-10 leading-relaxed font-light max-w-sm">
                  {projeto.descricao}
                </p>

                <div className="mt-auto pt-8 border-t border-[#598392]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-4">
                    {projeto.tech.map((t) => (
                      <span key={t} className="text-[9px] font-medium text-[#598392] uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={projeto.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[#eff6e0] text-[10px] font-black uppercase tracking-[0.3em] group/link"
                  >
                    Ver Projeto 
                    <div className="w-8 h-8 rounded-full border border-[#598392]/30 flex items-center justify-center group-hover/link:bg-[#eff6e0] group-hover/link:text-[#01161e] transition-all">
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