import React, { useLayoutEffect, useRef, useState } from "react";
import BlogCard from "../../components/BlogCard";
import FlipLink from "../../components/ui/FlipLink";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blockchain from '../../assets/images/blogImg/blockchain.jpg'
import digitalMarketing from '../../assets/images/blogImg/digitalMarketing.jpg'
import customApp from '../../assets/images/blogImg/customApp.jpg'

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const [blogData, setBlogData] = useState([
    {
      img: blockchain,
      title: "Short Guide on the Potential of Blockchain for Businesses",
      tags: ["Blockchain", "Business Technology"],
    },
    {
      img: digitalMarketing,
      title: "Boost Your Online Presence with Digital Marketing Services",
      tags: ["Digital Marketing", "Online Growth"],
    },
    {
      img: customApp,
      title: "Why Every Business Needs Custom Application Development in 2025?",
      tags: ["Custom Software", "App Development"],
    },
  ]);

  const flipRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(".blog-card", {
      y: 60,
      opacity: 0,
      duration: 0.4,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 95%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

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
        <Link
          to={"/contact"}
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="w-fit h-fit px-[1em] py-[.5em] flex items-center gap-[.5em] border-2 rounded-full text-[1.4em]"
        >
          <FlipLink
            ref={flipRef}
            text={"View All"}
            icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-[4em] xl:gap-[2em]">
        {blogData.map((blog, index) => (
          <div key={index} className="blog-card">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
