import React, { useState } from "react";
import { Grid } from "@mui/material";
import Card from "./ui/Card";
import ReusableDialog from "./ui/ReusableDialog";

export default function FeaturesSection({ features }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Grid container spacing={0} sx={{ width: "100%" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
        client={selectedItem?.client}
        category={selectedItem?.category}
        synopsis={selectedItem?.synopsis}
        content={selectedItem?.content}
        image={selectedItem?.image}
        portfolioGallery={selectedItem?.portfolioImages}
      />
    </>
  );
}