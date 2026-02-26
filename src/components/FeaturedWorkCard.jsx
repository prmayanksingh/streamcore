import React from "react";

const FeaturedWorkCard = ({ cardData }) => {
  return (
    <div
      className="sticky top-30 w-full h-[36em] px-[1.8em] md:px-[3em] py-[2.3em] md:py-[3em] flex flex-col justify-between rounded-[2em] overflow-hidden"
      style={{
        backgroundColor: cardData.bgColor || "#FAF7F6",
        backgroundImage: `url(${cardData.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <div className="flex flex-wrap gap-[.5em] w-[90%] md:w-[80%]">
        {cardData.tags.map((tag, index) => (
          <div
            key={index}
            className="w-fit px-[.8em] py-[.25em] border rounded-full"
          >
            <h3 className="text-[.9em] xl:text-[1em]">{tag}</h3>
          </div>
        ))}
      </div>

      <h1 className="z-99 text-[2.3em] md:text-[4.5em] font-semibold leading-[1.2em]">
        {cardData.title}
      </h1>
    </div>
  );
};

export default FeaturedWorkCard;
