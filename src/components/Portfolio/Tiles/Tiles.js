import Backdrops from "@components/Backdrops/Backdrops";
import Gradient from "../Gradient/Gradient";
import { useTheme } from "@context/Theme";

import Tile from "./Tile/Tile";
import classes from "./Tiles.module.css";

const Tiles = ({ projects, selected, setSelected }) => {
  const handleSwitch = (index, colors) => {
    if (selected === index) {
      setSelected(0);
    } else {
      setSelected(index);
    }
  };

  const theme = useTheme();
  const { primary, secondary } = theme;

  return (
    <section id="projects" className={classes.section}>
      <div className="container">
        <h5
          className={`${classes.title} ${
            selected !== 1 ? classes.title_show : classes.title_hide
          }`}
        >
          Scroll or click on a project for details, stacks, repos & more
        </h5>
        <ul className={classes.row}>
          {projects.map(
            (project, i) =>
              i !== 0 && (
                <Tile
                  project={project}
                  isSelected={i === selected}
                  handleSwitch={() => handleSwitch(i, project?.colors)}
                  key={i.toString()}
                />
              )
          )}
        </ul>
      </div>
      <Gradient primary={primary} secondary={secondary} />
    </section>
  );
};

export default Tiles;
