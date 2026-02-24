import React, { useState } from "react";
import ProcessSteps from "../components/ProcessSteps";

const OurProcessSection = () => {
    const [data, setData] = useState([
        {
          title: "Discovery",
          tag1:"Research",
          tag2:"Audience",
          step: "Step 01"
        },
        {
          title: "Strategy",
          tag1:"Planning",
          tag2:"Content",
          step: "Step 02"
        },
        {
          title: "Execution",
          tag1:"Development",
          tag2:"Testing",
          step: "Step 03"
        },
        {
          title: "Launch & Growth",
          tag1:"Development",
          tag2:"Support",
          step: "Step 04"
        },
      ]);
  return (
    <div className="px-[1.5rem] md:px-[4rem] pt-[2em] py-[5rem]">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Our Process <br />
          & Approach
        </h1>
        <div className="w-fit h-fit px-[1.4em] py-[.3em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">Let's Chat</h1>
          <i className="ri-arrow-right-up-line text-[1.8em]"></i>
        </div>
      </div>
      <div className="h-[.1em] w-full mb-[1.4em] xl:mb-[1em] mt-[4em] bg-white"></div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ProcessSteps item={item} />
          <div className="h-[.1em] w-full mt-[1.9em] md:mt-[2.5em] xl:mt-[1.5em] mb-[1.4em] md:mb-[1.9em] xl:mb-[1em] bg-white"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurProcessSection;
