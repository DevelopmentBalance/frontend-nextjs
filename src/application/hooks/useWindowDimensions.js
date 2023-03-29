import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof window == "undefined")
    return {
      width: 0,
      isMobile: false,
      isTablet: false,
      isTabletPortrait: false,
      isDesktop: false,
    };

  const {
    innerWidth: { width },
  } = window;

  const isDesktop = width >= 1024;
  const isTablet = width <= 801;
  const isTabletPortrait = width <= 600;
  const isMobile = width <= 480;

  return {
    width: width,
    isMobile: isMobile,
    isTablet: isTablet,
    isTabletPortrait: isTabletPortrait,
    isDesktop: isDesktop,
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
