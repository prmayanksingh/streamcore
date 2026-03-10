import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FlipLink from "../../components/ui/FlipLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const FooterSection = () => {
  const flipRef1 = useRef(null);
  const flipRef2 = useRef(null);
  const flipRef3 = useRef(null);
  const flipRef4 = useRef(null);
  const flipRef5 = useRef(null);

  useLayoutEffect(() => {
    gsap.from(".box", {
      y: 60,
      opacity: 0,
      duration: 0.4,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".box",
        start: "top 90%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <footer className="px-[1.5em] md:px-[4em] pb-[2em] grid grid-cols-1 xl:grid-cols-3 gap-[2em] xl:gap-[1.5em] overflow-hidden">
      <div className="box h-[25em] md:h-[30em] xl:h-[27em] w-full px-[2em] py-[2.5em] md:px-[3.5em] flex flex-col gap-[.5em] md:gap-[.9em] rounded-2xl bg-[#1C1C1C]">
        <Link
          to={"/"}
          onMouseEnter={() => flipRef1.current.play()}
          onMouseLeave={() => flipRef1.current.reverse()}
          className="text-[2.3em] md:text-[2.7em] xl:text-[2.4em] font-semibold"
        >
          <FlipLink ref={flipRef1} text={"Home"} />
        </Link>
        <Link
          to={"/aboutus"}
          onMouseEnter={() => flipRef2.current.play()}
          onMouseLeave={() => flipRef2.current.reverse()}
          className="text-[2.3em] md:text-[2.7em] xl:text-[2.4em] font-semibold"
        >
          <FlipLink ref={flipRef2} text={"About"} />
        </Link>
        <Link
          to={"/work"}
          onMouseEnter={() => flipRef3.current.play()}
          onMouseLeave={() => flipRef3.current.reverse()}
          className="text-[2.3em] md:text-[2.7em] xl:text-[2.4em] font-semibold"
        >
          <FlipLink ref={flipRef3} text={"Works"} />
        </Link>
        <Link
          to={"/services"}
          onMouseEnter={() => flipRef4.current.play()}
          onMouseLeave={() => flipRef4.current.reverse()}
          className="text-[2.3em] md:text-[2.7em] xl:text-[2.4em] font-semibold"
        >
          <FlipLink ref={flipRef4} text={"Services"} />
        </Link>
        <Link
          to={"/contact"}
          onMouseEnter={() => flipRef5.current.play()}
          onMouseLeave={() => flipRef5.current.reverse()}
          className="text-[2.3em] md:text-[2.7em] xl:text-[2.4em] font-semibold"
        >
          <FlipLink ref={flipRef5} text={"Contact"} />
        </Link>
      </div>
      <div className="box w-full rounded-4xl flex flex-col gap-[2em] xl:gap-[1.5em]">
        <div className="h-[25%] px-[2em] md:px-[3.5em] xl:px-[3em] py-[1.3em] flex items-center gap-[.7em] rounded-2xl bg-[#1C1C1C]">
          <i className="ri-shining-fill text-[1.5em]"></i>
          <h1 className="text-[1.2em] md:text-[1.5em] xl:text-[1.3em]">
            hr@streamcoretechnologies.com
          </h1>
        </div>
        <div className="h-[25%] px-[2em] md:px-[3.5em] xl:px-[3em] py-[1.3em] flex items-center gap-[.7em] rounded-2xl bg-[#1C1C1C] p-[1em]">
          <i className="ri-shining-fill text-[1.5em]"></i>{" "}
          <h1 className="text-[1.3em] md:text-[1.5em] xl:text-[1.3em]">
            +91 9415337435
          </h1>
        </div>
        <div className="h-[50%] px-[2em] md:px-[3.5em] xl:px-[3em] py-[1.3em] flex flex-col justify-center gap-[.5em] rounded-2xl bg-[#1C1C1C] p-[1em]">
          <div className="flex items-center gap-[.7em]">
            <i className="ri-shining-fill text-[1.5em]"></i>
            <h1 className="text-[1.3em] md:text-[1.5em] xl:text-[1.3em]">
              India - G.Noida
            </h1>
          </div>
          <p className="text-[.9em] md:text-[1em] xl:text-[.9em] text-[#808080]">
            NX One Byte Tower 3 A1518-1520 Techzone 4 Greater Noida west Gautam
            Buddh Nagar Nagar 201318
          </p>
        </div>
      </div>
      <div className="box h-[20em] md:h-[25em] xl:h-[27em] w-full px-[2em] md:px-[3.5em] py-[2.5em] flex flex-col gap-[1em] md:gap-[1.2em] rounded-4xl bg-[#1C1C1C]">
        <h1 className="text-[2.3em] md:text-[2.7em] font-semibold">
          Ecosystem
        </h1>
        <div className="flex flex-col gap-[.4em] md:gap-[.7em]">
          <h2 className="text-[1.3em] md:text-[1.7em] font-light hover:text-gray-400 transition-colors duration-200 cursor-pointer">Instagram</h2>
          <h2 className="text-[1.3em] md:text-[1.7em] font-light hover:text-gray-400 transition-colors duration-200 cursor-pointer">Twitter</h2>
          <h2 className="text-[1.3em] md:text-[1.7em] font-light hover:text-gray-400 transition-colors duration-200 cursor-pointer">Linkedin</h2>
          <h2 className="text-[1.3em] md:text-[1.7em] font-light hover:text-gray-400 transition-colors duration-200 cursor-pointer">Youtube</h2>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
