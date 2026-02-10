import React from "react";
import BrandIntro from "../sections/BrandIntro";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";
import ShowcaseSection from "../sections/ShowcaseSection";
import AboutSection from "../sections/AboutSection";
import StatsSection from "../sections/StatsSection";
import Marquee from "../sections/Marquee";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandIntro />
      <ShowcaseSection />
      <AboutSection />
      <StatsSection />
      <Marquee />
      <Temp />
    </div>
  );
};

export default Home;
