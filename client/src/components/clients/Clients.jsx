// import React from 'react'
import Marquee from "react-fast-marquee";
import interAid from "../../assets/images/clients/1.png";
import puppetBrush from "../../assets/images/clients/2.png";
import qahaf from "../../assets/images/clients/3.png";
import quantumQube from "../../assets/images/clients/4.png";
import sato from "../../assets/images/clients/5.png";
import shodwe from "../../assets/images/clients/6.png";

export default function Clients() {
  return (
    <div className="py-10 lg:py-16 bg-lightPrimary ">
      <div className="">
        <Marquee
          autoFill={true}
          speed={100}
          direction="left"
          className="hover:cursor-pointer opacity-60"
        >
          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={interAid}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={sato}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={qahaf}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={quantumQube}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={puppetBrush}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-10">
            <img
              className="w-[100px] md:w-[220px]"
              src={shodwe}
              alt="inter-aid"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
