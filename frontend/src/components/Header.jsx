import {
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Header({ onMenuClick }) {
  return (
    <Box
      sx={{
        mb: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: "#ffffff",
          borderRadius: "24px",
          px: 3,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 10px 35px rgba(0,0,0,.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* يظهر فقط في الهاتف */}

          <IconButton
            onClick={onMenuClick}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              width: 52,
              height: 52,

              borderRadius: "16px",

              background:
                "linear-gradient(135deg,#2BE6C1,#60A5FA)",

              color: "#fff",

              "&:hover": {
                background:
                  "linear-gradient(135deg,#60A5FA,#2BE6C1)",
              },
            }}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: 28,
                  md: 38,
                },
                fontWeight: 900,
                lineHeight: 1,

                background:
                  "linear-gradient(90deg,#2BE6C1,#60A5FA)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CV GENIUS
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                fontSize: 14,
                fontWeight: 500,
                mt: 0.3,
              }}
            >
              by Boukhalfa Meriem
            </Typography>
          </Box>
        </Box>

        <Avatar
          sx={{
            width: 56,
            height: 56,
            bgcolor: "#E5E7EB",
            color: "#111827",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          🇩🇿
        </Avatar>
      </Box>
    </Box>
  );
}