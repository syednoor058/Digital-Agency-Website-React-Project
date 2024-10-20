// import React from 'react'
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

// import Stack from "@mui/material/Stack";
import { PiArrowSquareUpRightThin } from "react-icons/pi";
import azizul from "../../assets/images/testimonials/azizul.webp";
import rhitu from "../../assets/images/testimonials/rhitu.webp";
import sharar from "../../assets/images/testimonials/sharar.webp";
import tanha from "../../assets/images/testimonials/tanha.webp";

export default function WhoWeAre() {
  return (
    <div className="px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 font-bodyFont text-darkPrimary bg-lightPrimary relative overflow-hidden">
      <div className="w-[70%] sm:w-[50%] aspect-square bg-darkSecondary rounded-[100%] absolute -right-32 -bottom-32 sm:-right-36 lg:-right-60 sm:-bottom-36 lg:-bottom-60 p-20 sm:p-28 lg:p-40 opacity-10">
        <div className="w-full aspect-square rounded-[100%] bg-lightPrimary"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-10">
        <div className="w-full lg:w-[65%] flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center">
            <div className="uppercase font-semibold text-sm sm:text-lg">
              Who We Are
            </div>
            <div className="w-20 h-[2px] bg-accentColor"></div>
          </div>
          <div className="flex flex-col gap-2 uppercase font-titleFont">
            <div className="text-[32px] sm:text-6xl leading-none">
              Empowering your
            </div>
            <div className="text-[28px] sm:text-5xl font-extralight leading-none">
              Business to <span className="">Reach</span>
            </div>
            <div className="text-[40px] sm:text-7xl font-semibold leading-none">
              New <span className="text-accentColor font-bold">heights</span>!
            </div>
            <div className="w-full flex justify-start lg:justify-end">
              <div className="text-7xl sm:text-9xl font-extralight opacity-10 rotate-90 lg:rotate-0">
                <PiArrowSquareUpRightThin />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-7 lg:gap-20 justify-end">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <AvatarGroup>
              <Avatar
                alt="Azizul"
                src={azizul}
                sx={{ width: 56, height: 56 }}
              />

              <Avatar
                alt="Sheikh Tanjina"
                src={tanha}
                sx={{
                  width: 56,
                  height: 56,
                }}
              />

              <Avatar alt="Rhitu" src={rhitu} sx={{ width: 56, height: 56 }} />
              <Avatar
                alt="Sharar"
                src={sharar}
                sx={{ width: 56, height: 56 }}
              />
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#414141" }}>
                8+
              </Avatar>
            </AvatarGroup>
            <div>
              We have{" "}
              <span className="font-semibold underline underline-offset-4">
                12+ satisfied clients
              </span>{" "}
              all around the world.
            </div>
          </div>
          <div className="text-sm sm:text-base">
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
