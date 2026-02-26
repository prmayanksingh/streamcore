import React, { Fragment, useState } from "react";
import WorkArchiveItem from "../../components/WorkArchiveItem";

const WorkArchiveSection = () => {
  const [data, setdata] = useState([
    {
      title: "11:11",
      date: "January 2025",
      roles: [
        "Social Media",
        "Ad Production",
        "Influencer Marketing",
        "Website Development",
        "Branding",
      ],
    },
    {
      title: "Charge Up",
      date: "February 2025",
      roles: [
        "Ad Production",
        "Social Media",
        "Influencer Marketing",
        "Branding",
      ],
    },
    {
      title: "Cleaning Chief",
      date: "March 2025",
      roles: [
        "Lead Generaion",
        "Ad Production",
        "Social Media",
        "AI Agents",
        "CRM Automation",
      ],
    },
    {
      title: "Danik Bhaskar",
      date: "April 2025",
      roles: ["Graphics Design", "Ad Production", "Strategy Planning"],
    },
    {
      title: "11:11",
      date: "January 2025",
      roles: [
        "Social Media",
        "Ad Production",
        "Influencer Marketing",
        "Website Development",
        "Branding",
      ],
    },
    {
      title: "Charge Up",
      date: "February 2025",
      roles: [
        "Ad Production",
        "Social Media",
        "Influencer Marketing",
        "Branding",
      ],
    },
    {
      title: "Cleaning Chief",
      date: "March 2025",
      roles: [
        "Lead Generaion",
        "Ad Production",
        "Social Media",
        "AI Agents",
        "CRM Automation",
      ],
    },
    {
      title: "Danik Bhaskar",
      date: "April 2025",
      roles: ["Graphics Design", "Ad Production", "Strategy Planning"],
    },
    {
      title: "11:11",
      date: "January 2025",
      roles: [
        "Social Media",
        "Ad Production",
        "Influencer Marketing",
        "Website Development",
        "Branding",
      ],
    },
    {
      title: "Charge Up",
      date: "February 2025",
      roles: [
        "Ad Production",
        "Social Media",
        "Influencer Marketing",
        "Branding",
      ],
    },
    {
      title: "Cleaning Chief",
      date: "March 2025",
      roles: [
        "Lead Generaion",
        "Ad Production",
        "Social Media",
        "AI Agents",
        "CRM Automation",
      ],
    },
    {
      title: "Danik Bhaskar",
      date: "April 2025",
      roles: ["Graphics Design", "Ad Production", "Strategy Planning"],
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
