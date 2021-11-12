import { useScreenSize } from "@context/ScreenSize";

import classes from "./Brand.module.css";

const Brand = () => {
  const screen = useScreenSize();

  return (
    <div className={classes.brand}>
      <div className={classes.logo}>
        <img src="/img/eh.svg" />
      </div>
    </div>
  );
};

export default Brand;
