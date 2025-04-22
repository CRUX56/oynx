import React from "react";
import content from "../content/content.json";
import { Container, Box, Grid } from "@mui/material";

const PortfolioSection = ({ items }) => {
  const { title, description } = content.services;

  return (
    <Container className="portfolio-section">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Box>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              className="portfolio-item"
              sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2 }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioSection;
