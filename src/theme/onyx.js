import { createTheme } from "@mui/material/styles";

const onyxTheme = createTheme({
  generalLayout: {
    TextAlign: ["center", "left", "right"],
    alignItems: ["center", "flex-start", "flex-end"],
    sectionPadding: {
      pt: 10,
      pb: 4,
      mb: 2,
    },
  },
  palette: {
    primary: {
      main: "#212121",
      contrastText: "#FFFFFF",
      accent: "#F41C07",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      default: "#f0f0f0ff",
      paper: "#1E1E1E",
    },
    text: {
      highlight: "#F41C07",
      primary: "#E0E0E0",
      dark: "#1e1e1e",
      darkGray: "#474646",
      secondary: "#B0BEC5",
      disabled: "#9E9E9E",
      warn: "#ff2222ff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Inter Placeholder", "Arial", sans-serif',
    fontWeightBold: 700,
    h1: {
      fontSize: "248px",
      fontWeight: "800",
      lineHeight: 1.235,
      letterSpacing: "-0.07em",
      textTransform: "Capitalize",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      textTransform: "lowercase",
      lineHeight: 1.334,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    h4: {
      fontWeight: 700,
      fontSize: "36px",
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
    portfolioDialog: {
      dialogHeader: {
        fontSize: "28px",
        fontWeight: "700",
        projectTitle: {
          textTransform: "lowercase",
        },
        projectDetails: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          columnGap: "10px",
          fontSize: "36px",
          fontWeight: "400",
          projectContent: {
            fontWeight: "300",
            fontSize: "24px",
            lineHeight: 1.5,
          },
        },
        projectImages: {
          borderRadius: "8px",
          maxWidth: "100%",
          height: "auto",
          marginBottom: "16px",
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
      position: "relative",
      display: "flex",
      alignItems: "right",
      justifyContent: "right",
      color: "#fff",
      p: 4,
      minHeight: "381px",
      backgroundColor: "#e10101",
      parallaxTitle: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },
    },
    fullWidth: {
      padding: "20px 20px 0",
      backgroundColor: "#e10101",
      color: "#FFFFFF",
      textAlign: "right",
      minHeight: "381px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      fullWidthTitle: {
        textTransform: "lowercase",
        fontSize: "78px",
        fontWeight: "700",
      },
    },
    about: {
      padding: "20px 0",
      heading: {
        fontSize: "128px",
        fontWeight: "bold",
        textTransform: "lowercase",
        lineHeight: 109,
      },
      content: {
        fontSize: "32px",
        fontWeight: "300",
        lineHeight: 1.5,
      },
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
      px: 12,
      pt: 10,
      pb: 4,
      mb: 2,
      backgroundColor: "#121212",
      color: "#FFFFFF",
      displayLogo: {
        fontSize: "278.41px",
        fontWeight: "600",
        textTransform: "Capitalize",
        letterSpacing: "-0.08em",
        lineHeight: "0.9em",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

export default onyxTheme;
