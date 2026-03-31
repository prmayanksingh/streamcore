import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BlogIntro from "../../components/blog/BlogIntro";
import AiReplacingCodingImg from "../../assets/images/blogImg/AiReplacingCodingImg.jpg";
import StartProjectSection from "../../sections/home/StartProjectSection";
import FooterSection from "../../sections/home/FooterSection";
import AiReplacingCodingSection from "../../sections/blog/AiReplacingCodingSection";

const AiReplacingCoding = () => {
  const [blogs, setBlogs] = useState(
    {
      title: "How AI is Replacing Traditional Coding: Reality in 2026",
      tags: ["AI", "Coding", "Technology", "Future", "Programming"],
      img: AiReplacingCodingImg,
    });

  return (
    <div>
      <Navbar />
      <div className="h-[5em] lg:h-[8em] xl:h-[9em] w-full"></div>
      <BlogIntro blog={blogs} />
      <AiReplacingCodingSection />
      <StartProjectSection />
      <FooterSection />
    </div>
  );
};

export default AiReplacingCoding;
