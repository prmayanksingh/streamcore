import React from "react";

const StatsSection = () => {
  return (
    <div className="px-[1.8em] md:px-[4em] xl:px-[4.3em] py-[8em] flex flex-col gap-[2.5em] xl:gap-[1.9em]">
      <div className="flex flex-col xl:flex-row gap-[2.5em] xl:gap-[1.9em] text-black">
        <div className="relative h-[34em] md:h-[28em] xl:h-[27em] xl:w-[37%] px-[2em] md:px-[3em] xl:px-[1em] py-[.7em] md:py-[1.3em] md:pb-[2em] flex flex-col md:justify-between md:items-end gap-[2em] bg-[#FFFF33] rounded-3xl overflow-hidden">
          <div className="z-99 flex flex-col gap-[.4em]">
            <h1 className="text-[4.3em] xl:text-[5em] font-semibold">90+</h1>
            <h4 className="text-[1.1em] font-light">
              Happy clients who <br /> trust our work
            </h4>
          </div>
          <div className="z-99">
            <div className="btn w-fit rounded-full px-[1.4em] py-[.3em] border-2">
              <h1 className="text-[1.4em] font-semibold">
                Work With Us{" "}
                <i className="ri-arrow-right-up-line text-[1.3em]"></i>
              </h1>
            </div>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[30rem] xl:h-[21rem] absolute -bottom-34 md:bottom-5 xl:top-0 left-0 xl:-left-20 md:-left-10"
            src="../src/assets/images/star.webp"
            alt="star image"
          />
        </div>
        <div className="z-97 relative h-[34em] md:h-[28em] xl:h-[27em] xl:w-[63%] px-[2em] xl:px-[2.5em] py-[2em] xl:py-[2.5em] bg-[#1C1C1C] text-white rounded-3xl overflow-hidden flex flex-col md:items-end md:justify-between">
          <div className="flex">
            <div className="z-101 h-[5em] w-[5em] rounded-full bg-amber-50 bg-[url('../src/assets/images/testimonials-man.webp')] bg-cover"></div>
            <div className="z-102 h-[5em] w-[5em] -mx-[1em] rounded-full bg-amber-50 bg-cover flex items-center justify-center">
              <i className="ri-shining-fill text-[2em] text-blue-500"></i>
            </div>
            <div className="z-103 h-[5em] w-[5em] rounded-full bg-amber-50 bg-[url('../src/assets/images/testimonials-women.webp')] bg-cover"></div>
          </div>
          <div className="z-99 flex flex-col gap-[.4em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">80%</h1>
            <h4 className="text-[1.1em] font-light md:text-right">
              Clients return for <br /> new project
            </h4>
          </div>
          <img
            className="z-98 absolute -left-4 -bottom-33 md:top-15 xl:top-8 h-[23em] md:h-[26em] xl:h-[29em]"
            src="../src/assets/images/smartphones.webp"
            alt="star image"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-[2.5em] xl:gap-[1.9em]">
        <div className="relative z-97 h-[34em] md:h-[28em] xl:h-[27em] xl:w-[63%] px-[2em] md:px-[2.5em] md:pt-[.7em] md:pb-[2.5em] bg-[#1C1C1C] rounded-3xl flex flex-col md:justify-between gap-[2em] overflow-hidden">
          <div className="z-99 flex flex-col gap-[.2em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">5+</h1>
            <h4 className="text-[1.1em] font-light">
              Years of experience <br /> delivering excellence
            </h4>
          </div>
          <div className="z-99">
            <div className="btn w-fit rounded-full px-[1.4em] py-[.3em] border-2">
              <h1 className="text-[1.4em] font-semibold flex items-center gap-[.3em]">
                Our Story{" "}
                <i className="ri-arrow-right-down-line text-[1.3em]"></i>
              </h1>
            </div>
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
            <div className="btn w-fit rounded-full px-[1.4em] py-[.3em] border-2">
              <h1 className="text-[1.4em] font-semibold flex items-center gap-[.3em]">
                View Work{" "}
                <i className="ri-arrow-right-up-line text-[1.3em]"></i>
              </h1>
            </div>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[27rem] xl:h-[17rem] absolute -bottom-34 md:bottom-8 md:left-auto md:-right-15 xl:bottom-10 left-0 xl:-right-15"
            src="../src/assets/images/astroHelmet.webp"
            alt="robot image"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
