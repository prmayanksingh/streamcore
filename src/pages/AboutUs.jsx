import CultureImage1 from "../assets/images/aboutUs/cultureImage1.webp";
import CultureImage2 from "../assets/images/aboutUs/cultureImage2.webp";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/aboutus/HeroSection";
import IntroSection from "../sections/aboutus/IntroSection";
import HeroMarquee from "../sections/home/HeroMarquee";
import CultureSection from "../sections/aboutus/CultureSection";
import OurApproachSection from "../sections/aboutus/OurApproachSection";
import StatsSection from "../sections/home/StatsSection";
import ApproachSection from "../sections/home/ApproachSection";
import BlogSection from "../sections/home/BlogSection";
import StartProjectSection from "../sections/home/StartProjectSection";
import FooterSection from "../sections/home/FooterSection";
import { useState } from "react";

const AboutUs = () => {
  const [marquee, setMarquee] = useState([
    "eCommerce",
    "Mobile Apps",
    "Design",
    "Development",
  ]);
  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <HeroSection />
      <IntroSection />
      <HeroMarquee data={marquee} />
      <CultureSection img={CultureImage1} />
      <OurApproachSection />
      <StatsSection />
      <ApproachSection />
      <CultureSection img={CultureImage2} />
      <BlogSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default AboutUs;
