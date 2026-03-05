import React, { useRef, useState } from "react";
import Approachbox from "../../components/Approachbox";
import { Link } from "react-router-dom";
import FlipLink from "../../components/ui/FlipLink";

const ApproachSection = () => {
  const [data, setData] = useState([
    {
      img: "../src/assets/images/Approach1.webp",
      title: "Perfection",
      description:
        "From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the highest standards of quality.",
    },
    {
      img: "../src/assets/images/Approach2.webp",
      title: "Innovative",
      description:
        "We stay ahead of design trends, offering modern and visually impactful solutions that set your brand apart.",
    },
    {
      img: "../src/assets/images/Approach3.webp",
      title: "Expertise",
      description:
        "We are passionate about integrating the latest technologies and trends, including interactive animations and mobile-first strategies.",
    },
    {
      img: "../src/assets/images/Approach4.webp",
      title: "Full-Cycle services",
      description:
        "From web design to development, branding, SEO, and UX/UI, we provide a full range of services that cover all your digital needs.",
    },
    {
      img: "../src/assets/images/Approach5.webp",
      title: "Client Success",
      description:
        "Our clients consistently see improved engagement, conversion rates, and business growth.",
    },
  ]);

  const flipRef = useRef(null);

  return (
    <div className="px-[1.5rem] md:px-[4rem] py-[3rem]">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Approach and <br className="hidden xl:inline" />
          philosophy
        </h1>
        <div className="text-[1.1em] text-[#969696] tracking-wide leading-[1.7em]">
          <p>Design</p>
          <p>Development</p>
          <p>Mastership</p>
        </div>

        <Link
          to={"/contact"}
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="w-fit h-fit px-[1em] py-[.5em] flex items-center gap-[.5em] border-2 rounded-full text-[1.4em]"
        >
          <FlipLink
            ref={flipRef}
            text={"Let's Chat"}
            icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
          />
        </Link>
      </div>
      <div className="h-[.1em] w-full mt-[4em] xl:mt-[5em] bg-white"></div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Approachbox item={item} />
          <div className="h-[.1em] w-full  bg-white"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ApproachSection;
// my-[4.5em] xl:my-[5em]