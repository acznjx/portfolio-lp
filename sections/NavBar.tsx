"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light";
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isLight) {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Serviços", id: "solucoes" },
    { name: "Stacks", id: "stacks" },
    { name: "Projetos", id: "projetos" },
  ];

  return (
    <nav className="fixed top-6 md:top-10 w-full z-100 flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        // Mantive o px-8/12 e py-3.5 que você gostou, mas usei variáveis de cor dinâmicas
        className="flex items-center gap-4 sm:gap-6 md:gap-10 px-6 sm:px-8 md:px-12 py-3 md:py-3.5 bg-background/60 backdrop-blur-2xl border border-text-oliva/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
      >
        {menuItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`}
            // Ajuste leve no tracking para não estourar em telas de 320px
            className="group relative text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-text-oliva hover:text-text-creme transition-all duration-500 whitespace-nowrap"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-mineral transition-all duration-500 group-hover:w-full" />
          </a>
        ))}

        {/* Divisor para separar o botão dos links */}
        <div className="w-px h-4 bg-text-oliva/20 mx-1 md:mx-2" />

        <button
          onClick={() => setIsLight(!isLight)}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors cursor-pointer shrink-0"
          aria-label="Trocar tema"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isLight ? "light" : "dark"}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-base"
            >
              {isLight ? "☀️" : "🌙"}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>
    </nav>
  );
}