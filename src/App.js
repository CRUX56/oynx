import React from "react";
import "./index.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Container,
  TextField,
} from "@mui/material";
import Navbar from "./components/layout/Navbar"; // Assuming you have a Navbar component
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import content from "./content/content.json"; // Assuming you have a content.json file for the content
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import PortfolioSection from "./components/PortfolioSection"; // Assuming you have a PortfolioSection component
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        buttonText={content.hero.button.text}
        onButtonClick={() => alert("Button Clicked!")}
        backgroundImage={content.hero.backgroundImage}
      ></HeroSection>

      {/* About Section */}
      <AboutSection
        title={content.about.title}
        description={content.about.description}
      ></AboutSection>

      {/* Services Section */}
      <ServicesSection
        title={content.services.title}
        description={content.services.description}
        services={content.services.items}
      ></ServicesSection>

      <FeaturesSection
        title={content.features.title}
        description={content.features.description}
        features={content.features.items}
      ></FeaturesSection>

      <PortfolioSection
        title={content.portfolio.title}
        description={content.portfolio.description}
        items={content.portfolio.items}
      ></PortfolioSection>

      {/* Testimonials Section */}

      {/* Testimonials Section */}
      <TestimonialsSection
        title={content.testimonials.title}
        description={content.testimonials.description}
        testimonials={content.testimonials.reviews}
      ></TestimonialsSection>

      {/* Latest News Section */}
      <Container id="news" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Latest News
        </Typography>
        <Typography textAlign="center">
          Stay updated with our latest news and updates.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">News One</Typography>
              <Typography>Details about news one.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">News Two</Typography>
              <Typography>Details about news two.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6">News Three</Typography>
              <Typography>Details about news three.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Container id="contact" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary" size="large">
            Submit
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
