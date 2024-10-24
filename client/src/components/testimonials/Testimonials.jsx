// import React from "react";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="py-10 lg:py-20 font-bodyFont text-darkSecondary bg-accentColor">
      <div className="flex flex-col gap-20 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="flex flex-col sm:flex-row gap-5 px-5 sm:px-7 lg:px-10 xl:px-20">
          <div className="w-full sm:w-[30%] flex flex-row gap-3 sm:gap-10">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkSecondary">
              Testimonials
            </div>
            <div className="w-[2px] h-auto bg-lightPrimary"></div>
          </div>
          <div className="w-full sm:w-[70%] uppercase font-titleFont font-bold text-[42px] sm:text-[54px] lg:text-6xl leading-none text-darkPrimary">
            <span className="">Our</span> Happy{" "}
            <span className="text-lightPrimary font-light">Clients</span> Speak
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}
