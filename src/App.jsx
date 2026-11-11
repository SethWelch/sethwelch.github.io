import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";

import "./App.css";
import { ThemeProvider } from "@mui/material";
import AppBar from "./components/AppBar.jsx";
import { useState } from "react";
import { ThemeContext, THEMES } from "./themes.js";

import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const [themeName, setThemeName] = useState(
    () => localStorage.getItem("theme") ?? "cosmos"
  );

  const theme = THEMES[themeName]?.muiTheme ?? THEMES.cosmos.muiTheme;

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>
        <AppBar />
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
