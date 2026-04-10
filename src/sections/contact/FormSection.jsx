import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FormSection = () => {
  const countries = [
    { code: "+1", label: "US" },
    { code: "+7", label: "RU" },
    { code: "+20", label: "EG" },
    { code: "+27", label: "ZA" },
    { code: "+30", label: "GR" },
    { code: "+31", label: "NL" },
    { code: "+32", label: "BE" },
    { code: "+33", label: "FR" },
    { code: "+34", label: "ES" },
    { code: "+36", label: "HU" },
    { code: "+39", label: "IT" },
    { code: "+40", label: "RO" },
    { code: "+41", label: "CH" },
    { code: "+43", label: "AT" },
    { code: "+44", label: "UK" },
    { code: "+45", label: "DK" },
    { code: "+46", label: "SE" },
    { code: "+47", label: "NO" },
    { code: "+48", label: "PL" },
    { code: "+49", label: "DE" },
    { code: "+51", label: "PE" },
    { code: "+52", label: "MX" },
    { code: "+53", label: "CU" },
    { code: "+54", label: "AR" },
    { code: "+55", label: "BR" },
    { code: "+56", label: "CL" },
    { code: "+57", label: "CO" },
    { code: "+58", label: "VE" },
    { code: "+60", label: "MY" },
    { code: "+61", label: "AU" },
    { code: "+62", label: "ID" },
    { code: "+63", label: "PH" },
    { code: "+64", label: "NZ" },
    { code: "+65", label: "SG" },
    { code: "+66", label: "TH" },
    { code: "+81", label: "JP" },
    { code: "+82", label: "KR" },
    { code: "+84", label: "VN" },
    { code: "+86", label: "CN" },
    { code: "+90", label: "TR" },
    { code: "+91", label: "IN" },
    { code: "+92", label: "PK" },
    { code: "+93", label: "AF" },
    { code: "+94", label: "LK" },
    { code: "+95", label: "MM" },
    { code: "+98", label: "IR" },
    { code: "+211", label: "SS" },
    { code: "+212", label: "MA" },
    { code: "+213", label: "DZ" },
    { code: "+216", label: "TN" },
    { code: "+218", label: "LY" },
    { code: "+220", label: "GM" },
    { code: "+221", label: "SN" },
    { code: "+222", label: "MR" },
    { code: "+223", label: "ML" },
    { code: "+224", label: "GN" },
    { code: "+225", label: "CI" },
    { code: "+226", label: "BF" },
    { code: "+227", label: "NE" },
    { code: "+228", label: "TG" },
    { code: "+229", label: "BJ" },
    { code: "+230", label: "MU" },
    { code: "+231", label: "LR" },
    { code: "+232", label: "SL" },
    { code: "+233", label: "GH" },
    { code: "+234", label: "NG" },
    { code: "+235", label: "TD" },
    { code: "+236", label: "CF" },
    { code: "+237", label: "CM" },
    { code: "+238", label: "CV" },
    { code: "+239", label: "ST" },
    { code: "+240", label: "GQ" },
    { code: "+241", label: "GA" },
    { code: "+242", label: "CG" },
    { code: "+243", label: "CD" },
    { code: "+244", label: "AO" },
    { code: "+245", label: "GW" },
    { code: "+246", label: "IO" },
    { code: "+248", label: "SC" },
    { code: "+249", label: "SD" },
    { code: "+250", label: "RW" },
    { code: "+251", label: "ET" },
    { code: "+252", label: "SO" },
    { code: "+253", label: "DJ" },
    { code: "+254", label: "KE" },
    { code: "+255", label: "TZ" },
    { code: "+256", label: "UG" },
    { code: "+257", label: "BI" },
    { code: "+258", label: "MZ" },
    { code: "+260", label: "ZM" },
    { code: "+261", label: "MG" },
    { code: "+262", label: "RE" },
    { code: "+263", label: "ZW" },
    { code: "+264", label: "NA" },
    { code: "+265", label: "MW" },
    { code: "+266", label: "LS" },
    { code: "+267", label: "BW" },
    { code: "+268", label: "SZ" },
    { code: "+269", label: "KM" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const boxRef = useRef(null);

  const submitHandler = (data) => {
    console.log(data);
    toast.success("Your form has been submitted!");
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
        onSubmit={handleSubmit(submitHandler)}
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
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
          <div className="flex items-center gap-[1em]">
            <select
              {...register("countryCode")}
              defaultValue={"+91"}
              className="h-full text-[1.2em]"
            >
              {countries.map((e) => (
                <option className="text-black" key={e.code} value={e.code}>
                  {e.code} {e.label}
                </option>
              ))}
            </select>
            <div className="w-full">
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
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
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
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
