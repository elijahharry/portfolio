import { useState, useEffect } from "react";

import classes from "./Loader.module.css";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(loader);
  }, []);

  if (loaded) {
    return <></>;
  } else {
    return (
      <section className={classes.loader}>
        {/* <img src="/img/eh.svg" /> */}
      </section>
    );
  }
};

export default Loader;
