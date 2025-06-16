import React from "react";
import { Box, Typography } from "@mui/material";

export default function Parallax({ image, title, children, height = "400px" }) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {title && (
          <Typography variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
}
