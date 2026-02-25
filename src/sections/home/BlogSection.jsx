import React, { useState } from "react";
import BlogCard from "../../components/BlogCard";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([
    {
      img: "../src/assets/images/blogImg/ugc-marketing-strategy.png",
      title:
        "UGC Marketing: How Brands Are Turning Customers Into Content Creators",
      tags: ["UGC", "Content Marketing"],
    },
    {
      img: "../src/assets/images/blogImg/restaurant-instagram-marketing.png",
      title: "Restaurant Marketing on Instagram: A Complete 2025 Playbook",
      tags: ["Restaurant Marketing", "Instagram"],
    },
    {
      img: "../src/assets/images/blogImg/fmcg-social-media-marketing.png",
      title:
        "Social Media Marketing for FMCG Brands: Winning Strategies in 2025",
      tags: ["Social Media", "FMCG"],
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
