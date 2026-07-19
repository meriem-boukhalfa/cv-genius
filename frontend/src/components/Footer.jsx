import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 4,
        borderTop: "1px solid #ddd",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        CV Genius
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1, mb: 2 }}
      >
        Build your professional ATS resume with AI.
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
        sx={{ mb: 2 }}
      >
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy</Link>
        <Link to="/terms-of-service">Terms</Link>
      </Stack>

      <Typography variant="body2" color="text.secondary">
        © 2026 CV Genius. All rights reserved.
      </Typography>
    </Box>
  );
}