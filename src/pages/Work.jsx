import Navbar from "../components/Navbar";
import HeroSection from "../sections/work/HeroSection";
import FeaturedWorkSection from "../sections/work/FeaturedWorkSection";
import WorkArchiveSection from "../sections/work/WorkArchiveSection";
import HeroMarquee from '../sections/home/HeroMarquee'
import TestimonialsSection from '../sections/home/TestimonialsSection'
import StartProjectSection from '../sections/home/StartProjectSection'
import FooterSection from '../sections/home/FooterSection'

const Work = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedWorkSection />
      <WorkArchiveSection />
      <HeroMarquee />
      <TestimonialsSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default Work
