import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ExternalLink, Download } from "lucide-react";

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "A fully responsive Netflix clone with user authentication, movie browsing, and video streaming capabilities.",
      technologies: ["React", "TypeScript", "Firebase", "CSS3"],
      duration: "3 months",
      teamSize: "Personal Project",
      status: "Completed",
      link: "https://github.com/example/netflix-clone"
    },
    {
      id: 2,
      title: "Book Management System",
      description: "Collaborative book management application with CRUD operations, search functionality, and user reviews.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      duration: "2 months",
      teamSize: "4 developers",
      status: "Completed",
      link: "https://github.com/example/book-management"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with shopping cart, payment integration, and admin dashboard (Coming Soon).",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      duration: "1 month",
      teamSize: "Personal Project",
      status: "In Progress",
      link: "#"
    }
  ];

  const activities = [
    {
      title: "UX/UI Design Team Projects",
      description: "Collaborated with design teams during university studies to create user-centered design solutions for various client projects.",
      achievements: ["Conducted user research and testing", "Created wireframes and prototypes", "Designed responsive interfaces"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-section-gradient"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
            Portfolio & Projects
          </h2>

          {/* Portfolio PDF Download */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Portfolio PDF
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-20px]"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge
                    variant="outline"
                    className={getStatusColor(project.status)}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    Duration: {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    Team: {project.teamSize}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(project.link, "_blank")}
                  disabled={project.link === "#"}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  {project.link === "#" ? "Coming Soon" : "View Project"}
                </Button>
              </div>
            ))}
          </div>

          {/* Activities Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Additional Activities
            </h3>
            
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <h4 className="text-xl font-semibold mb-4">{activity.title}</h4>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-center p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;