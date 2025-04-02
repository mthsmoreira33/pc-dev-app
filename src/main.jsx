import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HighContrastProvider } from "../src/themes/HighContrast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HighContrastProvider>
      <App />
    </HighContrastProvider>
  </StrictMode>
);
