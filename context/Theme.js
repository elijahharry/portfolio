import { createContext, useContext, useState, useEffect } from "react";

const Theme = createContext();

export function useTheme() {
  return useContext(Theme);
}

export default function ColorsProvider({ children }) {
  const [dark, setDark] = useState(true);
  const [primary, setPrimary] = useState("#7831B3");
  const [secondary, setSecondary] = useState("#477DED");
  const [partnerLogo, setPartnerLogo] = useState(null);
  const [modeChanged, setModeChanged] = useState(false);

  useEffect(() => {
    setModeChanged(true);
    const timer = setTimeout(() => setModeChanged(false), 80);
    return () => clearTimeout(timer);
  }, [dark]);

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
