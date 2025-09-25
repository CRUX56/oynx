import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";

export default function Footer({ logo, blurb, email, navigation, copyright }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme?.sections?.footer?.backgroundColor,
        color: theme?.sections?.footer?.color,
        pt: theme?.sections?.footer?.pt,
        pb: theme?.sections?.footer?.pb,
      }}
    >
      <Grid container spacing={4} sx={{ px: theme?.sections?.footer?.px }}>
        <Grid item xs={12}>
          <Box
            sx={{
              ...theme?.generalLayout?.TextAlign[0],
              mb: theme?.sections?.footer?.mb,
            }}
          >
            <span
              style={{
                ...theme?.sections?.footer?.displayLogo,
              }}
            >
              {logo}
            </span>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: theme?.generalLayout?.TextAlign[0],
              mb: theme?.sections?.footer?.mb,
            }}
          >
            <Typography variant="h2">{blurb}</Typography>
          </Box>
          <Box sx={{ textAlign: "left", mb: 2 }}>
            <Typography variant="h3">{email}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ alignItems: theme?.generalLayout?.alignItems[2] }}
        >
          <Box
            sx={{
              textAlign: theme?.generalLayout?.TextAlign[2],
              mb: theme?.sections?.footer?.mb,
            }}
          >
            <Typography variant="h3">Quick Links</Typography>
          </Box>
          <Box sx={{ textAlign: "left", mb: 2 }}>
            {Array.isArray(navigation)
              ? navigation.map((item, idx) => (
                  <Typography
                    key={idx}
                    variant="h4"
                    component="a"
                    href={item.link}
                    sx={{
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      mb: 1,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))
              : navigation}
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: theme?.generalLayout?.TextAlign[0],
          py: 2,
          mt: 4,
          backgroundColor: theme?.sections?.footer?.backgroundColor,
        }}
      >
        <Typography variant="body2">{copyright}</Typography>
      </Box>
    </Box>
  );
}
