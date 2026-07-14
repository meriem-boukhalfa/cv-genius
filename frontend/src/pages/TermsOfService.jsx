import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function TermsOfService() {
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
            background:
              "linear-gradient(90deg,#2BE6C1,#60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Terms of Service
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 5,
            fontSize: 18,
          }}
        >
          Please read these terms carefully before using CV Genius.
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
            <GavelRoundedIcon sx={{ color: "#2BE6C1" }} />
            Use of the Website
          </Typography>

          <Typography sx={{ color: "#D1D5DB", lineHeight: 2 }}>
            • Create professional ATS-friendly resumes.
            <br />
            • Do not misuse or attempt to disrupt the service.
            <br />
            • You remain responsible for all information you submit.
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
            Intellectual Property
          </Typography>

          <Typography
            sx={{
              color: "#D1D5DB",
              lineHeight: 2,
            }}
          >
            All content, branding, interface, source code and design of
            CV Genius are protected by intellectual property laws.
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
            Disclaimer
          </Typography>

          <Typography
            sx={{
              color: "#D1D5DB",
              lineHeight: 2,
            }}
          >
            CV Genius is provided "as is". While we help you create
            professional resumes, we cannot guarantee interviews or
            employment opportunities.
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
            <EmailRoundedIcon sx={{ color: "#60A5FA" }} />
            Contact
          </Typography>

          <Typography
            sx={{
              color: "#D1D5DB",
            }}
          >
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