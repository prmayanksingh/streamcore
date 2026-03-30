import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BlogIntro from "../../components/blog/BlogIntro";
import VRgirlImg from "../../assets/images/blogImg/blockchain.jpg";
import StartProjectSection from "../../sections/home/StartProjectSection";
import FooterSection from "../../sections/home/FooterSection";
import AiReplactingCodingSection from '../../sections/blog/AiReplactingCodingSection'

const aiReplacingCoding = () => {
  const [blogs, setBlogs] = useState(
    {
      title: "How AI is Replacing Traditional Coding: Reality in 2026",
      tags: ["AI", "Coding", "Technology", "Future", "Programming"],
      img: VRgirlImg,
    });

  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <BlogIntro blog={blogs} />
      <AiReplactingCodingSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default aiReplacingCoding;
