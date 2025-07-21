import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechnologySection from "@/components/TechnologySection";
import LiveDemoSection from "@/components/LiveDemoSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyItMattersSection />
      <LiveDemoSection />
      <HowItWorksSection />
      <TechnologySection />
      <FutureSection />
      <Footer />
    </div>
  );
};

export default Index;
