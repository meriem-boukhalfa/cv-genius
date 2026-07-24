import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Stack,
  Button,
  Drawer,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

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

// ============================================
// NAVIGATION LINK COMPONENT
// ============================================

function NavLink({ label, path, icon, isMobile = false, isActive = false, onClick }) {
  return (
    <Button
      component={Link}
      to={path}
      onClick={onClick}
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
// MAIN HEADER COMPONENT
// ============================================

export default function Header({ onMenuClick }) {
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