import {
  Grid,
  TextField,
  Typography,
  Box,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Person,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Work,
  Description,
} from "@mui/icons-material";
import CVCard from "./CVCard";

export default function PersonalInfo({ cv, handleChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // VALIDATION HELPERS
  // ============================================

  const validateEmail = (email) => {
    return email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return phone === "" || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);
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
  // FORM FIELDS CONFIGURATION
  // ============================================

  const formFields = [
    {
      label: "Full Name",
      name: "full_name",
      value: cv.full_name,
      icon: <Person sx={{ color: "#3b82f6" }} />,
      placeholder: "John Doe",
      gridSize: { xs: 12, md: 6 },
      required: true,
      helperText: "Enter your full name as it appears officially",
    },
    {
      label: "Email",
      name: "email",
      value: cv.email,
      icon: <Email sx={{ color: "#ec4899" }} />,
      placeholder: "your@email.com",
      gridSize: { xs: 12, md: 6 },
      required: true,
      type: "email",
      error: !validateEmail(cv.email),
      helperText: !validateEmail(cv.email)
        ? "Invalid email format"
        : "We'll use this to contact you",
    },
    {
      label: "Phone",
      name: "phone",
      value: cv.phone,
      icon: <Phone sx={{ color: "#10b981" }} />,
      placeholder: "+1 (555) 123-4567",
      gridSize: { xs: 12, md: 6 },
      error: !validatePhone(cv.phone),
      helperText: !validatePhone(cv.phone)
        ? "Invalid phone format"
        : "Include country code if international",
    },
    {
      label: "Location",
      name: "location",
      value: cv.location,
      icon: <LocationOn sx={{ color: "#f97316" }} />,
      placeholder: "San Francisco, CA",
      gridSize: { xs: 12, md: 6 },
      helperText: "City, State/Province, Country",
    },
    {
      label: "LinkedIn URL",
      name: "linkedin",
      value: cv.linkedin,
      icon: <LinkedIn sx={{ color: "#0077b5" }} />,
      placeholder: "https://linkedin.com/in/yourprofile",
      gridSize: { xs: 12, md: 6 },
      type: "url",
      error: !validateUrl(cv.linkedin),
      helperText: !validateUrl(cv.linkedin)
        ? "Invalid URL format"
        : "Your LinkedIn profile URL",
    },
    {
      label: "GitHub URL",
      name: "github",
      value: cv.github,
      icon: <GitHub sx={{ color: "#1f2937" }} />,
      placeholder: "https://github.com/yourprofile",
      gridSize: { xs: 12, md: 6 },
      type: "url",
      error: !validateUrl(cv.github),
      helperText: !validateUrl(cv.github)
        ? "Invalid URL format"
        : "Your GitHub profile URL",
    },
    {
      label: "Job Title",
      name: "job_title",
      value: cv.job_title,
      icon: <Work sx={{ color: "#a855f7" }} />,
      placeholder: "Senior Full Stack Developer",
      gridSize: 12,
      helperText: "Your current or target job title",
    },
  ];

  return (
    <CVCard
      title="👤 Personal Information"
      subtitle="Build your professional identity"
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
          Start with your personal details. This information will appear at the top of your resume
          and help employers get in touch with you.
        </Typography>
      </Box>

      {/* Form Grid */}
      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {/* Basic Information Section */}
        {formFields.slice(0, 4).map((field) => (
          <Grid key={field.name} size={field.gridSize}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              placeholder={field.placeholder}
              type={field.type || "text"}
              error={field.error || false}
              helperText={field.helperText}
              required={field.required}
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
                      {field.icon}
                    </Box>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  fontSize: { xs: "14px", md: "16px" },
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  background: "#fafafa",

                  "&:hover": {
                    background: "#f5f5f5",
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

                  "& input::placeholder": {
                    color: "#cbd5e1",
                    opacity: 0.8,
                  },
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(59, 130, 246, 0.2)",
                },

                "& .MuiInputLabel-root": {
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: "#475569",

                  "&.Mui-focused": {
                    color: "#3b82f6",
                    fontWeight: 700,
                  },
                },

                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  marginTop: "6px",
                  color: "#64748b",

                  "&.Mui-error": {
                    color: "#ef4444",
                  },
                },
              }}
            />
          </Grid>
        ))}

        {/* Social Media Section */}
        <Grid size={12} sx={{ my: 2 }}>
          <Box
            sx={{
              padding: "16px",
              background: "linear-gradient(135deg, #3b82f620, #2563eb10)",
              borderRadius: "12px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              mb: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "#3b82f6",
                fontSize: "12px",
                letterSpacing: "0.5px",
              }}
            >
              SOCIAL & PROFESSIONAL LINKS
            </Typography>
          </Box>
        </Grid>

        {/* Social Links */}
        {formFields.slice(4, 6).map((field) => (
          <Grid key={field.name} size={field.gridSize}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              placeholder={field.placeholder}
              type={field.type || "text"}
              error={field.error || false}
              helperText={field.helperText}
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
                      {field.icon}
                    </Box>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  fontSize: { xs: "14px", md: "16px" },
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  background: "#fafafa",

                  "&:hover": {
                    background: "#f5f5f5",
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

                  "& input::placeholder": {
                    color: "#cbd5e1",
                    opacity: 0.8,
                  },
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(59, 130, 246, 0.2)",
                },

                "& .MuiInputLabel-root": {
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: "#475569",

                  "&.Mui-focused": {
                    color: "#3b82f6",
                    fontWeight: 700,
                  },
                },

                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  marginTop: "6px",
                  color: "#64748b",

                  "&.Mui-error": {
                    color: "#ef4444",
                  },
                },
              }}
            />
          </Grid>
        ))}

        {/* Professional Section */}
        <Grid size={12} sx={{ my: 2 }}>
          <Box
            sx={{
              padding: "16px",
              background: "linear-gradient(135deg, #a855f720, #7c3aed10)",
              borderRadius: "12px",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              mb: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "#a855f7",
                fontSize: "12px",
                letterSpacing: "0.5px",
              }}
            >
              PROFESSIONAL PROFILE
            </Typography>
          </Box>
        </Grid>

        {/* Job Title */}
        {formFields.slice(6, 7).map((field) => (
          <Grid key={field.name} size={field.gridSize}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              placeholder={field.placeholder}
              helperText={field.helperText}
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
                      {field.icon}
                    </Box>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  fontSize: { xs: "14px", md: "16px" },
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  background: "#fafafa",

                  "&:hover": {
                    background: "#f5f5f5",
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

                  "& input::placeholder": {
                    color: "#cbd5e1",
                    opacity: 0.8,
                  },
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(168, 85, 247, 0.2)",
                },

                "& .MuiInputLabel-root": {
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: "#475569",

                  "&.Mui-focused": {
                    color: "#a855f7",
                    fontWeight: 700,
                  },
                },

                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  marginTop: "6px",
                  color: "#64748b",
                },
              }}
            />
          </Grid>
        ))}

        {/* Professional Summary */}
        <Grid size={12}>
          <TextField
            fullWidth
            multiline
            rows={isMobile ? 3 : 5}
            label="Professional Summary"
            name="summary"
            value={cv.summary}
            onChange={handleChange}
            placeholder="Write a compelling summary about yourself, your skills, and career goals..."
            helperText="Highlight your key achievements, expertise, and what makes you unique (150-250 words recommended)"
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
                      background: "rgba(10, 184, 129, 0.1)",
                    }}
                  >
                    <Description sx={{ color: "#10b981" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "14px", md: "16px" },
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                background: "#fafafa",
                alignItems: "flex-start",

                "&:hover": {
                  background: "#f5f5f5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#10b981",
                  },
                },

                "&.Mui-focused": {
                  background: "#ffffff",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#10b981",
                    borderWidth: "2px",
                  },
                },

                "& textarea::placeholder": {
                  color: "#cbd5e1",
                  opacity: 0.8,
                },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(16, 185, 129, 0.2)",
              },

              "& .MuiInputLabel-root": {
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 600,
                color: "#475569",

                "&.Mui-focused": {
                  color: "#10b981",
                  fontWeight: 700,
                },
              },

              "& .MuiFormHelperText-root": {
                fontSize: "12px",
                marginTop: "6px",
                color: "#64748b",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Info Box */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#1e40af",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tip:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#1e40af",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          Make sure your contact information is up-to-date and professional. Many recruiters will
          use these details to reach out with opportunities!
        </Typography>
      </Box>
    </CVCard>
  );
}