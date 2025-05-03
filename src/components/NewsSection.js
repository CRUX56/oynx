import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const NewsSection = () => {
  return (
    <Container id="news" sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Latest News
      </Typography>
      <Typography textAlign="center">
        Stay updated with our latest news and updates.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6">News One</Typography>
            <Typography>Details about news one.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6">News Two</Typography>
            <Typography>Details about news two.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              textAlign: "center",
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6">News Three</Typography>
            <Typography>Details about news three.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsSection;
