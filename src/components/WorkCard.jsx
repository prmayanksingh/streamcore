import React from "react";
import elvnImage from "../assets/images/Elvn-Elvn.webp";

const WorkCard = () => {
  return (
    <div
      className="h-[20em] md:h-[22em] lg:h-[24em] w-[27em] md:w-[30em] lg:w-[32em] px-[1.8em] py-[1.5em] bg-amber-300 rounded-3xl flex items-end shrink-0"
      // style={{
      //   backgroundImage: `url(${elvnImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h1 className='text-black text-[1.4em] font-semibold leading-[1.3em]'>Cleaning <br /> Cheif</h1>
    </div>
  );
};

export default WorkCard;
