import {
  Box,
  Typography,
  Divider,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: 340,
        },
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
        background: "linear-gradient(180deg, #0F172A 0%, #111827 100%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: {
          xs: 3,
          md: 4,
        },
        py: {
          xs: 4,
          md: 5,
        },
        boxShadow: "8px 0 30px rgba(0,0,0,.18)",
      }}
    >
      {/* ================= TOP ================= */}

      <Box>
        {/* Name */}

        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: {
              xs: 30,
              md: 38,
            },
            lineHeight: 1.2,
          }}
        >
          Boukhalfa
          <br />
          Meriem
        </Typography>

        {/* Logo */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 2,
          }}
        >
          <AutoAwesomeIcon
            sx={{
              color: "#2BE6C1",
              fontSize: {
                xs: 26,
                md: 30,
              },
            }}
          />

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: 24,
                md: 30,
              },
              background:
                "linear-gradient(90deg,#2BE6C1,#60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CV Genius
          </Typography>
        </Box>

        {/* Subtitle */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#2BE6C1",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            mt: 1,
            mb: 4,
          }}
        >
          AI RESUME BUILDER
        </Typography>

        {/* ADS */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#94A3B8",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            mb: 2,
          }}
        >
          SPONSORED
        </Typography>

        <Box
          sx={{
            height: {
              xs: 250,
              md: 340,
            },
            bgcolor: "#fff",
            borderRadius: 4,
            border: "1px solid #E5E7EB",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            transition: ".3s",

            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 30px rgba(0,0,0,.15)",
            },
          }}
        >
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </Box>

        {/* Description */}

        <Typography
          sx={{
            mt: 4,
            color: "#CBD5E1",
            textAlign: "center",
            fontSize: {
              xs: 14,
              md: 15,
            },
            lineHeight: 1.8,
          }}
        >
          Build professional ATS-friendly resumes with AI.
          <br />
          Create modern CVs in minutes and increase
          <br />
          your chances of getting hired.
        </Typography>

        {/* Arabic Message */}

        <Typography
          sx={{
            mt: 3,
            textAlign: "center",
            color: "#E2E8F0",
            fontSize: {
              xs: 13,
              md: 14,
            },
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          هذا الموقع أُنشئ لمساعدتكم،
          <br />
          فلا تنسونا من صالح دعائكم 🤍
        </Typography>
      </Box>

    {/* ================= FOOTER ================= */}

      <Box>
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.08)",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            textAlign: "center",
            color: "#64748B",
            fontSize: 12,
          }}
        >
          © 2026 Boukhalfa Meriem
        </Typography>
      </Box>
    </Box>
  );
}