// @ts-check
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import "./App.css";
import { GlobalProvider } from "./core/context";
import Dashboard from "./pages/Dashboard";

const globalTheme = createTheme({});

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2c78d4",
      dark: "#005a9e",
      contrastText: "#fff",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: globalTheme.spacing(2),
        color: globalTheme.palette.text.secondary,
      },
    },
  },
});

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Dashboard />
        </div>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
