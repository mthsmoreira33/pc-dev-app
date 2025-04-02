import { createContext, useEffect, useState } from "react";

const HighContrastContext = createContext();

export const HighContrastProvider = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem("isHighContrast") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isHighContrast", isHighContrast);
    if (isHighContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  return (
    <HighContrastContext.Provider value={{ isHighContrast, setIsHighContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
};

export { HighContrastContext };
