import { useState, useEffect } from "react";
import { useTheme } from "@context/Theme";
import shuffle from "@utils/shuffle";
import classes from "./Technologies.module.css";

const Technologies = ({ tech, isSelected }) => {
  const theme = useTheme();
  const { dark } = theme;
  const [technologies, setTechnologies] = useState([...tech]);

  useEffect(() => {
    const shuffled = shuffle([...tech]);
    setTechnologies(shuffled);
  }, []);

  return (
    <div className={classes.tech}>
      {technologies.map((t, i) => (
        <img
          style={{
            transitionDelay: `${isSelected ? i * 0.075 + 0.8 : i * 0.05}s`,
          }}
          className={`${classes.logo} ${
            isSelected ? classes.logo_selected : classes.logo_def
          } ${classes[t]} ${dark ? classes.logo_dark : classes.logo_light}`}
          src={`/img/${t}.svg`}
          key={`img-${t}`}
        />
      ))}
    </div>
  );
};

export default Technologies;
