import React from "react";
import BrandIntro from "../sections/BrandIntro";
import Navbar from "../components/Navbar";
import Temp from "../sections/Temp";

const Home = () => {
  return (
    <div>
        <Navbar/>
      <BrandIntro />
      <Temp/>
    </div>
  );
};

export default Home;
