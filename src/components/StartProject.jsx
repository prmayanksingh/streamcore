import React from "react";

const StartProject = () => {
  return (
    <div className="z-98 relative w-full h-[30em] md:h-[44em] px-[2em] md:px-[3em] rounded-[2em] bg-white flex flex-col justify-center gap-[4em] overflow-hidden">
      <h1 className="z-100 text-[2.8em] md:text-[5em] xl:text-[6em] font-semibold leading-none text-black">
        <i className="ri-poker-hearts-fill text-[.9em]"></i> Let's talk about{" "}
        <br className="hidden xl:inline" /> your next project!
      </h1>
      <div className="z-100 w-fit h-fit px-[1.4em] md:px-[2em] py-[.3em] md:py-[1em] bg-blue-600 text-white flex items-center gap-[.5em] rounded-full">
        <h1 className="text-[1.4em] md:text-[1.8em]">Get Started</h1>
        <i className="ri-arrow-right-up-line text-[1.8em]"></i>
      </div>
      <img
        className="z-99 h-[100vw] xl:h-[70vw] absolute top-0 xl:top-[-12em] right-[-5em] xl:right-[0]"
        src="../src/assets/images/contact/blurCube.webp"
        alt="blur cube"
      />
      <img className="z-99 absolute hidden xl:inline h-[23em] bottom-[4em] right-[5em]" src="../src/assets/images/contact/astroHelmet.webp" alt="" />
      <img className="z-99 absolute hidden xl:inline h-[8em] bottom-[8em] right-[30em]" src="../src/assets/images/contact/spring.webp" alt="" />
    </div>
  );
};

export default StartProject;
