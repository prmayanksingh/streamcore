import Temp from "../sections/Temp";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/aboutus/HeroSection";
import IntroSection from "../sections/aboutus/IntroSection";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <Temp />
    </div>
  );
};

export default AboutUs;
