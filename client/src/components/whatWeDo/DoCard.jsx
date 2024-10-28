/* eslint-disable react/prop-types */
// import React from 'react'

export default function DoCard(props) {
  return (
    <div className=" p-5 lg:p-8 xl:p-10 lg:border-r-[0.5px] border-darkSecondary border-opacity-30">
      <div className="flex flex-col gap-5 lg:gap-8">
        <div className="text-5xl lg:text-7xl">{props.logo}</div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl uppercase font-bold">{props.title}</div>
          <div className="text-sm sm:text-base">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
