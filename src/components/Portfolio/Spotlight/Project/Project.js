import Details from "./Details/Details";
import Mosaic from "./Mosaic/Mosaic";
import Mockup from "./Mockup/Mockup";
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
}) => {
  return (
    <div
      key={`project-${i}`}
      style={{ width: width, minWidth: width }}
      className={`${classes.project} ${
        isSelected ? classes.project_selected : classes.project_def
      }`}
      id={project.id}
    >
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
