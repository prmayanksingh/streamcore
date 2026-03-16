import Navbar from "../components/Navbar";
import HeroSection from "../sections/work/HeroSection";
import FeaturedWorkSection from "../sections/work/FeaturedWorkSection";
import WorkArchiveSection from "../sections/work/WorkArchiveSection";
import HeroMarquee from '../sections/home/HeroMarquee'
import TestimonialsSection from '../sections/home/TestimonialsSection'
import StartProjectSection from '../sections/home/StartProjectSection'
import FooterSection from '../sections/home/FooterSection'
import { useState } from "react";

const Work = () => {
  const [marquee, setMarquee] = useState([
        "Clients Approve",
        "Clients Approve",
        "Clients Approve",
        "Clients Approve",
      ]);
  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <HeroSection />
      <FeaturedWorkSection />
      <WorkArchiveSection />
      <HeroMarquee data={marquee} />
      <TestimonialsSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default Work
