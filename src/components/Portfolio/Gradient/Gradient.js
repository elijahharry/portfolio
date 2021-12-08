import { useState, useEffect } from "react";
import classes from "./Gradient.module.css";

const Gradient = ({ primary, secondary }) => {
  const [switched, setSwitched] = useState(false);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState({
    primary: primary,
    secondary: secondary,
  });
  const [previous, setPrevious] = useState({
    primary: primary,
    secondary: secondary,
  });

  useEffect(() => {
    setSwitched(true);
    setPrevious({
      primary: current.primary,
      secondary: current.secondary,
    });
    const timer = setTimeout(() => {
      setCurrent({
        primary: primary,
        secondary: secondary,
      });
      setSwitched(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [primary, secondary]);

  useEffect(() => {
    if (switched) {
      setCount(count + 1);
    }
  }, [switched]);

  return (
    <div className={classes.container}>
      <div
        className={classes.gradient}
        style={{
          background: primary,
          background: `linear-gradient(217deg, ${current.secondary}, ${current.primary} 33%, ${current.secondary} 66%, ${current.primary} 100%)`,
        }}
      />
      <span
        className={classes.overlay}
        style={{
          opacity: switched ? 1 : 0,
          background: `linear-gradient(217deg, ${previous.secondary}, ${previous.primary} 33%, ${previous.secondary} 66%, ${previous.primary} 100%)`,
        }}
      />
      <span
        className={classes.flash}
        style={{
          transform: `translateX(${count % 2 === 0 ? "-" : ""}100%)`,
        }}
      />
    </div>
  );
};

export default Gradient;
