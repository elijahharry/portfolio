import { useEffect, useState } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { useTheme } from "@context/Theme";

import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import Loader from "./Loader/Loader";
import SourceMenu from "./SourceMenu/SourceMenu";

const Main = ({ children }) => {
  const screen = useScreenSize();
  const theme = useTheme();
  const { dark, toggleMode, modeChanged } = theme;

  const { resized } = screen;

  const [transitions, setTransitions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTransitions(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head />
      <Nav dark={dark} toggleMode={toggleMode} />
      <main
        className={`${transitions ? "main" : ""}${
          resized || modeChanged ? " transition-zero" : ""
        } ${dark ? "dark-mode" : "light-mode"}`}
      >
        {children}
        <SourceMenu />
      </main>
      <Loader />
    </>
  );
};

export default Main;
