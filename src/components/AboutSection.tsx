import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-section-gradient"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
              <p>
                Welcome to my portfolio! I'm a passionate junior front-end developer 
                with a strong foundation in modern web technologies and a keen eye for 
                user experience design.
              </p>
              
              <p>
                My journey in web development began during my university studies, where 
                I discovered my love for creating interactive and visually appealing 
                digital experiences. I enjoy the challenge of turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open-source projects, or working on personal projects 
                that push the boundaries of what's possible on the web. I believe in 
                continuous learning and staying up-to-date with the latest industry 
                best practices.
              </p>
              
              <p>
                I'm currently seeking opportunities to work with a dynamic team where 
                I can contribute my skills while continuing to grow as a developer. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;