import React from "react";

const WorkArchiveItem = ({ job }) => {
  return (
    <div className="py-[2em] flex flex-col xl:flex-row gap-[1em]">
      <h1 className="xl:w-[65%] text-[2.1em] md:text-[3em] xl:text-[2.7em] font-semibold">
        {job.title}
      </h1>
      <div className="xl:w-[35%] xl:pr-[1em] flex justify-between xl:flex-row xl:justify-between gap-[1em]">
        <div className="text-[1em] flex flex-col">
          {job.roles.map((role, index) => (
            <h1 key={index}>{role}</h1>
          ))}
        </div>
        <p className="text-[1em]">
          {job.date}
        </p>
      </div>
    </div>
  );
};

export default WorkArchiveItem;
