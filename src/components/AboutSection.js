import React from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";
import content from "../content/content.json";

export default function AboutSection() {
  const theme = useTheme();
  const { title, description, image } = content.about;

  return (
    <Container
      id="about"
      sx={{
        pt: "80px",
        pb: "80px",
        ...theme?.sections?.about,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "left",
        minHeight: "unset",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%" },
          maxWidth: "1500px",
          margin: "160px auto",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "64px", lg: "128px" },
            color: theme?.palette?.background?.paper,
            lineHeight: 0.8,
            fontWeight: 700,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ mb: 4, maxWidth: "600px", width: { xs: "100%", sm: "75%" } }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: { xs: "250px", sm: "350px", md: "450px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
      </Box>
    </Container>
  );
}
