import { useScreenSize } from "@context/ScreenSize";

import classes from "./Brand.module.css";

const Brand = ({ dark }) => {
  const screen = useScreenSize();

  return (
    <div className={classes.brand}>
      <div className={classes.logo}>
        <img
          className={dark ? classes.dark : classes.light}
          src="/img/eh.svg"
        />
      </div>
    </div>
  );
};

export default Brand;
