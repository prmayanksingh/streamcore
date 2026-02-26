import React from "react";

const HeroSection = () => {
  return (
    <section className="px-[1.5em] md:px-[4em] pt-[7em] flex flex-col xl:flex-row gap-[1em] xl:gap-[10em]">
      <h5 className="text-[1.4em] font-light flex gap-[.5em]">
        <i className="ri-shining-fill"></i> Works
      </h5>
      <h1 className="w-fit text-[3.9em] md:text-[5.5em] xl:text-[6em] leading-[1.1em] xl:leading-[1.2em] font-semibold">
        Where bold ideas take shape
      </h1>
    </section>
  );
};

export default HeroSection;
