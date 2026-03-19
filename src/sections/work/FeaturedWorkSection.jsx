import { useEffect, useRef, useState } from "react";
import FeaturedWorkCard from "../../components/FeaturedWorkCard";
import gsap from "gsap";
import RJ_PERFUMES from "../../assets/images/projects/RJ_PERFUMES.webp";
import GRACEWOOD_SERVICE from "../../assets/images/projects/GRACEWOOD_SERVICES.webp";
import SEASONS_PROPERTIES from "../../assets/images/projects/SEASONS_PROPERTIES.webp";
import NISARA_BEAUTY from "../../assets/images/projects/NISARA_BEAUTY.webp";
import LOCAL_MAFIA from "../../assets/images/projects/LOCAL_MAFIA.webp";
import ELEGANCE_RETREAT from "../../assets/images/projects/ELEGANCE_RETREAT.webp";
import JenxKaro from "../../assets/images/projects/JenxKaro.webp";
import DatingPari from "../../assets/images/projects/DatingPari.webp";
import SabkaDentist from "../../assets/images/projects/SabkaDentist.webp";

// {
//       img: RJ_PERFUMES,
//       title: "RJ PERFUMES",
//       tags: ["Web Design", "Landing Page", "Responsive"],
//     },
const FeaturedWorkSection = () => {
  const [data, setData] = useState([
    {
      img: RJ_PERFUMES,
      title: "RJ PERFUMES",
      tags: ["Web Design", "Landing Page", "Responsive"],
    },
    {
      img: GRACEWOOD_SERVICE,
      title: "GRACEWOOD SERVICES",
      tags: ["Web Design", "Services", "Digital Solutions"],
    },
    {
      img: SEASONS_PROPERTIES,
      title: "SEASONS PROPERTIES",
      tags: ["Services", "Web Development", "Custom Solution"],
    },
    {
      img: NISARA_BEAUTY,
      title: "NISARA BEAUTY",
      tags: ["Service", "Web Design", "Landing Page"],
    },
    {
      img: LOCAL_MAFIA,
      title: "LOCAL MAFIA",
      tags: ["Service", "Web Design", "Web Development"],
    },
    {
      img: ELEGANCE_RETREAT,
      title: "ELEGANCE RETREAT",
      tags: ["Service", "Responsive", "Web Design"],
    },
    {
      img: DatingPari,
      title: "DATING PARI",
      tags: ["Web App", "Social", "Responsive"],
    },
    {
      img: SabkaDentist,
      title: "SABKA DENTIST",
      tags: ["Healthcare", "Service", "Landing Page"],
    },
    {
      img: JenxKaro,
      title: "JENX KARO",
      tags: ["E-commerce", "Marketplace", "Responsive"],
    },
  ]);

  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={boxRef}
      className="px-[1.5em] md:px-[4em] py-[7rem] flex flex-col gap-[2em]"
    >
      {data.map((cardData, index) => (
        <FeaturedWorkCard key={index} cardData={cardData} />
      ))}
    </section>
  );
};

export default FeaturedWorkSection;
