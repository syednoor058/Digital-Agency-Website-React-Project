// import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import shararImg from "../../assets/images/testimonials/sharar.webp";

import { Avatar } from "@mui/material";

export default function TestimonialCard() {
  return (
    <div className="w-full bg-darkPrimary flex flex-col gap-16 rounded-t-3xl shadow-md">
      <div className="p-5 text-lightSecondary flex flex-col gap-4">
        <div className="text-lightPrimary text-4xl">
          <FaQuoteLeft />
        </div>
        <div>
          Our business grew faster than we imagined after partnering with this
          agency. Their strategic guidance and digital solutions boosted our
          revenue by 50% within months. They don&apos;t just deliver
          services—they help us unlock potential we didn&apos;t know we had.
        </div>
      </div>
      <div className="bg-lightPrimary relative">
        <div className="w-full flex flex-col gap-3 justify-center items-center text-center leading-none -mt-10">
          <div className="p-[7px] bg-darkPrimary rounded-[100%] relative">
            <Avatar
              alt="Fahim Sharar"
              src={shararImg}
              sx={{ width: 90, height: 90 }}
            />
            <div className="w-7 h-7 top-[40px] -left-[27px] bg-darkPrimary absolute">
              <div className="w-full h-full bg-lightPrimary rounded-tr-[100%]"></div>
            </div>
            <div className="w-7 h-7 top-[40px] -right-[27px] bg-darkPrimary absolute">
              <div className="w-full h-full bg-lightPrimary rounded-tl-[100%]"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 px-5 pb-5 text-darkSecondary leading-none uppercase">
            <div className="text-lg  font-semibold text-darkPrimary uppercase">
              Kazi Fahim Sharar
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="">Puppetbrush Digital Solution</div>
              <div className="text-xs font-light">Cheif Executive Officer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
