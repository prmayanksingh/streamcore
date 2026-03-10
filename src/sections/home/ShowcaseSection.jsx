import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(imgRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-[45rem] sm:h-[50em] md:h-[55rem] xl:h-[65rem] w-full px-[2em] md:px-[3em] xl:px-[4em] py-[8em]">
      <div
        ref={containerRef}
        className="h-full w-full bg-gray-500 rounded-4xl overflow-hidden flex items-center justify-center"
      >
        <img
          ref={imgRef}
          className="h-[120%] w-full object-cover"
          src="../src/assets/images/VRgirl.webp"
          alt="VR girl"
        />
      </div>
    </div>
  );
};

export default ShowcaseSection;
