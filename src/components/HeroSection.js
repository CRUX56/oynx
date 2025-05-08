import React from "react";
import { Box } from "@mui/material";
import Typography from "./ui/Typography";
import Button from "./ui/Button";

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
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Typography variant="h5" align="center">
        {subtitle}
      </Typography>
      <Button
        text={buttonText}
        onClick={onButtonClick}
        variant="contained"
        color="primary"
      />
    </Box>
  );
}
