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
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import CVCard from "./CVCard";

export default function Projects({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addProject = () => {
    setCv({
      ...cv,
      projects: [
        ...cv.projects,
        {
          name: "",
          role: "",
          technologies: "",
          github: "",
          demo: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };

  const deleteProject = (index) => {
    const updated = cv.projects.filter((_, i) => i !== index);
    setCv({
      ...cv,
      projects: updated,
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updated = [...cv.projects];
    updated[index][field] = value;
    setCv({
      ...cv,
      projects: updated,
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

  const validateUrl = (url) => {
    if (url === "") return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <CVCard
      title="🚀 Projects"
      subtitle="Showcase your best work and achievements"
      color="blue"
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
          Add your most impressive projects. Include links to your GitHub repository and live demo
          when available. Focus on projects that demonstrate your key skills and accomplishments.
        </Typography>
      </Box>

      {/* Projects List */}
      {cv.projects && cv.projects.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "16px",
                border: "2px solid rgba(59, 130, 246, 0.2)",
                background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",

                "&:hover": {
                  boxShadow: "0 12px 32px rgba(59, 130, 246, 0.15)",
                  border: "2px solid rgba(59, 130, 246, 0.4)",
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
                  borderBottom: "2px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Project #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#3b82f6",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {project.name && project.role
                      ? `${project.name} - ${project.role}`
                      : "Add project details"}
                  </Typography>
                </Box>

                {cv.projects.length > 1 && (
                  <Tooltip title="Delete this project">
                    <IconButton
                      size="small"
                      onClick={() => deleteProject(index)}
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
                {/* Project Name */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      handleProjectChange(index, "name", e.target.value)
                    }
                    placeholder="CV Genius - ATS Resume Builder"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <FolderIcon sx={{ color: "#3b82f6" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Name of your project"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Your Role"
                    value={project.role}
                    onChange={(e) =>
                      handleProjectChange(index, "role", e.target.value)
                    }
                    placeholder="Full Stack Developer"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <PersonIcon sx={{ color: "#3b82f6" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Your position in the project"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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

                {/* Technologies */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Technologies Used"
                    value={project.technologies}
                    onChange={(e) =>
                      handleProjectChange(index, "technologies", e.target.value)
                    }
                    placeholder="React, Node.js, MongoDB, Tailwind CSS"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <BuildIcon sx={{ color: "#3b82f6" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="List technologies separated by commas"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        background: "#ffffff",

                        "&:hover": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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

                {/* GitHub Link */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="GitHub Repository"
                    value={project.github}
                    onChange={(e) =>
                      handleProjectChange(index, "github", e.target.value)
                    }
                    placeholder="https://github.com/username/project"
                    type="url"
                    error={!validateUrl(project.github)}
                    helperText={
                      !validateUrl(project.github)
                        ? "Invalid URL format"
                        : "Link to your GitHub repository"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <GitHubIcon sx={{ color: "#3b82f6" }} />
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
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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

                {/* Live Demo Link */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Live Demo"
                    value={project.demo}
                    onChange={(e) =>
                      handleProjectChange(index, "demo", e.target.value)
                    }
                    placeholder="https://cv-genius.vercel.app"
                    type="url"
                    error={!validateUrl(project.demo)}
                    helperText={
                      !validateUrl(project.demo)
                        ? "Invalid URL format"
                        : "Link to live project demo"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <PlayCircleIcon sx={{ color: "#3b82f6" }} />
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
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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

                {/* Date Range */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Start Date"
                    value={project.start_date}
                    onChange={(e) =>
                      handleProjectChange(index, "start_date", e.target.value)
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(project.start_date)}
                    helperText={
                      !validateDate(project.start_date)
                        ? "Format: MM/YYYY (e.g., 01/2024)"
                        : "When you started the project"
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#3b82f6" }} />
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
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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
                    value={project.end_date}
                    onChange={(e) =>
                      handleProjectChange(index, "end_date", e.target.value)
                    }
                    placeholder="MM/YYYY or Present"
                    error={!validateDate(project.end_date)}
                    helperText={
                      !validateDate(project.end_date)
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
                              background: "rgba(59, 130, 246, 0.1)",
                              mr: 1,
                            }}
                          >
                            <DateRangeIcon sx={{ color: "#3b82f6" }} />
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
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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
                    label="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(index, "description", e.target.value)
                    }
                    placeholder="Describe what your project does, the problem it solves, and key features..."
                    helperText="Highlight the impact and key achievements (200-400 words recommended)"
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
                              background: "rgba(59, 130, 246, 0.1)",
                            }}
                          >
                            <DescriptionIcon sx={{ color: "#3b82f6" }} />
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
                            borderColor: "#3b82f6",
                          },
                        },

                        "&.Mui-focused": {
                          background: "#ffffff",
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#3b82f6",
                            borderWidth: "2px",
                          },
                        },
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(59, 130, 246, 0.2)",
                      },

                      "& .MuiInputLabel-root": {
                        fontWeight: 600,
                        color: "#475569",

                        "&.Mui-focused": {
                          color: "#3b82f6",
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
            background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
            borderRadius: "12px",
            border: "2px dashed rgba(59, 130, 246, 0.3)",
            mb: 3,
          }}
        >
          <FolderIcon
            sx={{
              fontSize: 48,
              color: "#3b82f6",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#3b82f6",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No projects added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to showcase your projects
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addProject}
        startIcon={<AddIcon />}
        sx={{
          mt: 4,
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: { xs: "14px", md: "16px" },
          padding: { xs: "10px 20px", md: "12px 24px" },
          background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
          boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
          transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(59, 130, 246, 0.4)",
            background: "linear-gradient(135deg, #1d4ed8, #1e40af)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        + Add Project
      </Button>

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#3b82f6",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Projects:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#1d4ed8",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Highlight 3-5 of your best projects that match the target job
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#1d4ed8",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Always provide working GitHub links and live demos when possible
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#1d4ed8",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Focus on impact: explain the problem, your solution, and results
        </Typography>
      </Box>
    </CVCard>
  );
}