import { Fragment, useState } from "react";
import ServiceOverviewCard from "../../components/ServiceOverviewCard";

const ServicesOverviewSection = () => {
  const [data, setdata] = useState([
    {
      title: "Software Development",
      description:
        "High-performance websites and web applications built with modern technologies. Scalable, secure, and optimized for growth.",
      roles: [
        "Frontend",
        "Backend",
        "Full Stack",
        "E-Commerce",
        "Next.js",
        "React",
        "Node.js",
      ],
    },
    {
      title: "AI Agents & Automations",
      description:
        "Intelligent AI-powered solutions that automate workflows, enhance customer experiences, and drive business efficiency.",
      roles: [
        "Chatbots",
        "Workflow",
        "Automation",
        "AI Solution",
        "Machine Learning",
        "Process Optimization",
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Strategic social media management and content creation that boosts your brand presence and engages your target audience across all platforms.",
      roles: [
        "Strategy",
        "Content Creation",
        "Community",
        "Analytics",
        "Platform Management",
        "Brand Growth",
      ],
    },
    {
      title: "Ad Production",
      description:
        "Compelling ad production and creative campaigns that capture attention and drive conversions for your business.",
      roles: [
        "Creative",
        "Video Production",
        "Campaings",
        "Paid Ads",
        "Content Marketing",
        "ROI Focused",
      ],
    },
    {
      title: "Influencer Marketing",
      description:
        "Connect with the right influencers to amplify your brand message and reach targeted audiences through authentic partnerships.",
      roles: [
        "Partnerships",
        "Campaign Management",
        "Brand Ambassadors",
        "Social Reach",
        "Analytics",
        "ROI Tracking",
      ],
    },
    {
      title: "UI/UX Designing",
      description:
        "User-centered design that creates intuitive, engaging experiences. From wireframes to final designs that users love.",
      roles: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
  ]);
  return (
    <div className="px-[1.5em] md:px-[4em] py-[6em]">
      <div className="w-full h-[.1em] bg-white"></div>
      {data.map((job, index) => (
        <Fragment key={index}>
          <ServiceOverviewCard job={job} />
          <div className="w-full h-[.1em] bg-white"></div>
        </Fragment>
      ))}
    </div>
  );
};

export default ServicesOverviewSection;
