import Navbar from "../components/Navbar";
import HeroSection from "../sections/contact/HeroSection";
import FormSection from "../sections/contact/FormSection";
import StartProjectSection from "../sections/home/StartProjectSection";
import FooterSection from "../sections/home/FooterSection";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FormSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default Contact;
