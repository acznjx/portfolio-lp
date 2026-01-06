"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#001220] px-6">
      
      {/* VISUAL ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-[#014f86]/30 blur-[120px] rounded-full mix-blend-screen"
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-40 tech-grid [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] uppercase"
        >
          Landing Pages <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white italic">
            Profissionais.
          </span>
        </motion.h1>
        
        <p className="mt-8 text-blue-100/80 font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Desenvolvo a presença digital da sua marca com design exclusivo e tecnologia moderna.
        </p>

        <div className="mt-12">
          <a href="#contato" className="px-10 py-5 bg-white text-[#001220] font-black rounded-xl hover:scale-105 transition-all uppercase tracking-widest text-sm inline-block">
            Falar sobre meu projeto
          </a>
        </div>
      </div>

      {/* TRANSITION OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#001220] to-transparent z-20" />
    </section>
  );
}