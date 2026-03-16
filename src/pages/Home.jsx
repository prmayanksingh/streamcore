import BrandIntroSection from "../sections/home/BrandIntroSection";
import Navbar from "../components/Navbar";
import ShowcaseSection from "../sections/home/ShowcaseSection";
import AboutSection from "../sections/home/AboutSection";
import StatsSection from "../sections/home/StatsSection";
import HeroMarquee from "../sections/home/HeroMarquee";
import PortfolioShowcaseSection from "../sections/home/PortfolioShowcaseSection";
import ServicesSection from "../sections/home/ServicesSection";
import ApproachSection from "../sections/home/ApproachSection";
import OurProcessSection from "../sections/home/OurProcessSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import ClientsSection from "../sections/home/ClientsSection";
import BlogSection from "../sections/home/BlogSection";
import StartProjectSection from "../sections/home/StartProjectSection";
import FooterSection from "../sections/home/FooterSection";
import { useState } from "react";

const Home = () => {
  const [marquee, setMarquee] = useState({
    firstMarquee: ["eCommerce", "Mobile Apps", "Design", "Development"],
    secondMarquee: [
      "Our Partners",
      "Our Partners",
      "Our Partners",
      "Our Partners",
    ],
  });

  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <BrandIntroSection />
      <ShowcaseSection />
      <AboutSection />
      <StatsSection />
      <HeroMarquee data={marquee.firstMarquee} />
      <PortfolioShowcaseSection />
      <ServicesSection />
      <ApproachSection />
      <OurProcessSection />
      <TestimonialsSection />
      <HeroMarquee data={marquee.secondMarquee} />
      <ClientsSection />
      <BlogSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default Home;
