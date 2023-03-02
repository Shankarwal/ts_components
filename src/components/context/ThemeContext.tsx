import React, { createContext, useContext, useState } from "react";
import { Themes, themes } from "./theme";

type ContextType = {
  themes: Themes;
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext({} as ContextType);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [light, setLight] = useState(false);
  return (
    <ThemeContext.Provider value={{ themes, light, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
