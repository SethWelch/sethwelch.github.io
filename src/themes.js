import { createTheme } from "@mui/material";

export const FONT_SANS = "\"Inter\", system-ui, -apple-system, sans-serif";
export const FONT_MONO = "\"JetBrains Mono\", ui-monospace, SFMono-Regular, monospace";

export const theme = createTheme({
  typography: { fontFamily: FONT_SANS },
  palette: {
    mode: "dark",
    primary: { main: "#5fd3e4" },
    background: { default: "#0a0d12", paper: "#10151c" },
    text: { primary: "#e8edf2", secondary: "#8b98a6" },
    divider: "rgba(232, 237, 242, 0.1)",
  },
});
