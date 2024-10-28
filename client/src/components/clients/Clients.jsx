// import React from 'react'
import Marquee from "react-fast-marquee";
import interAid from "../../assets/images/clients/interaid.webp";
import puppetBrush from "../../assets/images/clients/puppetbrush.webp";
import qahaf from "../../assets/images/clients/qahaf.webp";
import quantumQube from "../../assets/images/clients/quantum_qube.webp";
import sato from "../../assets/images/clients/sato.webp";
import shodwe from "../../assets/images/clients/shodwe.webp";

export default function Clients() {
  return (
    <div className="py-10 lg:py-20 rounded-t-md bg-darkPrimary ">
      <div className="">
        <Marquee
          autoFill={true}
          speed={80}
          direction="left"
          className="hover:cursor-pointer opacity-60"
        >
          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[200px]"
              src={interAid}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[200px]"
              src={sato}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[200px]"
              src={qahaf}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[220px]"
              src={quantumQube}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[200px]"
              src={puppetBrush}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center mx-3 md:mx-5">
            <img
              className="w-[100px] md:w-[200px]"
              src={shodwe}
              alt="inter-aid"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
