// import React from 'react'
import Marquee from "react-fast-marquee";
import interAid from "../../assets/images/clients/interaid.webp";
import kickOff from "../../assets/images/clients/kick_off.png";
import puppetBrush from "../../assets/images/clients/puppetbrush.png";
import qahaf from "../../assets/images/clients/qahaf.png";
import sweetCakes from "../../assets/images/clients/sweet_cakes.png";

export default function Clients() {
  return (
    <div className="py-7 sm:py-10 lg:py-14 bg-lightPrimary">
      <div className="">
        <Marquee
          autoFill={true}
          speed={100}
          direction="left"
          className="hover:cursor-pointer opacity-60"
        >
          <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
            <img
              className="h-[40px] md:h-[70px] w-auto"
              src={interAid}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
            <img
              className="h-[40px] md:h-[70px] w-auto"
              src={kickOff}
              alt="kick-off"
            />
          </div>
          <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
            <img
              className="h-[40px] md:h-[70px] w-auto"
              src={qahaf}
              alt="qahaf"
            />
          </div>

          <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
            <img
              className="h-[40px] md:h-[70px] w-auto"
              src={puppetBrush}
              alt="puppetbrush"
            />
          </div>

          <div className="flex justify-center items-center mx-5 sm:mx-8 md:mx-14">
            <img
              className="h-[40px] md:h-[70px] w-auto"
              src={sweetCakes}
              alt="sweet-cakes"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
