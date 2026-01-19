"use client";
import { motion } from "framer-motion";

const opcoes = [
  {
    titulo: "Landing Page",
    subtitulo: "Foco em Conversão",
    descricao: "Página única de alta performance para transformar tráfego em vendas reais via WhatsApp.",
    cta: "Solicitar orçamento"
  },
  {
    titulo: "Site Completo",
    subtitulo: "Autoridade e Escala",
    descricao: "Estrutura institucional completa com SEO avançado para consolidar sua presença no Google.",
    cta: "Solicitar orçamento"
  }
];

export default function Solucoes() {
  return (
    <section 
      id="solucoes" 
      className="relative min-h-screen w-full bg-background py-24 md:py-40 px-6 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      
      {/* 1. FUNDO UNIFICADO: Usando a cor mineral dinâmica para o brilho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-mineral)_0.05,transparent_70%)] opacity-20 pointer-events-none z-0" />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        
        <header className="mb-20 md:mb-28 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-text-oliva text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">
              Serviços
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-text-creme tracking-tighter uppercase italic leading-none">
              Soluções <span className="text-mineral not-italic font-light uppercase">Digitais</span>
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {opcoes.map((item, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-start border-t border-mineral/20 pt-10 md:pt-14 group"
            >
              <h3 className="text-text-creme text-3xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:text-text-oliva transition-colors duration-500 leading-none">
                {item.titulo}
              </h3>
              
              <p className="text-mineral text-[10px] font-bold tracking-[0.3em] uppercase mt-4 mb-8 italic">
                {"// "} {item.subtitulo}
              </p>

              <p className="text-text-oliva/60 text-base md:text-lg leading-relaxed mb-12 max-w-md font-light">
                {item.descricao}
              </p>

              <a 
                href="#contato" 
                className="group inline-flex items-center gap-6 text-text-creme text-[11px] uppercase tracking-[0.4em] font-black"
              >
                <span className="border-b-2 border-mineral/20 pb-2 group-hover:border-text-oliva transition-all duration-300">
                  {item.cta}
                </span>
                <div className="w-10 h-10 rounded-full border border-mineral/30 flex items-center justify-center group-hover:bg-text-oliva group-hover:text-background group-hover:border-text-oliva transition-all duration-500">
                  <span className="text-sm font-bold">→</span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}