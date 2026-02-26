import { useState } from "react";
import FeaturedWorkCard from "../../components/FeaturedWorkCard";

const FeaturedWorkSection = () => {
  const [data, setData] = useState([
    {
      title: "11:11",
      tags: ["Social Media", "Ad Production", "Influencer Marketing", "Website Development", "Branding"],
      img: "../src/assets/images/Elvn-Elvn.webp"
    },
    {
      title: "Charge Up",
      tags: ["Ad Production", "Social Media", "Influencer Marketing", "Branding"],
      img: "../src/assets/images/chargeup.webp"
    },
    {
      title: "Cleaning Chief",
      tags: ["Lead Generation", "Ad Production", "Social Media", "AI Agents", "CRM Automation"],
      img: "../src/assets/images/cleaningChief.webp"
    },
    {
      title: "11:11",
      tags: ["Graphics Design", "Ad Production", "Strategy Planning"],
      img: "../src/assets/images/DainikBhaskar.webp"
    },
    {
      title: "Exicom",
      tags: ["Social Media", "Ad Production", "Influencer Marketing", "Graphics Design", "Event Design"],
      img: "../src/assets/images/exicom.webp"
    },
  ]);

  return (
    <div className="px-[1.5em] md:px-[4em] py-[7rem] flex flex-col gap-[2em]">
      {data.map((cardData, index) => (
        <FeaturedWorkCard key={index} cardData={cardData} />
      ))}
    </div>
  );
};

export default FeaturedWorkSection;
