import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BlogIntro from "../../components/blog/BlogIntro";
import VRgirlImg from "../../assets/images/blogImg/blockchain.jpg";
import StartProjectSection from "../../sections/home/StartProjectSection";
import FooterSection from "../../sections/home/FooterSection";
import AiTransformingECommerceSection from "../../sections/blog/AiTransformingECommerceSection";

const AiTransformingECommerce = () => {
  const [blogs, setBlogs] = useState(
    {
      title: "How AI is Transforming E-Commerce in 2026",
      tags: ["AI", "E-Commerce", "Future", "Programming"],
      img: VRgirlImg,
    });

  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <BlogIntro blog={blogs} />
      <AiTransformingECommerceSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default AiTransformingECommerce;