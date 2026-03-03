import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";

const PortfolioShowcaseSection = () => {
  const [ProjectCardDetails, setProjectCardDetails] = useState([
    {
      imageSrc: "../src/assets/images/projects/RJ_PERFUMES.PNG",
      heading: "RJ PERFUMES",
      description:
        "A comprehensive e-commerce platform with a modern design and user-friendly interface.",
      tags: ["Web Design", "Landing Page", "Responsive"],
    },
    {
      imageSrc: "../src/assets/images/projects/GRACEWOOD_SERVICES.PNG",
      heading: "GRACEWOOD SERVICES",
      description:
        "Air conditioning services website with booking and service management features.",
      tags: ["Web Design", "Services", "Digital Solutions"],
    },
    {
      imageSrc: "../src/assets/images/projects/SEASONS_PROPERTIES.PNG",
      heading: "SEASONS PROPERTIES",
      description:
        "Custom real estate solution with advanced features and payment integration.",
      tags: ["Services", "Web Development", "Custom Solution"],
    },
    {
      imageSrc: "../src/assets/images/projects/NISARA_BEAUTY.PNG",
      heading: "NISARA BEAUTY",
      description:
        "Modern perfume website with a beautiful and responsive design.",
      tags: ["Service", "Web Design", "Landing Page"],
    },
    {
      imageSrc: "../src/assets/images/projects/LOCAL_MAFIA.PNG",
      heading: "LOCAL MAFIA",
      description:
        "Modern e-commerce website with a beautiful and responsive design.",
      tags: ["Service", "Web Design", "Web Development"],
    },
    {
      imageSrc: "../src/assets/images/projects/ELEGANCE_RETREAT.PNG",
      heading: "ELEGANCE RETREAT",
      description:
        "Modern hotel website with a beautiful and responsive design.",
      tags: ["Service", "Responsive", "Web Design"],
    },
  ]);

  return (
    <div className="px-[1.5rem] md:px-[4rem] py-[2rem] flex flex-col xl:flex-row xl:justify-between gap-[5em] xl:gap-[10em] text-[clamp(10px,3.5vw,17px)] xl:text-[clamp(10px,1.1vw,40px)]">
      <div className="xl:sticky xl:top-30 xl:h-screen flex flex-col gap-[2.5em]">
        <div className="flex flex-col gap-[1.4em]">
          <h1 className="text-[3.5em] md:text-[4.5em] leading-[1em]">
            Selected <br /> Works
          </h1>
          <p className="text-[1.15em] text-[#A1A1A1]">
            Discover our creative portfolio <br /> of digital solutions and
            designs
          </p>
        </div>
        <Link to={"/work"} className="w-fit px-[1.5em] py-[.2em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">View All Works</h1>
          <i className="ri-arrow-right-up-line text-[2em]"></i>
        </Link>
      </div>
      <div className="flex flex-col gap-[4em]">
        {ProjectCardDetails.map((cardDetails, index) => (
          <ProjectCard key={index} cardDetails={cardDetails} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcaseSection;
