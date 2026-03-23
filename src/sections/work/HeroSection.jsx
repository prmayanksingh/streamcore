import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef();
  const headingRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    }).from(
      headingRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      },
      "-=1",
    );
  }, []);
  return (
    <section className="px-[1.5em] md:px-[4em] pt-[7em] flex flex-col xl:flex-row gap-[1em] xl:gap-[10em]">
      <h5  ref={titleRef} className="text-[1.4em] font-light flex gap-[.5em]">
        <i className="ri-shining-fill"></i> Works
      </h5>
      <h1 ref={headingRef} className="w-fit text-[clamp(50px,8vw,65px)] md:text-[5.5em] xl:text-[6em] leading-[1.1em] xl:leading-[1.2em] font-semibold">
        Where bold ideas <br className="hidden xl:inline" /> take shape
      </h1>
    </section>
  );
};

export default HeroSection;
