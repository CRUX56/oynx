import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function FullWidth({ title, content }) {
  const theme = useTheme();

  if (content) {
    return (
      <Box sx={{ ...theme?.sections?.fullWidth }}>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{ ...theme?.sections?.fullWidth?.fullWidthTitle }}
          >
            {title}
          </Typography>
        </Box>
        <Box>{content}</Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ ...theme?.sections?.fullWidth }}>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{ ...theme?.sections?.fullWidth?.fullWidthTitle }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default FullWidth;
