import { useState, useEffect } from "react";
import useInterval from "react-useinterval";

import Image from "./Image/Image";
import classes from "./Images.module.css";

const Images = ({ images, isSelected }) => {
  const [main, setMain] = useState(0);
  const [next, setNext] = useState(1);
  const final = images.length - 1;
  const [previous, setPrevious] = useState(final);

  useEffect(() => {
    if (main === 0) {
      setNext(1);
      setPrevious(final);
    } else if (main === final) {
      setNext(0);
      setPrevious(final - 1);
    } else {
      setPrevious(main - 1);
      setNext(main + 1);
    }
  }, [main]);

  const handleAutoSwitch = () => {
    if (main === final) {
      setMain(0);
    } else {
      setMain(main + 1);
    }
  };

  useInterval(handleAutoSwitch, 5000);

  return (
    <div
      className={`${classes.images} ${
        isSelected ? classes.images_selected : classes.images_def
      }`}
    >
      {images.map((image, i) => (
        <Image
          image={image}
          isMain={i === main}
          isNext={i === next}
          wasPrevious={i === previous}
          key={`img-${i}`}
        />
      ))}
    </div>
  );
};

export default Images;
