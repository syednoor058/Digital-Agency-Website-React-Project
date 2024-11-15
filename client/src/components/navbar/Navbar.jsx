// import React from 'react'
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import lightLogo from "../../assets/logo/dark_mode_logo.png";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const navTimeline = gsap.timeline();
      navTimeline
        .from(["#navLogo", "#mobile-nav0", "#mobile-nav1", "#mobile-nav2"], {
          yPercent: "+=30",
          opacity: 0,
          delay: 4.4,
          duration: 0.5,
          ease: "expo.inOut",
          stagger: 0.1,
        })
        .from(
          ["#nav0", "#nav1", "#nav2", "#nav3", "#nav4", "#nav5"],
          {
            y: "+=30",
            opacity: 0,
            duration: 0.5,
            ease: "expo.inOut",
            stagger: 0.1,
          },
          "<"
        )
        .from(
          "#nav-cta",
          {
            yPercent: "+=30",
            opacity: 0,
            duration: 0.5,
            ease: "expo.inOut",
          },
          "<"
        );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={comp}
      className="w-full font-titleFont capitalize text-lightBodyText bg-darkPrimary"
    >
      <div className="w-full h-16 px-3 md:px-8 lg:px-8 xl:px-20 hidden lg:flex flex-row gap-10 items-center justify-between">
        <div id="navLogo" className="w-[15%]">
          <img className="w-full h-auto" src={lightLogo} alt="light_logo" />
        </div>
        <div className="w-full flex flex-row gap-20 justify-end items-center">
          <div className="flex flex-row gap-5 justify-center items-center text-base lg:text-sm">
            <div id="nav0" className="overflow-hidden">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " duration-300 group text-accentColor overflow-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                Home
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>

            <div className="overflow-hidden" id="nav1">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col justify-center items-center duration-300 group text-accentColor overflow-x-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                Services
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>
            <div className="overflow-hidden" id="nav2">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? " duration-300 group text-accentColor overflow-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                Projects
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>
            <div className="overflow-hidden" id="nav3">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? " duration-300 group text-accentColor overflow-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                Pricing
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>
            <div className="overflow-hidden" id="nav4">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? " duration-300 group text-accentColor overflow-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                About
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>
            <div className="overflow-hidden" id="nav5">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? " duration-300 group text-accentColor overflow-hidden"
                    : "flex flex-col justify-center items-center overflow-hidden group"
                }
              >
                Contact
                <div className="group-hover:translate-x-0 -translate-x-[105%] h-[1px] w-full bg-accentColor duration-[400ms]"></div>
              </NavLink>
            </div>
          </div>
          <div
            id="nav-cta"
            className="w-[15%] px-3 py-2 border border-accentColor rounded-full flex justify-center items-center lg:text-sm"
          >
            Free trial
          </div>
        </div>
      </div>
      <div className="w-full h-14 px-3 md:px-8 lg:px-8 xl:px-20 text-xs sm:text-sm  flex lg:hidden items-center">
        <div className="w-full flex flex-row gap-10 items-center justify-between  text-lightTitleText">
          <div className="" id="mobile-nav0">
            <img className="w-auto h-14" src={lightLogo} alt="light_logo" />
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 justify-end items-center">
            <div
              id="mobile-nav1"
              className="px-3 py-2 border border-accentColor rounded-full flex justify-center items-center "
            >
              Free trial
            </div>
            <div
              id="mobile-nav2"
              className="p-2 rounded-full cursor-pointer text-lg"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[60%] bg-accentColor h-screen overflow-y-auto ${
          toggle ? "translate-x-0" : "-translate-x-[105%]"
        } duration-700 fixed z-[999]`}
      >
        <div className="flex flex-col justify-center items-start lg:text-sm xl:text-base text-darkBodyText pt-10 divide-darkPrimary">
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Home</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Services</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Projects</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Pricing</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">About</div>
            </NavLink>
          </div>
          <div className="w-full" onClick={toggleMenu}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "w-full bg-darkPrimary  duration-300 group text-lightPrimary overflow-hidden flex flex-col justify-center gap-3"
                  : "flex flex-col justify-center overflow-hidden group gap-3 border-b-[0.5px] border-darkSecondary border-opacity-30"
              }
            >
              <div className="w-full px-5 md:px-7 py-3">Contact</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
