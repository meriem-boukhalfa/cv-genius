import { Card, CardContent, CardHeader, Box, Divider, useTheme, useMediaQuery } from "@mui/material";
import { forwardRef, useMemo } from "react";

// ============================================
// PROFESSIONAL CV CARD COMPONENT
// ============================================

const CVCard = forwardRef(
  (
    {
      children,
      variant = "default",
      color = "blue",
      title,
      subtitle,
      icon,
      action,
      footer,
      divider = false,
      interactive = true,
      shadow = "medium",
      hoverEffect = true,
      elevation = true,
      animated = true,
    },
    ref
  ) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // ============================================
    // COLOR SCHEMES WITH PROFESSIONAL GRADIENTS
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
    // SHADOW VARIANTS
    // ============================================

    const shadowVariants = {
      none: "none",
      light: "0 4px 16px rgba(0, 0, 0, 0.05)",
      medium: "0 12px 32px rgba(0, 0, 0, 0.08)",
      heavy: "0 20px 48px rgba(0, 0, 0, 0.12)",
      xl: "0 24px 64px rgba(0, 0, 0, 0.15)",
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
            boxShadow: `inset 0 0 24px ${currentColor.glowLight}, ${shadowVariants[shadow] || shadowVariants.medium}`,
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

        default: // "default"
          return {
            ...baseStyles,
            background: currentColor.gradient,
            border: `1px solid ${currentColor.border}`,
            boxShadow: shadowVariants[shadow] || shadowVariants.medium,
          };
      }
    };

    const variantStyles = getVariantStyles();

    return (
      <Card
        ref={ref}
        elevation={elevation ? (isMobile ? 2 : 3) : 0}
        sx={{
          borderRadius: { xs: "16px", sm: "20px", md: "24px" },
          mb: 3,
          ...variantStyles,

          // ============================================
          // ANIMATED BLOB 1
          // ============================================
          ...(animated &&
            variant !== "minimal" && {
              "&::before": {
                content: '""',
                position: "absolute",
                width: { xs: 150, sm: 200, md: 260 },
                height: { xs: 150, sm: 200, md: 260 },
                borderRadius: "50%",
                background: currentColor.glow,
                filter: "blur(120px)",
                opacity: 0.1,
                top: { xs: -80, md: -120 },
                right: { xs: -80, md: -120 },
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
                width: { xs: 100, sm: 150, md: 180 },
                height: { xs: 100, sm: 150, md: 180 },
                borderRadius: "50%",
                background: currentColor.glow,
                filter: "blur(100px)",
                opacity: 0.08,
                bottom: { xs: -60, md: -90 },
                left: { xs: -60, md: -90 },
                animation: "blobMove2 15s ease-in-out infinite",
                "@keyframes blobMove2": {
                  from: { transform: "translate(0px, 0px)" },
                  to: { transform: "translate(50px, -50px)" },
                },
              },
            }),

          // ============================================
          // HOVER EFFECTS
          // ============================================
          ...(interactive &&
            hoverEffect && {
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-8px) scale(1.01)",
                boxShadow:
                  variant === "glass"
                    ? `inset 0 0 32px ${currentColor.glowLight}, 0 24px 64px ${currentColor.glowLight}`
                    : `${shadowVariants.xl}, 0 0 40px ${currentColor.glowDark}`,
                background:
                  variant === "glass"
                    ? "rgba(255, 255, 255, 0.85)"
                    : variantStyles.background,
              },
            }),

          // ============================================
          // FOCUS STATE (Accessibility)
          // ============================================
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
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${currentColor.glow}20, ${currentColor.glow}10)`,
                      color: currentColor.glow,
                      "& svg": {
                        fontSize: "24px",
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
                pb: divider ? 2 : 2,
                px: { xs: 2, md: 3 },
                pt: { xs: 2, md: 3 },

                "& .MuiCardHeader-title": {
                  fontSize: { xs: "18px", sm: "20px", md: "24px" },
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  background: `linear-gradient(135deg, ${currentColor.glow}, ${currentColor.text})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                },

                "& .MuiCardHeader-subheader": {
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#64748b",
                  marginTop: "6px",
                  fontWeight: 500,
                },

                "& .MuiCardHeader-action": {
                  marginTop: 0,
                  marginRight: 0,
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
            pt: title ? { xs: 2, md: 3 } : { xs: 2, md: 3 },
            pb: footer ? 2 : { xs: 2, md: 3 },
            px: { xs: 2, md: 3 },

            // ============================================
            // TYPOGRAPHY STYLING
            // ============================================
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              marginTop: "24px",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
              fontWeight: 700,
              background: `linear-gradient(135deg, ${currentColor.text}, ${currentColor.glow})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",

              "&:first-of-type": {
                marginTop: 0,
              },

              "&:last-of-type": {
                marginBottom: 0,
              },
            },

            "& h1": { fontSize: { xs: "28px", md: "32px" } },
            "& h2": { fontSize: { xs: "24px", md: "28px" } },
            "& h3": { fontSize: { xs: "20px", md: "24px" } },
            "& h4": { fontSize: { xs: "18px", md: "20px" } },
            "& h5": { fontSize: { xs: "16px", md: "18px" } },
            "& h6": { fontSize: { xs: "14px", md: "16px" } },

            "& p": {
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: "16px",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 500,

              "&:last-of-type": {
                marginBottom: 0,
              },
            },

            "& ul, & ol": {
              color: "#475569",
              paddingLeft: "28px",
              marginBottom: "16px",

              "& li": {
                marginBottom: "12px",
                lineHeight: 1.7,
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 500,

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
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontFamily: "monospace",
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
                px: { xs: 2, md: 3 },
                py: 2,
                background: `linear-gradient(180deg, transparent, ${currentColor.hover})`,
                borderTop: `1px solid ${currentColor.border}`,
                fontSize: { xs: "14px", md: "16px" },
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