import React, { useState } from "react";
import WorkCard from "../components/WorkCard";

const Work = () => {
  const [images, setImages] = useState([
    {
      img: "",
    }
  ])
  return (
    <div className="flex flex-col gap-[1.4em] md:gap-[1.7em] lg:gap-[2.1em] xl:gap-[2.5em]">
      <div className="flex gap-[.9em] md:gap-[1.3em] lg:gap-[1.7em] overflow-hidden">
        <WorkCard />
      </div>
      <div className="flex gap-[.9em] md:gap-[1.3em] lg:gap-[1.7em] overflow-hidden">
        <WorkCard />
      </div>
    </div>
  );
};

export default Work;
