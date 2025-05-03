import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import config from "../../content/config.json";

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
            BusinessName
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
