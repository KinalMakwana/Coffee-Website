import React, { useEffect, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <RxDoubleArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollTop;

