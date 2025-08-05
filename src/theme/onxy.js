import { createTheme } from "@mui/material/styles";

const onyxTheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
      contrastText: "#FFFFFF",
      accent: "#FF5722",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#E0E0E0",
      dark: "#000000",
      secondary: "#B0BEC5",
      disabled: "#9E9E9E",
      warn: "#ff2222ff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Inter Placeholder", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: "210px",
      lineHeight: 1.235,
      letterSpacing: "-0.07em",
      textTransform: "Capitalize",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.334,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: 1.6,
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    card: {
      width: "100%",
      margin: "0 auto",
      border: "none",
      borderRadius: 0,
      cardContent: {
        display: "flex",
        justifyContent: "center",
        mb: 2,
        img: {
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        },
        cardIcon: {
          display: "flex",
          justifyContent: "center",
          mb: 2,
          fontSize: "large",
        },
      },
    },
  },
  sections: {
    hero: {
      width: "94vw",
      height: "65vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      padding: "50px",
      backgroundColor: "#f5f5f5",
      color: "#fff",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    features: {
      padding: "20px 0",
    },
    parallax: {
      height: "400px",
    },
    about: {
      padding: "20px 0",
    },
    portfolio: {
      padding: "20px 0",
    },
    services: {
      padding: "20px 0",
    },
    testimonials: {
      padding: "20px 0",
    },
    news: {
      padding: "20px 0",
    },
    footer: {
      padding: "20px 0",
      backgroundColor: "#212121",
      color: "#FFFFFF",
    },
  },
});

export default onyxTheme;
