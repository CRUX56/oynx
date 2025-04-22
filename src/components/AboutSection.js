import React from "react";
import { Container, Typography } from "@mui/material";

export default function AboutSection({ title, description }) {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {title}
      </Typography>
      <Typography textAlign="center">{description}</Typography>
    </Container>
  );
}
