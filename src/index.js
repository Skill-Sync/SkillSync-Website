import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/AuthContext";
import MonitorProvider from "./context/MonitorRequestContext";
import UpdateProvider from "./context/MentorUpdate";
import MeetingProvider from "./context/RequestsSessionsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UpdateProvider>
        <ContextProvider>
          <MonitorProvider>
            <MeetingProvider>
              <App />
            </MeetingProvider>
          </MonitorProvider>
        </ContextProvider>
      </UpdateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
