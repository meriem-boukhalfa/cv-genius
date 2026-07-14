import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0F172A",
        color: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="md">

        <Button
          href="/"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{
            color: "#2BE6C1",
            mb: 4,
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          Back to CV Genius
        </Button>

        <Typography
          sx={{
            fontSize: 42,
            fontWeight: 800,
            mb: 1,
            background: "linear-gradient(90deg,#2BE6C1,#60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Privacy Policy
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 5,
            fontSize: 18,
          }}
        >
          Your privacy is important to us. This page explains how CV Genius
          collects, uses and protects your information.
        </Typography>

        <Paper
          sx={{
            p: 4,
            mb: 3,
            bgcolor: "#111827",
            borderRadius: 4,
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 22,
              fontWeight: 700,
              mb: 2,
            }}
          >
            <SecurityRoundedIcon sx={{ color: "#2BE6C1" }} />
            Information We Collect
          </Typography>

          <Typography sx={{ color: "#D1D5DB", lineHeight: 2 }}>
            • Information you enter while creating your resume.
            <br />
            • Anonymous usage statistics.
            <br />
            • Technical information such as browser type and device.
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 4,
            mb: 3,
            bgcolor: "#111827",
            borderRadius: 4,
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 22,
              fontWeight: 700,
              mb: 2,
            }}
          >
            <CookieRoundedIcon sx={{ color: "#60A5FA" }} />
            Cookies & Google AdSense
          </Typography>

          <Typography sx={{ color: "#D1D5DB", lineHeight: 2 }}>
            CV Genius may use cookies to improve your experience.
            Google AdSense may also use cookies to display relevant
            advertisements based on your browsing activity.
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 4,
            mb: 3,
            bgcolor: "#111827",
            borderRadius: 4,
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 700,
              mb: 2,
            }}
          >
            How We Use Your Information
          </Typography>

          <Typography sx={{ color: "#D1D5DB", lineHeight: 2 }}>
            • Generate your professional resume.
            <br />
            • Improve our AI-powered services.
            <br />
            • Enhance website performance and security.
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 4,
            bgcolor: "#111827",
            borderRadius: 4,
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 22,
              fontWeight: 700,
              mb: 2,
            }}
          >
            <EmailRoundedIcon sx={{ color: "#2BE6C1" }} />
            Contact
          </Typography>

          <Typography sx={{ color: "#D1D5DB" }}>
            boukhalfa2012@gmail.com
          </Typography>
        </Paper>

        <Typography
          sx={{
            mt: 5,
            textAlign: "center",
            color: "#64748B",
          }}
        >
          Last updated • July 2026
        </Typography>

      </Container>
    </Box>
  );
}