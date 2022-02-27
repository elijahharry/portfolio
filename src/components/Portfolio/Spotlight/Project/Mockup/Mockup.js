import { useState } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { useTheme } from "@context/Theme";
import { trackCursor } from "@context/CursorPosition";
import useInterval from "react-useinterval";

import Browsers from "./Browsers/Browsers";
import Phone from "./Phone/Phone";
import Bullets from "./Bullets/Bullets";

import classes from "./Mockup.module.css";

const Mockup = ({ colors, images, count, isSelected, domain }) => {
  const screen = useScreenSize();
  const cursor = trackCursor();
  const theme = useTheme();
  const { dark } = theme;
  const len = images.desktop.length;

  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(1);
  const [previous, setPrevious] = useState(len - 1);

  const handleSlideRight = () => {
    setPrevious(index);
    if (index === count - 1) {
      setIndex(0);
      setNext(1);
    } else {
      setIndex(index + 1);
      if (index + 1 === count - 1) {
        setNext(0);
      } else {
        setNext(index + 2);
      }
    }
  };
  const handleSlideLeft = () => {
    setPrevious(index);
    if (index === 0) {
      setIndex(count - 1);
      setNext(0);
    } else {
      setIndex(index - 1);
      setNext(index);
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

  return (
    <div className={classes.mockup}>
      <Browsers
        projectSelected={isSelected}
        current={index}
        previous={previous}
        next={next}
        images={images.desktop}
      />
      <Phone
        index={index}
        isSelected={isSelected}
        images={images.mobile}
        cursor={cursor}
        screen={screen}
        domain={domain}
        dark={dark}
      />
      <Bullets
        isSelected={isSelected}
        colors={colors}
        index={index}
        count={count}
        dark={dark}
        autoDelay={autoDelay}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Mockup;
