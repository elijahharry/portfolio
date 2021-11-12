import { useEffect, useState } from "react";
import { useScreenSize } from "@context/ScreenSize";

import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import Loader from "./Loader/Loader";
import SourceMenu from "./SourceMenu/SourceMenu";

const Main = ({ children }) => {
  const screen = useScreenSize();
  const { resized } = screen;
  const [transitions, setTransitions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setTransitions(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head />
      <Nav />
      <main
        className={`${transitions ? "main" : ""}${
          resized ? " transition-zero" : ""
        }`}
      >
        {children}
        <SourceMenu />
      </main>
      <Loader />
    </>
  );
};

export default Main;
