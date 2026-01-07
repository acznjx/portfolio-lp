"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contato" className="relative py-48 bg-[#001220] px-6 overflow-hidden">
      
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter uppercase italic leading-tight">
            Elevando sua <br /> 
            <span className="text-secondary not-italic">Presença Digital.</span>
          </h2>
          
          <p className="text-white/40 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            Desenvolvimento de interfaces exclusivas para uma apresentação impecável.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Botão WhatsApp com Ícone */}
            <a 
              href="https://wa.me/5551992025166" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-12 py-5 bg-white text-[#001220] font-black rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 text-xs uppercase tracking-widest shadow-xl"
            >
              <FaWhatsapp size={20} /> Iniciar Conversa
            </a>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/acznjx" target="_blank" className="p-5 border border-white/10 text-white/40 rounded-2xl hover:border-secondary hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/acznjx" target="_blank" className="p-5 border border-white/10 text-white/40 rounded-2xl hover:border-secondary hover:text-white transition-all">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Botão Voltar ao Topo (Scroll-Line) */}
          <div className="mt-40 flex flex-col items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 transition-all cursor-pointer"
            >
              <div className="w-[1px] h-12 bg-gradient-to-t from-secondary to-transparent group-hover:h-16 transition-all duration-500" />
              <span className="text-[9px] text-white/20 group-hover:text-secondary uppercase tracking-[0.4em] font-bold">
                Voltar ao topo
              </span>
            </button>
            
            <p className="text-white/10 text-[9px] font-mono uppercase tracking-[0.5em] pt-8">
              © 2026 // Desenvolvido por Ana Carolina
            </p>
          </div>
        </motion.div>
      </div>

      {/* Gradiente de entrada para fusão com a seção anterior */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#001220] to-transparent z-10 pointer-events-none" />
    </section>
  );
}