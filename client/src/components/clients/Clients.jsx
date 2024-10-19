// import React from 'react'
import Marquee from "react-fast-marquee";
import interAid from "../../assets/images/clients/interaid.png";
import puppetBrush from "../../assets/images/clients/puppetbrush.png";
import qahaf from "../../assets/images/clients/qahaf.png";
import quantumQube from "../../assets/images/clients/quantum_qube.png";
import sato from "../../assets/images/clients/sato.png";
import shodwe from "../../assets/images/clients/shodwe.png";

export default function Clients() {
  return (
    <div className="">
      <div className="bg-darkPrimary py-6 md:py-9 lg:py-12">
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
