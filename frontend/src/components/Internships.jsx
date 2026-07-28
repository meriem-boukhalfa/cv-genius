import {
  Typography,
  TextField,
  Button,
  Grid,
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
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import CVCard from "./CVCard";

export default function Internships({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addInternship = () => {
    setCv({
      ...cv,
      internships: [
        ...cv.internships,
        {
          company: "",
          role: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };

  const deleteInternship = (index) => {
    const updated = cv.internships.filter((_, i) => i !== index);
    setCv({
      ...cv,
      internships: updated,
    });
  };

  const handleInternshipChange = (index, field, value) => {
    const updated = [...cv.internships];
    updated[index][field] = value;
    setCv({
      ...cv,
      internships: updated,
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
      title="🏢 Internships"
      subtitle="Highlight your internship experiences and learnings"
      color="slate"
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
          Add your internship experiences, starting with the most recent. Include what you learned,
          projects you contributed to, and key achievements during your time as an intern.
        </Typography>
      </Box>

      {/* Internships List */}
      {cv.internships && cv.internships.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.internships.map((internship, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(71, 85, 105, 0.2)",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(71, 85, 105, 0.15)",
                  border: "2px solid rgba(71, 85, 105, 0.4)",
                },
              }}
            >
              {/* Header with Delete Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid rgba(71, 85, 105, 0.2)",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #475569, #334155)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Internship #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#475569",
                      fontSize: "12px",
                      fontWeight: 600,
                      mt: 0.5,
                      display: "block",
                    }}
                  >
                    {internship.company && internship.role
                      ? `${internship.role} at ${internship.company}`
                      : "Add internship details"}
                  </Typography>
                </Box>

                {cv.internships.length > 1 && (
                  <Tooltip title="Delete this internship">
                    <IconButton
                      size="small"
                      onClick={() => deleteInternship(index)}
                      sx={{
                        color: "#ef4444",
                        background: "rgba(239, 68, 68, 0.1)",
                        flexShrink: 0,
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
              <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
                {/* Company */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    value={internship.company}
                    onChange={(e) =>
                      handleInternshipChange(index, "company", e.target.value)
                    }
                    placeholder="TechCorp Inc."
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
                              background: "rgba(71, 85, 105, 0.1)",
                              mr: 1,
                            }}
                          >
                            <BusinessIcon sx={{ color: "#475569" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Name of the company"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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

                {/* Role */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Role / Position"
                    value={internship.role}
                    onChange={(e) =>
                      handleInternshipChange(index, "role", e.target.value)
                    }
                    placeholder="Software Engineer Intern"
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
                              background: "rgba(71, 85, 105, 0.1)",
                              mr: 1,
                            }}
                          >
                            <WorkIcon sx={{ color: "#475569" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Your internship position"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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
                    value={internship.location}
                    onChange={(e) =>
                      handleInternshipChange(index, "location", e.target.value)
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
                              background: "rgba(71, 85, 105, 0.1)",
                              mr: 1,
                            }}
                          >
                            <LocationOnIcon sx={{ color: "#475569" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="City, State/Country (or Remote)"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    value={internship.start_date}
                    onChange={(e) =>
                      handleInternshipChange(index, "start_date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(internship.start_date)}
                    helperText={
                      !validateDate(internship.start_date)
                        ? "Format: MM/YYYY (e.g., 06/2025)"
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
                              background: "rgba(71, 85, 105, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#475569" }} />
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
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="End Date"
                    value={internship.end_date}
                    onChange={(e) =>
                      handleInternshipChange(index, "end_date", e.target.value)
                    }
                    placeholder="MM/YYYY or Present"
                    error={!validateDate(internship.end_date)}
                    helperText={
                      !validateDate(internship.end_date)
                        ? "Format: MM/YYYY or 'Present'"
                        : "Or 'Present' if ongoing"
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
                              background: "rgba(71, 85, 105, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#475569" }} />
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
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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
                    rows={isMobile ? 3 : isTablet ? 4 : 5}
                    label="Internship Description & Achievements"
                    value={internship.description}
                    onChange={(e) =>
                      handleInternshipChange(index, "description", e.target.value)
                    }
                    placeholder="Describe your responsibilities, projects you worked on, skills learned, and key achievements..."
                    helperText="Highlight what you learned and contributed (150-300 words recommended)"
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
                              background: "rgba(71, 85, 105, 0.1)",
                            }}
                          >
                            <DescriptionIcon sx={{ color: "#475569" }} />
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
                            borderColor: "#475569",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#475569",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(71, 85, 105, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#475569",
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
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
            borderRadius: "12px",
            border: "2px dashed rgba(71, 85, 105, 0.3)",
            mb: 3,
          }}
        >
          <BusinessIcon
            sx={{
              fontSize: 48,
              color: "#475569",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#475569",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No internships added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your internship experiences
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addInternship}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #475569, #334155)",
          boxShadow: "0 8px 20px rgba(71, 85, 105, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
          width: { xs: "100%", sm: "auto" },

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(71, 85, 105, 0.4)",
            background: "linear-gradient(135deg, #334155, #1e293b)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Internship
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
          border: "1px solid rgba(71, 85, 105, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#475569",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Internships:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ List your most recent internships first
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Focus on skills developed and projects completed
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Use action verbs (Developed, Assisted, Implemented, Collaborated)
        </Typography>
      </Box>
    </CVCard>
  );
}