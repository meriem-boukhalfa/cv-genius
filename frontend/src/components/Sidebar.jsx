import { useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  IconButton,
  Tooltip,
  Chip,
  Stack,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

// ============================================
// CONSTANTS
// ============================================

const CREATOR_NAME = "Boukhalfa Meriem";
const APP_NAME = "CV Genius";
const APP_YEAR = "2026";

const TECHNOLOGIES = [
  { 
    icon: "⚛️", 
    name: "React", 
    color: "#61DAFB",
    borderColor: "#61DAFB60",
  },
  { 
    icon: "⚡", 
    name: "FastAPI", 
    color: "#10B981",
    borderColor: "#10B98160",
  },
  { 
    icon: "🤖", 
    name: "AI", 
    color: "#2BE6C1",
    borderColor: "#2BE6C160",
  },
  { 
    icon: "📄", 
    name: "LaTeX", 
    color: "#F97316",
    borderColor: "#F9731660",
  },
];

const LANGUAGES = [
  { flag: "🇬🇧", name: "English" },
  { flag: "🇫🇷", name: "Français" },
  { flag: "🇩🇿", name: "العربية" },
];

const SOCIAL_LINKS = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    href: "https://github.com/meriem-boukhalfa",
    color: "#6e5494",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meriem-boukhalfa-681832251/",
    color: "#0077B5",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    href: "mailto:boukhalfa2012@gmail.com",
    color: "#2BE6C1",
  },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

// ============================================
// REUSABLE SECTION COMPONENT
// ============================================

function SidebarSection({ title, icon, children, color = "#2BE6C1" }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2.5,
        borderRadius: 2,
        background: "linear-gradient(145deg, rgba(43,230,193,0.12), rgba(96,165,250,0.08))",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: `${color}40`,
          background: "linear-gradient(145deg, rgba(43,230,193,0.15), rgba(96,165,250,0.12))",
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1.5 }}>
        {icon && <Box sx={{ fontSize: 20 }}>{icon}</Box>}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: 800,
            color: color,
          }}
        >
          {title}
        </Typography>
      </Stack>

      {children}
    </Box>
  );
}

// ============================================
// TECHNOLOGIES COMPONENT
// ============================================

function TechnologiesSection() {
  return (
    <SidebarSection title="Technologies Used" icon={<CodeIcon />} color="#2BE6C1">
      <Grid container spacing={1.5}>
        {TECHNOLOGIES.map((tech, index) => (
          <Grid item xs={6} key={index}>
            <Tooltip title={tech.name} arrow>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  p: 1.5,
                  borderRadius: 1.5,
                  background: `${tech.color}08`,
                  border: `2px solid ${tech.borderColor}`,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
                  "&:hover": {
                    background: `${tech.color}15`,
                    borderColor: tech.color,
                    boxShadow: `0 8px 16px ${tech.color}25`,
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box sx={{ fontSize: 24 }}>{tech.icon}</Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 12,
                    background: `linear-gradient(135deg, ${tech.color}, ${tech.color}dd)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </SidebarSection>
  );
}

// ============================================
// LANGUAGES COMPONENT
// ============================================

function LanguagesSection() {
  return (
    <SidebarSection title="Languages" icon={<LanguageIcon />} color="#60A5FA">
      <Stack spacing={0.8}>
        {LANGUAGES.map((lang, index) => (
          <Typography
            key={index}
            sx={{
              textAlign: "center",
              color: "#D1D5DB",
              fontSize: 13.5,
              fontWeight: 500,
              transition: "all 0.2s",
              "&:hover": {
                color: "#60A5FA",
              },
            }}
          >
            {lang.flag} {lang.name}
          </Typography>
        ))}
      </Stack>
    </SidebarSection>
  );
}

// ============================================
// SOCIAL LINKS COMPONENT
// ============================================

function SocialLinksSection() {
  return (
    <Box sx={{ mt: 3, textAlign: "center" }}>
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        {SOCIAL_LINKS.map((link, index) => (
          <Tooltip key={index} title={link.label} arrow>
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 45,
                height: 45,
                borderRadius: 1.5,
                background: `${link.color}15`,
                color: link.color,
                border: `1px solid ${link.color}40`,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: link.color,
                  color: "white",
                  transform: "translateY(-4px)",
                  borderColor: link.color,
                  boxShadow: `0 8px 16px ${link.color}40`,
                },
              }}
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 700,
          background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Let's Connect 🔗
      </Typography>
    </Box>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================

function SidebarFooter() {
  return (
    <Box sx={{ mt: 4 }}>
      <Divider sx={{ borderColor: "rgba(255,255,255,.12)", mb: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
        {FOOTER_LINKS.map((link, index) => (
          <Box key={index}>
            {index > 0 && (
              <Typography sx={{ color: "#4B5563", fontSize: 12, mx: 1, display: "inline" }}>
                •
              </Typography>
            )}
            <Link
              href={link.href}
              underline="hover"
              sx={{
                color: "#9CA3AF",
                fontSize: 12,
                fontWeight: 500,
                transition: "all 0.2s",
                "&:hover": {
                  color: "#2BE6C1",
                },
              }}
            >
              {link.label}
            </Link>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: 13,
          fontWeight: 700,
          color: "#9CA3AF",
          transition: "all 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: "scale(1.05)",
          },
        }}
      >
        © {CREATOR_NAME} {APP_YEAR}
      </Typography>
    </Box>
  );
}

// ============================================
// MAIN SIDEBAR COMPONENT
// ============================================

export default function Sidebar() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: 320 },
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "auto", md: "100vh" },
        overflowY: { xs: "visible", md: "auto" },
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
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 24, md: 32 },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#fff",
              mb: 1,
            }}
          >
            {CREATOR_NAME}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
            <AutoAwesomeIcon sx={{ color: "#2BE6C1", fontSize: 24 }} />
            <Typography
              sx={{
                fontSize: { xs: 20, md: 24 },
                fontWeight: 800,
                background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {APP_NAME}
            </Typography>
          </Box>
        </Box>

        {/* Ads */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            height: { xs: 180, md: 300 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            overflow: "hidden",
            mb: 3,
          }}
        >
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
            data-ad-client="ca-pub-8058401601102266"
            data-ad-slot="5561276412"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </Box>

        {/* About Section */}
        <SidebarSection
          title="About CV Genius"
          icon={<AutoAwesomeIcon />}
          color="#2BE6C1"
        >
          <Typography
            sx={{
              color: "#D1D5DB",
              fontSize: 13.5,
              lineHeight: 1.8,
              textAlign: "center",
            }}
          >
            Created with passion to help students, graduates, and job seekers build professional
            ATS-friendly resumes using Artificial Intelligence.
          </Typography>
        </SidebarSection>

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Languages Section */}
        <LanguagesSection />

        {/* Social Links Section */}
        <SocialLinksSection />
      </Box>

      {/* ================= FOOTER ================= */}
      <SidebarFooter />
    </Box>
  );
}