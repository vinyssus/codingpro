import React, { useState, useEffect, useRef } from "react";
import MiddleHeader from "./MiddleHeader.tsx"
import TopNavbar from "./TopNavbar.tsx"

const Header = () => {

  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsHidden(true); // Cache la TopNavbar
      } else {
        setIsHidden(false); // Affiche la TopNavbar
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNavbar isHidden={isHidden} />
      <MiddleHeader isSticky={isHidden} />
    </>
  )
}

export default Header
