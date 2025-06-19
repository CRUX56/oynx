import React from "react";
import { Box } from "@mui/material";
import Typography from "./ui/Typography";

export default function HeroSection({ title, subtitle }) {
  return (
    <Box
      sx={{
        width: "94vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: "50px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h2" align="left">
        {title}
      </Typography>
      <Typography variant="h5" align="left">
        {subtitle}
      </Typography>
    </Box>
  );
}
