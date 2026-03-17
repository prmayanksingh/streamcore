import { useEffect, useRef, useState } from "react";
import FeaturedWorkCard from "../../components/FeaturedWorkCard";
import gsap from "gsap";

const FeaturedWorkSection = () => {
  const [data, setData] = useState([
    {
      img: "../src/assets/images/projects/RJ_PERFUMES.PNG",
      title: "RJ PERFUMES",
      tags: ["Web Design", "Landing Page", "Responsive"],
    },
    {
      img: "../src/assets/images/projects/GRACEWOOD_SERVICES.PNG",
      title: "GRACEWOOD SERVICES",
      tags: ["Web Design", "Services", "Digital Solutions"],
    },
    {
      img: "../src/assets/images/projects/SEASONS_PROPERTIES.PNG",
      title: "SEASONS PROPERTIES",
      tags: ["Services", "Web Development", "Custom Solution"],
    },
    {
      img: "../src/assets/images/projects/NISARA_BEAUTY.PNG",
      title: "NISARA BEAUTY",
      tags: ["Service", "Web Design", "Landing Page"],
    },
    {
      img: "../src/assets/images/projects/LOCAL_MAFIA.PNG",
      title: "LOCAL MAFIA",
      tags: ["Service", "Web Design", "Web Development"],
    },
    {
      img: "../src/assets/images/projects/ELEGANCE_RETREAT.PNG",
      title: "ELEGANCE RETREAT",
      tags: ["Service", "Responsive", "Web Design"],
    },
  ]);

  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: .8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={boxRef}
      className="px-[1.5em] md:px-[4em] py-[7rem] flex flex-col gap-[2em]"
    >
      {data.map((cardData, index) => (
        <FeaturedWorkCard key={index} cardData={cardData} />
      ))}
    </div>
  );
};

export default FeaturedWorkSection;
