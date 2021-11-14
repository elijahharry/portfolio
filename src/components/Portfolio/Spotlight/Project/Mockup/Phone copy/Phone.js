import { useState, useEffect, useRef } from "react";

import classes from "./Phone.module.css";

const Phone = ({ isSelected, index, images, screen, cursor }) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [transforms, setTransforms] = useState({ x: 0, y: 0 });

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
            className={classes.phone_track}
            style={{ transform: `translateX(-${index * width}px)` }}
          >
            {images.map((img, i) => (
              <div
                className={classes.phone_slide}
                style={{ width: width, minWidth: width }}
                key={`phone-img-${i}`}
              >
                <img className={classes.phone_screen} src={`/img/${img.src}`} />
              </div>
            ))}
          </div>
          <span className={classes.phone_bar} />
        </div>
      </div>
    </figure>
  );
};

export default Phone;
