import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import Card from "./ui/Card"; // Import the reusable Card component

export default function ServicesSection({ title, description, services }) {
  return (
    <Container id="services" sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="left">
        <Grid item xs={12} sm={8} md={6} size={4}>
          <Typography variant="h3" component="h3" textAlign="left" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} size={8}>
          <Typography variant="body1" textAlign="left" gutterBottom>
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card title={service.title} content={service.content} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
