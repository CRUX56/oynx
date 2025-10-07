import React from "react";
import { Box, useTheme } from "@mui/material";
import Typography from "./ui/Typography";

export default function HeroSection({ image, title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...theme.sections.hero,
        backgroundImage: `url(${image})`,
        padding: { xs: "24px", sm: "48px", md: "50px" },
        height: { xs: "auto", md: "65vh" },
        minHeight: "400px",
        textAlign: { xs: "center", md: "left" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { xs: "center", md: "flex-end" },
      }}
    >
      <Typography variant="h1">
        {title}
      </Typography>
      <Typography variant="h2">
        {subtitle}
      </Typography>
    </Box>
  );
}