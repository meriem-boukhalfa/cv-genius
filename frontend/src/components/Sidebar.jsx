import {
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 320,
        minHeight: "100vh",
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

      {/* ================= TOP ================= */}

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



        {/* ================= ADS ================= */}

        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 4,
            overflow: "hidden",
            height: 340,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >

          {/* Google Adsense */}

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
              background:
                "linear-gradient(90deg,#2BE6C1,#60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About CV Genius ✨
          </Typography>


          <Typography
            sx={{
              color: "#D1D5DB",
              fontSize: 13.5,
              lineHeight: 1.9,
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
            <br />
            <br />
            My goal is to make career opportunities
            <br />
            more accessible for everyone 🤍
          </Typography>

        </Box>



        {/* Description */}

        <Typography
          sx={{
            mt: 3,
            color: "#D1D5DB",
            fontSize: 14,
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          This website was created with ❤️
          <br />
          to help you build your future.
          <br />
          Don't forget us in your prayers 🤍
        </Typography>



        {/* Premium Button */}

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.4,
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 16,
            bgcolor: "#2BE6C1",
            color: "#111827",
            "&:hover": {
              bgcolor: "#25d4b3",
            },
          }}
        >
          Upgrade to Premium
        </Button>


      </Box>



      {/* ================= FOOTER ================= */}


      <Box>

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
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          © Boukhalfa Meriem 2026
        </Typography>


      </Box>


    </Box>
  );
}