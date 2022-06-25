import React from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      //pink
      main: "#c84869",
      light: "#f5a6bd",
    },
    secondary: {
      //grey
      main: "#333",
      light: "#666",
    },
  },
  typography: {
    fontFamily: ["monterrat", "sans-serif"],
    h4: {
      //blog detail page title
      fontWeight: "900",
    },
    smallGrey: {
      fontSize: "0.9em",
      color: "#666",
    },
    outlined: {
      borderRadius: 0,
    },
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
