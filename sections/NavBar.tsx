"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  // Ordem atualizada: Serviços, O que usamos, Projetos
  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Serviços", id: "solucoes" },
    { name: "O que usamos", id: "stacks" },
    { name: "Projetos", id: "projetos" },
  ];

  return (
    <nav className="fixed top-6 md:top-10 w-full z-50 flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        // pointer-events-auto permite clicar apenas no menu, sem bloquear o resto da tela
        className="flex items-center gap-6 md:gap-10 px-8 md:px-12 py-3.5 bg-[#01161e]/60 backdrop-blur-2xl border border-[#aec3b0]/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
      >
        {menuItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`}
            className="group relative text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-[#aec3b0]/40 hover:text-[#eff6e0] transition-all duration-500"
          >
            {item.name}
            {/* Linha de hover minimalista usando sua cor mineral */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#598392] transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </motion.div>
    </nav>
  );
}