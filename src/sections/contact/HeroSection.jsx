import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const titleRef = useRef();
  const headingRef = useRef();
  const descriptionRef = useRef();

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
        descriptionRef.current,
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
    <section className="px-[1.5em] md:px-[4em] pt-[7em] flex flex-col xl:flex-row gap-[1em] xl:gap-[10em]">
      <h5 ref={titleRef} className="text-[1.4em] font-light flex gap-[.5em]">
        <i className="ri-shining-fill"></i> Contact
      </h5>
      <div className="flex flex-col gap-[2.5em]">
        <h1 ref={headingRef} className="w-fit text-[3.9em] md:text-[5.5em] xl:text-[6em] leading-[1.1em] xl:leading-[1.2em] font-semibold">
          Let's Create Brilliance Together
        </h1>
        <p ref={descriptionRef} className="text-[1.5em] leading-[1.6em]">
          Your vision deserves to be seen. We are ready to transform your ideas
          into exceptional digital experiences that captivate your audience and
          drive growth.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
