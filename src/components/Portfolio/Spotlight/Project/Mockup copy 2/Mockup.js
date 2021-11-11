import { useState, useEffect, useRef } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { trackCursor } from "@context/CursorPosition";
import useInterval from "react-useinterval";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { FaHandPointer } from "react-icons/fa";

import classes from "./Mockup.module.css";

const Mockup = ({ colors, type, images, isSelected }) => {
  const screen = useScreenSize();
  const cursor = trackCursor();

  const phoneViews = [];
  const computerViews = [];
  for (let i = 1; i <= images.count; i++) {
    phoneViews.push(`/img/${images.prefix}-${i}-m.${images.type}`);
    computerViews.push(`/img/${images.prefix}-${i}-c.${images.type}`);
  }

  const phone = useRef(null);
  const computer = useRef(null);
  const [index, setIndex] = useState(0);

  const [widths, setWidths] = useState({ phone: 0, computer: 0 });
  const handleWidths = () => {
    const p = phone.current.offsetWidth;
    const c = computer.current.offsetWidth;
    setWidths({ phone: p, computer: c });
  };

  useEffect(() => {
    handleWidths();
    const timer = setTimeout(() => {
      handleWidths();
    }, 20);
    return () => clearTimeout(timer);
  }, [screen]);

  const handleSlideRight = () => {
    if (index === images.count - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleSlideLeft = () => {
    if (index === 0) {
      setIndex(images.count - 1);
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

  const [transforms, setTransforms] = useState({
    computer: { x: 0, y: 0 },
    phone: { x: 0, y: 0 },
  });
  useEffect(() => {
    console.log(cursor);
    if (screen.width > 1160) {
      setTransforms({
        computer: {
          x: cursor.x * 0.01,
          y: cursor.y * 0.01,
        },
        phone: {
          x: cursor.x * 0.04,
          y: cursor.y * 0.04,
        },
      });
    }
  }, [cursor]);

  return (
    <div className={classes.mockup}>
      <figure
        className={`${classes.computer_container} ${
          isSelected ? classes.comp_selected : classes.comp_def
        }`}
      >
        <div
          className={`${classes.computer}`}
          style={{
            transform: `translateX(${transforms.computer.x}px) translateY(${transforms.computer.y}px)`,
            filter: `drop-shadow(${transforms.computer.x * -1}px ${
              transforms.computer.y * -1
            }px 20px #000)`,
          }}
        >
          {/* <img src="/img/monitor.svg" className={classes.monitor} /> */}
          <div ref={computer} className={classes.monitor}>
            <div className={classes.bar}>
              <span className={`${classes.dot} ${classes.green}`} />
              <span className={`${classes.dot} ${classes.yellow}`} />
              <span className={`${classes.dot} ${classes.red}`} />
            </div>
            <div
              className={classes.computer_track}
              style={{ transform: `translateX(-${index * widths.computer}px)` }}
            >
              {computerViews.map((img) => (
                <div
                  style={{ width: widths.computer, minWidth: widths.computer }}
                  className={classes.computer_slide}
                >
                  <img src={img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </figure>
      <figure
        className={`${classes.phone_container} ${
          isSelected ? classes.phone_selected : classes.phone_def
        }`}
      >
        <div
          className={`${classes.phone}`}
          style={{
            transform: `translateX(${transforms.phone.x}px) translateY(${transforms.phone.y}px)`,
            filter: `drop-shadow(${transforms.phone.x * -1}px ${
              transforms.phone.y * -1
            }px 20px #0000008C)`,
          }}
        >
          <div ref={phone} className={classes.screen_p}>
            <div
              className={classes.phone_track}
              style={{ transform: `translateX(-${index * widths.phone}px)` }}
            >
              {phoneViews.map((img) => (
                <div
                  className={classes.phone_slide}
                  style={{ width: widths.phone, minWidth: widths.phone }}
                >
                  <img className={classes.phone_screen} src={img} />
                </div>
              ))}
            </div>
            <div className={classes.phone_bar}></div>
          </div>
        </div>
      </figure>
      <div
        className={`${classes.arrows} ${
          isSelected ? classes.arrows_selected : classes.arrows_def
        }`}
        style={{
          transform: `translateX(${transforms.computer.x}px) translateY(${transforms.computer.y}px)`,
        }}
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
      {/* <div className={classes.pointer}>
        <FaHandPointer />
      </div> */}
    </div>
  );
};

export default Mockup;
