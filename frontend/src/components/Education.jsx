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
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import CVCard from "./CVCard";

export default function Education({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addEducation = () => {
    setCv({
      ...cv,
      education: [
        ...cv.education,
        {
          university: "",
          degree: "",
          field: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };

  const deleteEducation = (index) => {
    const updated = cv.education.filter((_, i) => i !== index);
    setCv({
      ...cv,
      education: updated,
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...cv.education];
    updated[index][field] = value;
    setCv({
      ...cv,
      education: updated,
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
      title="🎓 Education"
      subtitle="Showcase your academic achievements"
      color="green"
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
          Add your educational background, starting with your most recent degree. Include details
          about your field of study and notable achievements.
        </Typography>
      </Box>

      {/* Education List */}
      {cv.education && cv.education.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.education.map((edu, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(34, 197, 94, 0.2)",
                background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(34, 197, 94, 0.15)",
                  border: "2px solid rgba(34, 197, 94, 0.4)",
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
                  borderBottom: "2px solid rgba(34, 197, 94, 0.2)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #22c55e, #16a34a)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Education #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#22c55e",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {edu.university && edu.degree
                      ? `${edu.degree} in ${edu.field || "..."} from ${edu.university}`
                      : "Add details"}
                  </Typography>
                </Box>

                {cv.education.length > 1 && (
                  <Tooltip title="Delete this education">
                    <IconButton
                      size="small"
                      onClick={() => deleteEducation(index)}
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
                {/* University */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="University/Institution"
                    value={edu.university}
                    onChange={(e) =>
                      handleEducationChange(index, "university", e.target.value)
                    }
                    placeholder="Harvard University"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <SchoolIcon sx={{ color: "#22c55e" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Name of your university or college"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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

                {/* Degree */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    placeholder="Bachelor of Science"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <EmojiEventsIcon sx={{ color: "#22c55e" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="e.g., Bachelor, Master, PhD"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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

                {/* Field of Study */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Field of Study"
                    value={edu.field}
                    onChange={(e) =>
                      handleEducationChange(index, "field", e.target.value)
                    }
                    placeholder="Computer Science"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <MenuBookIcon sx={{ color: "#22c55e" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Your major or area of study"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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
                    value={edu.location}
                    onChange={(e) =>
                      handleEducationChange(index, "location", e.target.value)
                    }
                    placeholder="Cambridge, MA"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <LocationOnIcon sx={{ color: "#22c55e" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="City and state/country"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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
                    value={edu.start_date}
                    onChange={(e) =>
                      handleEducationChange(index, "start_date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(edu.start_date)}
                    helperText={
                      !validateDate(edu.start_date)
                        ? "Format: MM/YYYY (e.g., 09/2020)"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#22c55e" }} />
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
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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
                    value={edu.end_date}
                    onChange={(e) =>
                      handleEducationChange(index, "end_date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(edu.end_date)}
                    helperText={
                      !validateDate(edu.end_date)
                        ? "Format: MM/YYYY (e.g., 06/2024)"
                        : "Graduation month and year"
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
                              background: "rgba(34, 197, 94, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#22c55e" }} />
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
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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
                    label="Academic Highlights & Achievements"
                    value={edu.description}
                    onChange={(e) =>
                      handleEducationChange(index, "description", e.target.value)
                    }
                    placeholder="Mention awards, honors, relevant coursework, GPA, or special projects..."
                    helperText="Highlight your academic achievements, awards, or notable courses (150-300 words recommended)"
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
                              background: "rgba(34, 197, 94, 0.1)",
                            }}
                          >
                            <DescriptionIcon sx={{ color: "#22c55e" }} />
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
                            borderColor: "#22c55e",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#22c55e",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(34, 197, 94, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#22c55e",
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
            background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
            borderRadius: "12px",
            border: "2px dashed rgba(34, 197, 94, 0.3)",
            mb: 3,
          }}
        >
          <SchoolIcon
            sx={{
              fontSize: 48,
              color: "#22c55e",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#22c55e",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No education added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your educational background
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addEducation}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #22c55e, #16a34a)",
          boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(34, 197, 94, 0.4)",
            background: "linear-gradient(135deg, #16a34a, #15803d)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Education
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#22c55e",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Education:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#16a34a",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ List your highest degree first
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#16a34a",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Include relevant coursework and academic honors
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#16a34a",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Mention awards, scholarships, and leadership roles
        </Typography>
      </Box>
    </CVCard>
  );
}