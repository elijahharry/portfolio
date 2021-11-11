import { createContext, useContext, useState, useEffect } from "react";

const SourceMenu = createContext();

export function useSourceMenu() {
  return useContext(SourceMenu);
}

export default function SourceMenuProvider({ children }) {
  const [repos, setRepos] = useState(null);
  const [colors, setColors] = useState(null);
  const [logo, setLogo] = useState(null);

  const setMenu = (content) => {
    content?.repos && setRepos(content.repos);
    content?.colors && setColors(content.colors);
    content?.logo && setLogo(content.logo);
  };

  const clearMenu = () => {
    setRepos(null);
    setColors(null);
  };

  return (
    <SourceMenu.Provider
      value={{
        repos: repos,
        colors: colors,
        logo: logo,
        setMenu: setMenu,
        clearMenu: clearMenu,
      }}
    >
      {children}
    </SourceMenu.Provider>
  );
}
