import React, { useState } from "react";
import BlogCard from "../../components/BlogCard";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([
    {
      img: "../src/assets/images/blogImg/blockchain.jpg",
      title:
        "Short Guide on the Potential of Blockchain for Businesses",
      tags: ["Blockchain", "Business Technology"],
    },
    {
      img: "../src/assets/images/blogImg/digitalMarketing.jpg",
      title: "Boost Your Online Presence with Digital Marketing Services",
      tags: ["Digital Marketing", "Online Growth"],
    },
    {
      img: "../src/assets/images/blogImg/customApp.jpg",
      title:
        "Why Every Business Needs Custom Application Development in 2025?",
      tags: ["Custom Software", "App Development"],
    },
  ]);
  return (
    <section className="px-[1.5rem] md:px-[4rem] py-[4rem] xl:py-[8rem] flex flex-col gap-[5rem]">
      <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-[1.6em] xl:gap-[2em]">
        <h1 className="text-[2.7em] md:text-[4.4em] font-semibold leading-none">
          Latest Blog
          <br className="hidden xl:inline" /> Posts
        </h1>
        <p className="w-[90%] md:w-[35rem] xl:w-[30%] text-[1.15em] text-[#9F9F9F]">
          Expert articles on digital marketing trends, campaign strategies, and
          industry best practices.
        </p>
        <div className="w-fit h-fit px-[1.4em] py-[.3em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">View All</h1>
          <i className="ri-arrow-right-up-line text-[1.8em]"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-[4em] xl:gap-[2em]">
        {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
