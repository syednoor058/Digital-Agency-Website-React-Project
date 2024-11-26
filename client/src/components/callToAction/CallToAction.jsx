import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import callToActionImg from "../../assets/images/call_to_action.png";

export default function CallToAction() {
  return (
    <div className="w-full py-20 bg-darkSecondary flex justify-center items-center px-5 sm:px-7 lg:px-10 xl:px-20 relative">
      <div className="h-full absolute right-0 opacity-60 lg:opacity-100">
        <img className="h-full w-auto" src={callToActionImg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-1 lg:gap-3 relative">
        <div className="uppercase text-lg sm:text-3xl lg:text-5xl font-bold text-center font-titleFont text-lightTitleText leading-none">
          Let&apos;s start your experience
        </div>
        <div className="uppercase text-lg sm:text-3xl lg:text-5xl font-bold text-center font-titleFont text-lightTitleText leading-none">
          With <span className="text-lightPrimary">Devion Ark</span>
        </div>

        <Link to="" className="flex items-center mt-5">
          <div className="flex flex-row items-center">
            <span className="capitalize font-bodyFont text-darkTitleText text-sm sm:text-base text-center gap-2 rounded-full bg-accentColor px-7 py-2">
              Get a quote
            </span>
            <div className="w-[32px] sm:w-[34px] md:w-9 aspect-square bg-accentColor rounded-full flex justify-center items-center text-darkTitleText font-normal">
              <HiMiniArrowUpRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
