import { motion } from "framer-motion";
import React from "react";
import { useAnimation } from "../../context/animationContext/AnimationContextProvider";

function PageTransition() {
  const { delayLandingPage } = useAnimation();
  return (
    <motion.div
      className="fixed inset-0 bg-accentColor z-[1800]"
      initial={{ y: "0%" }}
      animate={{ y: "100%" }}
      exit={{ y: "0%" }}
      transition={{ duration: 0.7, delay: delayLandingPage, ease: "circInOut" }}
    ></motion.div>
  );
}

export default PageTransition;
