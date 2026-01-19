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
      // min-h-screen e flex garantem que o conteúdo fique centralizado como nas outras abas
      className="relative min-h-screen w-full bg-[#01161e] py-24 md:py-40 px-6 overflow-hidden flex flex-col justify-center"
    >
      
      {/* 1. FUNDO UNIFICADO: Luz radial idêntica às outras seções para eliminar divisões */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59839210,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        
        <header className="mb-20 md:mb-28 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#aec3b0] text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">
              Serviços
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-[#eff6e0] tracking-tighter uppercase italic leading-none">
              Soluções <span className="text-[#598392] not-italic font-light uppercase">Digitais</span>
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
              // Linha superior usando a cor mineral para demarcar sem separar
              className="flex flex-col items-start border-t border-[#598392]/20 pt-10 md:pt-14 group"
            >
              <h3 className="text-[#eff6e0] text-3xl md:text-5xl font-black uppercase italic tracking-tighter group-hover:text-[#aec3b0] transition-colors duration-500 leading-none">
                {item.titulo}
              </h3>
              
              <p className="text-[#598392] text-[10px] font-bold tracking-[0.3em] uppercase mt-4 mb-8 italic">
                {"// "} {item.subtitulo}
              </p>

              <p className="text-[#aec3b0]/60 text-base md:text-lg leading-relaxed mb-12 max-w-md font-light">
                {item.descricao}
              </p>

              <a 
                href="#contato" 
                className="group inline-flex items-center gap-6 text-[#eff6e0] text-[11px] uppercase tracking-[0.4em] font-black"
              >
                <span className="border-b-2 border-[#598392]/20 pb-2 group-hover:border-[#aec3b0] transition-all duration-300">
                  {item.cta}
                </span>
                <div className="w-10 h-10 rounded-full border border-[#598392]/30 flex items-center justify-center group-hover:bg-[#aec3b0] group-hover:text-[#01161e] group-hover:border-[#aec3b0] transition-all duration-500">
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