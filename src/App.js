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
import HeroSection from "./components/HeroSection";
import content from "./content/content.json"; // Assuming you have a content.json file for the content

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BusinessName
          </Typography>
          <Button color="inherit" href="#home">
            Home
          </Button>
          <Button color="inherit" href="#features">
            Services
          </Button>
          <Button color="inherit" href="#testimonials">
            About
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}

      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        buttonText={content.hero.button.text}
        onButtonClick={() => alert("Button Clicked!")}
        backgroundImage={content.hero.backgroundImage}
      ></HeroSection>

      {/* About Section */}
      <Container id="about" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          About Us
        </Typography>
        <Typography textAlign="center" paragraph>
          We are a leading company in our industry, committed to providing the
          best services to our clients. Our team of experts is dedicated to
          ensuring your success.
        </Typography>
      </Container>

      {/* Services Section */}
      <Container id="services" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Services
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
              <Typography variant="h5" gutterBottom>
                Service One
              </Typography>
              <Typography>Description of service one.</Typography>
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
              <Typography variant="h5" gutterBottom>
                Service Two
              </Typography>
              <Typography>Description of service two.</Typography>
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
              <Typography variant="h5" gutterBottom>
                Service Three
              </Typography>
              <Typography>Description of service three.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Features
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
              <Typography variant="h5" gutterBottom>
                Feature One
              </Typography>
              <Typography>Description of feature one.</Typography>
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
              <Typography variant="h5" gutterBottom>
                Feature Two
              </Typography>
              <Typography>Description of feature two.</Typography>
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
              <Typography variant="h5" gutterBottom>
                Feature Three
              </Typography>
              <Typography>Description of feature three.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Portfolio Section */}
      <Container id="portfolio" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign={"center"} gutterBottom>
          Our Portfolio
        </Typography>
        <Typography textAlign="center" paragraph>
          Check out some of our recent projects and success stories. We take
          pride in our work and are committed to delivering the best results for
          our clients.
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
              <Typography variant="h6">Project One</Typography>
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
              <Typography variant="h6">Project Two</Typography>
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
              <Typography variant="h6">Project Three</Typography>
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
              <Typography variant="h6">Project Four</Typography>
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
              <Typography variant="h6">Project Five</Typography>
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
              <Typography variant="h6">Project Six</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}

      {/* Testimonials Section */}
      <Container id="testimonials" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Testimonials
        </Typography>
        <Typography textAlign="center">
          Hear what our clients have to say about us.
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
              <Typography variant="h6">Client One</Typography>
              <Typography>"Amazing service!"</Typography>
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
              <Typography variant="h6">Client Two</Typography>
              <Typography>"Highly recommend!"</Typography>
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
              <Typography variant="h6">Client Three</Typography>
              <Typography>"Exceptional quality!"</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <Typography variant="h6">Contact Us</Typography>
        <Typography>Email: contact@businessname.com</Typography>
        <Typography>Phone: +123 456 7890</Typography>
      </Box>
    </div>
  );
};

export default App;
