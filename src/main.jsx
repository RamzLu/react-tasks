import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { App } from "./pages/App";

import SimpleForm from "./pages/SimpleForm";
import MultipleCustomHooks from "./pages/MultipleCustomHooks";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
