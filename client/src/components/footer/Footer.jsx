// import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-7 pt-10 lg:pt-20 font-bodyFont text-lightSecondary bg-darkPrimary">
      <div className="flex flex-col gap-10 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="w-full flex flex-col lg:flex-row gap-10 xl:gap-20">
          <div className="w-full sm:w-[65%] lg:w-[45%] flex flex-col gap-3">
            <div className="uppercase font-titleFont text-lightPrimary text-2xl sm:text-3xl font-semibold">
              Ready to transform your business?
            </div>
            <div>Sign up for counsiling, latest update, and offers!</div>
            <input
              className="w-full rounded-full bg-lightPrimary border-none outline-none px-6 py-2 text-darkPrimary"
              placeholder="Enter Email Address"
            />
            <Link to="/" className="w-full">
              <div className="w-auto flex flex-row items-center text-darkPrimary">
                <span className="px-6 py-2 capitalize text-center bg-lightTitleText rounded-full">
                  Let&apos;s start a conversation!
                </span>
                <div className="w-[38px] aspect-square rounded-full bg-lightPrimary flex justify-center items-center">
                  <MdEmail />
                </div>
              </div>
            </Link>
            <div className="text-xs">
              By signing up, you understand and agree that your data will be
              collected and used subject to our{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Use</span>.
            </div>
            <div>*Required Information</div>
            <div className="w-full flex flex-wrap gap-5 text-3xl">
              <a
                href="https://www.facebook.com/devion.ark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.linkedin.com/company/devion-ark/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <RiWhatsappFill />
              </a>
              <a
                href="https://www.instagram.com/devionark/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex flex-wrap gap-10 sm:justify-between pt-10 lg:pt-0">
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Company
              </div>
              <div className="flex flex-col gap-3">
                <div>Home</div>
                <div>Services</div>
                <div>Projects</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Explore
              </div>
              <div className="flex flex-col gap-3">
                <div>Software Development</div>
                <div>Digital Marketing</div>
                <div>About</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="uppercase font-bold text-lightPrimary">
                Customer
              </div>
              <div className="flex flex-row sm:flex-col gap-5 sm:gap-3">
                <div>Contact</div>
                <div>Terms & Conditions</div>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-1 items-center">
                    <span>
                      <MdEmail />
                    </span>
                    Email:
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-1 items-center">
                    <span>
                      <IoIosCall />
                    </span>
                    Phone 1:
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-1 items-center">
                    <span>
                      <IoIosCall />
                    </span>
                    Phone 2:
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="flex flex-row gap-1 items-center">
                    <span>
                      <TiLocation />
                    </span>
                    Address:
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-5">
                  <div>info@devionark.com</div>
                </div>
                <div className="flex flex-row gap-5">
                  <div>88 01782 734573</div>
                </div>
                <div className="flex flex-row gap-5">
                  <div>88 01893 204778</div>
                </div>
                <div className="flex flex-row gap-5">
                  <div>
                    Totpara Central Rd, Khulna Sadar, Khulna-9100, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pb-5">
          <div className="w-full h-[0.5px] bg-lightSecondary"></div>
          <div className="w-full text-center text-xs sm:text-sm">
            © 2024. All rights reserved by Syed Shaeduzzaman Noor
          </div>
        </div>
      </div>
    </div>
  );
}
