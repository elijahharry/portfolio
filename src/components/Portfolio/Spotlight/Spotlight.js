import { useState, useEffect } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { useTheme } from "@context/Theme";

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
  const theme = useTheme();
  const { dark } = theme;

  return (
    <section
      id="spotlight"
      className={`${classes.section} ${dark ? classes.dark : classes.light}`}
    >
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
            dark={dark}
            key={i.toString()}
          />
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
