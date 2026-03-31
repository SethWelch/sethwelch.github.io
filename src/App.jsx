import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";

import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "./components/AppBar.jsx";
import React, { createContext, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext(null);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: "#27272A",
    color: "white",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#2b2f32",
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: "lightgoldenrodyellow",
    color: "black",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rebeccapurple",
        },
      },
    },
  },
});

export default function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('theme') ?? 'dark');

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <AppBar />
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
