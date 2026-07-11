import { Box, Typography, Avatar } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Resume Builder
        </Typography>

        <Typography color="text.secondary">
          Create an ATS-friendly resume with AI.
        </Typography>
      </Box>

      <Avatar sx={{ width: 48, height: 48 }}>
        M
      </Avatar>
    </Box>
  );
}