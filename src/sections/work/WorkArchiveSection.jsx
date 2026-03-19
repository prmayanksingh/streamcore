import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
import WorkArchiveItem from "../../components/WorkArchiveItem";
import gsap from "gsap";
import FlipLink from "../../components/ui/FlipLink";
import { Link } from "react-router-dom";

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
    {
      title: "DATING PARI",
      date: "March 2025",
      roles: ["Web App", "Social", "Responsive"],
    },
    {
      title: "SABKA DENTIST",
      date: "April 2025",
      roles: ["Healthcare", "Service", "Landing Page"],
    },
    {
      title: "JENX KARO",
      date: "February 2025",
      roles: ["E-commerce", "Marketplace", "Responsive"],
    },
  ]);

  const flipRef = useRef(null);

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
    <section className="px-[1.5em] md:px-[4em] py-[3em] pb-[6em]">
      <div className="pb-[4em] flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Portfolio archive
        </h1>
        <Link
          to={"/contact"}
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="w-fit h-fit px-[1em] py-[.5em] flex items-center gap-[.5em] border-2 rounded-full text-[1.4em]"
        >
          <FlipLink
            ref={flipRef}
            text={"Clients Approve"}
            icon={<i className="ri-arrow-right-down-line text-[1.3em]"></i>}
          />
        </Link>
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
    </section>
  );
};

export default WorkArchiveSection;
