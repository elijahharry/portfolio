import { useState, useEffect } from "react";
import classes from "./Gradient.module.css";

const Gradient = ({ primary, secondary }) => {
  const [switched, setSwitched] = useState(false);
  const [current, setCurrent] = useState({
    primary: primary,
    secondary: secondary,
  });

  useEffect(() => {
    setSwitched(true);
    const timer = setTimeout(() => {
      setCurrent({
        primary: primary,
        secondary: secondary,
      });
      setSwitched(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [primary, secondary]);

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
        }}
      />
    </div>
  );
};

export default Gradient;
