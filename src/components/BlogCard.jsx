import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-full flex flex-col gap-[1em] items-center">
      <div
        className="relative h-[28em] md:h-[34em] xl:h-[27em] w-full bg-center bg-cover rounded-4xl flex items-end overflow-hidden group"
        style={{ backgroundImage: `url('${blog.img}')` }}
      >
        <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <img
            className="h-[4em]"
            src="../src/assets/images/blogImg/icon-eye.svg"
            alt=""
          />
        </div>

        <div className="relative z-10 px-[2em] py-[2em] flex flex-wrap gap-[.6em]">
          {blog.tags.map((tag, index) => (
            <div
              key={index}
              className="w-fit px-[.7em] py-[.3em] bg-white text-black rounded-full"
            >
              <h2 className="text-[.9em] text-slate-700">{tag}</h2>
            </div>
          ))}
        </div>
      </div>
      <h1 className="w-[85%] md:w-[90%] text-[#ACACAC] text-[1.4em] xl:text-[1.3em] hover:underline cursor-pointer">
        {blog.title}
      </h1>
    </div>
  );
};

export default BlogCard;
