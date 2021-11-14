import { useScreenSize } from "@context/ScreenSize";

import Details from "./Details/Details";
import Mosaic from "./Mosaic/Mosaic";
import Mockup from "./Mockup/Mockup";
import Gradient from "@components/Portfolio/Gradient/Gradient";

import classes from "./Project.module.css";

const Project = ({
  project,
  width,
  isSelected,
  i,
  pickRandom,
  setSelected,
  setGradient,
  allImages,
  dark,
}) => {
  const screen = useScreenSize();

  return (
    <div
      key={`project-${i}`}
      style={{ width: width, minWidth: width }}
      className={`${classes.project} ${
        isSelected ? classes.project_selected : classes.project_def
      } ${
        i === 0 ? classes.padding_mobile_extra : classes.padding_mobile_def
      } ${dark ? classes.dark_border : classes.light_border}`}
      id={project.id}
    >
      {screen.width <= 1160 && (
        <Gradient
          primary={project?.colors?.primary}
          secondary={project?.colors?.secondary}
        />
      )}
      <div className="container">
        <div
          className={`${classes.item} ${
            isSelected ? classes.item_selected : classes.item_def
          }`}
        >
          <Details
            project={project}
            isSelected={isSelected}
            pickRandom={pickRandom}
          />
          {project?.mockups ? (
            <Mockup
              count={project?.mockups?.count}
              images={project.images}
              isSelected={isSelected}
              colors={project?.colors}
              setGradient={setGradient}
              domain={project?.domain}
            />
          ) : (
            <Mosaic
              images={allImages}
              isSelected={isSelected}
              setSelected={setSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
