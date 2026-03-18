import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FlipLink from "./ui/FlipLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blurCube from '../assets/images/contact/blurCube.webp'
import astroHelmet from '../assets/images/contact/astroHelmet.webp'
import spring from '../assets/images/contact/spring.webp'

gsap.registerPlugin(ScrollTrigger)

const StartProject = () => {
  const flipRef = useRef(null);
  const boxRef = useRef(null)

  useLayoutEffect(() => {
    gsap.from(boxRef.current,{
      scale:1.05,
      borderRadius: "25%",
      scrollTrigger:{
        trigger: boxRef.current,
        start: "top 75%",
        end: "top 30%",
        scrub: true
      }
    })
  }, [])
  
  return (
    <div ref={boxRef} className="z-98 relative w-full h-[30em] md:h-[44em] px-[2em] md:px-[3em] rounded-4xl bg-white flex flex-col justify-center gap-[4em] overflow-hidden">
      <h1 className="z-100 text-[2.8em] md:text-[5em] xl:text-[6em] font-semibold leading-none text-black">
        <i className="ri-poker-hearts-fill text-[.9em]"></i> Let's talk about{" "}
        <br className="hidden xl:inline" /> your next project!
      </h1>
      <Link
        to={"/contact"}
        onMouseEnter={() => flipRef.current.play()}
        onMouseLeave={() => flipRef.current.reverse()}
        className="z-100 w-fit h-fit px-[1.2em] md:px-[1.5em] py-[.7em] md:py-[.9em] text-[1.2em] md:text-[1.5em] font-semibold bg-blue-600 text-white flex items-center gap-[.5em] rounded-full"
      >
        <FlipLink
          ref={flipRef}
          text={"Get Started"}
          icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
        />
      </Link>
      <img
        className="z-99 h-[100vw] xl:h-[70vw] absolute top-0 xl:top-[-12em] right-[-5em] xl:right-[0]"
        src={blurCube}
        loading="lazy"
        decoding="async"
        alt="blur cube"
      />
      <img
        className="z-99 absolute hidden xl:inline h-[23em] bottom-[4em] right-[5em]"
        src={astroHelmet}
        loading="lazy"
        decoding="async"
        alt="astro-helmet"
      />
      <img
        className="z-99 absolute hidden xl:inline h-[8em] bottom-[8em] right-[30em]"
        src={spring}
        loading="lazy"
        decoding="async"
        alt="spring"
      />
    </div>
  );
};

export default StartProject;
