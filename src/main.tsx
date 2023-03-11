import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppProvider from "./hooks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
