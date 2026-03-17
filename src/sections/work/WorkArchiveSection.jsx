import React, { Fragment, useLayoutEffect, useState } from "react";
import WorkArchiveItem from "../../components/WorkArchiveItem";
import gsap from "gsap";

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

  useLayoutEffect(() => {
    const boxes = gsap.utils.toArray(".archive-box");
    const lines = gsap.utils.toArray(".archive-line");

    boxes.forEach((box) => {
      gsap.from(box, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });
    });

    lines.forEach((line) => {
      gsap.from(line, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: line,
          start: "top 95%",
          end: "top 70%",
          scrub: true,
        },
      });
    });
  }, []);
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
          <div className="archive-box">

          <WorkArchiveItem job={job} />
          </div>
          <div className="archive-line w-full h-[.1em] bg-white"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default WorkArchiveSection;
