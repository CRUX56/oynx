import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const Card = ({ title, content, icon: Icon, image }) => {
  const theme = useTheme();
  return (
    <MuiCard sx={{ ...theme.components.card }}>
      <CardContent>
        {image && (
          <Box sx={{ ...theme.components.card.cardContent }}>
            <img
              src={image}
              alt={title}
              style={{ ...theme.components.card.cardContent.img }}
            />
          </Box>
        )}
        {Icon && (
          <Box sx={{ ...theme.components.card.cardIcon }}>
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
