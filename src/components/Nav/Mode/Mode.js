import { MdLightMode, MdDarkMode } from "react-icons/md";

import classes from "./Mode.module.css";

const Mode = ({ dark, toggleMode }) => {
  return (
    <button className={classes.toggle} onClick={toggleMode}>
      <span className={`${classes.icon} ${dark ? classes.show : classes.hide}`}>
        <MdLightMode />
      </span>
      <span
        className={`${classes.icon} ${!dark ? classes.show : classes.hide}`}
      >
        <MdDarkMode />
      </span>
    </button>
  );
};

export default Mode;
