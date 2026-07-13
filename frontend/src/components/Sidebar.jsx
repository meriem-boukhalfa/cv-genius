import {
  Box,
  Typography,
  Divider,
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


        {/* Title */}

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
            🤖 AI
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



        {/* ================= FOLLOW ================= */}

        <Box
          sx={{
            mt: 2,
            textAlign: "center",
          }}
        >

          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 800,
              color: "#2BE6C1",
            }}
          >
            Follow Me 🔗
          </Typography>


          <Typography
            sx={{
              mt: 1,
              color: "#D1D5DB",
              fontSize: 13.5,
            }}
          >
            GitHub • LinkedIn • Email
          </Typography>

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
            borderColor:
              "rgba(255,255,255,.12)",
            mb: 2,
          }}
        />


        <Typography
          textAlign="center"
          sx={{
            color: "#BFC7D5",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          © Boukhalfa Meriem 2026
        </Typography>

      </Box>


    </Box>
  );
}