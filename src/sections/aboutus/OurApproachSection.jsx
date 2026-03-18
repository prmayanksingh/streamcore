import React, { useLayoutEffect, useRef, useState } from "react";
import ProcessSteps from "../../components/ProcessSteps";
import FlipLink from "../../components/ui/FlipLink";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heart from "../../assets/images/ourProcess/heart.webp";
import hexa from "../../assets/images/ourProcess/hexa.webp";
import bubble from "../../assets/images/ourProcess/bubble.webp";
import spiral from "../../assets/images/ourProcess/spiral.webp";

gsap.registerPlugin(ScrollTrigger);

const OurApproachSection = () => {
  const [data, setData] = useState([
    {
      title: "Our Story",
      tag1: "Founded",
      tag2: "Mission",
      step: "Impact",
      img: heart,
    },
    {
      title: "Our Values",
      tag1: "Integrity",
      tag2: "Innovation",
      step: "Core Principles",
      img: hexa,
    },
    {
      title: "Who we are",
      tag1: "Experts",
      tag2: "Creators",
      step: "Talent",
      img: bubble,
    },
    {
      title: "Our Promise",
      tag1: "Quality",
      tag2: "Results",
      step: "Commitment",
      img: spiral,
    },
  ]);

  const flipRef = useRef(null);

  useLayoutEffect(() => {
    const steps = gsap.utils.toArray(".steps");
    const lines = gsap.utils.toArray(".line");

    steps.forEach((step) => {
      gsap.from(step, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });
    });

    lines.forEach((line) => {
      gsap.from(line, {
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: line,
          start: "top 95%",
          end: "top 70%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="px-[1.5rem] md:px-[4rem] pt-[4em] py-[5rem] overflow-hidden">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.9em]">
        <h1 className="text-[2.8em] md:text-[4.5em] font-semibold leading-[1.1em]">
          Our Process <br />& Approach
        </h1>
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
      <div className="h-[.1em] w-full mt-[4em] bg-white"></div>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="steps">
            <ProcessSteps item={item} />
          </div>
          <div className="line h-[.1em] w-full bg-white"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default OurApproachSection;
