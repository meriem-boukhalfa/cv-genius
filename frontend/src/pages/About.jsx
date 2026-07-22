import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        About CV Genius
      </Typography>

      <Typography mt={3} lineHeight={2}>
        CV Genius is an AI-powered resume builder designed to help students,
        graduates and professionals create ATS-friendly resumes in minutes.
      </Typography>

      <Typography mt={2} lineHeight={2}>
        Our mission is to simplify resume creation using modern templates,
        artificial intelligence and professional formatting.
      </Typography>
    </Container>
  );
}