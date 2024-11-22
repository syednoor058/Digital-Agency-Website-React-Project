import React, { createContext, useContext, useState } from "react";

// Create the context
const AnimationContext = createContext();

export function AnimationContextProvider({ children }) {
  const [delayLandingPage, setDelayLandingPage] = useState(5); // Initialize delay state to 4 seconds

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
