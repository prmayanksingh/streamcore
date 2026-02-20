import React from "react";

const ClientLogoCard = ({img}) => {
  return (
    <div className="h-[16em] px-[25vw] md:px-[10vw] xl:px-[4vw] w-full bg-[#1C1C1C] rounded-2xl overflow-hidden flex items-center justify-center">
      <img className="max-h-[7em] w-full object-contain shrink-0" src={img} alt="Logo" />
    </div>
  );
};

export default ClientLogoCard;
