import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HeroMarquee = () => {
  const marqueeRef = useRef();

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.children[0].offsetWidth;

    gsap.to(marquee, {
      x: -marqueeWidth,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <div className="pb-[5rem] overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex items-center gap-[2rem] whitespace-nowrap tracking-widest font-thin text-[#535151]"
      >
        <div className="flex items-center gap-[2rem]">
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">eCommerce</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Mobile Apps</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Design</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Development</h1>
        </div>
        <div className="flex items-center gap-[2rem]">
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">eCommerce</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Mobile Apps</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Design</h1>
          <i className="ri-shining-fill text-[2.5em]"></i>
          <h1 className="text-[4.5em] md:text-[7em]">Development</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroMarquee;
