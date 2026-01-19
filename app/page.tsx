import Navbar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects"; 
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    // Removido qualquer gap ou padding que possa causar divisões entre os filhos
    <main className="relative bg-[#01161e] min-h-screen w-full flex flex-col m-0 p-0 overflow-x-hidden antialiased">
      <Navbar />
      
      {/* As seções agora se empilham perfeitamente. 
          O segredo está no globals.css (com margin-top: -1px) 
          e na remoção dos gradientes de borda nos componentes internos.
      */}
      <Hero />
      <Services />
      <TechStack />
      <Projects /> 
      <Contact />
    </main>
  );
}