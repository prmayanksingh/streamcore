import React from "react";

const ApproachSteps = ({ item }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.88em]">
      <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:gap-[3em] gap-[1.2em] md:gap-[1.6em]">
        <div className="xl:w-[60%] flex justify-between items-center">
          <h1 className="text-[1.9em] md:text-[2.7em] xl:text-[2.8em] font-semibold">
            {item.title}
          </h1>
          <i className="ri-arrow-right-line text-[2.2em] xl:hidden"></i>
        </div>
        <div className="xl:w-[40%] flex justify-between">
          <p className="text-[1em] text-gray-200">
            {item.tag1} <br /> {item.tag2}
          </p>
          <p className="text-[.9em] text-gray-200">{item.step}</p>
        </div>
      </div>
    </div>
  );
};

export default ApproachSteps;
