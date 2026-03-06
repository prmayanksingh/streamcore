import { Link } from "react-router-dom";
import "../style/font.css";
import FlipLink from "./ui/FlipLink";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Navbar = () => {
  const flipRef = useRef();
  const fadeinRef = useRef();

  useEffect(()=>{
    gsap.from(fadeinRef.current,{
      opacity: 0,
      duration: 1.7,
      delay: 2,
      ease: "power3.out",
    })
  },[])
  
  return (
    <div ref={fadeinRef} className="sticky top-0 z-999 px-[2rem] md:px-[3rem] lg:px-[3.8rem] py-[1.5rem] md:py-[2rem] lg:py-[2.2rem] flex justify-between items-center text-[clamp(.5em,3vw,1em)]">
      <Link to={"/"} className="w-[12em] md:w-[14em] h-full">
        <img src="../src/assets/images/StreamCoreLogo.png" alt="" />
        {/* <h1 className="text-[1.5em] md:text-[2em] font-[monument] font-bold tracking-widest">
          WHIZOID
        </h1>
        <h6 className="text-[.6em] md:text-[.7em] tracking-widest text-center font-[monument]">
          STUDIO
        </h6> */}
      </Link>
      <div className="flex items-center gap-[.8em] md:gap-[1.5em]">
        <div className="backdrop-blur-md h-fit px-[.9em] md:px-[.8em] py-[.6em] md:py-[.4em] rounded-full">
          <i className="ri-lightbulb-line text-[1.2em] md:text-[1.5em]"></i>
        </div>
        <Link
          to={"/contact"}
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="relative h-[2.5em] border-2 backdrop-blur-md rounded-full px-[.8em] md:px-[.9em] text-[1em] md:text-[1.2em] font-semibold flex items-center justify-center overflow-hidden"
        >
          <FlipLink
          ref={flipRef}
            text={"Say Hello"}
            icon={<i className="ri-arrow-right-up-line text-[1.1em]"></i>}
          />
        </Link>
        <div className="bg-white px-[.6em] md:px-[.7em] py-[.3em] md:py-[.4em] text-[1.2em] md:text-[1.3em] rounded-full">
          <i className="ri-menu-line text-black font-bold"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
