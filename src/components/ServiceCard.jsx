import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      className="sticky top-30 w-full h-[36em] px-[1.8em] md:px-[3em] py-[1.9em] md:py-[2em] xl:pb-[4em] flex flex-col xl:justify-between gap-[1.5em] xl:gap-[2em] rounded-4xl overflow-hidden"
      style={{
        backgroundColor: service.bgColor || "#FAF7F6",
        color: service.textColor || "#000000",
      }}
    >
      <h1 className="z-99 text-[2.3em] md:text-[3.4em] xl:text-[4em] font-semibold leading-[1.2em]">
        {service.title1} <br /> {service.title2}
      </h1>
      <div className="z-99 flex flex-col gap-[1.5em] xl:gap-[2em]">
        <div className="flex flex-wrap gap-[.5em] w-[80%] md:w-[60%] xl:w-[40%]">
          {service.tags.map((tag, index) => (
            <div
              key={index}
              className="w-fit px-[.7em] py-[.25em] border rounded-full"
              style={{ borderColor: service.textColor || "#000000" }}
            >
              <h3 className="text-[.9em] xl:text-[1em]">{tag}</h3>
            </div>
          ))}
        </div>
        <p
          className="text-[1em] xl:text-[1.1em] text-gray-700 md:w-[80%] lg:w-[50%] xl:w-[40%]"
          style={{ color: service.descriptionColor || "#000" }}
        >
          {service.description}
        </p>
      </div>
      <div
        className="absolute top-2 right-2 px-[.9em] xl:px-[1.5em] py-[.5em] xl:py-[1em] rounded-full"
        style={{ backgroundColor: service.buttonColor || "#000000" }}
      >
        <i
          className="ri-arrow-right-up-line text-[1.8em]"
          style={{ color: service.arrowColor || "#FFFFFF" }}
        ></i>
      </div>
      <picture className="absolute z-98 -bottom-50 sm:-bottom-85 md:-bottom-100 left-0 lg:left-auto lg:-right-70 lg:-bottom-50 scale-85 lg:scale-60">
        <source media="(min-width: 1024px)" srcSet={service.largeImg} />
        <img src={service.smallImg} alt="bubble image" />
      </picture>
    </div>
  );
};

export default ServiceCard;
