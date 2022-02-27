import Browser from "./Browser/Browser";

import classes from "./Browsers.module.css";
const Browsers = ({ projectSelected, current, next, previous, images }) => {
  return (
    <figure
      className={`${classes.computer_container} ${
        projectSelected ? classes.comp_selected : classes.comp_def
      }`}
    >
      {images.map((img, i) => (
        <Browser
          current={current === i}
          next={next === i}
          previous={previous === i}
          index={i}
          img={img}
          key={i.toString()}
        />
      ))}
    </figure>
  );
};

export default Browsers;
