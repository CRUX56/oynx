import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant = "body1", children, align = "inherit" }) => {
  return (
    <MuiTypography variant={variant} align={align}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
