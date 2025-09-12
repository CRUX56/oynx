import React, { useState } from "react";
import content from "../content/content.json";
import {
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Card from "./ui/Card";

export default function FeaturesSection({ features }) {
  const item = content.portfolio?.items || [];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Box
      sx={{
        width: "99vw",
        display: "flex",
        justifyContent: "left",
        padding: "0",
        alignItems: "flex-start",
        margin: "0",
        flexWrap: "nowrap",
      }}
    >
      <Grid container spacing={0} sx={{ width: "100%", margin: 0, padding: 0 }}>
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            key={index}
            sx={{ padding: 0, maxWidth: "33.333%" }}
          >
            <Card
              image={feature.image}
              title={feature.name}
              content={feature.description}
              icon={feature.icon}
              sx={{ width: "100%" }}
              onClick={() => setSelectedItem(item)}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { height: "50vh", overflowY: "auto" } }}
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
        </DialogContent>
      </Dialog>
    </Box>
  );
}
