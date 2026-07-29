

import { Card, CardContent, CardHeader, Box, Divider, useTheme, useMediaQuery } from "@mui/material";
import { forwardRef, useMemo } from "react";

// ============================================
// MAIN COMPONENT
// ============================================

const CVCard = forwardRef(
  (
    {
      // ============================================
      // PROPS
      // ============================================
      children,
      variant = "default",        // default, elevated, glass, minimal, gradient, soft
      color = "blue",             // blue, purple, green, pink, amber, slate
      title,                       // Card title
      subtitle,                    // Card subtitle
      icon,                        // Icon component
      action,                      // Action button/menu
      footer,                      // Footer content
      divider = false,             // Show divider
      interactive = true,          // Enable interactions
      shadow = "medium",           // none, light, medium, heavy, xl
      hoverEffect = true,          // Enable hover effects
      elevation = true,            // Enable elevation
      animated = true,             // Enable animations
    },
    ref
  ) => {
    // ============================================
    // RESPONSIVE HOOKS
    // ============================================
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));      // 📱 < 600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 📱 600-960px
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));       // 🖥️ >= 1280px

    // ============================================
    // COLOR SCHEMES
    // ============================================
    const colorSchemes = useMemo(
      () => ({
        blue: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 45%, #e0f2fe 100%)",
          border: "rgba(59, 130, 246, 0.2)",
          glow: "#3b82f6",
          glowLight: "rgba(59, 130, 246, 0.3)",
          glowDark: "rgba(59, 130, 246, 0.15)",
          hover: "rgba(59, 130, 246, 0.05)",
          text: "#1e40af",
        },
        purple: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #faf5ff 45%, #f3e8ff 100%)",
          border: "rgba(168, 85, 247, 0.2)",
          glow: "#a855f7",
          glowLight: "rgba(168, 85, 247, 0.3)",
          glowDark: "rgba(168, 85, 247, 0.15)",
          hover: "rgba(168, 85, 247, 0.05)",
          text: "#6b21a8",
        },
        green: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 45%, #dcfce7 100%)",
          border: "rgba(34, 197, 94, 0.2)",
          glow: "#22c55e",
          glowLight: "rgba(34, 197, 94, 0.3)",
          glowDark: "rgba(34, 197, 94, 0.15)",
          hover: "rgba(34, 197, 94, 0.05)",
          text: "#166534",
        },
        pink: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #fdf2f8 45%, #fce7f3 100%)",
          border: "rgba(236, 72, 153, 0.2)",
          glow: "#ec4899",
          glowLight: "rgba(236, 72, 153, 0.3)",
          glowDark: "rgba(236, 72, 153, 0.15)",
          hover: "rgba(236, 72, 153, 0.05)",
          text: "#831843",
        },
        amber: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #fffbf0 45%, #fef3c7 100%)",
          border: "rgba(217, 119, 6, 0.2)",
          glow: "#d97706",
          glowLight: "rgba(217, 119, 6, 0.3)",
          glowDark: "rgba(217, 119, 6, 0.15)",
          hover: "rgba(217, 119, 6, 0.05)",
          text: "#92400e",
        },
        slate: {
          gradient: "linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%)",
          border: "rgba(71, 85, 105, 0.2)",
          glow: "#475569",
          glowLight: "rgba(71, 85, 105, 0.3)",
          glowDark: "rgba(71, 85, 105, 0.15)",
          hover: "rgba(71, 85, 105, 0.05)",
          text: "#1e293b",
        },
      }),
      []
    );

    const currentColor = colorSchemes[color] || colorSchemes.blue;

    // ============================================
    // RESPONSIVE SHADOWS
    // ============================================
    const shadowVariants = {
      none: "none",
      light: isMobile
        ? "0 2px 8px rgba(0, 0, 0, 0.04)"
        : "0 4px 16px rgba(0, 0, 0, 0.05)",
      medium: isMobile
        ? "0 4px 12px rgba(0, 0, 0, 0.06)"
        : "0 12px 32px rgba(0, 0, 0, 0.08)",
      heavy: isMobile
        ? "0 8px 24px rgba(0, 0, 0, 0.08)"
        : "0 20px 48px rgba(0, 0, 0, 0.12)",
      xl: isMobile
        ? "0 12px 32px rgba(0, 0, 0, 0.1)"
        : "0 24px 64px rgba(0, 0, 0, 0.15)",
    };

    // ============================================
    // VARIANT STYLES
    // ============================================
    const getVariantStyles = () => {
      const baseStyles = {
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        position: "relative",
        overflow: "hidden",
      };

      switch (variant) {
        case "elevated":
          return {
            ...baseStyles,
            background: currentColor.gradient,
            border: `2px solid ${currentColor.border}`,
            boxShadow: shadowVariants[shadow] || shadowVariants.medium,
            backdropFilter: "blur(10px)",
          };

        case "glass":
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.7)",
            border: `1px solid rgba(255, 255, 255, 0.5)`,
            boxShadow: `inset 0 0 24px ${currentColor.glowLight}, ${
              shadowVariants[shadow] || shadowVariants.medium
            }`,
            backdropFilter: "blur(20px)",
          };

        case "minimal":
          return {
            ...baseStyles,
            background: "transparent",
            border: `1.5px solid ${currentColor.border}`,
            boxShadow: "none",
          };

        case "gradient":
          return {
            ...baseStyles,
            background: `linear-gradient(135deg, ${currentColor.glow}10 0%, ${currentColor.glow}05 100%)`,
            border: `2px solid ${currentColor.glow}40`,
            boxShadow: shadowVariants[shadow] || shadowVariants.medium,
          };

        case "soft":
          return {
            ...baseStyles,
            background: currentColor.hover,
            border: `1px solid ${currentColor.border}`,
            boxShadow: shadowVariants.light,
          };

        default:
          return {
            ...baseStyles,
            background: currentColor.gradient,
            border: `1px solid ${currentColor.border}`,
            boxShadow: shadowVariants[shadow] || shadowVariants.medium,
          };
      }
    };

    const variantStyles = getVariantStyles();

    // ============================================
    // RENDER
    // ============================================

    return (
      <Card
        ref={ref}
        elevation={elevation ? (isMobile ? 1 : isTablet ? 2 : 3) : 0}
        sx={{
          borderRadius: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
          mb: { xs: 2, sm: 2.5, md: 3 },
          ...variantStyles,

          // ============================================
          // ANIMATED BLOB 1
          // ============================================
          ...(animated &&
            variant !== "minimal" && {
              "&::before": {
                content: '""',
                position: "absolute",
                width: { xs: 100, sm: 150, md: 200, lg: 260 },
                height: { xs: 100, sm: 150, md: 200, lg: 260 },
                borderRadius: "50%",
                background: currentColor.glow,
                filter: isMobile ? "blur(80px)" : "blur(120px)",
                opacity: isMobile ? 0.05 : 0.1,
                top: { xs: -60, sm: -80, md: -100, lg: -120 },
                right: { xs: -60, sm: -80, md: -100, lg: -120 },
                animation: "blobMove 12s ease-in-out infinite alternate",
                "@keyframes blobMove": {
                  from: { transform: "translate(0px, 0px)" },
                  to: { transform: "translate(-60px, 60px)" },
                },
              },

              // ============================================
              // ANIMATED BLOB 2
              // ============================================
              "&::after": {
                content: '""',
                position: "absolute",
                width: { xs: 80, sm: 100, md: 150, lg: 180 },
                height: { xs: 80, sm: 100, md: 150, lg: 180 },
                borderRadius: "50%",
                background: currentColor.glow,
                filter: isMobile ? "blur(70px)" : "blur(100px)",
                opacity: isMobile ? 0.04 : 0.08,
                bottom: { xs: -50, sm: -60, md: -80, lg: -90 },
                left: { xs: -50, sm: -60, md: -80, lg: -90 },
                animation: "blobMove2 15s ease-in-out infinite",
                "@keyframes blobMove2": {
                  from: { transform: "translate(0px, 0px)" },
                  to: { transform: "translate(50px, -50px)" },
                },
              },
            }),

          // ============================================
          // HOVER EFFECTS (Disabled on mobile)
          // ============================================
          ...(interactive &&
            hoverEffect && {
              cursor: isMobile ? "auto" : "pointer",
              "&:hover": {
                transform: isMobile ? "scale(1)" : "translateY(-8px) scale(1.01)",
                boxShadow:
                  variant === "glass"
                    ? `inset 0 0 32px ${currentColor.glowLight}, ${shadowVariants.xl}`
                    : `${shadowVariants.xl}, 0 0 40px ${currentColor.glowDark}`,
                background:
                  variant === "glass" ? "rgba(255, 255, 255, 0.85)" : variantStyles.background,
              },
            }),

          "&:focus-visible": {
            outline: `3px solid ${currentColor.glow}`,
            outlineOffset: "3px",
          },
        }}
      >
        {/* ============================================
            HEADER SECTION
            ============================================ */}
        {(title || icon) && (
          <>
            <CardHeader
              avatar={
                icon && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: 36, md: 44 },
                      height: { xs: 36, md: 44 },
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${currentColor.glow}20, ${currentColor.glow}10)`,
                      color: currentColor.glow,
                      flexShrink: 0,
                      "& svg": {
                        fontSize: { xs: "18px", md: "24px" },
                      },
                    }}
                  >
                    {icon}
                  </Box>
                )
              }
              title={title}
              subheader={subtitle}
              action={action}
              sx={{
                position: "relative",
                zIndex: 2,
                pb: divider ? { xs: 1.5, md: 2 } : { xs: 1.5, md: 2 },
                px: { xs: 1.5, sm: 2, md: 3 },
                pt: { xs: 1.5, sm: 2, md: 3 },
                gap: { xs: 1, md: 1.5 },

                "& .MuiCardHeader-title": {
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  background: `linear-gradient(135deg, ${currentColor.glow}, ${currentColor.text})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                  lineHeight: 1.2,
                },

                "& .MuiCardHeader-subheader": {
                  fontSize: { xs: "11px", sm: "12px", md: "14px" },
                  color: "#64748b",
                  marginTop: { xs: "4px", md: "6px" },
                  fontWeight: 500,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                },

                "& .MuiCardHeader-action": {
                  marginTop: 0,
                  marginRight: 0,
                  alignSelf: "flex-start",
                },
              }}
            />
            {divider && (
              <Divider
                sx={{
                  position: "relative",
                  zIndex: 2,
                  margin: "0 !important",
                  background: `linear-gradient(90deg, ${currentColor.border}, transparent)`,
                  height: "2px",
                }}
              />
            )}
          </>
        )}

        {/* ============================================
            CONTENT SECTION
            ============================================ */}
        <CardContent
          sx={{
            position: "relative",
            zIndex: 2,
            pt: title ? { xs: 1.5, sm: 2, md: 3 } : { xs: 1.5, sm: 2, md: 3 },
            pb: footer ? { xs: 1, sm: 1.5, md: 2 } : { xs: 1.5, sm: 2, md: 3 },
            px: { xs: 1.5, sm: 2, md: 3 },

            // ============================================
            // TYPOGRAPHY STYLES (RESPONSIVE)
            // ============================================
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              marginTop: { xs: "16px", md: "24px" },
              marginBottom: { xs: "12px", md: "16px" },
              letterSpacing: "-0.5px",
              fontWeight: 700,
              background: `linear-gradient(135deg, ${currentColor.text}, ${currentColor.glow})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "normal",
              wordBreak: "break-word",

              "&:first-of-type": {
                marginTop: 0,
              },

              "&:last-of-type": {
                marginBottom: 0,
              },
            },

            "& h1": { fontSize: { xs: "20px", sm: "24px", md: "32px" } },
            "& h2": { fontSize: { xs: "18px", sm: "22px", md: "28px" } },
            "& h3": { fontSize: { xs: "16px", sm: "20px", md: "24px" } },
            "& h4": { fontSize: { xs: "15px", sm: "17px", md: "20px" } },
            "& h5": { fontSize: { xs: "14px", sm: "16px", md: "18px" } },
            "& h6": { fontSize: { xs: "13px", sm: "15px", md: "16px" } },

            "& p": {
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: { xs: "12px", md: "16px" },
              fontSize: { xs: "13px", sm: "14px", md: "16px" },
              fontWeight: 500,
              whiteSpace: "normal",
              wordBreak: "break-word",

              "&:last-of-type": {
                marginBottom: 0,
              },
            },

            "& ul, & ol": {
              color: "#475569",
              paddingLeft: { xs: "20px", md: "28px" },
              marginBottom: { xs: "12px", md: "16px" },

              "& li": {
                marginBottom: { xs: "8px", md: "12px" },
                lineHeight: 1.6,
                fontSize: { xs: "13px", sm: "14px", md: "16px" },
                fontWeight: 500,
                whiteSpace: "normal",
                wordBreak: "break-word",

                "&:last-child": {
                  marginBottom: 0,
                },
              },
            },

            "& a": {
              color: currentColor.glow,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              position: "relative",
              wordBreak: "break-word",

              "&:hover": {
                textDecoration: "underline",
                opacity: 0.8,
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: 0,
                height: "2px",
                background: currentColor.glow,
                transition: "width 0.3s ease",
              },

              "&:hover::after": {
                width: "100%",
              },
            },

            "& strong, & b": {
              fontWeight: 700,
              color: currentColor.text,
            },

            "& code": {
              background: currentColor.glowLight,
              color: currentColor.text,
              padding: { xs: "1px 6px", md: "2px 8px" },
              borderRadius: "4px",
              fontSize: { xs: "11px", md: "12px" },
              fontFamily: "monospace",
              wordBreak: "break-word",
            },
          }}
        >
          {children}
        </CardContent>

        {/* ============================================
            FOOTER SECTION
            ============================================ */}
        {footer && (
          <>
            {!title && (
              <Divider
                sx={{
                  position: "relative",
                  zIndex: 2,
                  margin: "0",
                  background: `linear-gradient(90deg, ${currentColor.border}, transparent)`,
                  height: "2px",
                }}
              />
            )}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                px: { xs: 1.5, sm: 2, md: 3 },
                py: { xs: 1, sm: 1.5, md: 2 },
                background: `linear-gradient(180deg, transparent, ${currentColor.hover})`,
                borderTop: `1px solid ${currentColor.border}`,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {footer}
            </Box>
          </>
        )}
      </Card>
    );
  }
);

CVCard.displayName = "CVCard";

export default CVCard;

