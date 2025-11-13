import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-silver-light">
            Get In Touch
          </h2>
          <p className="text-silver-dark text-base">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-silver/5 to-silver/10 border border-silver/20 p-8 rounded-lg space-y-4 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-silver-light mb-4">Let's Connect</h3>
              <p className="text-silver text-sm leading-relaxed mb-6">
                Ready to discuss your next project? Reach out and let's create something amazing together.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => window.location.href = 'mailto:lovishsharma742@gmail.com?subject=Project Inquiry&body=Hi Lovish,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ABest regards'}
                  className="w-full bg-transparent border-2 border-silver/30 text-silver-light hover:bg-silver/10 hover:border-silver transition-all duration-300"
                >
                  Get in Touch
                </Button>
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/lovish-sharma', '_blank')}
                  className="w-full bg-transparent border-2 border-silver/30 text-silver-light hover:bg-silver/10 hover:border-silver transition-all duration-300"
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 glow-card p-8 rounded-lg">
            <div className="space-y-2">
              <label className="text-silver-light text-sm">Name</label>
              <Input 
                placeholder="Your name" 
                required
                className="bg-secondary border-border/50 text-silver-light placeholder:text-silver-dark focus:border-glow"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-silver-light text-sm">Email</label>
              <Input 
                type="email" 
                placeholder="your@email.com" 
                required
                className="bg-secondary border-border/50 text-silver-light placeholder:text-silver-dark focus:border-glow"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-silver-light text-sm">Message</label>
              <Textarea 
                placeholder="Your message..." 
                rows={5}
                required
                className="bg-secondary border-border/50 text-silver-light placeholder:text-silver-dark focus:border-glow resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-silver/20 hover:bg-silver/30 text-silver-light border-2 border-silver/40 hover:border-silver transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
