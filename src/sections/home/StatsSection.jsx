import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FlipLink from "../../components/ui/FlipLink";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import starImg from '../../assets/images/star.webp'
import smartphonesImg from '../../assets/images/smartphones.webp'
import testimonialsManImg from '../../assets/images/testimonials-man.webp'
import testimonialsWomenImg from '../../assets/images/testimonials-women.webp'
import robotImg from '../../assets/images/robot.webp'
import astroHelmetImg from '../../assets/images/astroHelmet.webp'

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const flipRef1 = useRef(null);
  const flipRef2 = useRef(null);
  const flipRef3 = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.from(box1Ref.current, {
      y: 20,
      scale: 1.3,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: box1Ref.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(box2Ref.current, {
      y: 20,
      scale: 1.2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: box2Ref.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <section className="px-[1.8em] md:px-[4em] xl:px-[4.3em] py-[8em] flex flex-col gap-[2.5em] xl:gap-[1.9em] overflow-hidden">
      <div
        ref={box1Ref}
        className="flex flex-col xl:flex-row gap-[2.5em] xl:gap-[1.9em] text-black"
      >
        <div className="relative h-[34em] md:h-[28em] xl:h-[27em] xl:w-[37%] px-[2em] md:px-[3em] xl:px-[1em] py-[.7em] md:py-[1.3em] md:pb-[2em] flex flex-col md:justify-between md:items-end gap-[2em] bg-[#2845D6] rounded-3xl overflow-hidden">
          <div className="z-99 flex flex-col gap-[.4em]">
            <h1 className="text-[4.3em] xl:text-[5em] text-white font-semibold">90+</h1>
            <h4 className="text-[1.1em] text-white font-light">
              Happy clients who <br /> trust our work
            </h4>
          </div>
          <div className="z-99 text-[clamp(12px,3vw,16px)] text-white">
            <Link
              to={"/contact"}
              onMouseEnter={() => flipRef1.current.play()}
              onMouseLeave={() => flipRef1.current.reverse()}
              className="btn w-fit rounded-full px-[1em] py-[.5em] border-2 flex text-[1.4em] font-semibold"
            >
              <FlipLink
                ref={flipRef1}
                text={"Work With Us"}
                icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
              />
            </Link>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[30rem] xl:h-[21rem] absolute -bottom-34 md:bottom-5 xl:top-0 left-0 xl:-left-20 md:-left-10"
            src={starImg}
            loading="lazy"
            decoding="async"
            alt="star image"
          />
        </div>
        <div className="z-97 relative h-[34em] md:h-[28em] xl:h-[27em] xl:w-[63%] px-[2em] xl:px-[2.5em] py-[2em] xl:py-[2.5em] bg-[#1C1C1C] text-white rounded-3xl overflow-hidden flex flex-col md:items-end md:justify-between">
          <div className="flex">
            <div className="z-101 h-[5em] w-[5em] rounded-full bg-amber-50 bg-cover"
            style={{ backgroundImage: `url(${testimonialsManImg})` }}
            ></div>
            <div className="z-102 h-[5em] w-[5em] -mx-[1em] rounded-full bg-amber-50 bg-cover flex items-center justify-center">
              <i className="ri-shining-fill text-[2em] text-blue-500"></i>
            </div>
            <div className="z-103 h-[5em] w-[5em] rounded-full bg-amber-50 bg-cover"
            style={{ backgroundImage: `url(${testimonialsWomenImg})` }}
            ></div>
          </div>
          <div className="z-99 flex flex-col gap-[.4em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">80%</h1>
            <h4 className="text-[1.1em] font-light md:text-right">
              Clients return for <br /> new project
            </h4>
          </div>
          <img
            className="z-98 absolute -left-4 -bottom-33 md:top-15 xl:top-8 h-[23em] md:h-[26em] xl:h-[29em]"
            src={smartphonesImg}
            loading="lazy"
            decoding="async"
            alt="star image"
          />
        </div>
      </div>
      <div
        ref={box2Ref}
        className="flex flex-col xl:flex-row gap-[2.5em] xl:gap-[1.9em]"
      >
        <div className="relative z-97 h-[34em] md:h-[28em] xl:h-[27em] xl:w-[63%] px-[2em] md:px-[2.5em] md:pt-[.7em] md:pb-[2.5em] bg-[#1C1C1C] rounded-3xl flex flex-col md:justify-between gap-[2em] overflow-hidden">
          <div className="z-99 flex flex-col gap-[.2em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">5+</h1>
            <h4 className="text-[1.1em] font-light">
              Years of experience <br /> delivering excellence
            </h4>
          </div>
          <div className="z-99 text-[clamp(12px,3vw,16px)]">
            <Link
              to={"/aboutus"}
              onMouseEnter={() => flipRef2.current.play()}
              onMouseLeave={() => flipRef2.current.reverse()}
              className="btn w-fit rounded-full px-[1em] py-[.5em] border-2 flex text-[1.4em] font-semibold"
            >
              <FlipLink
                ref={flipRef2}
                text={"Our Story"}
                icon={<i className="ri-arrow-right-down-line text-[1.3em]"></i>}
              />
            </Link>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[30rem] xl:h-[29rem] absolute -bottom-34 md:bottom-0 xl:bottom-0 left-0 md:left-auto xl:-right-10 md:-right-9"
            src={robotImg}
            loading="lazy"
            decoding="async"
            alt="robot image"
          />
        </div>
        <div className="relative z-97 h-[34em] md:h-[28em] xl:h-[27em] xl:w-[37%] px-[2em] md:px-[2.5em] xl:px-[2em] md:pt-[.7em] md:pb-[2.5em] bg-[#1C1C1C] rounded-3xl flex flex-col md:justify-between gap-[2em] overflow-hidden">
          <div className="z-99 flex flex-col gap-[.2em]">
            <h1 className="text-[4.3em] xl:text-[5.5em] font-semibold">180+</h1>
            <h4 className="text-[1.1em] font-light">
              Projects successfully <br /> completed
            </h4>
          </div>
          <div className="z-99 text-[clamp(12px,3vw,16px)]">
            <Link
              to={"/work"}
              onMouseEnter={() => flipRef3.current.play()}
              onMouseLeave={() => flipRef3.current.reverse()}
              className="btn w-fit rounded-full px-[1em] py-[.5em] border-2 flex text-[1.4em] font-semibold"
            >
              <FlipLink
                ref={flipRef3}
                text={"View Work"}
                icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
              />
            </Link>
          </div>
          <img
            className="z-98 h-[22rem] md:h-[27rem] xl:h-[17rem] absolute -bottom-34 md:bottom-8 md:left-auto md:-right-15 xl:bottom-10 left-0 xl:-right-15"
            src={astroHelmetImg}
            loading="lazy"
            decoding="async"
            alt="robot image"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
