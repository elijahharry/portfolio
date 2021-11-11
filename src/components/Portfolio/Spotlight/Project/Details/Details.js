import Buttons from "./Buttons/Buttons";
import Technologies from "./Technologies/Technologies";
import classes from "./Details.module.css";

const Details = ({ project, isSelected, pickRandom }) => {
  const { header, subheader, desc } = project;
  const subArr = subheader.split("");
  const headerArr = header ? header.split("") : [];

  return (
    <div
      className={`${classes.details} ${
        isSelected ? classes.details_selected : classes.details_def
      }`}
    >
      <h5
        className={`${classes.subtitle} ${
          isSelected ? classes.subtitle_selected : classes.subtitle_def
        }`}
      >
        {subheader}
      </h5>
      <h2
        className={`${classes.title} ${
          isSelected ? classes.title_selected : classes.title_def
        }`}
      >
        {header}
      </h2>
      <p
        className={`${classes.desc} ${
          isSelected ? classes.desc_selected : classes.desc_def
        }`}
      >
        {desc}
      </p>
      {project?.buttons && (
        <Buttons
          logo={project.logo}
          colors={project.colors}
          pickRandom={pickRandom}
          buttons={project.buttons}
          isSelected={isSelected}
        />
      )}
      {project?.tech && (
        <Technologies tech={project.tech} isSelected={isSelected} />
      )}
    </div>
  );
};

export default Details;
