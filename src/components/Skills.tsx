export const Skills = () => {
  const frontendEngineering = [
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Responsive UI Development",
    "API Integration",
    "Headless Frontends (Next.js-ready)"
  ];
  
  const backendCMS = [
    "WordPress (Custom Themes, Plugins, API)",
    "Shopify (Liquid, Storefront API)",
    "Automation Workflows / Webhooks",
    "Performance Optimization",
    "Basic Node.js (for app integration)"
  ];
  
  const ecommerce = [
    "Checkout Optimization",
    "Subscription Systems",
    "Abandoned Cart Recovery",
    "Fulfillment & Shipping Integrations",
    "Conversion Optimization"
  ];
  
  const cloudDevOps = [
    "Microsoft Azure (AZ-900)",
    "cPanel / VPS Management",
    "Vercel / Netlify Deployments",
    "Git & GitHub Workflows",
    "DNS / CDN / Cloudflare",
    "Website Security Hardening"
  ];
  
  const itOps = [
    "VMware Workstation",
    "Basic Networking",
    "DNS Configuration",
    "Google IT Support"
  ];
  
  const digitalGrowth = [
    "Technical SEO",
    "GA4",
    "PPC Basics",
    "Keyword Mapping",
    "Email Automation"
  ];

  const SkillBadge = ({ skill }: { skill: string }) => (
    <div className="group relative px-4 py-3 bg-gradient-to-br from-secondary/80 to-secondary/40 border border-silver/20 rounded-lg text-silver-light text-sm hover:border-silver/50 hover:shadow-lg hover:shadow-silver/10 transition-all duration-300 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-silver/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10">{skill}</span>
    </div>
  );

  const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="group relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md p-6 rounded-xl border border-silver/20 hover:border-silver/40 transition-all duration-300 hover:shadow-xl hover:shadow-silver/5">
      <div className="absolute inset-0 bg-gradient-to-br from-silver/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 space-y-4">
        <h3 className="text-lg font-semibold text-silver-light border-l-4 border-silver pl-4 mb-4">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-silver-light text-center mb-3">
          Core Competencies & Skills
        </h2>
        <p className="text-silver-dark text-center mb-12 text-sm">
          Technical expertise across modern web development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory title="Frontend Engineering" skills={frontendEngineering} />
          <SkillCategory title="Backend & CMS Engineering" skills={backendCMS} />
          <SkillCategory title="E-Commerce Systems" skills={ecommerce} />
          <SkillCategory title="Cloud & DevOps" skills={cloudDevOps} />
          <SkillCategory title="IT Operations" skills={itOps} />
          <SkillCategory title="Digital Growth & Analytics" skills={digitalGrowth} />
        </div>
      </div>
    </section>
  );
};
