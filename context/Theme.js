import { createContext, useContext, useState, useEffect } from "react";

const Theme = createContext();

export function useTheme() {
  return useContext(Theme);
}

export default function ColorsProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [primary, setPrimary] = useState("#21c29c");
  const [secondary, setSecondary] = useState("#477DED");
  const [partnerLogo, setPartnerLogo] = useState(null);
  const [modeChanged, setModeChanged] = useState(false);

  useEffect(() => {
    setModeChanged(true);
    const timer = setTimeout(() => setModeChanged(false), 80);
    return () => clearTimeout(timer);
  }, [dark]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check for dark mode on initial load
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      setDark(query?.matches ? true : false);
      // Add an event listener in-case it changes
      const modeMe = (e) => {
        setDark(e.matches ? true : false);
      };
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", modeMe);
      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener(modeMe);
    }
  }, []);

  const toggleMode = () => {
    setDark(!dark);
  };

  const setColors = (primary, secondary) => {
    setPrimary(primary);
    setSecondary(secondary);
  };

  return (
    <Theme.Provider
      value={{
        primary: primary,
        secondary: secondary,
        setColors: setColors,
        partnerLogo: partnerLogo,
        setPartnerLogo: setPartnerLogo,
        dark: dark,
        toggleMode: toggleMode,
        modeChanged: modeChanged,
      }}
    >
      {children}
    </Theme.Provider>
  );
}
