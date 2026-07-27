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
import VerifiedIcon from "@mui/icons-material/Verified";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LinkIcon from "@mui/icons-material/Link";
import CVCard from "./CVCard";

export default function Certificates({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // ============================================
  // HANDLERS
  // ============================================

  const addCertificate = () => {
    setCv({
      ...cv,
      certificates: [
        ...cv.certificates,
        {
          name: "",
          organization: "",
          issue_date: "",
          credential: "",
        },
      ],
    });
  };

  const deleteCertificate = (index) => {
    const updated = cv.certificates.filter((_, i) => i !== index);
    setCv({
      ...cv,
      certificates: updated,
    });
  };

  const handleCertificateChange = (index, field, value) => {
    const updated = [...cv.certificates];
    updated[index][field] = value;
    setCv({
      ...cv,
      certificates: updated,
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
      title="📜 Certificates & Credentials"
      subtitle="Showcase your professional certifications"
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
          Add relevant certifications, licenses, and credentials that enhance your professional
          profile. Include a link to verify your credentials online when possible.
        </Typography>
      </Box>

      {/* Certificates List */}
      {cv.certificates && cv.certificates.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {cv.certificates.map((certificate, index) => (
            <Card
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
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
                  alignItems: "center",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid rgba(217, 119, 6, 0.2)",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #d97706, #b45309)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Certificate #{index + 1}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#d97706",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {certificate.name && certificate.organization
                      ? `${certificate.name} from ${certificate.organization}`
                      : "Add certificate details"}
                  </Typography>
                </Box>

                {cv.certificates.length > 1 && (
                  <Tooltip title="Delete this certificate">
                    <IconButton
                      size="small"
                      onClick={() => deleteCertificate(index)}
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
                {/* Certificate Name */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Certificate Name"
                    value={certificate.name}
                    onChange={(e) =>
                      handleCertificateChange(index, "name", e.target.value)
                    }
                    placeholder="AWS Certified Solutions Architect"
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
                            <VerifiedIcon sx={{ color: "#d97706" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Full name of the certificate or credential"
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
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Organization/Issuer"
                    value={certificate.organization}
                    onChange={(e) =>
                      handleCertificateChange(
                        index,
                        "organization",
                        e.target.value
                      )
                    }
                    placeholder="Amazon Web Services (AWS)"
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
                            <CorporateFareIcon sx={{ color: "#d97706" }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    helperText="Company or organization that issued the certificate"
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

                {/* Issue Date */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Issue Date"
                    value={certificate.issue_date}
                    onChange={(e) =>
                      handleCertificateChange(
                        index,
                        "issue_date",
                        e.target.value
                      )
                    }
                    placeholder="MM/YYYY"
                    error={!validateDate(certificate.issue_date)}
                    helperText={
                      !validateDate(certificate.issue_date)
                        ? "Format: MM/YYYY (e.g., 06/2025)"
                        : "Month and year issued"
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
                            <DateRangeIcon sx={{ color: "#d97706" }} />
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

                {/* Credential URL */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Credential URL"
                    value={certificate.credential}
                    onChange={(e) =>
                      handleCertificateChange(
                        index,
                        "credential",
                        e.target.value
                      )
                    }
                    placeholder="https://credentials.example.com/verify/xxxxx"
                    type="url"
                    error={!validateUrl(certificate.credential)}
                    helperText={
                      !validateUrl(certificate.credential)
                        ? "Invalid URL format"
                        : "Link to verify your credential online"
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
                            <LinkIcon sx={{ color: "#d97706" }} />
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
          <VerifiedIcon
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
            No certificates added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Click the button below to add your professional certifications
          </Typography>
        </Box>
      )}

      {/* Add Button */}
      <Button
        variant="contained"
        onClick={addCertificate}
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
        + Add Certificate
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
          💡 Pro Tips for Your Certificates:
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
          ✓ List your most recent and relevant certifications first
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
          ✓ Include the credential verification link when available
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b45309",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Focus on industry-recognized certifications relevant to your role
        </Typography>
      </Box>
    </CVCard>
  );
}