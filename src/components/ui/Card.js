import React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";

const Card = ({ title, content, icon: Icon, image }) => {
  return (
    <MuiCard
      sx={{ width: "100%", margin: "0 auto", border: "none", borderRadius: 0 }}
    >
      <CardContent>
        {image && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        )}
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
