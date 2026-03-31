import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BlogShowcase = ({ img }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const fadeinRef = useRef();

  useEffect(() => {
    gsap.from(fadeinRef.current, {
      opacity: 0,
      duration: 1.7,
      delay: .8,
      ease: "power3.out",
    });
  }, []);

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
    <section ref={fadeinRef} className="h-[45rem] sm:h-[50em] md:h-[55rem] xl:h-[65rem] w-full py-[5em]">
      <div
        ref={containerRef}
        className="h-full w-full bg-gray-500 rounded-4xl overflow-hidden flex items-center justify-center"
      >
        <img
          ref={imgRef}
          className="h-[120%] w-full object-cover"
          src={img}
          alt="blog showcase"
        />
      </div>
    </section>
  );
};

export default BlogShowcase;
