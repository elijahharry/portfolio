import Image from "next/image";

import classes from "./Browser.module.css";

const Browser = ({ current, next, previous, img, i }) => {
  return (
    <div
      className={`${classes.computer} ${
        current
          ? classes.current + " elevate-5"
          : next
          ? classes.next + " elevate-3"
          : previous
          ? classes.previous + " elevate-8"
          : classes.offscreen + " elevate-2"
      }`}
    >
      <div className={classes.screen}>
        <div className={classes.bar}>
          <span className={`${classes.dot} ${classes.green}`} />
          <span className={`${classes.dot} ${classes.yellow}`} />
          <span className={`${classes.dot} ${classes.red}`} />
        </div>
        <div
          className={classes.image}
          // key={`browser-img-${i}`}
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
      </div>
    </div>
  );
};

export default Browser;
