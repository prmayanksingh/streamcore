import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const boxRef = useRef(null);

  const loginHandler = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      ease: "power3.out",
    });
  }, []);
  return (
    <section
      ref={boxRef}
      className="px-[2em] md:px-[5em] py-[5em] xl:flex xl:gap-[10em]"
    >
      <h5 className="w-[6.5em]"></h5>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="xl:w-[70%] flex flex-col gap-[2em]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em]">
          <div>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters are allowed",
                },
              })}
              className="w-full border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
              type="text"
              placeholder="Your name*"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("company name")}
              className="w-full border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
              type="text"
              placeholder="Company name"
            />
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
              type="email"
              placeholder="Email*"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value : /^[0-9]+$/,
                  message: "Phone a valid phone number",
                },
              })}
              className="w-full border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
              type="text"
              placeholder="Phone*"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            className="w-full h-[7em] md:h-[10em] border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none resize-none"
            type="text"
            placeholder="A few words about your project*"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-fit bg-white hover:bg-transparent text-black hover:text-white text-[1.5em] md:text-[1.8em] px-[.8em] md:px-[1em] py-[.2em] md:py-[.3em] rounded-full border-2 transition-all flex items-center"
        >
          Submit
          <i className="ri-arrow-right-up-line text-[1.3em]"></i>
        </button>
      </form>
    </section>
  );
};

export default FormSection;
