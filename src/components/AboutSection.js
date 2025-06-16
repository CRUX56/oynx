import React from "react";
import { Container, Typography, Grid } from "@mui/material";

export default function AboutSection({ title, description }) {
  return (
    <Container id="about" sx={{ py: 12 }}>
      <Grid
        container
        spacing={4}
        alignItems="left"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={3} lg={3} size={3}>
          <Typography variant="h2" component="h2" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={8} size={8}>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
