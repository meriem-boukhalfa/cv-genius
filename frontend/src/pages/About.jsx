import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupIcon from "@mui/icons-material/Group";

export default function About() {
  const features = [
    {
      icon: <AutoAwesomeIcon  sx={{ fontSize: 40 }} />,
      title: "AI-Powered",
      description:
        "Advanced AI technology helps you create professional resumes in minutes, not hours.",
      color: "#2BE6C1",
    },
    {
      icon: <AutoAwesomeIcon  sx={{ fontSize: 40 }} />,
      title: "ATS-Friendly",
      description:
        "Our templates are designed to pass Applicant Tracking Systems with 100% accuracy.",
      color: "#60A5FA",
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: "Smart Suggestions",
      description:
        "Get real-time suggestions to improve your resume content and make it stand out.",
      color: "#F97316",
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40 }} />,
      title: "Lightning Fast",
      description:
        "Create and download your resume in seconds. No complicated processes.",
      color: "#8B5CF6",
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40 }} />,
      title: "Professional Templates",
      description:
        "Choose from beautifully designed templates trusted by thousands of professionals.",
      color: "#EC4899",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: "Expert Community",
      description:
        "Join thousands of users who have successfully landed their dream jobs.",
      color: "#10B981",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      color: "#2BE6C1",
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      color: "#60A5FA",
    },
    {
      name: "Emily Rodriguez",
      role: "AI Specialist",
      color: "#F97316",
    },
    {
      name: "David Park",
      role: "Head of Product",
      color: "#8B5CF6",
    },
  ];

  return (
    <Box sx={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* ============== HERO SECTION ============== */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2BE6C1 0%, #60A5FA 100%)",
          py: { xs: 8, sm: 12 },
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontWeight="800"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            About CV Genius
          </Typography>

          <Typography
            variant="h6"
            fontWeight="400"
            sx={{
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Empowering professionals to land their dream jobs with AI-powered resume building
          </Typography>
        </Container>
      </Box>

      {/* ============== MISSION SECTION ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 120, color: "white", opacity: 0.3 }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{ mb: 3, color: "#1a1a1a" }}
            >
              Our Mission
            </Typography>

            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2, fontSize: "1.1rem" }}>
              CV Genius is an AI-powered resume builder designed to help students,
              graduates and professionals create ATS-friendly resumes in minutes.
            </Typography>

            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 3, fontSize: "1.1rem" }}>
              Our mission is to simplify resume creation using modern templates,
              artificial intelligence and professional formatting. We believe that
              everyone deserves a chance to shine, and a great resume is the first step.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1.5,
              }}
            >
              Get Started Today →
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* ============== WHY CHOOSE US ============== */}
      <Box sx={{ background: "white", py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              textAlign: "center",
              mb: 2,
              background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose CV Genius?
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 6,
              fontSize: "1.1rem",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            We combine cutting-edge AI technology with professional design to help you
            create a resume that lands interviews.
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2.5,
                    transition: "all 0.3s ease",
                    border: "1px solid #f0f0f0",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        background: `${feature.color}20`,
                        borderRadius: 2,
                        mb: 2,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight="700"
                      sx={{ mb: 1.5, color: "#1a1a1a" }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============== TEAM SECTION ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Typography
          variant="h3"
          fontWeight="800"
          sx={{
            textAlign: "center",
            mb: 2,
            background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meet Our Team
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#666",
            mb: 6,
            fontSize: "1.1rem",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Passionate professionals dedicated to helping you succeed in your career.
        </Typography>

        <Grid container spacing={3}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: 2.5,
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon sx={{ fontSize: 80, color: "white", opacity: 0.3 }} />
                </Box>

                <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    sx={{ color: "#1a1a1a", mb: 0.5 }}
                  >
                    {member.name}
                  </Typography>

                  <Typography sx={{ color: member.color, fontWeight: 600 }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ============== STATS SECTION ============== */}
      <Box sx={{ background: "white", py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: "50K+", label: "Resumes Created" },
              { number: "92%", label: "ATS Pass Rate" },
              { number: "15K+", label: "Happy Users" },
              { number: "100%", label: "Free to Use" },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    fontWeight="800"
                    sx={{
                      background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography sx={{ color: "#666", fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============== VALUES SECTION ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Typography
          variant="h3"
          fontWeight="800"
          sx={{
            textAlign: "center",
            mb: 2,
            background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Core Values
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[
            {
              title: "Innovation",
              description:
                "We continuously innovate to provide the best resume building experience using cutting-edge AI technology.",
            },
            {
              title: "Accessibility",
              description:
                "Everyone deserves a professional resume. We make it affordable and easy for all.",
            },
            {
              title: "Quality",
              description:
                "Quality is non-negotiable. Every feature is tested to ensure it helps you succeed.",
            },
            {
              title: "Support",
              description:
                "Your success is our success. We provide comprehensive support every step of the way.",
            },
          ].map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #f8f9ff, #f0fbff)",
                  border: "1px solid #e0e7ff",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="700"
                  sx={{ mb: 1.5, color: "#1a1a1a" }}
                >
                  {value.title}
                </Typography>
                <Typography sx={{ color: "#666", lineHeight: 1.6 }}>
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ============== CTA SECTION ============== */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
          py: { xs: 6, sm: 8 },
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
            }}
          >
            Ready to Land Your Dream Job?
          </Typography>

          <Typography sx={{ mb: 4, fontSize: "1.1rem", opacity: 0.95 }}>
            Join thousands of professionals who have successfully created impressive resumes
            with CV Genius. Start building yours today!
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{
                background: "white",
                color: "#2BE6C1",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                "&:hover": {
                  background: "#f0f0f0",
                },
              }}
            >
              Create Your Resume
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}