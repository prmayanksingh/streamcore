import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import FlipLink from "../../components/ui/FlipLink";
import { Link } from "react-router-dom";

const StatsSection = () => {
  const boxRef = useRef(null);
  const flipRef1 = useRef(null);
  const flipRef2 = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      ease: "power3.out",
    });
  }, []);
  return (
    <section
      ref={boxRef}
      className="px-[1.5em] md:px-[4em] py-[4em] xl:pt-[8em]"
    >
      <div className="flex flex-col xl:flex-row gap-[2em] xl:gap-[1.9em]">
        <div className="relative z-97 h-[34em] md:h-[28em] xl:h-[27em] xl:w-[63%] px-[2em] md:px-[2.5em] md:pt-[.7em] md:pb-[2.5em] bg-[#1C1C1C] rounded-3xl flex flex-col md:justify-between gap-[2em] overflow-hidden">
          <div className="z-99 flex flex-col gap-[.2em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">5+</h1>
            <h4 className="text-[1.1em] font-light">
              Years of experience <br /> delivering excellence
            </h4>
          </div>
          <div className="z-99">
            <Link
              to={"/contact"}
              onMouseEnter={() => flipRef1.current.play()}
              onMouseLeave={() => flipRef1.current.reverse()}
              className="btn w-fit rounded-full px-[1em] py-[.5em] border-2 flex text-[1.4em] font-semibold"
            >
              <FlipLink
                ref={flipRef1}
                text={"Start New Project"}
                icon={<i className="ri-arrow-right-down-line text-[1.3em]"></i>}
              />
            </Link>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[30rem] xl:h-[29rem] absolute -bottom-34 md:bottom-0 xl:bottom-0 left-0 md:left-auto xl:-right-10 md:-right-9"
            src="../src/assets/images/robot.webp"
            alt="robot image"
          />
        </div>
        <div className="relative z-97 h-[34em] md:h-[28em] xl:h-[27em] xl:w-[37%] px-[2em] md:px-[2.5em] xl:px-[2em] md:pt-[.7em] md:pb-[2.5em] bg-[#1C1C1C] rounded-3xl flex flex-col md:justify-between gap-[2em] overflow-hidden">
          <div className="z-99 flex flex-col gap-[.2em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">180+</h1>
            <h4 className="text-[1.1em] font-light">
              Projects successfully <br /> completed
            </h4>
          </div>
          <div className="z-99">
            <Link
              to={"/work"}
              onMouseEnter={() => flipRef2.current.play()}
              onMouseLeave={() => flipRef2.current.reverse()}
              className="btn w-fit rounded-full px-[1em] py-[.5em] border-2 flex text-[1.4em] font-semibold"
            >
              <FlipLink
                ref={flipRef2}
                text={"Works"}
                icon={<i className="ri-arrow-right-down-line text-[1.3em]"></i>}
              />
            </Link>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[27rem] xl:h-[17rem] absolute -bottom-34 md:bottom-8 md:left-auto md:-right-15 xl:bottom-10 left-0 xl:-right-15"
            src="../src/assets/images/astroHelmet.webp"
            alt="robot image"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
