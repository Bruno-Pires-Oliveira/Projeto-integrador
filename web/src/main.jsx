// eslint-disable-next-line no-unused-vars
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.module.css"
// eslint-disable-next-line no-unused-vars
import {App} from "./App.jsx";
// eslint-disable-next-line no-unused-vars
import { Modal } from "./components/Modals/index.jsx";
import { Card } from "./components/Card/Index.jsx";
import { QuemSomos } from "./components/Quem_Somos/quemSomos.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
