import React, { useState } from "react";
import content from "../content/content.json";
import Card from "./ui/Card";
import {
  Container,
  Box,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            height: "100vh",
            overflowY: "auto",
            margin: 0,
            backgroundColor: "#ffff",
            justifyContent: "flex-end",
          },
        }}
      >
        <DialogTitle>
          {selectedItem?.name}
          <IconButton
            aria-label="close"
            onClick={() => setSelectedItem(null)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedItem?.image && (
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{ width: "100%", marginBottom: 16 }}
            />
          )}
          <p>{selectedItem?.description}</p>
          {/* Add more images/content here if needed */}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default PortfolioSection;
