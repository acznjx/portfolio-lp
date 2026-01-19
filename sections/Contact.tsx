"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Contato() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section 
      id="contato" 
      aria-labelledby="contato-titulo"
      // min-h-screen e flex garantem centralização vertical perfeita em qualquer monitor
      className="relative min-h-screen w-full py-20 md:py-32 bg-[#01161e] px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* 1. FUNDO INFINITO: Luz radial sutil que substitui os gradientes de borda para eliminar linhas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59839210,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* TEXTO À ESQUERDA */}
          <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#aec3b0] text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-6">
                Consultoria & Desenvolvimento
              </p>
              <h2 
                id="contato-titulo"
                className="text-4xl sm:text-5xl md:text-8xl font-black text-[#eff6e0] leading-[0.95] tracking-tighter mb-8 uppercase italic"
              >
                Vamos elevar sua <br />
                <span className="text-[#598392] not-italic font-light uppercase">presença digital.</span>
              </h2>
              <p className="text-[#aec3b0]/60 text-base md:text-xl leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Especialista em criar interfaces de alta performance que conectam marcas a resultados reais através de design estratégico e tecnologia moderna.
              </p>
            </motion.header>
          </div>

          {/* CARD À DIREITA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-px bg-gradient-to-b from-[#598392]/40 to-transparent rounded-[40px] w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-[#01161e]/80 backdrop-blur-2xl p-8 md:p-14 rounded-[39px] text-center flex flex-col items-center border border-[#598392]/10">
              <div className="w-12 h-12 bg-[#aec3b0]/10 rounded-full flex items-center justify-center mb-8">
                <div className="w-2 h-2 bg-[#aec3b0] rounded-full animate-pulse" />
              </div>
              
              <h3 className="text-[#eff6e0] text-2xl font-medium mb-4">Novo Projeto?</h3>
              <p className="text-[#aec3b0]/50 text-sm mb-12 font-light leading-relaxed">
                Atendimento exclusivo para landing pages, sites institucionais e sistemas personalizados.
              </p>
              
              <a 
                href="https://wa.me/5551992025166" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center gap-4 px-8 py-6 bg-[#eff6e0] text-[#01161e] font-bold rounded-full transition-all duration-500 hover:bg-[#aec3b0] shadow-2xl shadow-black/50 text-[11px] uppercase tracking-[0.3em] active:scale-95"
              >
                Solicitar Orçamento
                <FaWhatsapp size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER INTEGRADO */}
        <footer className="mt-24 md:mt-40 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#598392]/30 to-transparent mb-12" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <span className="text-[#598392] text-[10px] tracking-[0.4em] uppercase font-bold">
                © 2026 Porto Alegre // Brasil
              </span>
              <p className="text-[#aec3b0]/30 text-[9px] uppercase tracking-[0.2em]">
                Design e Desenvolvimento de Interfaces Profissionais
              </p>
            </div>

            <button 
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="group order-1 md:order-2 flex items-center gap-4 py-3 px-8 border border-[#598392]/20 rounded-full hover:border-[#eff6e0] hover:bg-[#eff6e0]/5 transition-all duration-500 cursor-pointer"
            >
              <span className="text-[9px] text-[#aec3b0] font-bold uppercase tracking-[0.3em] group-hover:text-[#eff6e0]">Topo</span>
              <FaArrowUp size={10} className="text-[#aec3b0] group-hover:-translate-y-1 group-hover:text-[#eff6e0] transition-all" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}