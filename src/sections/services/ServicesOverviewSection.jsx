import { Fragment, useEffect, useRef, useState } from "react";
import ServiceOverviewCard from "../../components/ServiceOverviewCard";
import gsap from "gsap";

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
      title: "Contractual Resources",
      description:
        "Skilled contractual resources for your project needs. Scale your team quickly with vetted professionals who integrate seamlessly and deliver results without long-term commitments.",
      roles: [
        "Contract Hiring",
        "Dedicated Teams",
        "Remote Talent",
        "Flexible Engagement",
      ],
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
    <div ref={boxRef} className="px-[1.5em] md:px-[4em] py-[6em]">
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
