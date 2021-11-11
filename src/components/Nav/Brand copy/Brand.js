import { useTheme } from "@context/Theme";
import { useScreenSize } from "@context/ScreenSize";

import Partner from "./Partner/Partner";
import classes from "./Brand.module.css";

const Brand = () => {
  const theme = useTheme();
  const screen = useScreenSize();
  const { primary } = theme;
  return (
    <div className={classes.brand}>
      <div
        className={classes.logo}
        style={{
          backgroundColor: primary,
        }}
      >
        <img src="/img/eh.svg" />
      </div>
      {screen.width > 960 && <Partner />}
    </div>
  );
};

export default Brand;
