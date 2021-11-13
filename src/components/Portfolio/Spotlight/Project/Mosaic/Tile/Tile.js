import Image from "next/image";
import { trackCursor } from "@context/CursorPosition";

import classes from "./Tile.module.css";

const Tile = ({ tile, index, isSelected, setSelected }) => {
  const { src, size } = tile;
  const cursor = trackCursor();

  return (
    <li
      className={`${classes.container} ${classes[size]} ${
        isSelected ? classes.selected : classes.default
      }`}
      style={{
        transitionDelay: `${isSelected ? index * 50 + 300 : index * 20}ms`,
      }}
      key={`tile-${tile.src}`}
      onClick={() => setSelected(tile.project_id)}
    >
      <div
        className={classes.tile + " elevate-8"}
        style={{ animationDelay: `${index * 30 + 300}ms` }}
      >
        <div className={classes.bar}>
          <span className={`${classes.dot} ${classes.green}`} />
          <span className={`${classes.dot} ${classes.yellow}`} />
          <span className={`${classes.dot} ${classes.red}`} />
        </div>
        <div className={classes.img}>
          <Image
            src={`/img/${tile.src}`}
            placeholder={tile?.blur ? "blur" : "empty"}
            blurDataURL={tile?.blur ? tile.blur : ""}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
      </div>
    </li>
  );
};

export default Tile;
