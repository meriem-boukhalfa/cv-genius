import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Button,
  Drawer,
  Divider,
  Link,
  Grid,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

// ============================================
// CONSTANTS
// ============================================

const APP_NAME = "CV GENIUS";
const APP_TAGLINE = "Build your professional ATS resume";

const NAV_LINKS = [
  { 
    label: "Home", 
    path: "/", 
    icon: <HomeIcon /> 
  },
  { 
    label: "Blog", 
    path: "/blog", 
    icon: <ArticleIcon /> 
  },
  { 
    label: "About", 
    path: "/about", 
    icon: <InfoIcon /> 
  },
  { 
    label: "Contact", 
    path: "/contact", 
    icon: <MailIcon /> 
  },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const SOCIAL_LINKS = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 20 }} />,
    href: "https://www.linkedin.com/in/meriem-boukhalfa-681832251/",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 20 }} />,
    href: "https://github.com/meriem-boukhalfa",
    label: "GitHub",
  },
  {
    icon: <TwitterIcon sx={{ fontSize: 20 }} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 20 }} />,
    href: "mailto:boukhalfa2012@gmail.com",
    label: "Email",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ============================================
// NAVIGATION LINK COMPONENT
// ============================================

function NavLink({ label, path, icon, isMobile = false, isActive = false, onClick }) {
  const handleClick = () => {
    if (onClick) onClick();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <Button
      component={RouterLink}
      to={path}
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: isMobile ? 1.5 : 0,
        color: isActive ? "#2BE6C1" : "#fff",
        textTransform: "none",
        fontWeight: isActive ? 700 : 600,
        p: isMobile ? 1.5 : 0,
        minWidth: "auto",
        width: isMobile ? "100%" : "auto",
        justifyContent: isMobile ? "flex-start" : "center",
        borderRadius: isMobile ? 1 : 0,
        transition: "all 0.3s ease",
        background: isActive && isMobile ? "rgba(43, 230, 193, 0.1)" : "transparent",
        border: isActive && isMobile ? "1px solid rgba(43, 230, 193, 0.3)" : "none",
        "&:hover": {
          color: "#60A5FA",
          background: isMobile ? "rgba(96, 165, 250, 0.1)" : "transparent",
        },
      }}
    >
      {isMobile && icon && (
        <Box sx={{ display: "flex", alignItems: "center", color: isActive ? "#2BE6C1" : "#CBD5E1" }}>
          {icon}
        </Box>
      )}
      {label}
    </Button>
  );
}

// ============================================
// DESKTOP NAVIGATION COMPONENT
// ============================================

function DesktopNav({ location }) {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        flexWrap: "wrap",
      }}
    >
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.path}
          label={link.label}
          path={link.path}
          isActive={location.pathname === link.path}
        />
      ))}
    </Stack>
  );
}

// ============================================
// MOBILE NAVIGATION DRAWER
// ============================================

function MobileNav({ open, onClose, location }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          background: "linear-gradient(135deg, #0F172A, #111827, #1E293B)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        },
      }}
    >
      <Box sx={{ p: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: 24,
            background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CV GENIUS
        </Typography>
        <IconButton
          onClick={onClose}
          sx={{
            color: "#fff",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)" }} />

      <Stack spacing={1} sx={{ p: 2 }}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            label={link.label}
            path={link.path}
            icon={link.icon}
            isMobile={true}
            isActive={location.pathname === link.path}
            onClick={onClose}
          />
        ))}
      </Stack>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)", mt: 2 }} />

      <Box sx={{ p: 2, mt: "auto" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
            textTransform: "none",
            fontWeight: 700,
            py: 1.5,
            borderRadius: 1.5,
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Drawer>
  );
}

// ============================================
// FOOTER LINK COMPONENT
// ============================================

function FooterLink({ label, href }) {
  return (
    <Link
      href={href}
      underline="none"
      sx={{
        color: "#CBD5E1",
        fontSize: { xs: 13, md: 14 },
        fontWeight: 500,
        transition: "all 0.3s ease",
        "&:hover": {
          color: "#2BE6C1",
        },
      }}
    >
      {label}
    </Link>
  );
}

// ============================================
// SOCIAL ICON COMPONENT
// ============================================

function SocialIcon({ icon, href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(43, 230, 193, 0.1)",
        color: "#2BE6C1",
        border: "1px solid rgba(43, 230, 193, 0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
          color: "#fff",
          border: "1px solid transparent",
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(43, 230, 193, 0.3)",
        },
      }}
      title={label}
    >
      {icon}
    </Link>
  );
}

