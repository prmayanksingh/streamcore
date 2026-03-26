import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-[35em] md:h-[36em] xl:h-[39em] w-full md:w-[29em] px-[1.8em] md:px-[2.5em] py-[2em] shrink-0 bg-[#1C1C1C] rounded-2xl md:rounded-4xl flex flex-col justify-between gap-[1em] overflow-x-hidden overflow-y-auto custom-scroll-footer">
      <div className="flex flex-col gap-[2em] md:gap-[2.5em]">
        <div
          className="h-[5em] md:h-[7.5em] w-[5em] md:w-[7.5em] rounded-full bg-gray-600"
          style={{
            backgroundImage: `url(${testimonial.img})`,
            backgroundSize: "cover",
          }}
        ></div>
        <p className="text-[1.13em] text-[#9F9F9F]">
          {testimonial.description}
        </p>
      </div>
      <div>
        <h1 className="text-[1.6em] xl:text-[2em] font-semibold">
          {testimonial.name}
        </h1>
        <h4 className="xl:text-[1.1em] text-[#9F9F9F]">{testimonial.role}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
