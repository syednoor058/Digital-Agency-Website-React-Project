/* eslint-disable react/prop-types */
// import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function WorkCard(props) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 xl:gap-20 border-b py-5">
      <div className="w-full lg:w-[70%] flex flex-col gap-5 xl:gap-10 justify-center">
        <div className="flex flex-row gap-5 xl:gap-10 items-center">
          <div className="w-[30%] sm:w-[30%] flex flex-row items-start">
            <div className="w-full aspect-square rounded-[100%] bg-accentColor flex justify-center items-center text-5xl sm:text-7xl  lg:text-9xl font-semibold text-lightPrimary p-5 leading-3">
              <div className="leading-none opacity-75">{props.number}</div>
            </div>
          </div>
          <div className="w-[70%] sm:w-[70%] flex flex-col gap-2">
            <div className="text-base sm:text-2xl uppercase font-semibold">
              {props.title}
            </div>
            <div className="text-sm sm:text-base">{props.desc}</div>
          </div>
        </div>
        <div className="text-sm sm:text-base">{props.desc}</div>
      </div>

      <div className="full lg:w-[30%] flex justify-center lg:justify-end">
        <div className="w-[90%] sm:w-[60%] lg:w-full relative">
          <img
            className="w-full h-auto object-cover"
            src={props.image}
            alt={props.title}
          />
          <div className="lg:w-full p-5 rounded-sm bg-darkSecondary text-gray-200 shadow-md absolute bottom-10 lg:bottom-5 -left-8 sm:-left-20 lg:-left-10 right-8 sm:right-20 lg:right-10 font-light">
            <div className="flex flex-col gap-2">
              <div className="text-5xl">
                <BiSolidQuoteLeft />
              </div>
              <div>{props.quote}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
