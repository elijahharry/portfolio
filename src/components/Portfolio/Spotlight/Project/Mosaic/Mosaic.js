import { useEffect, useState } from "react";
import shuffle from "@utils/shuffle";

import { trackCursor } from "@context/CursorPosition";
import Tile from "./Tile/Tile";
import classes from "./Mosaic.module.css";

const Mosaic = ({ images, isSelected, setSelected }) => {
  const imagesSized = images.map((image, i) => {
    const random = Math.random();
    const size = random > 0.8 ? "lg" : random > 0.6 ? "md" : "sm";
    return { ...image, size: size };
  });
  const shuffled = shuffle(imagesSized);
  const [tiles, setTiles] = useState([...shuffled]);

  return (
    <ul className={classes.mosaic}>
      {tiles.map((tile, i) => (
        <Tile
          tile={tile}
          index={i}
          isSelected={isSelected}
          setSelected={setSelected}
        />
      ))}
    </ul>
  );
};

export default Mosaic;
