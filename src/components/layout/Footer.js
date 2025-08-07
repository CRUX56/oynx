import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function Footer({ logo, blurb, navigation, copyright }) {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "white", pt: 4 }}>
      <Grid container spacing={4} sx={{ px: 12 }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <span
              style={{
                fontSize: "260.41px",
                fontWeight: "600",
                textTransform: "Capitalize",
                letterSpacing: "-0.08em",
                lineHeight: "0.9em",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {logo}
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="body1">{blurb}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="h6">Quick Links</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          mt: 4,
          backgroundColor: "#121212",
        }}
      >
        <Typography variant="body2">{copyright}</Typography>
      </Box>
    </Box>
  );
}
