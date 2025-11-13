import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold text-silver-light tracking-tight">
            Lovish Sharma
          </h1>
          <div className="relative inline-block">
            <h2 className="text-xl md:text-2xl text-silver font-light tracking-wide">
              Frontend Engineer | CMS Developer & Technical Analyst
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow to-transparent animate-border-flow"></div>
          </div>
        </div>
        
        <p className="text-silver-dark text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Delivering frontend, CMS, and e-commerce development with modern stacks.
        </p>
        
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => window.open('YOUR_GOOGLE_DRIVE_RESUME_LINK_HERE', '_blank')}
              className="glow-border bg-transparent border-2 border-glow text-silver-light hover:bg-glow/10 transition-all duration-300"
            >
              View Resume
            </Button>
            <Button 
              onClick={() => window.location.href = 'mailto:lovishsharma742@gmail.com?subject=Hiring Inquiry&body=Hi Lovish,%0D%0A%0D%0AI am interested in discussing a project opportunity with you.%0D%0A%0D%0ABest regards'}
              variant="outline"
              className="border-2 border-silver/30 text-silver-light hover:bg-silver/10 hover:border-silver transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/lovish-sharma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-silver-light hover:text-glow transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
