import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReusableDialog = ({ open, onClose, title, content, image }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          height: "100vh",
          overflowY: "auto",
          margin: 0,
          backgroundColor: "#fff",
          justifyContent: "flex-end",
        },
      }}
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {/* Map through images that are passed via props here */}
        {image && !Array.isArray(image) && (
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: "100%",
              height: "auto",
              marginBottom: "16px",
            }}
          />
        )}

        {Array.isArray(image) &&
          image.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt || title}
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "16px",
              }}
            />
          ))}
        <p>{content}</p>
        {/* Add More Conent here as needed */}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
