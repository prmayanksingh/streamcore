import React from "react";
import BrandIntro from "../sections/BrandIntro";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";
import ShowcaseSection from "../sections/ShowcaseSection";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BrandIntro />
      <ShowcaseSection />
      <AboutSection />
      <Temp />
    </div>
  );
};

export default Home;
