import React from "react";
import { Icon as MuiIcon } from "@mui/material";

const Icon = ({ name, color = "inherit", fontSize = "default" }) => {
  return (
    <MuiIcon color={color} fontSize={fontSize}>
      {name}
    </MuiIcon>
  );
};

export default Icon;
