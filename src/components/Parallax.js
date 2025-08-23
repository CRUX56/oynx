import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Parallax({ title, content, height = "400px" }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme?.components?.parallax,
      }}
    >
      <Box
        sx={{
          ...theme?.components?.parallax?.parallaxTitle,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {title && (
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
        )}
        {content}
      </Box>
    </Box>
  );
}
