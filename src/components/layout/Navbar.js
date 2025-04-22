import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BusinessName
        </Typography>
        <Button color="inherit" href="#home">
          Home
        </Button>
        <Button color="inherit" href="#features">
          Services
        </Button>
        <Button color="inherit" href="#testimonials">
          About
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
