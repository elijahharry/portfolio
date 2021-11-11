import { useEffect, useState } from "react";
import Head from "./Head/Head";
import Nav from "./Nav/Nav";
import SourceMenu from "./SourceMenu/SourceMenu";

const Main = ({ children }) => {
  const [transitions, setTransitions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setTransitions(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head />
      <Nav />
      <main className={transitions ? "main" : "preload"}>
        {children}
        <SourceMenu />
      </main>
    </>
  );
};

export default Main;
