import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";

import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "./components/AppBar.jsx";
import React, { useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/atom/themeAtom.js";

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
  const [mode, setMode] = React.useState();

  const theme = useRecoilValue(themeState);

  useEffect(() => {
    if (theme) setMode(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <AppBar />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}
