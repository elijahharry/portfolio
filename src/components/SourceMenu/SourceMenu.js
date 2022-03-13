import { useState, useEffect } from "react";
import { useSourceMenu } from "@context/SourceMenu";
import { useTheme } from "@context/Theme";

import { BsGithub } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

import classes from "./SourceMenu.module.css";

const SourceMenu = () => {
  const menu = useSourceMenu();
  const { repos, colors, logo, clearMenu } = menu;
  const { dark } = useTheme();

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [links, setLinks] = useState({ client: "", server: "" });
  const [theme, setTheme] = useState({ primary: "", secondary: "", logo: "" });

  useEffect(() => {
    if (repos?.client || repos?.server) {
      setLinks(repos);
      setTheme({ ...colors, logo: logo });
      setOpen(true);
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => {
        setOpen(false);
        setLinks({ client: "", server: "" });
        setTheme({ primary: "", secondary: "", logo: "" });
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [repos]);

  if (open) {
    return (
      <section
        className={`${classes.section} ${dark ? classes.dark : classes.light} ${
          animate ? classes.open : classes.close
        }`}
        onClick={clearMenu}
      >
        <div className={`${classes.container} container`}>
          <BsGithub className={classes.github} />
          <h2 className={classes.header}>Project Repositories</h2>
          <p>
            Click a button below to open up the respective repo in a new tab.
          </p>
          <div className={classes.buttons}>
            <a href={links?.client} target="_blank" rel="noreferrer">
              <button
                style={{
                  background: theme.primary,
                  background: `linear-gradient(20deg, ${theme.primary} 0%, ${theme.primary}BF 100%)`,
                  border: `2px solid ${theme.primary}`,
                }}
                className={classes.button}
              >
                Frontend
              </button>
            </a>
            <a href={links?.server} target="_blank" rel="noreferrer">
              <button
                style={{
                  background: theme.secondary,
                  background: `linear-gradient(20deg, ${theme.secondary} 0%, ${theme.secondary}BF 100%)`,
                  border: `2px solid ${theme.secondary}`,
                }}
                className={classes.button}
              >
                Backend
              </button>
            </a>
          </div>

          <span className={classes.exit}>
            <IoIosCloseCircle />
          </span>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default SourceMenu;
