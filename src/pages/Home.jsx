import BrandIntroSection from "../sections/BrandIntroSection";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";
import ShowcaseSection from "../sections/ShowcaseSection";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import HeroMarquee from "../sections/HeroMarquee";
import PortfolioShowcaseSection from "../sections/PortfolioShowcaseSection";
import ServicesSection from "../sections/ServicesSection";
import ApproachSection from "../sections/ApproachSection";
import Work from "../sections/Work";
import OurProcessSection from "../sections/OurProcessSection";
import TestimonialsSection from "../sections/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandIntroSection />
      <ShowcaseSection />
      <AboutSection />
      <StatsSection />
      <HeroMarquee />
      <PortfolioShowcaseSection />
      <ServicesSection />
      <ApproachSection />
      <Work />
      <OurProcessSection />
      <TestimonialsSection />
      <HeroMarquee />
      <Temp />
    </div>
  );
};

export default Home;
