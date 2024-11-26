// import React from 'react'
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { PiArrowSquareUpRightThin } from "react-icons/pi";
import Splitting from "splitting";
import "splitting/dist/splitting.css"; // Include required CSS for Splitting.js
import azizul from "../../assets/images/testimonials/azizul.webp";
import masum from "../../assets/images/testimonials/farhan_masum.jpg";
import mehedi from "../../assets/images/testimonials/mehedi.jpg";
import rakibImg from "../../assets/images/testimonials/rakib.jpg";

export default function WhoWeAre() {
  const comp = useRef(null);
  const whoWeAreSplitTextLinesRef = useRef(null);
  useLayoutEffect(() => {
    const splitDescText = Splitting({
      target: whoWeAreSplitTextLinesRef.current,
      by: "lines",
    });
    const descLines = splitDescText?.[0]?.lines || [];
    let ctx = gsap.context(() => {
      gsap.from("#who-bar", {
        translateY: "-100%",
        duration: 2,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#who-bar",
          start: "top 90%",
          end: "top 70%",
          scrub: 2,
        },
      });
      gsap.from("#who-title-1", {
        yPercent: "100",
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#who-title-1",
          // scroller: comp,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from("#who-title-2", {
        yPercent: "100",
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#who-title-2",
          // scroller: comp,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });
      gsap.from("#who-title-3", {
        yPercent: "100",
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#who-title-3",
          // scroller: comp,
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });
      gsap.from("#who-subdesc", {
        translateY: "100%",
        duration: 0.6,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#who-subdesc",
          start: "top 95%",
          end: "top 90%",
          scrub: 2,
        },
      });
      gsap.from(descLines, {
        yPercent: "100",
        duration: 5,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#who-desc",
          start: "top 90%",
          end: "top 60%",
          scrub: 2,
        },
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={comp}
      className="px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 font-bodyFont text-lightBodyText bg-darkSecondary relative overflow-hidden"
    >
      <div className="w-[95%] sm:w-[70%] lg:w-[50%] aspect-square bg-darkPrimary rounded-[100%] absolute -right-32 -bottom-32 sm:-right-36 lg:-right-60 sm:-bottom-36 lg:-bottom-60 p-20 sm:p-28 lg:p-40 z-[2]">
        <div className="w-full aspect-square rounded-[100%] bg-darkSecondary"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 relative z-[5]">
        <div className="w-full lg:w-[65%] flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center overflow-hidden">
            <div className="uppercase font-semibold text-sm sm:text-lg overflow-hidden">
              <span id="who-we-are" className="inline-block">
                Who We Are
              </span>
            </div>
            <div id="who-bar" className="w-[2px] h-full bg-accentColor"></div>
          </div>
          <div className="flex flex-col gap-2 uppercase font-titleFont text-lightTitleText">
            <div className="text-[32px] sm:text-6xl leading-none overflow-hidden">
              <span id="who-title-1" className="inline-block">
                Empowering your
              </span>
            </div>
            <div className="text-[28px] sm:text-5xl font-extralight leading-none overflow-hidden">
              <span id="who-title-2" className="inline-block">
                Business to Reach
              </span>
            </div>
            <div className="text-[40px] sm:text-7xl font-semibold leading-none overflow-hidden">
              <span id="who-title-3" className="inline-block">
                New <span className="text-accentColor font-bold">heights</span>!
              </span>
            </div>
            <div className="w-full flex justify-start lg:justify-end">
              <div className="text-7xl sm:text-9xl font-extralight opacity-25 rotate-90 lg:rotate-0">
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
                alt="mustafa"
                src={mehedi}
                sx={{
                  width: 56,
                  height: 56,
                }}
              />

              <Avatar
                alt="rakib"
                src={rakibImg}
                sx={{ width: 56, height: 56 }}
              />
              <Avatar alt="masum" src={masum} sx={{ width: 56, height: 56 }} />
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#414141" }}>
                8+
              </Avatar>
            </AvatarGroup>
            <div className="overflow-hidden">
              <span id="who-subdesc" className="inline-block">
                We have{" "}
                <span className="font-medium underline underline-offset-4 text-lightTitleText">
                  12+ satisfied clients
                </span>{" "}
                all around the world.
              </span>
            </div>
          </div>
          <div className="text-sm sm:text-base overflow-hidden">
            <span
              ref={whoWeAreSplitTextLinesRef}
              id="who-desc"
              className="inline-block"
            >
              We are more than just a service provider — we are your strategic
              partner. Our mission is to empower your business with tailored
              digital solutions that drive growth, enhance visibility, and
              maximize impact.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
