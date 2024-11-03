/* eslint-disable react/prop-types */
// import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

import { Avatar } from "@mui/material";

export default function TestimonialCard(props) {
  return (
    <div className="w-full h-full bg-darkPrimary flex flex-col gap-10 rounded-3xl shadow-md relative items-stretch">
      <div className="p-5 text-lightSecondary flex flex-col gap-4">
        <div className="text-lightPrimary text-4xl">
          <FaQuoteLeft />
        </div>
        <div className="text-sm lg:text-base">{props.feedback}</div>
      </div>
      <div className="w-full bg-accentColor bottom-0 rounded-b-3xl">
        <div className="w-full flex flex-col gap-3 justify-center items-center text-center leading-none -mt-10">
          <div className="p-[7px] bg-darkPrimary rounded-[100%] relative">
            <Avatar
              alt={props.client}
              src={props.image}
              sx={{ width: 90, height: 90 }}
            />
            <div className="w-7 h-7 top-[40px] -left-[27px] bg-darkPrimary absolute">
              <div className="w-full h-full bg-accentColor rounded-tr-[100%]"></div>
            </div>
            <div className="w-7 h-7 top-[40px] -right-[27px] bg-darkPrimary absolute">
              <div className="w-full h-full bg-accentColor rounded-tl-[100%]"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 px-5 pb-5 text-darkSecondary leading-none uppercase">
            <div className="text-lg  font-semibold text-darkPrimary uppercase">
              {props.client}
            </div>
            <div className="flex flex-col gap-[3px]">
              <div className="">{props.company}</div>
              <div className="text-xs font-light">{props.pos}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
