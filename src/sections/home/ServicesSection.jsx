import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard";
import bubbleSmall from '../../assets/images/bubbleSmall.webp'
import bubble from '../../assets/images/bubble.webp'
import cubeSmall from '../../assets/images/cubeSmall.webp'
import cubes from '../../assets/images/cubes.webp'
import woodenObjectSmall from '../../assets/images/woodenObjectSmall.webp'
import woodenObject from '../../assets/images/woodenObject.webp'
import purpleHeartSmall from '../../assets/images/purpleHeartSmall.webp'
import purpleHeart from '../../assets/images/purpleHeart.webp'

const ServicesSection = () => {
  const [services, setServices] = useState([
    {
      title1: "Software",
      title2: "Development",
      description:
        "High-performance websites and web applications built with modern technologies. Scalable, secure, and optimized for growth.",
      tags: ["Frontend", "Backend", "Fullstack", "E-Commerce", "Next.js"],
      bgColor: "#FAF7F6",
      smallImg: bubbleSmall,
      largeImg: bubble,
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
      smallImg: cubeSmall,
      largeImg: cubes,
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
      smallImg: woodenObjectSmall,
      largeImg: woodenObject,
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
      smallImg: purpleHeartSmall,
      largeImg: purpleHeart,
      buttonColor: "#1A66FF",
      arrowColor: "#F3F7FF",
    },
    {
      title1: "Contractual",
      title2: "Resources",
      description:
        "Skilled contractual resources for your project needs. Scale your team quickly with vetted professionals who integrate seamlessly and deliver results without long-term commitments.",
        descriptionColor:"#50501D",
      tags: ["Contract Hiring", "Dedicated Teams", "Remote Talent", "Flexible Engagement"],
      bgColor: "#FFFF33",
      smallImg: cubeSmall,
      largeImg: cubes,
      buttonColor: "#161616",
      arrowColor: "#FCFCFC",
    },
  ]);

  return (
    <section className="px-[1.5em] md:px-[4em] py-[7rem] flex flex-col gap-[5em]">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
};

export default ServicesSection;
