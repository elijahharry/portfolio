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
          background: `linear-gradient(217deg, ${current.primary}, ${current.secondary} 30.71%, ${current.primary} 70%),
            linear-gradient(127deg, ${current.secondary}, ${current.primary} 70.71%),
            linear-gradient(336deg, ${current.primary}, ${current.secondary} 70.71%)`,
        }}
      />
      <span
        className={classes.overlay}
        style={{
          opacity: switched ? 1 : 0,
          background: `linear-gradient(217deg, ${previous.primary}, ${previous.secondary} 30.71%, ${previous.primary} 70%),
          linear-gradient(127deg, ${previous.secondary}, ${previous.primary} 70.71%),
          linear-gradient(336deg, ${previous.primary}, ${previous.secondary} 70.71%)`,
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
