import { Box, Typography, Container } from "@mui/material";

export default function TermsOfService() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Terms of Service
        </Typography>

        <Typography sx={{ mt: 3, lineHeight: 2 }}>
          Welcome to CV Genius. By accessing or using this website, you agree to
          comply with these Terms of Service.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Use of the Website
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          • You may use this website to create professional resumes.
          <br />
          • You agree not to misuse or disrupt the service.
          <br />
          • You are responsible for the information you submit.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Intellectual Property
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          All website content, design, and source code remain the property of
          CV Genius unless otherwise stated.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Disclaimer
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          CV Genius is provided "as is" without warranties of any kind. We do
          not guarantee employment or interview opportunities.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Contact
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          Email: boukhalfa2012@gmail.com
        </Typography>

        <Typography sx={{ mt: 5, color: "gray" }}>
          Last updated: July 2026
        </Typography>
      </Box>
    </Container>
  );
}