// ============================================
// HEADER COMPONENT
// ============================================

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #0F172A, #111827, #1E293B)",
            borderRadius: "24px",
            px: { xs: 2, md: 3 },
            py: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,.25)",
            border: "1px solid rgba(255,255,255,.08)",
            gap: { xs: 1, md: 3 },
          }}
        >
          {/* Left Section: Logo + Desktop Nav */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              flex: 1,
              minWidth: 0,
            }}
          >
            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                width: 50,
                height: 50,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                color: "#fff",
                boxShadow: "0 8px 25px rgba(43, 230, 193, .35)",
                flexShrink: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "linear-gradient(135deg, #60A5FA, #2BE6C1)",
                },
              }}
            >
              <MenuRoundedIcon sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Logo & Tagline */}
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: 1,
                  fontSize: { xs: 22, sm: 28, md: 44 },
                  background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {APP_NAME}
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  fontSize: { xs: 11, sm: 13, md: 16 },
                  mt: 0.5,
                  fontWeight: 500,
                }}
              >
                {APP_TAGLINE}
              </Typography>

              {/* Desktop Navigation */}
              <DesktopNav location={location} />
            </Box>
          </Box>

          {/* Right Section: Avatar */}
          <Avatar
            sx={{
              width: { xs: 50, md: 68 },
              height: { xs: 50, md: 68 },
              background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(96, 165, 250, .35)",
              flexShrink: 0,
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 15px 35px rgba(96, 165, 250, .45)",
              },
            }}
          >
            <AutoAwesomeRoundedIcon sx={{ fontSize: { xs: 28, md: 35 } }} />
          </Avatar>
        </Box>
      </Box>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        location={location}
      />
    </>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0F172A, #111827, #1E293B)",
        color: "#fff",
        py: { xs: 6, md: 8 },
        mt: { xs: 6, md: 10 },
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 4 }}>
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 24, md: 28 },
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                CV GENIUS
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: { xs: 13, md: 14 },
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                Build your professional ATS-friendly resume using AI technology.
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {SOCIAL_LINKS.map((link, index) => (
                  <SocialIcon
                    key={index}
                    icon={link.icon}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#2BE6C1",
                mb: 2,
              }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.5}>
              {QUICK_LINKS.map((link, index) => (
                <FooterLink key={index} label={link.label} href={link.href} />
              ))}
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#60A5FA",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <Stack spacing={1.5}>
              <FooterLink label="Privacy Policy" href="/privacy-policy" />
              <FooterLink label="Terms of Service" href="/terms-of-service" />
              <FooterLink label="Contact Us" href="/contact" />
              <FooterLink label="Blog" href="/blog" />
            </Stack>
          </Grid>

          {/* Technologies */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 },
                fontWeight: 700,
                color: "#F97316",
                mb: 2,
              }}
            >
              Technologies
            </Typography>

            <Stack spacing={1.5}>
              <Typography sx={{ color: "#CBD5E1", fontSize: { xs: 13, md: 14 } }}>
                ⚛️ React
              </Typography>
              <Typography sx={{ color: "#CBD5E1", fontSize: { xs: 13, md: 14 } }}>
                ⚡ FastAPI
              </Typography>
              <Typography sx={{ color: "#CBD5E1", fontSize: { xs: 13, md: 14 } }}>
                🤖 Artificial Intelligence
              </Typography>
              <Typography sx={{ color: "#CBD5E1", fontSize: { xs: 13, md: 14 } }}>
                📄 LaTeX
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.08)", my: 4 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            sx={{
              fontSize: { xs: 12, md: 14 },
              color: "#64748B",
              textAlign: { xs: "center", md: "left" },
              order: { xs: 2, md: 1 },
            }}
          >
            © {currentYear} CV Genius. All rights reserved.
          </Typography>

          {/* Footer Links */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-end" },
              order: { xs: 1, md: 2 },
            }}
          >
            {FOOTER_LINKS.map((link, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <FooterLink label={link.label} href={link.href} />
                {index < FOOTER_LINKS.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      color: "#475569",
                    }}
                  >
                    •
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Creator Credit */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 12, md: 13 },
              color: "#94A3B8",
              fontWeight: 500,
            }}
          >
            Created by{" "}
            <Link
              href="https://github.com/meriem-boukhalfa"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "#2BE6C1",
                fontWeight: 700,
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#60A5FA",
                },
              }}
            >
              Boukhalfa Meriem
            </Link>
            {" "}✨
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default { Header, Footer };