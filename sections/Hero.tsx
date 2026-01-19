"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background px-4 md:px-6 overflow-hidden transition-colors duration-500"
    >
      
      {/* 1. GRID: Usando variável dinâmica para opacidade e cor */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none tech-grid" 
      />

      {/* 2. LUZES DINÂMICAS: Ajustadas para serem visíveis mas suaves em ambos os modos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [-10, 10, -10], 
            y: [0, -15, 0],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 md:w-150 md:h-150 bg-mineral/30 blur-[80px] md:blur-[140px] rounded-full"
        />
      </div>

      {/* 3. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-creme/5 border border-text-oliva/10 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-oliva opacity-40"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-text-oliva"></span>
            </span>
            <span className="text-text-oliva text-[8px] md:text-[10px] tracking-[0.3em] font-bold uppercase">
              Disponível para novos projetos
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-text-creme text-[12vw] sm:text-7xl md:text-[110px] font-extralight tracking-tight leading-[1.05] uppercase"
        >
          Websites <br /> 
          <span className="text-text-oliva/20 font-light italic">Profissionais.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 md:mt-10 text-text-oliva/40 text-xs sm:text-base md:text-xl max-w-70 sm:max-w-2xl leading-relaxed font-light tracking-[0.2em] uppercase"
        >
          Design limpo <span className="text-mineral mx-2 md:mx-4">|</span> Performance
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-20 w-full sm:w-auto"
        >
          <a 
            href="#contato" 
            className="inline-block w-full sm:w-auto px-12 py-5 border border-text-oliva/20 text-text-creme/80 font-bold transition-all duration-500 text-[10px] uppercase tracking-[0.5em] hover:bg-text-creme hover:text-background hover:border-text-creme active:scale-95"
          >
            Solicitar orçamento
          </a>
        </motion.div>
      </div>

      {/* 4. INDICADOR DE SCROLL (PADRONIZADO) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-px h-16 bg-linear-to-b from-transparent via-text-oliva/40 to-transparent" 
        />
      </div>

      {/* LUZ DE FUNDO UNIFICADA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-mineral)_0.05,transparent_70%)] opacity-20 pointer-events-none" />

    </section>
  );
}