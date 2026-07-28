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
import EventNoteIcon from "@mui/icons-material/EventNote";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import CVCard from "./CVCard";

export default function Workshops({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addWorkshop = () => {
    setCv({
      ...cv,
      workshops: [
        ...cv.workshops,
        {
          name: "",
          organization: "",
          date: "",
          description: "",
        },
      ],
    });
  };

  const deleteWorkshop = (index) => {
    const updated = cv.workshops.filter((_, i) => i !== index);
    setCv({
      ...cv,
      workshops: updated,
    });
  };

  const handleWorkshopChange = (index, field, value) => {
    const updated = [...cv.workshops];
    updated[index][field] = value;
    setCv({
      ...cv,
      workshops: updated,
    });
  };

  // ============================================
  // VALIDATION
  // ============================================

  const validateDate = (date) => {
    if (date === "") return true;
    const regex = /^(0?[1-9]|1[0-2])\/?(\d{4}|\d{2})$/;
    return regex.test(date);
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <CVCard
      title="🎤 Workshops & Events"
      subtitle="Showcase workshops, conferences, and events you've attended or led"
      color="amber"
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
          Add workshops, seminars, conferences, and training events you've participated in or
          organized. Include key learnings and how they've contributed to your professional
          development.
        </Typography>
      </Box>

      {/* Workshops List */}
      {cv.workshops && cv.workshops.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.workshops.map((workshop, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, sm: 2.5, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(217, 119, 6, 0.2)",
                background: "linear-gradient(135deg, #fffbf0 0%, #fef3c7 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(217, 119, 6, 0.15)",
                  border: "2px solid rgba(217, 119, 6, 0.4)",
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
                  borderBottom: "2px solid rgba(217, 119, 6, 0.2)",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #d97706, #b45309)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Workshop #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#d97706",
                      fontSize: "12px",
                      fontWeight: 600,
                      mt: 0.5,
                      display: "block",
                    }}
                  >
                    {workshop.name && workshop.organization
                      ? `${workshop.name} - ${workshop.organization}`
                      : "Add workshop details"}
                  </Typography>
                </Box>

                {cv.workshops.length > 1 && (
                  <Tooltip title="Delete this workshop">
                    <IconButton
                      size="small"
                      onClick={() => deleteWorkshop(index)}
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
                {/* Workshop Name */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Workshop Name"
                    value={workshop.name}
                    onChange={(e) =>
                      handleWorkshopChange(index, "name", e.target.value)
                    }
                    placeholder="Advanced React Patterns & Best Practices"
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
                              background: "rgba(217, 119, 6, 0.1)",
                              mr: 1,
                            }}
                          >
                            <EventNoteIcon sx={{ color: "#d97706" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Title of the workshop or event"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(217, 119, 6, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#d97706",
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

                {/* Organization */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Organization"
                    value={workshop.organization}
                    onChange={(e) =>
                      handleWorkshopChange(index, "organization", e.target.value)
                    }
                    placeholder="Tech Academy Inc."
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
                              background: "rgba(217, 119, 6, 0.1)",
                              mr: 1,
                            }}
                          >
                            <BusinessIcon sx={{ color: "#d97706" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Organization or venue"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(217, 119, 6, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#d97706",
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

                {/* Date */}
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Date"
                    value={workshop.date}
                    onChange={(e) =>
                      handleWorkshopChange(index, "date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(workshop.date)}
                    helperText={
                      !validateDate(workshop.date)
                        ? "Format: MM/YYYY (e.g., 05/2025)"
                        : "Month and year of the workshop"
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
                              background: "rgba(217, 119, 6, 0.1)",
                              mr: 1,
                            }}
                          >
                            <CalendarTodayIcon sx={{ color: "#d97706" }} />
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
                            borderColor: "#d97706",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(217, 119, 6, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#d97706",
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
                    label="Workshop Description & Key Learnings"
                    value={workshop.description}
                    onChange={(e) =>
                      handleWorkshopChange(index, "description", e.target.value)
                    }
                    placeholder="Describe what you learned, topics covered, and how this workshop contributed to your professional development..."
                    helperText="Highlight key takeaways and applications (150-300 words recommended)"
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
                              background: "rgba(217, 119, 6, 0.1)",
                            }}
                          >
                            <DescriptionIcon sx={{ color: "#d97706" }} />
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
                            borderColor: "#d97706",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(217, 119, 6, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d97706",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(217, 119, 6, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#d97706",
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
            background: "linear-gradient(135deg, #fffbf0, #fef3c7)",
            borderRadius: "12px",
            border: "2px dashed rgba(217, 119, 6, 0.3)",
            mb: 3,
          }}
        >
          <EventNoteIcon
            sx={{
              fontSize: 48,
              color: "#d97706",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#d97706",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No workshops added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your workshops and events
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addWorkshop}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #d97706, #b45309)",
          boxShadow: "0 8px 20px rgba(217, 119, 6, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
          width: { xs: "100%", sm: "auto" },

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(217, 119, 6, 0.4)",
            background: "linear-gradient(135deg, #b45309, #92400e)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Workshop
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #fffbf0, #fef3c7)",
          border: "1px solid rgba(217, 119, 6, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#d97706",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Workshops:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b45309",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Include workshops that are relevant to your target position
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b45309",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Highlight practical skills learned and how you applied them
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b45309",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Focus on professional development and continuous learning
        </Typography>
      </Box>
    </CVCard>
  );
}