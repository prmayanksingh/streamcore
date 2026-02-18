import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const PortfolioShowcaseSection = () => {
  const [ProjectCardDetails, setProjectCardDetails] = useState([
    {
      imageSrc: "../src/assets/images/Elvn-Elvn.webp",
      heading: "11:11",
      description: "Digital strategy for premium protein bar brand",
      tags: [
        "Social Media",
        "Ad Production",
        "Influencer Marketing",
        "Website Development",
        "Branding",
      ],
    },
    {
      imageSrc: "../src/assets/images/chargeup.webp",
      heading: "Charge Up",
      description: "EV charging infrastructure brand building",
      tags: [
        "Ad Production",
        "Social Media",
        "Influencer Marketing",
        "Branding",
      ],
    },
    {
      imageSrc: "../src/assets/images/cleaningChief.webp",
      heading: "Cleaning Chief",
      description: "AI-powered lead generation for cleaning services",
      tags: [
        "Lead Generation",
        "Ad Production",
        "Social Media",
        "AI Agents",
        "CRM Automation",
      ],
    },
    {
      imageSrc: "../src/assets/images/DainikBhaskar.webp",
      heading: "Dainik Bhaskar",
      description: "Strategic ad campaigns for leading newspaper",
      tags: ["Graphics Design", "Ad Production", "Strategy Planning"],
    },
    {
      imageSrc: "../src/assets/images/exicom.webp",
      heading: "Exicom",
      description: "Complete marketing for EV charging solutions",
      tags: [
        "Social Media",
        "Ad Production",
        "Influencer Marketing",
        "Graphics Design",
        "Event Design",
      ],
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
        <div className="w-fit px-[1.5em] py-[.2em] flex items-center gap-[.5em] border-2 rounded-full">
          <h1 className="text-[1.4em]">View All Works</h1>
          <i className="ri-arrow-right-up-line text-[2em]"></i>
        </div>
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
