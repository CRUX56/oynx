import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const ContactFormSection = ({ title, fields, buttonText }) => {
  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {title}
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
        {fields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            variant="outlined"
            fullWidth
            multiline={field.multiline || false}
            rows={field.rows || 1}
          />
        ))}
        <Button variant="contained" color="primary" size="large">
          {buttonText}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactFormSection;
