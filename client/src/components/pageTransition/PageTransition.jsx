import { motion } from "framer-motion";
import React from "react";

function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-[5000]"
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>
  );
}

export default PageTransition;
