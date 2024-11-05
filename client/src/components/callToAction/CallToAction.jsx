import React from "react";
import callToActionImg from "../../assets/images/call_to_action.png";

export default function CallToAction() {
  return (
    <div className="w-full py-10 sm:py-14 lg:py-20 bg-darkSecondary flex justify-center items-center px-5 sm:px-7 lg:px-10 xl:px-20 relative">
      <div className="h-full absolute right-0 opacity-60 lg:opacity-100">
        <img className="h-full w-auto" src={callToActionImg} alt="" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-3 relative">
        <div className="uppercase text-lg sm:text-3xl lg:text-5xl font-bold text-center font-titleFont text-lightTitleText">
          Let&apos;s start your experience
        </div>
        <div className="uppercase text-lg sm:text-3xl lg:text-5xl font-bold text-center font-titleFont text-lightTitleText">
          With <span className="text-lightPrimary">Devion Ark</span>
        </div>
        <div className="uppercase font-titleFont font-light text-lightPrimary underline underline-offset-4 text-sm sm:text-base text-center pt-2 flex justify-center items-center gap-2">
          Let&apos;s get in touch{" "}
        </div>
      </div>
    </div>
  );
}
