import React, { Fragment, useState } from "react";
import WorkArchiveItem from "../../components/WorkArchiveItem";

const WorkArchiveSection = () => {
  const [data, setdata] = useState([
    {
      title: "RJ PERFUMES",
      date: "January 2025",
      roles: ["Web Design", "Landing Page", "Responsive"],
    },
    {
      title: "RACEWOOD SERVICES",
      date: "February 2025",
      roles: ["Web Design", "Services", "Digital Solutions"],
    },
    {
      title: "SEASONS PROPERTIES",
      date: "March 2025",
      roles: ["Services", "Web Development", "Custom Solution"],
    },
    {
      title: "NISARA BEAUTY",
      date: "April 2025",
      roles: ["Service", "Web Design", "Landing Page"],
    },
    {
      title: "LOCAL MAFIA",
      date: "January 2025",
      roles: ["Service", "Web Design", "Web Development"],
    },
    {
      title: "ELEGANCE RETREAT",
      date: "February 2025",
      roles: ["Service", "Responsive", "Web Design"],
    },
  ]);
  return (
    <div className="px-[1.5em] md:px-[4em] py-[3em] pb-[6em]">
      <div className="pb-[4em] flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Portfolio archive
        </h1>
        <div className="w-fit h-fit px-[1.4em] py-[.3em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">Clients Approve</h1>
          <i className="ri-arrow-right-down-line text-[1.8em]"></i>
        </div>
      </div>
      <div className="w-full h-[.1em] bg-white"></div>
      {data.map((job, index) => (
        <Fragment key={index}>
          <WorkArchiveItem job={job} />
          <div className="w-full h-[.1em] bg-white"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default WorkArchiveSection;
