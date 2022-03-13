import { useEffect, useState } from "react";
import { useScreenSize } from "@context/ScreenSize";
import { useTheme } from "@context/Theme";
import { useSourceMenu } from "@context/SourceMenu";

import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import Loader from "./Loader/Loader";
import SourceMenu from "./SourceMenu/SourceMenu";

const Main = ({ children }) => {
  const screen = useScreenSize();
  const theme = useTheme();
  const { dark, toggleMode, modeChanged } = theme;
  const { repos } = useSourceMenu();

  const { resized } = screen;

  const [transitions, setTransitions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTransitions(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head />
      <main
        className={`${transitions ? "main" : ""}${
          resized || modeChanged ? " transition-zero" : ""
        } ${dark ? "dark-mode" : "light-mode"}${(repos && " blur") || ""}`}
      >
        <Nav dark={dark} toggleMode={toggleMode} />
        {children}
      </main>
      <SourceMenu />
      <Loader />
    </>
  );
};

export default Main;
