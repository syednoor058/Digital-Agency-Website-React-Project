import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import discoverSubImg from "../../assets/images/howWeDo/1.1.webp";
import discoverImg from "../../assets/images/howWeDo/1.webp";
import designSubImg from "../../assets/images/howWeDo/2.1.webp";
import designImg from "../../assets/images/howWeDo/2.webp";
import developSubImg from "../../assets/images/howWeDo/3.1.webp";
import developImg from "../../assets/images/howWeDo/3.webp";
import deliverSubImg from "../../assets/images/howWeDo/4.1.webp";
import deliverImg from "../../assets/images/howWeDo/4.webp";

export default function HowWeWork2() {
  const [toggledState, setToggledState] = useState("discover");
  const toggleState = (stateName) => {
    setToggledState(stateName);
  };
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#discover-img-cover", {
        translateX: "100%",
        duration: 5,
        // opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#discover-img-cover",
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
      gsap.from("#discover-img", {
        scale: 1.2,
        duration: 5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#discover-img",
          start: "top 85%",
          end: "top 50%",
          scrub: 2,
        },
      });
    }, comp);
    return () => ctx.revert();
  }, [toggledState]);

  return (
    <div
      ref={comp}
      className=" py-10 lg:py-20 font-bodyFont text-darkBodyText bg-lightPrimary"
    >
      <div className="flex flex-col gap-7 sm:gap-10 lg:gap-20 px-5 sm:px-7 lg:px-10 xl:px-20">
        <div className="flex flex-col sm:flex-row gap-5 ">
          <div className="w-full flex flex-row gap-2">
            <div className="uppercase font-semibold text-sm sm:text-lg text-darkPrimary">
              How we work
            </div>
            <div className="w-[2px] h-auto bg-accentColor"></div>
          </div>
        </div>
        <div className="w-full hidden lg:flex flex-row gap-10 items-center">
          <div className="w-[45%] flex flex-col">
            <div
              className={`p-5 flex flex-col gap-2 group ${
                toggledState === "discover" && "border-l border-accentColor"
              } cursor-pointer`}
              onClick={() => toggleState("discover")}
            >
              <div className="text-base sm:text-2xl uppercase font-semibold group-hover:text-accentColor duration-500 text-darkTitleText">
                Discover
              </div>
              <div className="text-sm sm:text-base">
                We dive deep into your business needs and objectives, gathering
                insights to shape the right solutions. This is where ideas take
                root and strategies align with your goals.
              </div>
            </div>
            <div
              className={`p-5 flex flex-col gap-2 group ${
                toggledState === "design" && "border-l border-accentColor"
              } cursor-pointer`}
              onClick={() => toggleState("design")}
            >
              <div className="text-base sm:text-2xl uppercase font-semibold group-hover:text-accentColor duration-500 text-darkTitleText">
                Design
              </div>
              <div className="text-sm sm:text-base">
                Our creative team translates ideas into user-friendly designs,
                balancing aesthetics with functionality. We ensure your vision
                is brought to life with clarity and precision.
              </div>
            </div>
            <div
              className={`p-5 flex flex-col gap-2 group ${
                toggledState === "develop" && "border-l border-accentColor"
              } cursor-pointer`}
              onClick={() => toggleState("develop")}
            >
              <div className="text-base sm:text-2xl uppercase font-semibold group-hover:text-accentColor duration-500 text-darkTitleText">
                Develop
              </div>
              <div className="text-sm sm:text-base">
                Using the latest technologies, we bring your vision to life with
                precision and scalability. Our solutions are optimized for
                seamless performance across platforms.
              </div>
            </div>
            <div
              className={`p-5 flex flex-col gap-2 group ${
                toggledState === "deliver" && "border-l border-accentColor"
              } cursor-pointer`}
              onClick={() => toggleState("deliver")}
            >
              <div className="text-base sm:text-2xl uppercase font-semibold group-hover:text-accentColor duration-500 text-darkTitleText">
                Deliver
              </div>
              <div className="text-sm sm:text-base">
                We ensure a smooth launch, followed by ongoing support to keep
                your project running flawlessly. Delivery isn’t the end—it’s the
                beginning of your growth journey.
              </div>
            </div>
          </div>
          <div className="w-[55%] flex items-center justify-end relative">
            {toggledState === "discover" && (
              <div className="w-full relative flex justify-end">
                <div className="w-[80%] aspect-[9/10] relative overflow-hidden">
                  <div
                    id="discover-img-cover"
                    className="absolute bg-lightPrimary w-full h-full top-0 left-0 z-[5]"
                  ></div>
                  <img
                    id="discover-img"
                    className="w-full h-full object-cover relative z-[2]"
                    src={discoverImg}
                    alt=""
                  />
                </div>

                <div className="bg-darkSecondary rounded p-5 w-[50%] absolute text-lightBodyText top-[15%] left-0 flex flex-col gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50 z-[6]">
                  <div className="w-full h-auto">
                    <img src={discoverSubImg} alt="" />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="text-center text-3xl font-semibold text-accentColor">
                      80%
                    </div>
                    <div className="text-sm text-center">
                      Successful projects prioritize in-depth client discovery.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {toggledState === "design" && (
              <div className="w-full relative flex justify-end">
                <img
                  className="w-[80%] h-auto relative"
                  src={designImg}
                  alt=""
                />
                <div className="bg-darkSecondary rounded p-5 w-[50%] absolute text-lightBodyText top-[15%] left-0 flex flex-col gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                  <div className="w-full h-auto">
                    <img src={designSubImg} alt="" />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="text-center text-3xl font-semibold text-accentColor">
                      60%
                    </div>
                    <div className="text-sm text-center">
                      Higher success rate with interactive and responsive
                      design.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {toggledState === "develop" && (
              <div className="w-full relative flex justify-end">
                <img
                  className="w-[80%] h-auto relative"
                  src={developImg}
                  alt=""
                />
                <div className="bg-darkSecondary rounded p-5 w-[50%] absolute text-lightBodyText top-[15%] left-0 flex flex-col gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                  <div className="w-full h-auto">
                    <img src={developSubImg} alt="" />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="text-center text-3xl font-semibold text-accentColor">
                      25%
                    </div>
                    <div className="text-sm text-center">
                      Time reduces with the help of agile development
                      methodology.
                    </div>
                  </div>
                </div>
              </div>
            )}
            {toggledState === "deliver" && (
              <div className="w-full relative flex justify-end">
                <img
                  className="w-[80%] h-auto relative"
                  src={deliverImg}
                  alt=""
                />
                <div className="bg-darkSecondary rounded p-5 w-[50%] absolute text-lightBodyText top-[15%] left-0 flex flex-col gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                  <div className="w-full h-auto">
                    <img src={deliverSubImg} alt="" />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="text-center text-3xl font-semibold text-accentColor">
                      95%
                    </div>
                    <div className="text-sm text-center">
                      Clients report increased satisfaction with regular project
                      check-ins.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:hidden flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-semibold text-darkTitleText">
                Discover
              </div>
              <div className="text-sm sm:text-base">
                We dive deep into your business needs and objectives, gathering
                insights to shape the right solutions. This is where ideas take
                root and strategies align with your goals.
              </div>
            </div>
            <div className="w-full relative flex justify-end overflow-hidden">
              <div className="w-[90%] aspect-[9/10] relative overflow-hidden">
                <img
                  className="w-full h-full scale-[1.2]"
                  src={discoverImg}
                  alt=""
                />
              </div>

              <div className="bg-darkSecondary rounded p-5 w-[90%] absolute text-lightBodyText bottom-[15%] left-0 flex flex-row gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                <div className="w-[50%] h-auto">
                  <img src={discoverSubImg} alt="" />
                </div>
                <div className="w-[50%] flex flex-col gap-1">
                  <div className="text-lg sm:text-3xl font-semibold text-accentColor">
                    80%
                  </div>
                  <div className="text-xs sm:text-sm">
                    Successful projects prioritize in-depth client discovery.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-semibold text-darkTitleText">
                Design
              </div>
              <div className="text-sm sm:text-base">
                Our creative team translates ideas into user-friendly designs,
                balancing aesthetics with functionality. We ensure your vision
                is brought to life with clarity and precision.
              </div>
            </div>
            <div className="w-full relative flex justify-end">
              <img className="w-[90%] h-auto relative" src={designImg} alt="" />
              <div className="bg-darkSecondary rounded p-5 w-[90%] absolute text-lightBodyText bottom-[15%] left-0 flex flex-row gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                <div className="w-[50%] h-auto">
                  <img src={designSubImg} alt="" />
                </div>
                <div className="w-[50%] flex flex-col gap-1">
                  <div className="text-lg sm:text-3xl font-semibold text-accentColor">
                    60%
                  </div>
                  <div className="text-xs sm:text-sm">
                    Higher success rate with interactive and responsive design.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-semibold text-darkTitleText">
                Develop
              </div>
              <div className="text-sm sm:text-base">
                Using the latest technologies, we bring your vision to life with
                precision and scalability. Our solutions are optimized for
                seamless performance across platforms.
              </div>
            </div>
            <div className="w-full relative flex justify-end">
              <img
                className="w-[90%] h-auto relative"
                src={developImg}
                alt=""
              />
              <div className="bg-darkSecondary rounded p-5 w-[90%] absolute text-lightBodyText bottom-[15%] left-0 flex flex-row gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                <div className="w-[50%] h-auto">
                  <img src={developSubImg} alt="" />
                </div>
                <div className="w-[50%] flex flex-col gap-1">
                  <div className="text-lg sm:text-3xl font-semibold text-accentColor">
                    25%
                  </div>
                  <div className="text-xs sm:text-sm">
                    Time reduces with the help of agile development methodology.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-semibold text-darkTitleText">
                Deliver
              </div>
              <div className="text-sm sm:text-base">
                We ensure a smooth launch, followed by ongoing support to keep
                your project running flawlessly. Delivery isn’t the end—it’s the
                beginning of your growth journey.
              </div>
            </div>
            <div className="w-full relative flex justify-end">
              <img
                className="w-[90%] h-auto relative"
                src={deliverImg}
                alt=""
              />
              <div className="bg-darkSecondary rounded p-5 w-[90%] absolute text-lightBodyText bottom-[15%] left-0 flex flex-row gap-5 justify-center items-center shadow-2xl shadow-[#36363680]/50">
                <div className="w-[50%] aspect-[9/10] h-auto">
                  <img src={deliverSubImg} alt="" />
                </div>
                <div className="w-[50%] flex flex-col gap-1">
                  <div className="text-lg sm:text-3xl font-semibold text-accentColor">
                    80%
                  </div>
                  <div className="text-xs sm:text-sm">
                    Successful projects prioritize in-depth client discovery.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
