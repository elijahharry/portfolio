import Image from "next/image";
import classes from "./Tile.module.css";

const Tile = ({ project, handleSwitch, isSelected }) => {
  const { mockups } = project;
  const featured = `${mockups.prefix}-1-c.${mockups.type}`;

  return (
    <li className={classes.holder} onClick={handleSwitch}>
      <div
        className={`${classes.tile} ${
          isSelected ? classes.tile_selected : classes.tile_def
        } elevate-10`}
      >
        <div className={classes.bar}>
          <span className={`${classes.dot} ${classes.green}`} />
          <span className={`${classes.dot} ${classes.yellow}`} />
          <span className={`${classes.dot} ${classes.red}`} />
        </div>
        <div className={classes.screen}>
          <Image
            src={`/img/${featured}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            placeholder={featured?.blur ? "blur" : "empty"}
            blurDataURL={featured?.blur ? featured.blur : ""}
          />
        </div>
        {/* <img src="/img/iphone.svg" className={classes.frame} /> */}
      </div>
      {/* <img
        className={`${classes.logo} ${
          isSelected ? classes.logo_selected : classes.logo_def
        }`}
        src={`/img/${project.logo}`}
      /> */}
    </li>
  );
};

export default Tile;
