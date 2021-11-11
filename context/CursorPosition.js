import { createContext, useContext, useState, useEffect } from "react";

const CursorPosition = createContext();

export function trackCursor() {
  return useContext(CursorPosition);
}

export default function CursorTracker({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateMousePosition = (ev) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
    });
  };

  const grabSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", grabSize);
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("resize", grabSize);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <CursorPosition.Provider
      value={{
        x: mousePosition.x - width / 2,
        y: mousePosition.y - height / 2,
      }}
    >
      {children}
    </CursorPosition.Provider>
  );
}
