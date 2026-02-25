import React from "react";

const ShowcaseSection = () => {
  return (
    <div className="h-[45rem] sm:h-[50em] md:h-[55rem] xl:h-[65rem] w-full px-[2em] md:px-[3em] xl:px-[4em] py-[8em]">
      <div className="h-full w-full bg-gray-500 rounded-4xl overflow-hidden">
        <img
          className="h-full w-full object-cover scale-110"
          src="../src/assets/images/VRgirl.webp"
          alt="VR girl"
        />
      </div>
    </div>
  );
};

export default ShowcaseSection;
