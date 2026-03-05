import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FlipLink from "./ui/FlipLink";

const StartProject = () => {
  const flipRef = useRef();
  return (
    <div className="z-98 relative w-full h-[30em] md:h-[44em] px-[2em] md:px-[3em] rounded-[2em] bg-white flex flex-col justify-center gap-[4em] overflow-hidden">
      <h1 className="z-100 text-[2.8em] md:text-[5em] xl:text-[6em] font-semibold leading-none text-black">
        <i className="ri-poker-hearts-fill text-[.9em]"></i> Let's talk about{" "}
        <br className="hidden xl:inline" /> your next project!
      </h1>
      <Link
        to={"/contact"}
        onMouseEnter={() => flipRef.current.play()}
        onMouseLeave={() => flipRef.current.reverse()}
        className="z-100 w-fit h-fit px-[1.2em] md:px-[1.5em] py-[.7em] md:py-[.9em] text-[1.2em] md:text-[1.5em] font-semibold bg-blue-600 text-white flex items-center gap-[.5em] rounded-full"
      >
        <FlipLink
          ref={flipRef}
          text={"Get Started"}
          icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
        />
      </Link>
      <img
        className="z-99 h-[100vw] xl:h-[70vw] absolute top-0 xl:top-[-12em] right-[-5em] xl:right-[0]"
        src="../src/assets/images/contact/blurCube.webp"
        alt="blur cube"
      />
      <img
        className="z-99 absolute hidden xl:inline h-[23em] bottom-[4em] right-[5em]"
        src="../src/assets/images/contact/astroHelmet.webp"
        alt=""
      />
      <img
        className="z-99 absolute hidden xl:inline h-[8em] bottom-[8em] right-[30em]"
        src="../src/assets/images/contact/spring.webp"
        alt=""
      />
    </div>
  );
};

export default StartProject;
