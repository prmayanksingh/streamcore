import React, { useEffect, useRef } from "react";
import BlogShowcase from "./BlogShowcase";
import gsap from "gsap";

const BlogIntro = ({ blog }) => {
  const titleRef = useRef();
  const headingRef = useRef();
  const tagsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    })
      .from(
        headingRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
        },
        "-=1",
      )
      .from(
        tagsRef.current,
        {
          y: 130,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.2",
      );
  }, []);

  return (
    <section className="px-[2em] md:px-[4em] pt-[8em] md:pt-[9em] lg:pt-[3em]">
      <div className="flex flex-col items-center gap-[2.5em] lg:gap-[2em]">
        <h3 ref={titleRef} className="w-fit text-[1.1em] md:text-[1.2em] lg:text-[1.4em] text-[#7D7D7D] text-center flex flex-col sm:flex-row sm:items-center">
          Home/ Blog/{" "}
          <span className="h-fit leading-[1.2em] border-b">{blog.title}</span>
        </h3>
        <h1 ref={headingRef} className="lg:w-[60rem] text-[4em] md:text-[6em] lg:text-[7em] text-center leading-[1.05em] font-semibold">
          {blog.title}
        </h1>
        <div ref={tagsRef} className="flex flex-wrap gap-[.6em] justify-center pt-[1em]">
          {blog.tags.map((tag, index) => (
            <div
              key={index}
              className="w-fit px-[1em] py-[.2em] rounded-full border text-[1em] lg:text-[1.1em] text-[#e4e4e4] hover:text-[black] hover:bg-white transition-all"
            >
              {tag}
            </div>
          ))}
        </div>
        <BlogShowcase img={blog.img} />
      </div>
    </section>
  );
};

export default BlogIntro;
