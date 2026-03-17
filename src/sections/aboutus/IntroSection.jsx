import gsap from "gsap";
import { useEffect, useRef } from "react";

const IntroSection = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: .8,
      ease: "power3.out",
    });
  }, []);
  return (
    <div ref={boxRef} className="xl:w-full xl:h-[75em] px-[1.5em] md:px-[4em] py-[8em] pt-[9em] flex flex-col xl:flex-row gap-[3em] md:gap-[4em] xl:gap-[2em]">
      <div className="xl:w-[50%] flex flex-col xl:flex-row-reverse xl:justify-between gap-[4em]">
        <div className="w-full xl:w-[90%] h-[30em] md:h-[38em] xl:h-full rounded-[2em] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="../src/assets/images/aboutUs/coffee1.webp"
            alt="guy drinking coffee"
          />
        </div>
        <div className="px-[1.5em] md:px-[2.5em] flex flex-col sm:flex-row xl:flex-col xl:justify-between sm:gap-[30vw] gap-[1.5em]">
          <div className="text-[1em] text-[#ABABAB] flex flex-col">
            <h5>Innovations</h5>
            <h5>Excellence</h5>
            <h5>Creativity</h5>
            <h5>Experience</h5>
            <h5>Competence</h5>
            <h5>Passion</h5>
          </div>
          <div className="text-[1em] text-[#ABABAB] flex flex-col">
            <h5>Web design</h5>
            <h5>UI/UX</h5>
            <h5>App design</h5>
            <h5>Development</h5>
            <h5>Branding</h5>
            <h5>Motion</h5>
          </div>
        </div>
      </div>
      <div className="xl:w-[50%] flex flex-col xl:flex-col-reverse xl:justify-end gap-[4em]">
        <p className="px-[1em] md:pl-[1.5em] text-[1.5em] leading-[1.6em] xl:leading-[1.8em]">
          We are a creative digital agency specializing in innovative design and
          cutting-edge development. We help businesses stand out and thrive in
          the modern landscape.
        </p>
        <div className="w-full h-[30em] md:h-[38em] rounded-[2em] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="../src/assets/images/aboutUs/coffee2.webp"
            alt="girl drinking coffee"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
