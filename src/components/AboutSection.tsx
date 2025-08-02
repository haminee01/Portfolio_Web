import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 스크롤 위치에 따라 실시간으로 상태 변경
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px' // 약간의 여백을 두어 더 자연스럽게
      }
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
          className={`max-w-4xl mx-auto transition-all duration-700 transform ${
            isVisible 
              ? "animate-fade-in opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-hero-gradient bg-clip-text text-transparent">
            자기소개
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
              <p>
                제 포트폴리오에 오신 것을 환영합니다! 저는 현대적인 웹 기술에 대한 
                탄탄한 기초와 사용자 경험 디자인에 대한 예리한 안목을 가진 열정적인 
                주니어 프론트엔드 개발자입니다.
              </p>
              
              <p>
                웹 개발에 대한 제 여정은 대학 재학 중에 시작되었으며, 상호작용적이고 
                시각적으로 매력적인 디지털 경험을 만드는 것에 대한 사랑을 발견했습니다. 
                복잡한 문제를 간단하고 아름다우며 직관적인 솔루션으로 바꾸는 도전을 즐깁니다.
              </p>
              
              <p>
                코딩을 하지 않을 때는 새로운 디자인 트렌드를 탐색하거나, 오픈소스 
                프로젝트에 기여하거나, 웹에서 가능한 것의 경계를 넓히는 개인 프로젝트를 
                작업하고 있습니다. 지속적인 학습과 최신 업계 모범 사례를 따라가는 것을 믿습니다.
              </p>
              
              <p>
                현재 제 기술을 기여하면서 개발자로서 계속 성장할 수 있는 역동적인 팀과 
                함께 일할 기회를 찾고 있습니다. 함께 멋진 것을 만들어 봅시다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;