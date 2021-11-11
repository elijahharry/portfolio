import { createContext, useContext, useState, useEffect } from "react";

const Theme = createContext();

export function useTheme() {
  return useContext(Theme);
}

export default function ColorsProvider({ children }) {
  const [primary, setPrimary] = useState("#7831B3");
  const [secondary, setSecondary] = useState("#477DED");
  const [partnerLogo, setPartnerLogo] = useState(null);

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
      }}
    >
      {children}
    </Theme.Provider>
  );
}
