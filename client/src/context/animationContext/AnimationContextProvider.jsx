import React, { createContext, useContext, useState } from "react";

// Create the context
const AnimationContext = createContext();

export function AnimationContextProvider({ children }) {
  const [delayLandingPage, setDelayLandingPage] = useState(4.8); // Initialize delay state to  seconds

  return (
    <AnimationContext.Provider
      value={{ delayLandingPage, setDelayLandingPage }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

// Custom hook for consuming the context
export const useAnimation = () => useContext(AnimationContext);
