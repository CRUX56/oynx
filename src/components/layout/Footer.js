import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ContactFormSection from "../ContactFormSection";

export default function Footer({ logo, blurb, navigation, copyright }) {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", pt: 4 }}>
      <Grid container spacing={4} sx={{ px: 4 }}>
        {/* Column 1: Logo and Blurb */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            {logo}
          </Typography>
          <Typography>{blurb}</Typography>
        </Grid>

        {/* Column 2: Navigation */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          {navigation.map((item, index) => (
            <Typography key={index}>
              <a
                href={item.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                {item.label}
              </a>
            </Typography>
          ))}
        </Grid>

        {/* Column 3: Contact Form */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <ContactFormSection
            title="Get in Touch"
            fields={[
              { label: "Email", multiline: false },
              { label: "Message", multiline: true, rows: 3 },
            ]}
            buttonText="Submit"
          />
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
