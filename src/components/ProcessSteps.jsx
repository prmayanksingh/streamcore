import gsap from "gsap";
import { useRef } from "react";

const ProcessSteps = ({ item }) => {
  const iconeRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const HandleEnter = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    if (window.innerWidth >= 1280) {
      gsap.to(iconeRef.current, {
        left: "0%",
        duration: 0.2,
        opacity: 1,
        ease: "none",
      });

      gsap.to(textRef.current, {
        x: 47,
        duration: 0.2,
        ease: "none",
      });

      gsap.set(imgRef.current,{
        x:mouseX-100  ,
      })

      gsap.to(imgRef.current, {
        y: -80,
        opacity: 1,
        duration: 0.2,
      });
    }
  };

  const HandleLeave = () => {
    if (window.innerWidth >= 1280) {
      gsap.to(iconeRef.current, {
        left: "-2%",
        duration: 0.2,
        opacity: 0,
        ease: "none",
      });

      gsap.to(textRef.current, {
        x: 0,
        duration: 0.2,
        ease: "none",
      });

      gsap.to(imgRef.current, {
        y: 0,
        opacity: 0,
        duration: 0.2,
      });
    }
  };

  const HandleMove = (e) =>{
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    gsap.to(imgRef.current,{
      x: mouseX-100,
      duration: 0.1,
    })
  }
  

  return (
    <div
    ref={containerRef}
      onMouseEnter={HandleEnter}
      onMouseLeave={HandleLeave}
      onMouseMove={HandleMove}
      className="relative pt-[1.5em] md:pt-[2em] xl:pt-[1.5em] pb-[2em] md:pb-[2.5em] xl:pb-[2em] flex flex-col xl:flex-row xl:justify-between gap-[1.88em]"
    >
      <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-center xl:gap-[3em] gap-[1.2em] md:gap-[1.6em]">
        <div className="flex xl:flex-row-reverse justify-between items-center xl:gap-[.2em]">
          <h1
            ref={textRef}
            className="text-[1.9em] md:text-[2.7em] xl:text-[2.8em] font-semibold"
          >
            {item.title}
          </h1>

          <i
            ref={iconeRef}
            className="ri-arrow-right-line text-[2.2em] xl:text-[2.6em] xl:absolute xl:opacity-0"
          ></i>
        </div>
        <div className="flex justify-between">
          <p className="text-[1em] xl:w-[40em] text-gray-200">
            {item.tag1} <br /> {item.tag2}
          </p>
          <p className="text-[.9em] text-gray-200">{item.step}</p>
        </div>
      </div>
      <img ref={imgRef} className="absolute h-[14em] opacity-0" src={item.img} alt={item.title} />
    </div>
  );
};

export default ProcessSteps;
