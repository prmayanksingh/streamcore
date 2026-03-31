import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BlogIntro from "../../components/blog/BlogIntro";
import AiReplacingSDEImg from "../../assets/images/blogImg/AiReplacingSDEImg.jpg";
import StartProjectSection from "../../sections/home/StartProjectSection";
import FooterSection from "../../sections/home/FooterSection";
import AiReplacingSDESection from "../../sections/blog/AiReplacingSDESection";

const AiReplacingSDE = () => {
  const [blogs, setBlogs] = useState(
    {
      title: "Will AI Replace Software Developers? Truth Explained (2026)",
      tags: ["AI", "Coding", "Technology", "Future", "Programming"],
      img: AiReplacingSDEImg,
    });

  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <BlogIntro blog={blogs} />
      <AiReplacingSDESection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default AiReplacingSDE;