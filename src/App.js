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
} from "@mui/material";

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

      <Box
        sx={{
          textAlign: "center",
          py: 8,
          backgroundColor: "#f4f4f4",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to BusinessName
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Your Success starts here. Build your future today
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

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
