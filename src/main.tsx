import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "./utils/customThem.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </Provider>
);
