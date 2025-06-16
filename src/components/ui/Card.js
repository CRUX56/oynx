import React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";

const Card = ({ title, content, icon: Icon }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardContent>
        {Icon && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Icon fontSize="large" />
          </Box>
        )}
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
