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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {content}
          <button>
            <AddIcon sx={{ fontSize: 20, marginLeft: 1 }} />
          </button>
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
