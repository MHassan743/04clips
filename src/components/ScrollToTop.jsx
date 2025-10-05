import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // Add a slight delay to prevent jittery behavior

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default ScrollToTop;
