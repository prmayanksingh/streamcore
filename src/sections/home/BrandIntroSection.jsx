import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heartImg from "../../assets/images/brandIntro/heart.webp";
import astroHelmetImg from "../../assets/images/brandIntro/astroHelmet.webp";
import cubeImg from "../../assets/images/brandIntro/cube.webp";
import curvedTextImg from "../../assets/images/curved-text.png";
import spiralImg from "../../assets/images/spiral.webp";
import spiralVideo from '../../assets/spiralVideo.mp4'

const BrandIntroSection = () => {
  const fadeinRef = useRef([]);
  const techRef = useRef();
  const heading1Ref = useRef();
  const heading2Ref = useRef();
  const curvTextRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.from(heading1Ref.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
    tl.from(heading2Ref.current, {
      y: 150,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    }).from(
      fadeinRef.current,
      {
        opacity: 0,
        duration: 1.7,
        ease: "power3.out",
      },
      "-=.2",
    );

    // Heart Scale animation
    gsap.to(fadeinRef.current[0], {
      scale: 1.1,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Astro up & down
    gsap.to(fadeinRef.current[1], {
      y: -20,
      duration: 1.9,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Cube rotate
    gsap.to(fadeinRef.current[2], {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    // Curve Text rotate
    gsap.to(curvTextRef.current, {
      rotate: 360,
      duration: 25,
      repeat: -1,
      ease: "linear",
    });

    // tech marquee animation
    const tech = techRef.current;
    const firstSetWidth = tech.children[0].offsetWidth;
    gsap.to(tech, {
      x: firstSetWidth + 16,
      duration: 16,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="relative text-[clamp(.7em,3.5vw,1em)] md:text-[clamp(1em,1vw,1.5em)] lg:text-[clamp(1.2em,1.5vw,1em)] flex flex-col items-center gap-[2em] lg:gap-[7em] lg:px-[3em]">
      <div className="z-100 h-[30rem] lg:h-[20rem] flex flex-col justify-center items-center md:gap-[1em] text-center">
        <div
          ref={heading1Ref}
          className="flex flex-col md:flex-row items-center"
        >
          <h1 className="text-[4em] md:text-[5em] xl:text-[6.5em] font-semibold">
            Design ,
          </h1>{" "}
          <div className="flex items-center justify-end h-[4em] md:h-[4.7em] xl:h-[6em] w-[25em] sm:w-[39em] md:w-[14em] xl:w-[15em] my-[.8em] sm:my-[1.2em] md:my-[.1em] bg-[#2845D6] text-black rounded-full gap-[1em] whitespace-nowrap overflow-hidden">
            <div ref={techRef} className="flex items-center gap-[1em] text-white">
              {/* first set */}
              <div className="flex items-center gap-[1em]">
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>{" "}
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>{" "}
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
              </div>
              {/*  second set */}
              <div className="flex items-center gap-[1em]">
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>{" "}
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>{" "}
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
                <h1 className="text-[4.5em] md:text-[5em] xl:text-[6em] font-semibold">
                  tech
                </h1>{" "}
                <i className="ri-shining-fill text-[2em]"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={heading2Ref}
          className="flex flex-col sm:flex-row gap-[.8em] leading-[4em]"
        >
          <h1 className="text-[4em] md:text-[5em] xl:text-[6.5em] font-semibold">
            <i className="ri-shining-fill text-[.8em] hidden md:inline"></i> and
            some
          </h1>
          <h1 className="text-[4em] md:text-[5em] xl:text-[6.5em] font-semibold">
            magic
          </h1>
        </div>
      </div>
      <div
        ref={(el) => (fadeinRef.current[3] = el)}
        className="flex flex-col lg:flex-row-reverse items-center gap-[8em] lg:gap-[3em]"
      >
        <div className="relative h-[15em] sm:h-[18em] md:h-[25em] lg:h-[8em] w-[25em] sm:w-[35em] md:w-[40em] lg:w-[13em] bg-gray-500 rounded-2xl overflow-hidden">
          <video
            autoPlay
            loop 
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={spiralVideo} type="video/mp4" />
          </video>
          <div className="absolute lg:text-[.8em] bottom-[1em] right-[1em] w-[3.5em] lg:w-[2.4em] h-[3.5em] lg:h-[2.5em] px-[1em] bg-[#2845D6] flex items-center justify-center rounded-full cursor-not-allowed">
            <i className="ri-play-large-fill"></i>
          </div>
        </div>
        <div className="px-[2em] lg:px-0 lg:py-[1.7em] flex flex-col lg:flex-row lg:justify-between gap-[3em] lg:border-t-4 lg:border-dashed lg:border-[#242424] overflow-hidden">
          <div className="relative h-[13em] lg:h-[8em] w-[13em] lg:w-[8em] flex items-center justify-center">
            <img
            ref={curvTextRef}
              src={curvedTextImg}
              className="h-full w-full scale-[230%] bg-cover"
              alt="curved-text"
            />
            <img
              className="absolute h-[3.7em] lg:h-[2.3em]"
              src={spiralImg}
              alt="spiral image"
            />
          </div>
          <h3 className="text-[1.4em] lg:text-[.8em] lg:w-[35%] font-light">
            We craft digital experiences that blend creativity with technology
            to help brands grow and succeed.
          </h3>
          <div className="text-[1.3em] lg:text-[.7em] font-light">
            <h3>
              <i className="ri-shining-fill text-[.8em]"></i> Innovative
            </h3>
            <h3>
              <i className="ri-shining-fill text-[.8em]"></i> Creative
            </h3>
            <h3>
              <i className="ri-shining-fill text-[.8em]"></i> Results-Driven
            </h3>
          </div>
        </div>
      </div>
      <img
        ref={(el) => (fadeinRef.current[0] = el)}
        className="hidden md:inline absolute z-99 h-[10em] lg:h-[12em] xl:h-[14em] right-[72%] lg:right-[73%] xl:right-[70%] top-[10%] md:top-[8%] lg:top-[0%] xl:top-[-5%]"
        src={heartImg}
        alt="Heart Image"
      />
      <img
        ref={(el) => (fadeinRef.current[1] = el)}
        className="hidden md:inline absolute z-101 h-[9em] lg:h-[9em] xl:h-[11em] left-[73%] md:left-[74%] xl:left-[69%] top-[2%] md:top-[5%] lg:top-[-7%] xl:top-[-10%]"
        src={astroHelmetImg}
        alt="AstroHelmet Image"
      />
      <img
        ref={(el) => (fadeinRef.current[2] = el)}
        className="hidden md:inline absolute z-101 h-[8em] right-[45%] top-[22%] lg:top-[40%] xl:top-[44%]"
        src={cubeImg}
        alt="cube Image"
      />
    </section>
  );
};

export default BrandIntroSection;
