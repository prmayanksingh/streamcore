import React from "react";

const ProjectCard = ({ cardDetails }) => {
  return (
    <div className="w-full xl:w-[48em] flex flex-col gap-[1em] items-center">
      <div
        className="h-[28em] md:h-[34em] xl:h-[45em] w-full xl:w-[48em] bg-center bg-cover rounded-4xl flex items-end"
        style={{ backgroundImage: `url('${cardDetails.imageSrc}')` }}
      >
        <div className="px-[2em] py-[2em] flex flex-wrap gap-[.6em]">
          {cardDetails.tags.map((tag, index) => (
            <div
              key={index}
              className="w-fit px-[.7em] py-[.3em] bg-white text-black rounded-full"
            >
              <h2 className="text-[.9em] text-slate-700">{tag}</h2>
            </div>
          ))}
        </div>
      </div>
      <h1 className="w-[85%] text-gray-500 text-[1.3em] md:text-[1.8em]">
        <span className="font-bold text-white">{cardDetails.heading}</span>{" "}
        {cardDetails.description}
      </h1>
    </div>
  );
};

export default ProjectCard;
