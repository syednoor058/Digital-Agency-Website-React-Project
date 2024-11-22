import React from "react";
import underConstructionSign from "../../assets/images/under_construction.png";

export default function UnderContruction() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-lightSecondary font-light font-bodyFont px-5 sm:px-7 lg:px-10 xl:px-20">
      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="w-[70%] sm:w-[30%]">
          <img
            className="w-full h-full"
            src={underConstructionSign}
            alt="under-construction-sign"
          />
        </div>
        <div className="flex flex-col gap-2 text-center leading-none">
          <div className="">
            This page in under construction! Please visit again after couple of
            days.
          </div>
          <div className="uppercase text-xl font-normal">Thank You!</div>
        </div>
      </div>
    </div>
  );
}
