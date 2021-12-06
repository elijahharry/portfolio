import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import classes from "./Browser.module.css";
const Browser = ({ isSelected, index, images, screen, cursor }) => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [transforms, setTransforms] = useState({ x: 0, y: 0 });

  const grabWidth = () => {
    const c = ref.current.offsetWidth;
    setWidth(c);
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
        x: cursor.x * 0.01,
        y: cursor.y * 0.01,
      });
    }
  }, [cursor]);

  return (
    <figure
      className={`${classes.computer_container} ${
        isSelected ? classes.comp_selected : classes.comp_def
      }`}
    >
      <div
        className={`${classes.computer}`}
        style={
          {
            // transform: `translateX(${transforms.x}px) translateY(${transforms.y}px)`,
            // filter: `drop-shadow(${transforms.x * -1}px ${
            //   transforms.y * -1
            // }px 20px rgba(0, 0, 0, .35))`,
          }
        }
      >
        {/* <StandSvg /> */}
        <div ref={ref} className={classes.monitor + " elevate-5"}>
          <div className={classes.screen}>
            <div className={classes.bar}>
              <span className={`${classes.dot} ${classes.green}`} />
              <span className={`${classes.dot} ${classes.yellow}`} />
              <span className={`${classes.dot} ${classes.red}`} />
            </div>
            <div
              className={classes.computer_track}
              style={{ transform: `translateX(-${index * width}px)` }}
            >
              {images.map((img, i) => (
                <div
                  style={{ width: width, minWidth: width }}
                  className={classes.computer_slide}
                  key={`browser-img-${i}`}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center"
                    src={`/img/${img.src}`}
                    placeholder={img?.blur ? "blur" : "empty"}
                    blurDataURL={img?.blur ? img.blur : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default Browser;
