import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </Box>
  );
}
