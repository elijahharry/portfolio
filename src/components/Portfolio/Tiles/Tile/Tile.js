import Image from "next/image";
import classes from "./Tile.module.css";

const Tile = ({ project, handleSwitch, isSelected }) => {
  const { mockups } = project;
  const featured =
    project?.featured && !isNaN(project.featured)
      ? project.images.desktop[project.featured - 1]
      : project?.images?.desktop[0]
      ? project.images.desktop[0]
      : null;

  console.log(project);

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
          {featured && (
            <Image
              src={`/img/${featured.src}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
              placeholder={featured?.blur ? "blur" : "empty"}
              blurDataURL={featured?.blur ? featured.blur : ""}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default Tile;
