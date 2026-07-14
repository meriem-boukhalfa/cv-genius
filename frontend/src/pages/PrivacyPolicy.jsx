import { Box, Typography, Container } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Privacy Policy
        </Typography>

        <Typography sx={{ mt: 3, lineHeight: 2 }}>
          At CV Genius, we value your privacy. This Privacy Policy explains how
          we collect, use, and protect your information when you use our
          website.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Information We Collect
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          • Information you provide when creating your resume.
          <br />
          • Basic usage data to improve our services.
          <br />
          • Cookies and analytics data.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          How We Use Your Information
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          • Generate your resume.
          <br />
          • Improve website performance.
          <br />
          • Respond to your requests.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Google AdSense
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>
          This website may display advertisements provided by Google AdSense.
          Google may use cookies to serve personalized ads based on your visits
          to this and other websites.
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