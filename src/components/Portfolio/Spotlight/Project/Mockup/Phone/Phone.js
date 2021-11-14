import { useState, useEffect, useRef } from "react";
import useInterval from "react-useinterval";
import { FiSearch, FiWifi, FiBatteryCharging } from "react-icons/fi";

import classes from "./Phone.module.css";
import projects from "@constants/projects";

const Phone = ({ isSelected, index, images, screen, cursor, domain, dark }) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [transforms, setTransforms] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("7:00");

  useInterval(() => {
    const current = getTime();
    setTime(current);
  }, 1000);

  const grabWidth = () => {
    const p = ref.current.offsetWidth;
    setWidth(p);
  };

  useEffect(() => {
    grabWidth();
    const timer = setTimeout(() => {
      grabWidth();
    }, 20);
    return () => clearTimeout(timer);
  }, [screen]);

  useEffect(() => {
    if (screen.width > 1160) {
      setTransforms({
        x: cursor.x * 0.035,
        y: cursor.y * 0.035,
      });
    }
  }, [cursor]);

  return (
    <figure
      className={`${classes.phone_container} ${
        isSelected ? classes.phone_selected : classes.phone_def
      }`}
    >
      <div
        className={`${classes.phone}`}
        style={{
          transform: `translateX(${transforms.x}px) translateY(${transforms.y}px)`,
          // filter: `drop-shadow(${transforms.x * -1}px ${
          //   transforms.y * -1
          // }px 20px #0000004D)`,
        }}
      >
        <div ref={ref} className={classes.screen_p + " elevate-8"}>
          <div
            className={`${classes.notch} ${
              dark ? classes.notch_dark : classes.notch_light
            }`}
          >
            {time}
            <span>
              <FiWifi /> <FiBatteryCharging />
            </span>
          </div>
          <div
            className={`${classes.top_bar} ${
              dark ? classes.top_dark : classes.top_light
            }`}
          >
            <div className={classes.search}>
              <FiSearch />
              {domain && <span>{domain}</span>}
            </div>
          </div>
          <div
            className={classes.phone_track}
            style={{ transform: `translateX(-${index * width}px)` }}
          >
            {images.map((img, i) => (
              <div
                className={classes.phone_slide}
                style={{ width: width, minWidth: width }}
                key={`phone-img-${i}`}
              >
                <img className={classes.phone_img} src={`/img/${img.src}`} />
              </div>
            ))}
          </div>
          {/* <span className={classes.phone_bar} /> */}
        </div>
      </div>
    </figure>
  );
};

export default Phone;

const getTime = () => {
  const date = new Date();
  const options = { hour: "numeric", minute: "numeric" };
  const time = new Intl.DateTimeFormat("en-US", options).format(date);
  return time.replace(" PM", "").replace(" AM", "");
};
