import {
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
  Card,
  IconButton,
  InputAdornment,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import TranslateIcon from "@mui/icons-material/Translate";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CVCard from "./CVCard";

// ============================================
// PROFICIENCY LEVELS
// ============================================

const PROFICIENCY_LEVELS = [
  {
    value: "Native",
    label: "Native Speaker",
    description: "Native or bilingual proficiency",
  },
  {
    value: "Fluent",
    label: "Fluent",
    description: "Professional working proficiency",
  },
  {
    value: "Advanced",
    label: "Advanced",
    description: "Advanced working proficiency",
  },
  {
    value: "Intermediate",
    label: "Intermediate",
    description: "Intermediate working proficiency",
  },
  {
    value: "Beginner",
    label: "Beginner",
    description: "Elementary proficiency",
  },
];

export default function Languages({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addLanguage = () => {
    setCv({
      ...cv,
      languages: [
        ...cv.languages,
        {
          name: "",
          level: "",
        },
      ],
    });
  };

  const deleteLanguage = (index) => {
    const updated = cv.languages.filter((_, i) => i !== index);
    setCv({
      ...cv,
      languages: updated,
    });
  };

  const handleLanguageChange = (index, field, value) => {
    const updated = [...cv.languages];
    updated[index][field] = value;
    setCv({
      ...cv,
      languages: updated,
    });
  };

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  const getLevelDescription = (level) => {
    const found = PROFICIENCY_LEVELS.find((l) => l.value === level);
    return found ? found.description : "Select a proficiency level";
  };

  const getLevelColor = (level) => {
    const colors = {
      Native: "#ec4899",
      Fluent: "#ec4899",
      Advanced: "#f97316",
      Intermediate: "#eab308",
      Beginner: "#64748b",
    };
    return colors[level] || "#64748b";
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <CVCard
      title="🌍 Languages"
      subtitle="Showcase your language proficiencies"
      color="pink"
      variant="default"
      shadow="medium"
    >
      {/* Section Description */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{
            color: "#64748b",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: 1.6,
          }}
        >
          Add languages you speak and indicate your proficiency level. This is especially valuable
          for international positions or roles requiring multilingual capabilities.
        </Typography>
      </Box>

      {/* Languages List */}
      {cv.languages && cv.languages.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.languages.map((language, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(236, 72, 153, 0.2)",
                background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(236, 72, 153, 0.15)",
                  border: "2px solid rgba(236, 72, 153, 0.4)",
                },
              }}
            >
              {/* Header with Delete Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid rgba(236, 72, 153, 0.2)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #ec4899, #db2777)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Language #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#ec4899",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {language.name && language.level
                      ? `${language.name} - ${language.level}`
                      : "Add language details"}
                  </Typography>
                </Box>

                {cv.languages.length > 1 && (
                  <Tooltip title="Delete this language">
                    <IconButton
                      size="small"
                      onClick={() => deleteLanguage(index)}
                      sx={{
                        color: "#ef4444",
                        background: "rgba(239, 68, 68, 0.1)",
                        "&:hover": {
                          background: "rgba(239, 68, 68, 0.2)",
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>

              {/* Form Fields */}
              <Grid container spacing={{ xs: 2.5, md: 3 }}>
                {/* Language Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Language"
                    value={language.name}
                    onChange={(e) =>
                      handleLanguageChange(index, "name", e.target.value)
                    }
                    placeholder="e.g., English, French, Mandarin"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              background: "rgba(236, 72, 153, 0.1)",
                              mr: 1,
                            }}
                          >
                            <TranslateIcon sx={{ color: "#ec4899" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Name of the language"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ec4899",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ec4899",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(236, 72, 153, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#ec4899",
                          fontWeight: 700,
                        },
                      },

                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                        color: "#64748b",
                      },
                    }}
                  />
                </Grid>

                {/* Proficiency Level */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Proficiency Level"
                    value={language.level}
                    onChange={(e) =>
                      handleLanguageChange(index, "level", e.target.value)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              background: "rgba(236, 72, 153, 0.1)",
                              mr: 1,
                            }}
                          >
                            <AssignmentIcon sx={{ color: "#ec4899" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText={getLevelDescription(language.level)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ec4899",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ec4899",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(236, 72, 153, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#ec4899",
                          fontWeight: 700,
                        },
                      },

                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                        color: "#64748b",
                      },

                      "& .MuiSvgIcon-root": {
                        color: "#ec4899",
                      },
                    }}
                  >
                    {PROFICIENCY_LEVELS.map((level) => (
                      <MenuItem key={level.value} value={level.value}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: getLevelColor(level.value),
                              mr: 2,
                            }}
                          />
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600, color: "#1f2937" }}
                            >
                              {level.label}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: "#6b7280", fontSize: "11px" }}
                            >
                              {level.description}
                            </Typography>
                          </Box>
                        </Box>
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              {/* Level Badge */}
              {language.level && (
                <Box
                  sx={{
                    mt: 2,
                    pt: 2,
                    borderTop: "1px solid rgba(236, 72, 153, 0.2)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 1,
                      borderRadius: "6px",
                      background: `${getLevelColor(language.level)}20`,
                      color: getLevelColor(language.level),
                      fontWeight: 600,
                      fontSize: "12px",
                    }}
                  >
                    {language.level}
                  </Typography>
                </Box>
              )}
            </Card>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
            borderRadius: "12px",
            border: "2px dashed rgba(236, 72, 153, 0.3)",
            mb: 3,
          }}
        >
          <TranslateIcon
            sx={{
              fontSize: 48,
              color: "#ec4899",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#ec4899",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No languages added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your language proficiencies
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addLanguage}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #ec4899, #db2777)",
          boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(236, 72, 153, 0.4)",
            background: "linear-gradient(135deg, #db2777, #be185d)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Language
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
          border: "1px solid rgba(236, 72, 153, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#ec4899",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Languages:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#db2777",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Only include languages you can genuinely use professionally
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#db2777",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Be honest about your proficiency level - employers verify language skills
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#db2777",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ List languages in order of proficiency or relevance to the position
        </Typography>
      </Box>
    </CVCard>
  );
}