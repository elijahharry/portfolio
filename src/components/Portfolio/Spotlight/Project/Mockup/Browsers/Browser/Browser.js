import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import classes from "./Browser.module.css";

const Browser = ({ current, next, previous, img, i }) => {
  const [scale, setScale] = useState(1);
  const [x, setX] = useState(0);

  useEffect(() => {
    if (current) {
      setScale(1);
      setX(0);
    } else if (next) {
      setScale(0.9);
      setX("10%");
    } else if (previous) {
      setScale([1, 1.05, 1.1]);
      setX(["0vw", "-2.5vw", "100vw"]);
    } else {
      setScale(0.6);
      setX("100vw");
    }
    console.log(previous);
  }, [current, next, previous]);

  return (
    <motion.div
      className={`${classes.computer} ${
        current
          ? classes.current + " elevate-5"
          : next
          ? classes.next + " elevate-3"
          : previous
          ? classes.previous + " elevate-8"
          : classes.offscreen + " elevate-2"
      }`}
      animate={{ scale: scale, x: x }}
      transition={{ type: "spring", duration: 1.2 }}
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
    </motion.div>
  );
};

export default Browser;
