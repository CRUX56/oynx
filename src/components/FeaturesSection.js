import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Card from "./ui/Card";

export default function FeaturesSection({ features }) {
  return (
    <Box
      sx={{
        width: "94vw",
        display: "flex",
        justifyContent: "left",
        padding: "0",
        alignItems: "flex-start",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={0} sx={{ width: "100%", margin: 0 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index} sx={{ padding: 0 }}>
            <Card
              title={feature.name}
              content={feature.description}
              icon={feature.icon}
              sx={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

    /*
    <Container
      id="features"
      sx={{
        py: 8,
        px: 0,
        padding: 0,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Grid container spacing={0} sx={{ width: "100%", margin: 0 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index} sx={{ padding: 0 }}>
            <Card
              title={feature.name}
              content={feature.description}
              icon={feature.icon}
              sx={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
      
    </Container>
    */
  );
}
