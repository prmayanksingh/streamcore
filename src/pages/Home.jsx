import BrandIntroSection from "../sections/home/BrandIntroSection";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";
import ShowcaseSection from "../sections/home/ShowcaseSection";
import AboutSection from "../sections/home/AboutSection";
import StatsSection from "../sections/home/StatsSection";
import HeroMarquee from "../sections/home/HeroMarquee";
import PortfolioShowcaseSection from "../sections/home/PortfolioShowcaseSection";
import ServicesSection from "../sections/home/ServicesSection";
import ApproachSection from "../sections/home/ApproachSection";
import Work from "../sections/home/Work";
import OurProcessSection from "../sections/home/OurProcessSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import ClientsSection from "../sections/home/ClientsSection";
import BlogSection from "../sections/home/BlogSection";
import StartProjectSection from "../sections/home/StartProjectSection";
import FooterSection from "../sections/home/FooterSection";

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
      {/* <Work /> */}
      <OurProcessSection />
      <TestimonialsSection />
      <HeroMarquee />
      <ClientsSection />
      <BlogSection />
      <StartProjectSection />
      <FooterSection />
      {/* <Temp /> */}
    </div>
  );
};

export default Home;
