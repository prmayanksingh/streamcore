import React from "react";

const ServiceOverviewCard = ({ job }) => {
  return (
    <div className="py-[3em] xl:py-[4em] flex flex-col xl:flex-row gap-[2em]">
      <h1 className="xl:w-[55%] text-[2.1em] md:text-[3em] xl:text-[3.4em] font-semibold">
        {job.title}
      </h1>
      <div className="xl:w-[45%] xl:pr-[1em] flex flex-col xl:flex-row xl:justify-between gap-[2em]">
        <p className="xl:w-[50%] text-[1.1em] xl:text-[1.2em] text-[#A1A1A1]">
          {job.description}
        </p>
        <div className="text-[1.1em] xl:text-[1.2em] xl:text-right flex flex-col text-[#A1A1A1]">
          {job.roles.map((role, index) => (
            <h1 key={index}>{role}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverviewCard;
