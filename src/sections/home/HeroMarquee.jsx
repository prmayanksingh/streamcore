import gsap from "gsap";
import React, { Fragment, useEffect, useRef } from "react";

const HeroMarquee = ({ data }) => {
  const marqueeRef = useRef();
  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.children[0].offsetWidth;

    gsap.to(marquee, {
      x: marqueeWidth + 32,
      duration: 14,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <div className="pb-[5rem] overflow-hidden">
      <div
        ref={marqueeRef}
        className="flex items-center justify-end gap-[2rem] whitespace-nowrap tracking-widest font-thin text-[#535151]"
      >
        <div className="flex items-center gap-[2rem]">
          {data.map((title, index) => {
            return (
              <Fragment key={index}>
                <i className="ri-shining-fill text-[2.5em]"></i>
                <h1 className="text-[4.5em] md:text-[7em]">{title}</h1>
              </Fragment>
            );
          })}
        </div>
        <div className="flex items-center gap-[2rem]">
          {data.map((title, index) => {
            return (
              <Fragment key={index}>
                <i className="ri-shining-fill text-[2.5em]"></i>
                <h1 className="text-[4.5em] md:text-[7em]">{title}</h1>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroMarquee;
