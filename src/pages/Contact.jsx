import Navbar from "../components/Navbar";
import HeroSection from "../sections/contact/HeroSection";
import FormSection from "../sections/contact/FormSection";
import StartProjectSection from "../sections/home/StartProjectSection";
import FooterSection from "../sections/home/FooterSection";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <HeroSection />
      <FormSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default Contact;
