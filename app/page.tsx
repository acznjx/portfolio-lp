import Navbar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects"; 
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects /> 
      <Contact />
    </main>
  );
}