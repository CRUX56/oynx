import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import content from "../content/content.json";

export default function TestimonialsSection({ testimonials }) {
  const { title, description } = content.testimonials;

  return (
    <Container className="testimonials-section">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" component="h3">
                {testimonial.client}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {testimonial.feedback}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
