import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Approachbox = ({ item }) => {
  const imgRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(imgRef.current, {
      rotate: "+=360",
      duration: 2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.pause()}
      className="flex flex-col xl:flex-row xl:justify-between gap-[1.88em]"
    >
      <div ref={imgRef}>
        <img className="h-[4.5em]" src={item.img} alt={item.title + " image"} />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-[3em] gap-[1em]">
        <h1 className="text-[1.4em] xl:text-[1.8em] font-semibold">
          {item.title}
        </h1>
        <p className="text-[1.1em] xl:w-[40em] text-[#A7A7A7]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Approachbox;
