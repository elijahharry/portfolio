import { useState, useEffect } from "react";
import { useTheme } from "@context/Theme";

import classes from "./Loader.module.css";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const loader = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(loader);
  }, []);

  if (loaded) {
    return <></>;
  } else {
    return (
      <section
        className={`${classes.loader} ${
          theme?.dark ? classes.loader_dark : classes.loader_light
        }`}
      >
        {/* <img src="/img/eh.svg" /> */}
      </section>
    );
  }
};

export default Loader;
