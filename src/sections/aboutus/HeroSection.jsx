import gsap from "gsap";
import { useEffect, useRef } from "react";

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
        <i className="ri-shining-fill"></i> Studio
      </h5>
      <div className="flex flex-col gap-[2.5em]">
        <h1
          ref={headingRef}
          className="w-fit text-[clamp(50px,8vw,65px)] md:text-[5.5em] xl:text-[6em] leading-[1.1em] xl:leading-[1.2em] font-semibold"
        >
          We create brilliance together
        </h1>
        <p
          ref={descriptionRef}
          className="text-[clamp(20px,3vw,25px)] leading-[1.6em]"
        >
          We are a creative digital agency passionate about transforming ideas
          into exceptional digital experiences. We help you showcase your
          projects, services, and expertise with maximum impact.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
