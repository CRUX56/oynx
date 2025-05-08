import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@mui/material";

const Card = ({ title, content }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
