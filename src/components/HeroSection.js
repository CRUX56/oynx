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
      }}
    >
      <Typography variant="h1" align="left">
        {title}
      </Typography>
      <Typography variant="h2" align="left">
        {subtitle}
      </Typography>
    </Box>
  );
}
