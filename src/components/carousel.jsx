import React, { useRef } from "react";
import ProfileCardOne from "./profileCardOne";
import ProfileCardTwo from "./profileCardTwo";
import arrow from "../images/Frame 1459.png";

const ScrollingComponent = () => {
  const containerRef = useRef(null);

  // Handle Click or Touch Event
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Scroll left
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Scroll right
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="flex mt-24 gap-9 py-5 testimonial-div whitespace-nowrap items-center w-3/4 md:w-5/6 justify-start carousel flex-nowrap"
      >
        <ProfileCardTwo />
        <ProfileCardOne />
        <ProfileCardTwo />
        <ProfileCardOne />
        <ProfileCardTwo />
        <ProfileCardOne />
        <ProfileCardTwo />
        <ProfileCardOne />
        <ProfileCardTwo />
        <ProfileCardOne />
        <ProfileCardOne />
      </div>

      <div
        className="arrow-icon mt-11 absolute left-14 md:left-16 bottom-16 cursor-pointer hidden md:block"
        onClick={scrollLeft}
        onTouchStart={scrollLeft}
      >
        <img
          src={arrow}
          style={{ height: "44px", width: "44px" }}
          alt="arrow-icon"
        />
      </div>

      <div
        className="arrow-icon mt-11 absolute right-14 md:right-16 bottom-16 cursor-pointer hidden md:block "
        onClick={scrollRight}
        onTouchStart={scrollRight}
      >
        <img
          src={arrow}
          style={{ height: "44px", width: "44px" }}
          alt="arrow-icon"
          className="arrow-img"
        />
      </div>
    </div>
  );
};

export default ScrollingComponent;
