// import React from 'react'
import lightLogo from "../../assets/logo/light_mode_logo.png";
export default function Navbar() {
  return (
    <div className="w-full px-5 md:px-8 lg:px-10 xl:px-20 font-titleFont uppercase text-darkSecondary shadow-xl">
      <div className="flex flex-row gap-10 items-center justify-between">
        <div className="w-[20%]">
          <img className="w-full h-auto" src={lightLogo} alt="light_logo" />
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="font-bold flex flex-col gap-1 justify-center items-center">
            Home
            <div className="h-[2px] w-full bg-accentColor"></div>
          </div>
          <div>Services</div>
          <div>Projects</div>
          <div>Clients</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="w-[10%] px-2 py-2 bg-accentColor rounded-sm flex justify-center items-center font-semibold">
          Free trial
        </div>
      </div>
    </div>
  );
}
