import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useTheme } from "@context/Theme";
import { useScreenSize } from "@context/ScreenSize";

import WheelReact from "wheel-react";

import Spotlight from "./Spotlight/Spotlight";
import Tiles from "./Tiles/Tiles";
import Backdrops from "@components/Backdrops/Backdrops";
import Gradient from "./Gradient/Gradient";

import classes from "./Portfolio.module.css";

const Portfolio = ({ projects, allImages }) => {
  const [selected, setSelected] = useState(-1);
  const screen = useScreenSize();
  const router = useRouter();

  useEffect(() => {
    const init = setTimeout(() => setSelected(0), 100);
    return () => clearTimeout(init);
  }, []);

  const pickRandom = () => {
    const min = Math.ceil(1);
    const max = Math.floor(projects.length - 1);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(random);
  };

  const theme = useTheme();
  const { setColors, setPartnerLogo, primary, secondary } = theme;
  useEffect(() => {
    const selectedProject = projects[selected];
    if (selectedProject?.colors) {
      const { primary, secondary } = selectedProject.colors;
      setColors(primary, secondary);
    }
    if (selectedProject?.logo) {
      setPartnerLogo(selectedProject.logo);
    } else {
      setPartnerLogo(null);
    }
    if (screen.width < 1160) {
      if (selectedProject?.id) {
        router.push(`#${selectedProject.id}`);
      }
    } else {
      router.push("/");
    }
  }, [selected]);

  WheelReact.config({
    up: () => {
      if (screen.width > 1160) {
        if (selected === projects.length - 1) {
          setSelected(0);
        } else {
          setSelected(selected + 1);
        }
      }
    },
    down: () => {
      if (screen.width > 1160) {
        if (selected === 0) {
          setSelected(projects.length - 1);
        } else {
          setSelected(selected - 1);
        }
      }
    },
  });
  useEffect(() => {
    return () => WheelReact.clearTimeout();
  }, []);

  return (
    <>
      <section
        className={classes.portfolio}
        {...WheelReact.events}
        id="portfolio"
      >
        {screen.width > 1160 && (
          <Gradient primary={primary} secondary={secondary} />
        )}
        <Spotlight
          projects={projects}
          selected={selected}
          pickRandom={pickRandom}
          setSelected={setSelected}
          allImages={allImages}
        />
        {screen.width > 1160 && (
          <Tiles
            projects={projects}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </section>
    </>
  );
};

export default Portfolio;
