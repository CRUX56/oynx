import React from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Card = ({ title, content, icon: Icon, image, onClick }) => {
  const theme = useTheme();
  // No changes needed here; the openPortfolioPopup function already calls onClick,
  // which is passed from PortfolioSection.js and sets the selected item.
  const openPortfolioPopup = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <MuiCard
      sx={{
        ...theme?.components?.card,
        backgroundColor: theme?.palette?.background?.default,
      }}
      onClick={onClick}
      tabIndex={0}
      role="button"
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {content}

          <AddIcon sx={{ fontSize: 20, marginLeft: 1 }} />
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
