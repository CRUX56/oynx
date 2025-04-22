import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <Typography variant="h6">Contact Us</Typography>
      <Typography>Email: contact@businessname.com</Typography>
      <Typography>Phone: +123 456 7890</Typography>
    </Box>
  );
}
