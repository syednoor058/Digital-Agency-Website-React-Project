import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return null;
}
