import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar({ options, logo, navigation }) {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: options?.theme?.primaryColor }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a
            href={options.logo.link}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src={logo}
              alt={options.logo.alt}
              style={{
                width: options?.width,
                height: options?.height,
                marginRight: "8px",
              }}
            />
            {options.title}
          </a>
        </Typography>
        {navigation?.map((item, index) => (
          <Button
            color="inherit"
            onClick={() => {
              window.location.href = item?.link;
            }}
            key={index}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
