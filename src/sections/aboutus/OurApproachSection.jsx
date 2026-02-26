import React, { useState } from "react";
import ApproachSteps from '../../components/ApproachSteps'

const OurApproachSection = () => {
  const [data, setData] = useState([
    {
      title: "Our Story",
      tag1: "Founded",
      tag2: "Mission",
      step: "Since 2020",
    },
    {
      title: "Our Values",
      tag1: "Integrity",
      tag2: "Innovation",
      step: "Core Principles",
    },
    {
      title: "Who We Are",
      tag1: "Expert",
      tag2: "Creators",
      step: "Talent",
    },
    {
      title: "Our Promise",
      tag1: "Quality",
      tag2: "Results",
      step: "Commitment",
    },
  ]);
  return (
    <div className="px-[1.5rem] md:px-[4rem] pt-[2em] py-[2rem]">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Our Approach <br />& Values
        </h1>
        <div className="w-fit h-fit px-[1.4em] py-[.3em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">Let's Chat</h1>
          <i className="ri-arrow-right-up-line text-[1.8em]"></i>
        </div>
      </div>
      <div className="h-[.1em] w-full mb-[1.4em] xl:mb-[1em] mt-[4em] bg-white"></div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ApproachSteps item={item} />
          <div className="h-[.1em] w-full mt-[1.9em] md:mt-[2.5em] xl:mt-[1.5em] mb-[1.4em] md:mb-[1.9em] xl:mb-[1em] bg-white"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurApproachSection;
