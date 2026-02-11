import React from "react";
import BrandIntro from "../sections/BrandIntro";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";
import ShowcaseSection from "../sections/ShowcaseSection";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import Marquee from "../sections/Marquee";
import PortfolioShowcaseSection from "../sections/PortfolioShowcaseSection";
import ServicesSection from "../sections/ServicesSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandIntro />
      <ShowcaseSection />
      <AboutSection />
      <StatsSection />
      <Marquee />
      <PortfolioShowcaseSection />
      <ServicesSection />
      <Temp />
    </div>
  );
};

export default Home;
