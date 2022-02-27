import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { FaHandPointer } from "react-icons/fa";

import classes from "./Bullets.module.css";

const Bullets = ({
  colors,
  isSelected,
  index,
  count,
  dark,
  autoDelay,
  handleClick,
}) => {
  const bullets = [];
  for (let i = 0; i < count; i++) {
    bullets.push(
      <span
        className={`${classes.bullet}${dark ? " elevate-3" : ""}`}
        style={{
          transform: `scale(${i === index ? 1.5 : 1})`,
          backgroundColor:
            i === index ? colors.primary : dark ? "#fff" : "#212121",
        }}
        onClick={() => setIndex(i)}
      />
    );
  }

  return (
    <div
      className={`${classes.arrows} ${
        isSelected ? classes.arrows_selected : classes.arrows_def
      }`}
    >
      <a className={classes.arrow_a} onClick={() => handleClick("left")}>
        <span
          style={{ backgroundColor: colors.secondary }}
          className={`${classes.arrow} ${classes.arrow_left} ${
            isSelected ? classes.arrow_selected : classes.arrow_def
          } elevate-5`}
        >
          <IoMdArrowDropleft />
        </span>
      </a>
      <div
        className={`${classes.bullets} ${
          isSelected ? classes.bullets_selected : classes.bullets_def
        }`}
      >
        {bullets}
      </div>
      <a
        className={`${classes.arrow_a}${
          autoDelay === 5000 ? ` ${classes.arrow_animated}` : ""
        } `}
        onClick={() => handleClick("right")}
      >
        <span
          style={{ backgroundColor: colors.secondary }}
          className={`${classes.arrow} ${classes.arrow_right} ${
            isSelected ? classes.arrow_selected : classes.arrow_def
          } elevate-5`}
        >
          <IoMdArrowDropright />
        </span>
      </a>
    </div>
  );
};

export default Bullets;
