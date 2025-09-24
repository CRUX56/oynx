import React from "react";
import { Container, Typography, Grid, useTheme, Box } from "@mui/material";
import content from "../content/content.json";

export default function AboutSection() {
  const theme = useTheme();
  const { title, description, image } = content.about;

  return (
    <Container
      id="about"
      sx={{
        py: 12,
        ...theme?.sections?.about,
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </Box>
      <Grid
        container
        spacing={4}
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid item xs={12} md={3} lg={3}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
