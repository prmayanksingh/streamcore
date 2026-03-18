import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import icon_eye from '../assets/images/blogImg/icon-eye.svg'

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ blog }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(imgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full flex flex-col gap-[1em] items-center cursor-pointer">
      <div
        ref={containerRef}
        className="relative h-[28em] md:h-[34em] xl:h-[27em] w-full rounded-4xl overflow-hidden group flex items-center justify-center"
      >
        <img
          ref={imgRef}
          className="absolute w-full h-[140%] object-cover"
          src={blog.img}
          alt=""
        />

        <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <img
            className="h-[4em]"
            src={icon_eye}
            alt=""
          />
        </div>
      </div>
      <h1 className="w-[85%] md:w-[90%] text-[#ACACAC] text-[1.4em] xl:text-[1.3em] hover:underline cursor-pointer">
        {blog.title}
      </h1>
    </div>
  );
};

export default BlogCard;
