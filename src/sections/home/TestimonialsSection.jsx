import { useState } from "react";
import TestimonialCard from "../../components/TestimonialCard";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([
    {
      img: "../src/assets/images/testimonialsImage/AmitBajaj.svg",
      name: "Amit Bajaj",
      role: "Director, RSW Intsol Pvt Ltd",
      description:
        "Across both our brands, PurpleLofts and RSW Intsol, the collaboration has been steady and dependable over the years. From website development to social media management and lead generation, everything has been handled with consistency and clarity. The long-term engagement reflects the trust built through reliable execution and ongoing support.",
    },
    {
      img: "../src/assets/images/testimonialsImage/Aniket.svg",
      name: "Aniket",
      role: "Owner, Masoli Restaurant",
      description:
        "Whizoid managed our social media and influencer collaborations with a clear and consistent strategy. Their efforts helped improve our brand visibility and contributed to an approximate 28% increase in monthly revenue over time. The team was proactive, organized, and easy to coordinate with.",
    },
    {
      img: "../src/assets/images/testimonialsImage/AkashBhillare.svg",
      name: "Akash Bhillare",
      role: "Director, GA Bhillare Consultants Pvt Ltd",
      description:
        "Working with Whizoid has made our IT and digital operations more streamlined. From website and application management to regular maintenance, their team handles everything efficiently and with clarity.",
    },
    {
      img: "../src/assets/images/testimonialsImage/SubhashMarineni.svg",
      name: "Subhash Marineni",
      role: "Director, Ditra Inc",
      description:
        "The engagement has been consistent and dependable over the years. The team understands our requirements well, adapts quickly, and delivers with reliability. This long-term collaboration has made them a trusted technology partner for our ongoing initiatives.",
    },
    {
      img: "../src/assets/images/testimonialsImage/Rhinocult.svg",
      name: "Rhinocult",
      role: "Brand, Rhinocult",
      description:
        "The team helped us build strong brand momentum across platforms. From social media and viral campaigns to shoots, influencer collaborations, paid ads, and marketplaces management, everything was handled with clarity and consistency. The execution translated into better visibility and steady growth.",
    },
    {
      img: "../src/assets/images/testimonialsImage/HarshIngale.svg",
      name: "Harsh Ingale",
      role: "Owner, Rassa Rasoi",
      description:
        "From the very first month, the social media and influencer campaigns delivered clear results, generating 200+ orders for our cloud kitchen. The strategy was focused, execution was smooth, and the impact on visibility and demand was immediate.",
    },
    {
      img: "../src/assets/images/testimonialsImage/AmitKulkarni.svg",
      name: "Amit Kulkarni",
      role: "Marketing, Venkys",
      description:
        "Whizoid supported us with social media management and stall design and execution. Their approach was well-organized, creative, and aligned with our brand requirements. The coordination and delivery were smooth throughout.",
    },
    {
      img: "../src/assets/images/testimonialsImage/NeerajKumar.svg",
      name: "Neeraj Kumar",
      role: "Head of Operations, Cloudwingshost",
      description:
        "There is nothing technical that they are not capable of doing. Their team created a website for us first, and we got really satisfied afterward we worked with them for lead generation & SEO which increases our sales to almost 200%.",
    },
    {
      img: "../src/assets/images/testimonialsImage/ShreyAgrawal.svg",
      name: "Shrey Agrawal",
      role: "Director, Bramha Realty Infrastructure Pvt Ltd",
      description:
        "For one of our key projects, the social media, UGC shoots, and lead generation were planned and executed with strong attention to detail. The campaign delivered 400+ leads within a month, giving us the confidence to extend the collaboration across other projects as well. The team has been consistent and reliable throughout.",
    },
    {
      img: "../src/assets/images/testimonialsImage/LevanZ.svg",
      name: "Levan Z",
      role: "Owner, Cleaning Chief",
      description:
        "We switched all our marketing to them - Google Ads, Meta Ads, SEO, and lead generation. Two main reasons: they're results-driven and optimize campaigns within 2-3 days based on real data, not guesswork. Second, they're flexible with pricing when results don't meet expectations. Plus, you talk directly to the specialists doing the work, not through project managers. That direct access and transparency made all the difference.",
    },
    {
      img: "../src/assets/images/testimonialsImage/RPLindeman.svg",
      name: "RP Lindeman",
      role: "Director, Liberty Cleaning Inc",
      description:
        "Set-up and implementation was very easy. Communication with the team is excellent. We broke even on our investment very quickly!",
    },
  ]);
  return (
    <div className="px-[1.5em] md:px-[4rem] py-[2em] xl:py-[3em] pb-[4em] xl:pb-[7em] xl:pr-0 flex flex-col xl:flex-row gap-[4em]">
      <div className="w-full xl:w-[40%] flex flex-col gap-[1.5em] xl:gap-[2em]">
        <h1 className="text-[2.7em] md:text-[4.4em] font-semibold leading-none">
          What our clients say
        </h1>
        <p className="w-[90%] md:w-[35rem] xl:w-[85%] text-[1.15em] text-[#9F9F9F]">
          We're more than just executors — we're your creative partners. Don't
          just take our word for it, see what clients have to say about working
          with us.
        </p>
      </div>
      <div className="w-full xl:w-[60%] flex flex-col gap-[3em] md:gap-[2em]">
        <div className="relative pb-[.5em] flex gap-[1.7em] overflow-x-auto custom-scroll">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
