import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/AuthContext";
import MonitorProvider from "./context/MonitorRequestContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <MonitorProvider>
        <App />
        </MonitorProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
