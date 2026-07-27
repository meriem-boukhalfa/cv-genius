import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Card,
  IconButton,
  InputAdornment,
  Divider,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Business,
  Briefcase,
  LocationOn,
  DateRange,
  Description,
} from "@mui/icons-material";
import CVCard from "./CVCard";

export default function Experience({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addExperience = () => {
    setCv({
      ...cv,
      experience: [
        ...cv.experience,
        {
          company: "",
          position: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };

  const deleteExperience = (index) => {
    const updated = cv.experience.filter((_, i) => i !== index);
    setCv({
      ...cv,
      experience: updated,
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...cv.experience];
    updated[index][field] = value;
    setCv({
      ...cv,
      experience: updated,
    });
  };

  // ============================================
  // VALIDATION
  // ============================================

  const validateDate = (date) => {
    if (date === "" || date === "Present" || date.toLowerCase() === "present")
      return true;
    const regex = /^(0?[1-9]|1[0-2])\/?(\d{4}|\d{2})$/;
    return regex.test(date);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <CVCard
      title="💼 Experience"
      subtitle="Showcase your professional journey"
      color="purple"
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
          Add your work experiences, starting with the most recent. Describe your responsibilities
          and key achievements for each role.
        </Typography>
      </Box>

      {/* Experience List */}
      {cv.experience && cv.experience.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.experience.map((exp, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(168, 85, 247, 0.2)",
                background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(168, 85, 247, 0.15)",
                  border: "2px solid rgba(168, 85, 247, 0.4)",
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
                  borderBottom: "2px solid rgba(168, 85, 247, 0.2)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Experience #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#a855f7",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company && exp.position ? `${exp.position} at ${exp.company}` : "Add details"}
                  </Typography>
                </Box>

                {cv.experience.length > 1 && (
                  <Tooltip title="Delete this experience">
                    <IconButton
                      size="small"
                      onClick={() => deleteExperience(index)}
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
                {/* Company */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                    placeholder="Acme Corporation"
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
                              background: "rgba(168, 85, 247, 0.1)",
                              mr: 1,
                            }}
                          >
                            <Business sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Enter the name of your employer"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
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

                {/* Position */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Job Title/Position"
                    value={exp.position}
                    onChange={(e) =>
                      handleExperienceChange(index, "position", e.target.value)
                    }
                    placeholder="Senior Developer"
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
                              background: "rgba(168, 85, 247, 0.1)",
                              mr: 1,
                            }}
                          >
                            <Briefcase sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Your official job title"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
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

                {/* Location */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Location"
                    value={exp.location}
                    onChange={(e) =>
                      handleExperienceChange(index, "location", e.target.value)
                    }
                    placeholder="San Francisco, CA"
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
                              background: "rgba(168, 85, 247, 0.1)",
                              mr: 1,
                            }}
                          >
                            <LocationOn sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="City, State/Province"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
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

                {/* Date Range */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    value={exp.start_date}
                    onChange={(e) =>
                      handleExperienceChange(index, "start_date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(exp.start_date)}
                    helperText={
                      !validateDate(exp.start_date)
                        ? "Format: MM/YYYY (e.g., 01/2022)"
                        : "Month and year you started"
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
                              background: "rgba(168, 85, 247, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRange sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
                          fontWeight: 700,
                        },
                      },

                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                        color: "#64748b",
                      },

                      "& .Mui-error": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ef4444",
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="End Date"
                    value={exp.end_date}
                    onChange={(e) =>
                      handleExperienceChange(index, "end_date", e.target.value)
                    }
                    placeholder="MM/YYYY or Present"
                    error={!validateDate(exp.end_date)}
                    helperText={
                      !validateDate(exp.end_date)
                        ? "Format: MM/YYYY or 'Present'"
                        : "End date or 'Present' if current"
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
                              background: "rgba(168, 85, 247, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRange sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
                          fontWeight: 700,
                        },
                      },

                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                        color: "#64748b",
                      },

                      "& .Mui-error": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ef4444",
                        },
                      },
                    }}
                  />
                </Grid>

                {/* Description */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={isMobile ? 3 : 5}
                    label="Job Description & Achievements"
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, "description", e.target.value)
                    }
                    placeholder="Describe your responsibilities, key achievements, and technologies used..."
                    helperText="Use bullet points or paragraphs. Focus on results and impact (200-400 words recommended)"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              background: "rgba(168, 85, 247, 0.1)",
                            }}
                          >
                            <Description sx={{ color: "#a855f7" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",
                        alignItems: "flex-start",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#a855f7",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(168, 85, 247, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#a855f7",
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
              </Grid>
            </Card>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
            borderRadius: "12px",
            border: "2px dashed rgba(168, 85, 247, 0.3)",
            mb: 3,
          }}
        >
          <Briefcase
            sx={{
              fontSize: 48,
              color: "#a855f7",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#a855f7",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No experience added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your first work experience
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addExperience}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #a855f7, #7c3aed)",
          boxShadow: "0 8px 20px rgba(168, 85, 247, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(168, 85, 247, 0.4)",
            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Experience
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
          border: "1px solid rgba(168, 85, 247, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#a855f7",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Experience:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#7c3aed",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ List your most recent job first
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#7c3aed",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Use action verbs (Led, Developed, Managed, Improved)
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#7c3aed",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Focus on achievements and measurable results
        </Typography>
      </Box>
    </CVCard>
  );
}