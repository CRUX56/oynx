import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const Card = ({ title, content, icon: Icon, image, onClick }) => {
  const theme = useTheme();
  return (
    <MuiCard
      sx={{
        ...theme?.components?.card,
        backgroundColor: theme?.palette?.background?.default,
      }}
    >
      <CardContent>
        {image && (
          <Box sx={{ ...theme?.components?.card?.cardContent }}>
            <img
              src={image}
              alt={title}
              style={{ ...theme?.components?.card?.cardContent?.img }}
            />
          </Box>
        )}
        {Icon && (
          <Box sx={{ ...theme?.components?.card?.cardIcon }}>
            <Icon fontSize="large" />
          </Box>
        )}
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: theme?.generalLayout?.TextAlign[0],
            color: theme?.palette?.text?.highlight,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: theme?.generalLayout?.TextAlign[0],
            color: theme?.palette?.text?.dark,
            fontWeight: theme?.typography?.fontWeightBold,
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
