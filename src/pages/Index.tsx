import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="section-shell pt-20 sm:pt-24 md:pt-28 pb-6 md:pb-10">
        <main className="flex flex-col gap-0 md:gap-0">
          <HeroSection />
          <SkillsSection />
          <PortfolioSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
