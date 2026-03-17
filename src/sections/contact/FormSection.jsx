import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import FlipLink from "../../components/ui/FlipLink";

const FormSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const boxRef = useRef(null);
  const flipRef = useRef(null);

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
          <input
            required
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters are allowed",
              },
            })}
            className="border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
            type="text"
            placeholder="Your name*"
          />
          <input
            {...register("company name")}
            className="border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
            type="text"
            placeholder="Company name"
          />
          <input
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
            type="email"
            placeholder="Email*"
          />
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className="border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none"
            type="text"
            placeholder="Phone"
          />
        </div>
        <textarea
          required
          {...register("description", { required: "description is required" })}
          className="h-[7em] md:h-[10em] border-b-2 border-gray-500 focus:border-white text-[1.4em] font-light py-[.5em] outline-none resize-none"
          type="text"
          placeholder="A few words about your project*"
        />
        <button
          type="submit"
          onMouseEnter={() => flipRef.current.play()}
          onMouseLeave={() => flipRef.current.reverse()}
          className="w-fit bg-white text-black text-[1.5em] md:text-[1.7em] px-[.9em] md:px-[1.1em] py-[.3em] md:py-[.5em] rounded-full"
        >
          <FlipLink
            ref={flipRef}
            text={"Submit"}
            icon={<i className="ri-arrow-right-up-line text-[1.3em]"></i>}
          />
        </button>
      </form>
    </section>
  );
};

export default FormSection;
