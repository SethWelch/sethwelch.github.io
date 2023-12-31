import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

function Title({ children }) {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "fit-content" }}>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 500,
            fontFamily: "permanent marker",
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          {children}
        </Typography>
        <Box sx={{ width: "100%", height: 5, background: "blueviolet" }} />
      </Box>
    </Box>
  );
}

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: "",
};

export default Title;
