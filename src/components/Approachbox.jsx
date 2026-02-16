import React from "react";

const Approachbox = ({ item }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between gap-[1.88em]">
      <div>
        <img className="h-[4.5em]" src={item.img} alt={item.title + " image"} />
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-[3em] gap-[1em]">
        <h1 className="text-[1.4em] xl:text-[1.8em] font-semibold">
          {item.title}
        </h1>
        <p className="text-[1.1em] xl:w-[40em] text-[#A7A7A7]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Approachbox;
