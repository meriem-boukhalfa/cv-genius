import { Button, CircularProgress, Box, Tooltip, useTheme, useMediaQuery } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useState } from "react";

// ============================================
// GENERATE BUTTON COMPONENT
// ============================================

export default function GenerateButton({ onClick, loading = false, disabled = false }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [state, setState] = useState("idle"); // idle, loading, success, error

  // ============================================
  // HANDLERS
  // ============================================

  const handleClick = async () => {
    setState("loading");
    try {
      await onClick();
      setState("success");
      // Reset to idle after 2 seconds
      setTimeout(() => setState("idle"), 2000);
    } catch (error) {
      setState("error");
      // Reset to idle after 3 seconds
      setTimeout(() => setState("idle"), 3000);
    }
  };

  // ============================================
  // ICON LOGIC
  // ============================================

  const getIcon = () => {
    switch (state) {
      case "loading":
        return <CircularProgress size={24} sx={{ color: "inherit" }} />;
      case "success":
        return <CheckCircleIcon sx={{ fontSize: 24 }} />;
      case "error":
        return <ErrorIcon sx={{ fontSize: 24 }} />;
      default:
        return <AutoAwesomeIcon sx={{ fontSize: 24 }} />;
    }
  };

  // ============================================
  // TEXT LOGIC
  // ============================================

  const getText = () => {
    switch (state) {
      case "loading":
        return "Generating...";
      case "success":
        return "Resume Generated!";
      case "error":
        return "Generation Failed";
      default:
        return "✨ Generate ATS Resume";
    }
  };

  // ============================================
  // COLOR LOGIC
  // ============================================

  const getColor = () => {
    switch (state) {
      case "success":
        return "linear-gradient(135deg, #10b981 0%, #059669 100%)";
      case "error":
        return "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      default:
        return "linear-gradient(135deg, #60A5FA 0%, #2BE6C1 100%)";
    }
  };

  const getHoverColor = () => {
    switch (state) {
      case "success":
        return "linear-gradient(135deg, #059669 0%, #047857 100%)";
      case "error":
        return "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)";
      default:
        return "linear-gradient(135deg, #3B82F6 0%, #14B8A6 100%)";
    }
  };

  const getBoxShadow = () => {
    switch (state) {
      case "success":
        return "0 15px 35px rgba(16, 185, 129, 0.35)";
      case "error":
        return "0 15px 35px rgba(239, 68, 68, 0.35)";
      default:
        return "0 15px 35px rgba(96, 165, 250, 0.35)";
    }
  };

  const getHoverBoxShadow = () => {
    switch (state) {
      case "success":
        return "0 20px 45px rgba(16, 185, 129, 0.45)";
      case "error":
        return "0 20px 45px rgba(239, 68, 68, 0.45)";
      default:
        return "0 20px 45px rgba(96, 165, 250, 0.45)";
    }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <Tooltip
      title={
        disabled
          ? "Please fill in all required fields"
          : state === "loading"
            ? "Generating your optimized resume..."
            : state === "success"
              ? "Your resume has been generated successfully!"
              : state === "error"
                ? "There was an error. Please try again."
                : "Click to generate your ATS-optimized resume"
      }
      arrow
      placement="top"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",

            // ============================================
            // PULSE ANIMATION (Idle State Only)
            // ============================================
            ...(state === "idle" && {
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "18px",
                padding: "2px",
                background: "linear-gradient(135deg, #60A5FA 0%, #2BE6C1 100%)",
                WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                opacity: 0.6,
                animation: "pulse-border 2s ease-in-out infinite",
                "@keyframes pulse-border": {
                  "0%, 100%": {
                    opacity: 0.6,
                    transform: "scale(1)",
                  },
                  "50%": {
                    opacity: 0.3,
                    transform: "scale(1.02)",
                  },
                },
              },
            }),
          }}
        >
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            startIcon={getIcon()}
            onClick={handleClick}
            disabled={disabled || state === "loading" || state === "success" || state === "error"}
            sx={{
              mt: 0,
              py: { xs: 1.2, md: 1.6 },
              px: { xs: 3, md: 6 },
              borderRadius: "18px",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 800,
              textTransform: "none",
              background: getColor(),
              boxShadow: getBoxShadow(),
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              position: "relative",
              zIndex: 1,

              // ============================================
              // HOVER STATE
              // ============================================
              "&:hover:not(:disabled)": {
                transform: "translateY(-3px)",
                boxShadow: getHoverBoxShadow(),
                background: getHoverColor(),
              },

              // ============================================
              // ACTIVE STATE
              // ============================================
              "&:active:not(:disabled)": {
                transform: "translateY(-1px)",
              },

              // ============================================
              // DISABLED STATE
              // ============================================
              "&:disabled": {
                opacity: 0.6,
                cursor: "not-allowed",
              },

              // ============================================
              // LOADING STATE
              // ============================================
              ...(state === "loading" && {
                pointerEvents: "none",
              }),

              // ============================================
              // SUCCESS STATE
              // ============================================
              ...(state === "success" && {
                pointerEvents: "none",
                animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
              }),

              // ============================================
              // ERROR STATE
              // ============================================
              ...(state === "error" && {
                pointerEvents: "none",
                animation: "shake 0.5s ease-in-out forwards",
              }),

              "@keyframes scaleIn": {
                from: {
                  transform: "scale(0.95)",
                  opacity: 0,
                },
                to: {
                  transform: "scale(1)",
                  opacity: 1,
                },
              },

              "@keyframes shake": {
                "0%, 100%": { transform: "translateX(0)" },
                "25%": { transform: "translateX(-5px)" },
                "75%": { transform: "translateX(5px)" },
              },
            }}
          >
            {getText()}
          </Button>

          {/* ============================================
              SUCCESS/ERROR INDICATOR
              ============================================ */}
          {state === "success" && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "18px",
                background: "rgba(16, 185, 129, 0.1)",
                border: "2px solid #10b981",
                animation: "fadeOut 2s ease-in-out forwards",
                pointerEvents: "none",
                "@keyframes fadeOut": {
                  from: { opacity: 1 },
                  to: { opacity: 0 },
                },
              }}
            />
          )}

          {state === "error" && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "18px",
                background: "rgba(239, 68, 68, 0.1)",
                border: "2px solid #ef4444",
                animation: "fadeOut 3s ease-in-out forwards",
                pointerEvents: "none",
                "@keyframes fadeOut": {
                  from: { opacity: 1 },
                  to: { opacity: 0 },
                },
              }}
            />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
}