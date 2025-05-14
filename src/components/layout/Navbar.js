import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import config from "../../content/config.json";
import logo from "../../assets/images/onyx-logo-white.png"; // Adjust the path as necessary

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: config.theme.primaryColor }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a
            href={config.logo.link}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src={logo}
              alt={config.logo.alt}
              style={{ height: "40px", marginRight: "8px" }}
            />
            {config.title}
          </a>
        </Typography>
        {config.navigation.map((item, index) => (
          <Button color="inherit" href={item.link} key={index}>
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
