import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import Card from "./ui/Card";
import ReusableDialog from "./ui/ReusableDialog";

export default function FeaturesSection({ features }) {
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
              onClick={() => setSelectedItem(feature)}
            />
          </Grid>
        ))}
      </Grid>
      <ReusableDialog
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
        content={selectedItem?.content}
        image={selectedItem?.image}
      />
    </Box>
  );
}
