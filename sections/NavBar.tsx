"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = ["Home", "Stacks", "Projetos"];

  return (
    <nav className="fixed top-4 md:top-8 w-full z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 md:gap-10 px-6 md:px-10 py-3 md:py-4 bg-[#02040a]/80 backdrop-blur-xl border border-white/5 rounded-full md:rounded-2xl shadow-lg"
      >
        {links.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 hover:text-secondary transition-all"
          >
            {link}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}