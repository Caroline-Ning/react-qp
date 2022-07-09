import React from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

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
    fontFamily: ["monterrat"],
    h4: {
      //blog detail page title
      fontWeight: "900",
    },
    smallGrey: {
      // display author and date
      fontSize: "0.9em",
      color: "#666",
    },
    blogbg: {
      margin: 0,
      background: `url(images/bg.jpeg) no-repeat center center fixed`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    gridbg: {
      width: "90%",
      padding: "5% 10%",
      backgroundColor: "rgba(255,255,255,0.6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      fontSize: "3.5em",
      fontWeight: "600",
      color: "#fff",
      fontFamily: ["Poppins"],
      letterSpacing: "1px",
      marginTop: "120px",
      marginBottom: "80px",
    },
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
