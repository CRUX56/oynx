import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ContactFormSection from "../ContactFormSection";

export default function Footer({ logo, blurb, navigation, copyright }) {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", pt: 4 }}>
      <Grid container spacing={4} sx={{ px: 12 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <span>Onxy®</span>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          mt: 4,
          backgroundColor: "#222",
        }}
      >
        <Typography variant="body2">{copyright}</Typography>
      </Box>
    </Box>
  );
}
