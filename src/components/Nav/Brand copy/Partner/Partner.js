import { useTheme } from "@context/Theme";
import projects from "@constants/projects";
import { BsPlusCircleFill } from "react-icons/bs";

import classes from "./Partner.module.css";

const Partner = () => {
  const theme = useTheme();
  const { partnerLogo } = theme;
  return (
    <div className={classes.partner}>
      <span
        className={`${classes.plus} ${
          partnerLogo ? classes.plus_shown : classes.plus_hidden
        }`}
      >
        <BsPlusCircleFill />
      </span>
      <div className={classes.logos}>
        {projects.map(
          (project) =>
            project?.logo && (
              <img
                src={`/img/${project.logo}`}
                className={`${classes.logo} ${
                  project.logo === partnerLogo
                    ? classes.logo_selected
                    : classes.logo_def
                }`}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Partner;
