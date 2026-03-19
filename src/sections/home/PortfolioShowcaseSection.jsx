import React, { useRef, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";
import FlipLink from "../../components/ui/FlipLink";
import RJ_PERFUMES from "../../assets/images/projects/RJ_PERFUMES.webp";
import GRACEWOOD_SERVICE from "../../assets/images/projects/GRACEWOOD_SERVICES.webp";
import SEASONS_PROPERTIES from "../../assets/images/projects/SEASONS_PROPERTIES.webp";
import NISARA_BEAUTY from "../../assets/images/projects/NISARA_BEAUTY.webp";
import LOCAL_MAFIA from "../../assets/images/projects/LOCAL_MAFIA.webp";
import ELEGANCE_RETREAT from "../../assets/images/projects/ELEGANCE_RETREAT.webp";
import JenxKaro from "../../assets/images/projects/JenxKaro.webp";
import DatingPari from "../../assets/images/projects/DatingPari.webp";
import SabkaDentist from "../../assets/images/projects/SabkaDentist.webp";

const PortfolioShowcaseSection = () => {
  const [ProjectCardDetails, setProjectCardDetails] = useState([
    {
      imageSrc: RJ_PERFUMES,
      heading: "RJ PERFUMES",
      description:
        "A comprehensive e-commerce platform with a modern design and user-friendly interface.",
      tags: ["Web Design", "Landing Page", "Responsive"],
    },
    {
      imageSrc: GRACEWOOD_SERVICE,
      heading: "GRACEWOOD SERVICES",
      description:
        "Air conditioning services website with booking and service management features.",
      tags: ["Web Design", "Services", "Digital Solutions"],
    },
    {
      imageSrc: SEASONS_PROPERTIES,
      heading: "SEASONS PROPERTIES",
      description:
        "Custom real estate solution with advanced features and payment integration.",
      tags: ["Services", "Web Development", "Custom Solution"],
    },
    {
      imageSrc: NISARA_BEAUTY,
      heading: "NISARA BEAUTY",
      description:
        "Modern perfume website with a beautiful and responsive design.",
      tags: ["Service", "Web Design", "Landing Page"],
    },
    {
      imageSrc: LOCAL_MAFIA,
      heading: "LOCAL MAFIA",
      description:
        "Modern e-commerce website with a beautiful and responsive design.",
      tags: ["Service", "Web Design", "Web Development"],
    },
    {
      imageSrc: ELEGANCE_RETREAT,
      heading: "ELEGANCE RETREAT",
      description:
        "Modern hotel website with a beautiful and responsive design.",
      tags: ["Service", "Responsive", "Web Design"],
    },
    {
      imageSrc: DatingPari,
      heading: "DATING PARI",
      description:
        "Modern dating platform with chat, video calls, and real-time connections.",
      tags: ["Web App", "Social", "Responsive"],
    },
    {
      imageSrc: SabkaDentist,
      heading: "SABKA DENTIST",
      description:
        "Dental services website with booking, treatments, and a clean responsive design.",
      tags: ["Healthcare", "Service", "Landing Page"],
    },
    {
      imageSrc: JenxKaro,
      heading: "JENX KARO",
      description:
        "Electrical marketplace with product search, categories, and smooth user experience.",
      tags: ["E-commerce", "Marketplace", "Responsive"],
    },
  ]);

  const flipRef = useRef(null);

  return (
    <section className="px-[1.5rem] md:px-[4rem] py-[2rem] flex flex-col xl:flex-row xl:justify-between gap-[5em] xl:gap-[10em] text-[clamp(10px,3.5vw,17px)] xl:text-[clamp(10px,1.1vw,40px)]">
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
        <Link
          to={"/work"}
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="w-fit px-[1em] py-[.5em] flex items-center gap-[.5em] border-2 rounded-full text-[1.4em]"
        >
          <FlipLink
            ref={flipRef}
            text={"View All Works"}
            icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-[4em]">
        {ProjectCardDetails.map((cardDetails, index) => (
          <ProjectCard key={index} cardDetails={cardDetails} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcaseSection;
