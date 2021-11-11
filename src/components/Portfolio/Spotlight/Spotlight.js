import { useState, useEffect } from "react";
import { useScreenSize } from "@context/ScreenSize";

import Project from "./Project/Project";
import classes from "./Spotlight.module.css";
import Backdrops from "@components/Backdrops/Backdrops";

const Spotlight = ({
  projects,
  selected,
  pickRandom,
  setSelected,
  setGradient,
  allImages,
}) => {
  const screen = useScreenSize();

  return (
    <section id="spotlight" className={classes.section}>
      <div className={classes.projects}>
        {projects.map((project, i) => (
          <Project
            width={screen.width}
            project={project}
            isSelected={
              screen.width > 1160
                ? selected === projects.indexOf(project)
                : true
            }
            i={i}
            pickRandom={pickRandom}
            setSelected={setSelected}
            setGradient={setGradient}
            allImages={allImages}
          />
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
