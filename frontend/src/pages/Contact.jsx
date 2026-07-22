import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>

      <Typography color="text.secondary" mb={4}>
        We'd love to hear from you.
      </Typography>

      <Stack spacing={3}>
        <TextField label="Name" fullWidth />

        <TextField label="Email" fullWidth />

        <TextField
          label="Message"
          multiline
          rows={6}
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            py: 1.5,
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Container>
  );
}