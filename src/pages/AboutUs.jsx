import Temp from "../sections/Temp";
import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/aboutus/HeroSection";
import IntroSection from "../sections/aboutus/IntroSection";
import HeroMarquee from "../sections/home/HeroMarquee";
import CultureSection from "../sections/aboutus/CultureSection";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <HeroMarquee />
      <CultureSection />
      <Temp />
    </div>
  );
};

export default AboutUs;
