import { useState, useEffect, useRef } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { trackCursor } from "@context/CursorPosition";
import useInterval from "react-useinterval";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { FaHandPointer } from "react-icons/fa";

import Browser from "./Browser/Browser";
import Phone from "./Phone/Phone";

import classes from "./Mockup.module.css";

const Mockup = ({ colors, type, images, count, isSelected, setGradient }) => {
  const screen = useScreenSize();
  const cursor = trackCursor();

  const [index, setIndex] = useState(0);

  const handleSlideRight = () => {
    if (index === count - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleSlideLeft = () => {
    if (index === 0) {
      setIndex(count - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const [autoDelay, setAutoDelay] = useState(5000);
  useInterval(handleSlideRight, autoDelay);

  const handleClick = (direction) => {
    setAutoDelay(null);
    if (direction === "right") {
      handleSlideRight();
    } else {
      handleSlideLeft();
    }
  };

  const bullets = [];
  for (let i = 0; i < count; i++) {
    bullets.push(
      <span
        className={classes.bullet}
        style={{
          transform: `scale(${i === index ? 1.5 : 1})`,
          backgroundColor: i === index ? colors.primary : "#fff",
        }}
        onClick={() => setIndex(i)}
      />
    );
  }

  return (
    <div className={classes.mockup}>
      <Browser
        index={index}
        isSelected={isSelected}
        images={images.desktop}
        cursor={cursor}
        screen={screen}
      />
      <Phone
        index={index}
        isSelected={isSelected}
        images={images.mobile}
        cursor={cursor}
        screen={screen}
      />
      <div
        className={`${classes.arrows} ${
          isSelected ? classes.arrows_selected : classes.arrows_def
        }`}
      >
        <a className={classes.arrow_a} onClick={() => handleClick("left")}>
          <span
            style={{ backgroundColor: colors.secondary }}
            className={`${classes.arrow} ${classes.arrow_left} ${
              isSelected ? classes.arrow_selected : classes.arrow_def
            }`}
          >
            <IoMdArrowDropleft />
          </span>
        </a>
        <div
          className={`${classes.bullets} ${
            isSelected ? classes.bullets_selected : classes.bullets_def
          }`}
        >
          {bullets}
        </div>
        <a
          className={`${classes.arrow_a}${
            autoDelay === 5000 ? ` ${classes.arrow_animated}` : ""
          }`}
          onClick={() => handleClick("right")}
        >
          <span
            style={{ backgroundColor: colors.secondary }}
            className={`${classes.arrow} ${classes.arrow_right} ${
              isSelected ? classes.arrow_selected : classes.arrow_def
            }`}
          >
            <IoMdArrowDropright />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Mockup;
