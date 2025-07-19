import React from "react";
import { Box } from "@mui/material";
import Typography from "./ui/Typography";

export default function HeroSection({ image, title, subtitle }) {
  return (
    <Box
      sx={{
        width: "94vw",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: "50px",
        backgroundColor: "#f5f5f5",
        color: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
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
