import React, { useState } from "react";
import content from "../content/content.json";
import Card from "./ui/Card";
import { Container, Box, Grid } from "@mui/material";
import ReusableDialog from "./ui/ReusableDialog";

const PortfolioSection = () => {
  const { title, description } = content.services;
  const items = content.portfolio?.items || [];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container className="portfolio-section">
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Box>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <Card
              title={item.name}
              content={item.description}
              image={item.image}
              icon={item.icon}
              onClick={() => setSelectedItem(item)}
              sx={{ cursor: "pointer", width: "48.333%" }}
            />
          </Grid>
        ))}
      </Grid>
      <ReusableDialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
        content={selectedItem?.description}
        image={selectedItem?.image}
      />
    </Container>
  );
};

export default PortfolioSection;
