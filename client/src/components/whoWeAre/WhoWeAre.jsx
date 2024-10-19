// import React from 'react'
import { PiArrowSquareUpRightThin } from "react-icons/pi";

export default function WhoWeAre() {
  return (
    <div className="px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 font-bodyFont text-darkPrimary bg-lightPrimary relative overflow-hidden">
      <div className="w-[50%] aspect-square bg-darkSecondary rounded-[100%] absolute -right-60 -bottom-60 p-40 opacity-10">
        <div className="w-full aspect-square rounded-[100%] bg-lightPrimary"></div>
      </div>
      <div className="flex flex-row gap-10">
        <div className="w-[65%] flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center">
            <div className="uppercase font-semibold text-lg">Who We Are</div>
            <div className="w-20 h-[2px] bg-accentColor"></div>
          </div>
          <div className="flex flex-col gap-2 uppercase">
            <div className="text-6xl">Empowering your</div>
            <div className="text-5xl font-extralight">
              Business to <span className="">Reach</span>
            </div>
            <div className="text-8xl font-bold">
              New <span className="text-accentColor">heights</span>!
            </div>
            <div className="w-full flex justify-end">
              <div className="text-9xl font-extralight opacity-10">
                <PiArrowSquareUpRightThin />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-5 justify-end">
          <div className="">
            We are more than just a service provider — we are your strategic
            partner. Our mission is to empower your business with tailored
            digital solutions that drive growth, enhance visibility, and
            maximize impact.
          </div>
        </div>
      </div>
    </div>
  );
}
