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
      className="relative min-h-screen w-full py-20 md:py-32 bg-background px-6 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      {/* 1. FUNDO UNIFICADO: Brilho radial dinâmico */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-mineral)_0.05,transparent_70%)] opacity-20 pointer-events-none" />

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
              <p className="text-text-oliva text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-6">
                Consultoria & Desenvolvimento
              </p>
              <h2 
                id="contato-titulo"
                className="text-4xl sm:text-5xl md:text-8xl font-black text-text-creme leading-[0.95] tracking-tighter mb-8 uppercase italic"
              >
                Vamos elevar sua <br />
                <span className="text-mineral not-italic font-light uppercase">presença digital.</span>
              </h2>
              <p className="text-text-oliva/60 text-base md:text-xl leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Especialista em criar interfaces de alta performance que conectam marcas a resultados reais através de design estratégico e tecnologia moderna.
              </p>
            </motion.header>
          </div>

          {/* CARD À DIREITA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-px bg-linear-to-b from-mineral/40 to-transparent rounded-[40px] w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="bg-background/80 backdrop-blur-2xl p-8 md:p-14 rounded-[39px] text-center flex flex-col items-center border border-mineral/10 shadow-2xl shadow-black/20">
              <div className="w-12 h-12 bg-text-oliva/10 rounded-full flex items-center justify-center mb-8">
                <div className="w-2 h-2 bg-text-oliva rounded-full animate-pulse" />
              </div>
              
              <h3 className="text-text-creme text-2xl font-medium mb-4">Novo Projeto?</h3>
              <p className="text-text-oliva/50 text-sm mb-12 font-light leading-relaxed">
                Atendimento exclusivo para landing pages, sites institucionais e sistemas personalizados.
              </p>
              
              <a 
                href="https://wa.me/5551992025166" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group flex items-center justify-center gap-4 px-8 py-6 bg-text-creme text-background font-bold rounded-full transition-all duration-500 hover:bg-text-oliva shadow-2xl shadow-black/50 text-[11px] uppercase tracking-[0.3em] active:scale-95 cursor-pointer"
              >
                Solicitar Orçamento
                <FaWhatsapp size={18} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER INTEGRADO */}
        <footer className="mt-24 md:mt-40 w-full">
          {/* Linha divisória dinâmica */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-mineral/30 to-transparent mb-12" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <span className="text-mineral text-[10px] tracking-[0.4em] uppercase font-bold">
                © 2026 Porto Alegre // Brasil
              </span>
              <p className="text-text-oliva/30 text-[9px] uppercase tracking-[0.2em]">
                Design e Desenvolvimento de Interfaces Profissionais
              </p>
            </div>

            <button 
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="group order-1 md:order-2 flex items-center gap-4 py-3 px-8 border border-mineral/20 rounded-full hover:border-text-creme hover:bg-text-creme/5 transition-all duration-500 cursor-pointer"
            >
              <span className="text-[9px] text-text-oliva font-bold uppercase tracking-[0.3em] group-hover:text-text-creme transition-colors">Topo</span>
              <FaArrowUp size={10} className="text-text-oliva group-hover:-translate-y-1 group-hover:text-text-creme transition-all" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}