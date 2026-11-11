import { createContext } from "react";
import { createTheme } from "@mui/material";

export const FONT_SANS = "\"Inter\", system-ui, -apple-system, sans-serif";
export const FONT_MONO = "\"JetBrains Mono\", ui-monospace, SFMono-Regular, monospace";

const typography = { fontFamily: FONT_SANS };

export const ThemeContext = createContext(null);

export const THEMES = {
  cosmos: {
    label: "Cosmos",
    swatch: "#64ffda",
    muiTheme: createTheme({
      typography,
      palette: {
        mode: "dark",
        primary: { main: "#64ffda" },
        background: { default: "#0a0a14", paper: "#1a1a2e" },
        text: { primary: "#e0e0ff" },
      },
      components: {
        MuiAppBar: { styleOverrides: { root: { background: "#0d0d1f" } } },
      },
    }),
  },
  synthwave: {
    label: "Synthwave",
    swatch: "#ff2d78",
    muiTheme: createTheme({
      typography,
      palette: {
        mode: "dark",
        primary: { main: "#ff2d78" },
        background: { default: "#0f0020", paper: "#1e0040" },
        text: { primary: "#f0e6ff" },
      },
      components: {
        MuiAppBar: { styleOverrides: { root: { background: "#1a0030" } } },
      },
    }),
  },
  nord: {
    label: "Nord",
    swatch: "#88c0d0",
    muiTheme: createTheme({
      typography,
      palette: {
        mode: "dark",
        primary: { main: "#88c0d0" },
        background: { default: "#2e3440", paper: "#3b4252" },
        text: { primary: "#eceff4" },
      },
      components: {
        MuiAppBar: { styleOverrides: { root: { background: "#252a33" } } },
      },
    }),
  },
  slate: {
    label: "Slate",
    swatch: "#7c3aed",
    muiTheme: createTheme({
      typography,
      palette: {
        mode: "light",
        primary: { main: "#7c3aed" },
        background: { default: "#f1f0f7", paper: "#ffffff" },
        text: { primary: "#1a1a2e" },
      },
      components: {
        MuiAppBar: { styleOverrides: { root: { background: "#7c3aed" } } },
      },
    }),
  },
};
