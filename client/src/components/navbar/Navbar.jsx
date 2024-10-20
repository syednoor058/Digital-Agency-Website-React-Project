// import React from 'react'
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import lightLogo from "../../assets/logo/light_mode_logo.png";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full font-titleFont uppercase text-darkSecondary">
      <div className="w-full px-3 md:px-8 lg:px-8 xl:px-20 hidden lg:flex flex-row gap-10 items-center justify-between">
        <div className="w-[20%]">
          <img className="w-full h-auto" src={lightLogo} alt="light_logo" />
        </div>
        <div className="flex flex-row gap-5 justify-center items-center lg:text-sm xl:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Home
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Services
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Portfolio
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Pricing
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            About
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-accentColor overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Contact
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-accentColor duration-[400ms]"></div>
          </NavLink>
        </div>
        <div className="w-[15%] px-2 py-2 bg-accentColor rounded-sm flex justify-center items-center font-semibold">
          Free trial
        </div>
      </div>
      <div className="w-full px-3 md:px-8 lg:px-8 xl:px-20 text-xs sm:text-sm">
        <div className="w-full flex flex-row gap-10 items-center justify-between lg:hidden text-darkPrimary">
          <div className="">
            <img className="w-auto h-14" src={lightLogo} alt="light_logo" />
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 justify-end items-center">
            <div className="px-2 py-2 bg-accentColor rounded-sm flex justify-center items-center font-semibold">
              Free trial
            </div>
            <div
              className="p-3 rounded border cursor-pointer"
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
        } duration-700 px-5 md:px-7 fixed z-[999]`}
      >
        <div className="flex flex-col gap-5 justify-center items-center lg:text-sm xl:text-base text-darkPrimary pt-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Home
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Services
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Portfolio
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Pricing
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            About
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "font-bold duration-300 group text-lightPrimary overflow-hidden"
                : "flex flex-col justify-center items-center overflow-hidden group"
            }
          >
            Contact
            <div className="group-hover:translate-x-0 -translate-x-[105%] h-[2px] w-full bg-darkPrimary duration-[400ms]"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
