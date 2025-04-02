import { useContext } from "react";
import { HighContrastContext } from "../themes/HighContrast";

export const useHighContrast = () => {
  return useContext(HighContrastContext);
};
