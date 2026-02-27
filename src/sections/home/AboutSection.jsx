import React from "react";

const AboutSection = () => {
  return (
    <div className="px-[2em] md:px-[4em] lg:px-[4em] xl:px-[5em] flex flex-col lg:flex-row lg:justify-between gap-[2em] md:gap-[2em]">
      <div className="h-[20%] lg:h-full lg:w-[40%] flex flex-row items-center gap-[1em]">
        <i className="ri-shining-fill"></i>
        <h2 className="text-[1.4em] md:text-[1.6em] font-light">Who are we</h2>
      </div>
      <div className="h-[80%] lg:h-full lg:w-[50%] flex flex-col gap-[3em] md:gap-[3.9em] lg:gap-[3.4em]">
        <h1 className="text-[1.8em] md:text-[2.8em] lg:text-[2.5em] xl:text-[2.6em] tracking-wide font-light">
          At Stream Core, we utilize art and technology to enhance brand
          growth. We specialize in Software Development, AI Agents &
          Automations, Social Media Management, Ad Production, Influencer
          Marketing, and UI/UX Designing. We deliver innovative solutions that
          meet your requirements and drive results.
        </h1>
        <div className=" w-fit px-[1.3em] py-[.2em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.3em] tracking-wider font-semibold">
            Say Hello
          </h1>{" "}
          <i className="ri-arrow-right-up-line text-[2em]"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
