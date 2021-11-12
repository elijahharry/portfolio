import { createContext, useContext, useState, useEffect } from "react";

const ScreenSize = createContext();

export function useScreenSize() {
  return useContext(ScreenSize);
}

export default function ScreenProvider({ children }) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [recentResize, setRecentResize] = useState(false);

  useEffect(() => {
    const grabSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    grabSize();
    window.addEventListener("resize", grabSize);
    return () => window.removeEventListener("resize", grabSize);
  }, []);

  useEffect(() => {
    setRecentResize(true);
    const timer = setTimeout(() => setRecentResize(false), 100);
    return () => clearTimeout(timer);
  }, [width, height]);

  useEffect(() => {
    console.log(recentResize);
  }, [recentResize]);

  return (
    <ScreenSize.Provider
      value={{
        width: width,
        height: height,
        resized: recentResize,
      }}
    >
      {children}
    </ScreenSize.Provider>
  );
}
