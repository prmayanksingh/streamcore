import React from "react";

const BrandIntroSection = () => {
  return (
    <div className="text-[clamp(.7em,3.5vw,1em)] md:text-[clamp(1em,1vw,1.5em)] lg:text-[clamp(1.2em,1.5vw,1em)] flex flex-col gap-[7em] lg:px-[3em]">
      <div className="h-[30rem] lg:h-[20rem] flex flex-col justify-center items-center md:gap-[1em] text-center">
        <div className="flex flex-col md:flex-row items-center">
          <h1 className="text-[5em] md:text-[5em] font-semibold">Design,</h1>{" "}
          <div className="flex items-center h-[4em] md:h-[4.7em] w-[25em] sm:w-[39em] md:w-[14em] my-[.8em] sm:my-[1.2em] md:my-[.1em] bg-[#FFFF33] text-black rounded-full gap-[1em] whitespace-nowrap overflow-hidden">
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">tech</h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>{" "}
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">tech</h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">
              tech
            </h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>{" "}
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">tech</h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">
              tech
            </h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">
              tech
            </h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className="text-[4em] md:text-[4.2em] font-semibold">
              tech
            </h1>{" "}
            <i className="ri-shining-fill text-[1.5em]"></i>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[.8em] leading-[4.5em]">
          <h1 className="text-[5em] md:text-[5em] font-semibold">
            <i className="ri-shining-fill text-[.8em] hidden md:inline"></i> and
            some
          </h1>
          <h1 className="text-[5em] md:text-[5em] font-semibold">magic</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-[8em] lg:gap-[3em]">
        <div className="relative h-[15em] sm:h-[18em] md:h-[25em] lg:h-[8em] w-[25em] sm:w-[35em] md:w-[40em] lg:w-[13em] bg-gray-500 rounded-2xl">
          <div className="absolute lg:text-[.8em] bottom-[1em] right-[1em] w-[3.5em] lg:w-[2.4em] h-[3.5em] lg:h-[2.5em] px-[1em] bg-amber-300 flex items-center justify-center rounded-full">
            <i className="ri-play-large-fill"></i>
          </div>
        </div>
        <div className="px-[2em] lg:px-0 lg:py-[1.7em] flex flex-col lg:flex-row gap-[1.8em] lg:flex lg:justify-between lg:border-t-4 lg:border-dashed lg:border-[#242424]">
          <div className="relative h-[13em] lg:h-[8em] w-[13em] lg:w-[8em] flex items-center justify-center">
            <img src="../src/assets/images/curved-text.png" className="h-full w-full scale-[230%] bg-cover" alt="curved-text" />
            <img className="absolute h-[3.7em] lg:h-[2.3em]" src="../src/assets/images/spiral.webp" alt="spiral image" />
          </div>
          <h3 className="text-[1.4em] lg:text-[.8em] lg:w-[35%] font-light">We craft digital experiences that blend creativity with technology to help brands grow and succeed.</h3>
          <div className="text-[1.3em] lg:text-[.7em] font-light">
            <h3><i className="ri-shining-fill text-[.8em]"></i> Innovative</h3>
            <h3><i className="ri-shining-fill text-[.8em]"></i> Creative</h3>
            <h3><i className="ri-shining-fill text-[.8em]"></i> Results-Driven</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntroSection;
