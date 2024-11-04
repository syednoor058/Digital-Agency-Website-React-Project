/* eslint-disable react/prop-types */
// import React from 'react'

import { Avatar } from "@mui/material";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

export default function TestimonialCard(props) {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="w-full h-full bg-gray-200 flex flex-col gap-3 rounded-md shadow-md relative overflow-hidden p-5 text-darkBodyText">
      <div className="w-full flex flex-row gap-5 items-center">
        <div className="w-[90%] flex flex-col lg:flex-row gap-2 lg:items-center">
          <div className="w-[20%]">
            <Avatar
              alt={props.client}
              src={props.image}
              sx={{ width: 50, height: 50 }}
            />
          </div>
          <div className="w-[80%] flex flex-col gap-1">
            <div className="text-base  font-semibold text-darkTitleText font-titleFont capitalize">
              {props.client}
            </div>
            <div className="flex flex-col gap-[3px] text-darkBodyText">
              <div className="text-xs leading-none">{props.company}</div>
              <div className="text-xs font-light leading-none">{props.pos}</div>
            </div>
          </div>
        </div>
        <div className="w-[10%] text-4xl">{props.icon}</div>
      </div>
      <div className="flex flex-row gap-1 text-xl text-[#ffcd00]">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </div>
      {!expand && props.feedback.length > 190 ? (
        <div className="text-sm">
          {props.feedback.substring(0, 191)}.....
          <span
            className="ps-1 font-medium underline underline-offset-2 cursor-pointer"
            onClick={() => toggleExpand()}
          >
            Read More
          </span>
        </div>
      ) : (
        <div className="text-sm">
          {props.feedback}.....
          <span
            className="ps-1 font-medium underline underline-offset-2 cursor-pointer"
            onClick={() => toggleExpand()}
          >
            Read Less
          </span>
        </div>
      )}
    </div>
  );
}
