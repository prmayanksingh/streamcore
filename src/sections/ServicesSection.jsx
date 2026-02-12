import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";

const ServicesSection = () => {
  const [services, setServices] = useState([
    {
      title1: "Software",
      title2: "Development",
      description:
        "High-performance websites and web applications built with modern technologies. Scalable, secure, and optimized for growth.",
      tags: ["Frontend", "Backend", "Fullstack", "E-Commerce", "Next.js"],
      bgColor: "#FAF7F6",
      smallImg: "../src/assets/images/bubbleSmall.webp",
      largeImg: "../src/assets/images/bubble.webp",
      buttonColor: "#1963F7",
      arrowColor: "#FCFDFF",
    },
    {
      title1: "AI Agents &",
      title2: "Automations",
      description:
        "Intelligent AI-powered solutions that automate workflows, enhance customer experiences, and drive business efficiency.",
        descriptionColor:"#50501D",
      tags: ["Chatbots", "Workflow", "Automation", "AI Solutions"],
      bgColor: "#FFFF33",
      smallImg: "../src/assets/images/cubeSmall.webp",
      largeImg: "../src/assets/images/cubes.webp",
      buttonColor: "#161616",
      arrowColor: "#FCFCFC",
    },
    {
      title1: "Social Media",
      title2: "Management",
      textColor: "#FAFAFA",
      description:
        "Strategic social media management and content creation that boosts your brand presence and engages your target audience across all platforms.",
      descriptionColor: "#ABABAB",
      tags: ["Strategy", "Content", "Engagement", "Community", "Analytics"],
      bgColor: "#1C1C1C",
      smallImg: "../src/assets/images/woodenObjectSmall.webp",
      largeImg: "../src/assets/images/woodenObject.webp",
      buttonColor: "#FAFAFA",
      arrowColor: "#111",
    },
    {
      title1: "Ad",
      title2: "Production",
      description:
        "Compelling ad production and creative campaigns that capture attention and drive conversions for your business.",
      tags: ["Creative", "Video", "Campaigns", "Paid Ads"],
      bgColor: "#FAF7F6",
      smallImg: "../src/assets/images/purpleHeartSmall.webp",
      largeImg: "../src/assets/images/purpleHeart.webp",
      buttonColor: "#1A66FF",
      arrowColor: "#F3F7FF",
    },
  ]);

  return (
    <div className="px-[2em] md:px-[4em] py-[7rem] flex flex-col gap-[5em]">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesSection;
