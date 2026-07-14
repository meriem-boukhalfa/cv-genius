import {
  Box,
  Typography,
  Divider,
  Link,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        overflowY: "auto",
        bgcolor: "#111827",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        px: 4,
        py: 4,
        boxShadow: "8px 0 25px rgba(0,0,0,.15)",
      }}
    >

      {/* ================= CONTENT ================= */}

      <Box>

        {/* Logo */}

        <Typography
          sx={{
            fontSize: 38,
            fontWeight: 800,
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          Boukhalfa
          <br />
          Meriem
        </Typography>


        {/* App Name */}

        <Typography
          sx={{
            mt: 1,
            mb: 4,
            textAlign: "center",
            fontSize: 32,
            fontWeight: 800,
            background:
              "linear-gradient(90deg,#2BE6C1,#60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CV Genius ✨
        </Typography>



        {/* ================= SPONSORED ================= */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: 12,
            mb: 1,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          SPONSORED
        </Typography>


        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 4,
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            overflow: "hidden",
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



        {/* ================= ABOUT ================= */}

        <Box
          sx={{
            mt: 3,
            p: 2.5,
            borderRadius: 4,
            background:
              "linear-gradient(145deg, rgba(43,230,193,0.12), rgba(96,165,250,0.08))",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: 800,
              mb: 1.5,
              color: "#2BE6C1",
            }}
          >
            About CV Genius ✨
          </Typography>


          <Typography
            sx={{
              color: "#D1D5DB",
              fontSize: 13.5,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Created with passion to help students,
            <br />
            graduates, and job seekers build
            <br />
            professional ATS-friendly resumes
            <br />
            using Artificial Intelligence.
          </Typography>

        </Box>



        {/* ================= TECHNOLOGIES ================= */}

        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 800,
              mb: 1,
              color: "#2BE6C1",
            }}
          >
            Technologies Used 🛠️
          </Typography>


          <Typography
            sx={{
              textAlign: "center",
              color: "#D1D5DB",
              fontSize: 13.5,
              lineHeight: 2,
            }}
          >
            ⚛️ React
            <br />
            ⚡ FastAPI
            <br />
            🤖 Artificial Intelligence
            <br />
            📄 LaTeX
          </Typography>

        </Box>



        {/* ================= LANGUAGES ================= */}

        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: 800,
              mb: 1,
              color: "#60A5FA",
            }}
          >
            Languages 🌍
          </Typography>


          <Typography
            sx={{
              textAlign: "center",
              color: "#D1D5DB",
              fontSize: 13.5,
              lineHeight: 2,
            }}
          >
            🇬🇧 English
            <br />
            🇫🇷 Français
            <br />
            🇩🇿 العربية
          </Typography>

        </Box>



        {/* ================= FOLLOW ME ================= */}

        <Box
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >

          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 800,
              color: "#2BE6C1",
              mb: 1,
            }}
          >
            Follow Me 🔗
          </Typography>


          <Link
            href="https://github.com/meriem-boukhalfa"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: "block",
              color: "#D1D5DB",
              fontSize: 13.5,
              mb: 0.5,
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            🐙 GitHub
          </Link>


          <Link
            href="https://www.linkedin.com/in/meriem-boukhalfa-681832251/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              display: "block",
              color: "#D1D5DB",
              fontSize: 13.5,
              mb: 0.5,
              "&:hover": {
                color: "#60A5FA",
              },
            }}
          >
            💼 LinkedIn
          </Link>


          <Link
            href="mailto:boukhalfa2012@gmail.com"
            underline="none"
            sx={{
              display: "block",
              color: "#D1D5DB",
              fontSize: 13.5,
              "&:hover": {
                color: "#2BE6C1",
              },
            }}
          >
            ✉️ Email
          </Link>


        </Box>


      </Box>



            {/* ================= FOOTER ================= */}

      <Box
        sx={{
          mt: 4,
        }}
      >
        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.12)",
            mb: 2,
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Link
            href="/privacy-policy"
            underline="hover"
            sx={{
              color: "#9CA3AF",
              fontSize: 12,
              "&:hover": {
                color: "#2BE6C1",
              },
            }}
          >
            Privacy Policy
          </Link>

          <Typography
            sx={{
              color: "#4B5563",
              fontSize: 12,
            }}
          >
            •
          </Typography>

          <Link
            href="/terms-of-service"
            underline="hover"
            sx={{
              color: "#9CA3AF",
              fontSize: 12,
              "&:hover": {
                color: "#2BE6C1",
              },
            }}
          >
            Terms of Service
          </Link>
        </Box>

        <Typography
  sx={{
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(90deg, #FFFFFF, #FF69B4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transform: "scale(1.05)",
    },
  }}
>
  © Boukhalfa Meriem 2026
</Typography>
      </Box>
    </Box>
  );
}