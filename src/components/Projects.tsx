import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment integration",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "https://roopkala.com",
  },
  {
    title: "Luxury Brand Website",
    description: "High-end luxury brand website with premium design and seamless user experience",
    tech: ["Next.js", "React", "Custom Animations"],
    link: "https://dishoom.com",
  },
  {
    title: "Real Estate Portals",
    description: "Professional real estate platform with property listings and advanced search features",
    tech: ["React", "Property APIs", "Maps Integration"],
    link: "https://www.dweckproperties.com/",
  },
  {
    title: "Wellness Consultation",
    description: "Holistic wellness and consultation platform with booking and content management",
    tech: ["WordPress", "Custom Theme", "Booking System"],
    link: "https://theholisticdetox.com/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-silver-light text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-gradient-to-br from-silver/5 to-silver/10 border-silver/20 hover:border-silver/40 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-silver-light group-hover:text-white transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-silver">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs rounded-full bg-silver/10 text-silver-light border border-silver/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-silver/30 text-silver-light hover:bg-silver/10 hover:border-silver transition-all duration-300"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
