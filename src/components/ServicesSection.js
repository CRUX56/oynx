import React from "react";
import { Container, Typography } from "@mui/material";
import Accordion from "./ui/Accordion";

export default function ServicesSection({ title, description, services }) {
  return (
    <Container id="services" sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        {description}
      </Typography>
      <Accordion items={services} />
    </Container>
  );
}
