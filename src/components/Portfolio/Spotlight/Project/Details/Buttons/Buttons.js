import { useState, useEffect } from "react";
import { useTheme } from "@context/Theme";
import { useSourceMenu } from "@context/SourceMenu";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { IoIosShuffle } from "react-icons/io";
import classes from "./Buttons.module.css";

import Color from "color";

const colors = new Map();
const color = (rgb) => {
  if (colors.has(rgb)) return colors.get(rgb);
  const c = Color(rgb);
  colors.set(rgb, c);
  return c;
};

const Buttons = ({ logo, colors, buttons, pickRandom, isSelected }) => {
  // const { primary, secondary } = colors;

  const [{ primary, secondary }, setColors] = useState(() => ({
    primary: color(colors.primary),
    secondary: color(colors.secondary),
  }));

  useEffect(() => {
    setColors({
      primary: color(colors.primary),
      secondary: color(colors.secondary),
    });
  }, [colors]);

  const theme = useTheme();
  const { dark } = theme;
  const menu = useSourceMenu();
  const { setMenu } = menu;

  const elements = [];
  buttons.map((button, i) => {
    const even = i % 2 === 0;
    const buttonStyles = even
      ? {
          backgroundColor: secondary.rgb().string(),
          border: `2px solid ${secondary}`,
          "--color-dark": dark ? secondary.darken(0.05).rgb().string() : "#fff",
        }
      : {
          border: `2px solid ${primary.rgb().string()}`,
          color: dark ? primary.rgb().string() : "#fff",
          backgroundColor: dark ? "transparent" : primary.rgb().string(),
          "--color-dark": dark ? primary.darken(0.05).rgb().string() : "#fff",
          // color: primary,
          // backgroundColor: "transparent",
        };

    const containerStyles = even
      ? {
          transitionDelay: ".5s",
          zIndex: 1,
        }
      : {
          marginLeft: 15,
          transitionDelay: ".45s",
          zIndex: 2,
        };

    let icons = [];

    const textForTest = button.text.toLowerCase();
    if (textForTest.includes("github")) {
      icons.push(<AiFillGithub />);
    } else if (textForTest.includes("random")) {
      icons.push(<IoIosShuffle />);
    }

    if (button?.function) {
      if (button.function === "random") {
        elements.push(
          <a
            key={`button-${i}`}
            className={`${classes.button} ${
              isSelected ? classes.button_selected : classes.button_def
            }`}
            onClick={pickRandom}
            style={containerStyles}
          >
            <button style={buttonStyles}>
              {icons}
              {button.text}
            </button>
          </a>
        );
      } else if (button.function === "github") {
        elements.push(
          <a
            key={`button-${i}`}
            className={`${classes.button} ${
              isSelected ? classes.button_selected : classes.button_def
            }`}
            onClick={() =>
              setMenu({
                repos: { client: button?.client, server: button?.server },
                colors: colors,
                logo: logo,
              })
            }
            style={containerStyles}
          >
            <button style={buttonStyles}>
              {icons}
              {button.text}
            </button>
          </a>
        );
      }
    } else if (button?.href) {
      if (button?.target) {
        elements.push(
          <a
            key={`button-${i}`}
            href={button.href}
            target={button.target}
            rel="noreferrer"
            className={`${classes.button} ${
              isSelected ? classes.button_selected : classes.button_def
            }`}
            style={containerStyles}
          >
            <button style={buttonStyles}>
              {icons}
              {button.text}
            </button>
          </a>
        );
      }
    }
  });

  return <div className={classes.buttons}>{elements}</div>;
};

export default Buttons;
