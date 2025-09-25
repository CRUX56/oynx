import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogContentText,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ReusableDialog = ({
  open,
  onClose,
  title,
  client,
  category,
  synopsis,
  content,
  image,
  portfolioGallery,
}) => {
  const theme = useTheme();

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
          backgroundColor: theme?.palette?.background?.default,
          justifyContent: theme?.generalLayout?.alignItems[2],
        },
      }}
    >
      <DialogTitle
        sx={{
          ...theme?.components?.portfolioDialog?.dialogHeader,
        }}
      >
        <span
          style={{
            color: theme?.palette?.text?.darkGray,
            textTransform:
              theme?.components?.portfolioDialog?.dialogHeader?.projectTitle
                ?.textTransform,
          }}
        >
          Project Title:{" "}
        </span>
        <span style={{ color: theme?.palette?.primary?.accent }}>{title}</span>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div
            className="project-details"
            style={{ ...theme?.components?.portfolioDialog?.projectDetails }}
          >
            <h4 style={{ color: theme?.palette?.text?.darkGray }}>client:</h4>{" "}
            <span style={{ color: theme?.palette?.primary?.accent }}>
              {client}
            </span>
            <h4 style={{ color: theme?.palette?.text?.darkGray }}>category:</h4>{" "}
            <span style={{ color: theme?.palette?.primary?.accent }}>
              {Array.isArray(category) ? category.join(", ") : category}
            </span>
          </div>
          <div className="project-synopsis">
            <h4 style={{ color: theme?.palette?.text?.darkGray }}>synopsis:</h4>{" "}
            <p style={{ color: theme?.palette?.text?.dark }}>{synopsis}</p>
          </div>
        </DialogContentText>
        {/* Show main image if present */}
        {image && (
          <img
            src={typeof image === "string" ? image : image.src}
            alt={title}
            style={{
              maxWidth: "100%",
              height: "auto",
              marginBottom: "16px",
            }}
          />
        )}
        {/* Show related images from portfolioGallery, skipping the main image if duplicated */}
        {Array.isArray(portfolioGallery) &&
          portfolioGallery
            .filter(
              (img) =>
                (typeof image === "string" && img.src !== image) ||
                (typeof image === "object" && img.src !== image.src)
            )
            .map((img, index) => (
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
        {/* Add More Content here as needed */}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
