import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import Card from "./ui/Card"; // Assuming you have a reusable Card component

export default function FeaturesSection({ title, description, features }) {
  return (
    <Container id="features" sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={12} md={12} size={12}>
          <Typography variant="h4" textAlign="center" gutterBottom>
            {title}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body1" textAlign="center" gutterBottom>
        {description}
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" gutterBottom>
                {feature.name}
              </Typography>
              <Typography>{feature.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
