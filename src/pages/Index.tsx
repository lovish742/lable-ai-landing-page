import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <ParticlesBackground />
      <Navigation />
      
      <main className="relative z-10 pointer-events-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-silver-dark border-t border-border/30">
        <p>© 2025 Lovish Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
