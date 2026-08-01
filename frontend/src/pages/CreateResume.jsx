import { useState, useCallback, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  LinearProgress,
  Alert,
  Snackbar,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
  TextField,
  InputAdornment,
  Card,
  Chip,
  IconButton,
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
  School,
  Award,
  Language,
  Star,
  Code,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
 
// ============================================
// CVCard Component - Embedded
// ============================================
 
function CVCard({
  title,
  subtitle,
  color = "blue",
  variant = "default",
  shadow = "medium",
  children,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  const colorSchemes = {
    blue: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 45%, #e0f2fe 100%)",
      border: "rgba(59, 130, 246, 0.2)",
      glow: "#3b82f6",
      glowLight: "rgba(59, 130, 246, 0.3)",
      text: "#1e40af",
    },
    purple: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #faf5ff 45%, #f3e8ff 100%)",
      border: "rgba(168, 85, 247, 0.2)",
      glow: "#a855f7",
      glowLight: "rgba(168, 85, 247, 0.3)",
      text: "#6b21a8",
    },
    green: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 45%, #dcfce7 100%)",
      border: "rgba(34, 197, 94, 0.2)",
      glow: "#22c55e",
      glowLight: "rgba(34, 197, 94, 0.3)",
      text: "#166534",
    },
    pink: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #fdf2f8 45%, #fce7f3 100%)",
      border: "rgba(236, 72, 153, 0.2)",
      glow: "#ec4899",
      glowLight: "rgba(236, 72, 153, 0.3)",
      text: "#831843",
    },
    amber: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #fffbf0 45%, #fef3c7 100%)",
      border: "rgba(217, 119, 6, 0.2)",
      glow: "#d97706",
      glowLight: "rgba(217, 119, 6, 0.3)",
      text: "#92400e",
    },
    slate: {
      gradient: "linear-gradient(135deg, #ffffff 0%, #f8fafc 45%, #f1f5f9 100%)",
      border: "rgba(71, 85, 105, 0.2)",
      glow: "#475569",
      glowLight: "rgba(71, 85, 105, 0.3)",
      text: "#1e293b",
    },
  };
 
  const currentColor = colorSchemes[color] || colorSchemes.blue;
 
  const shadowVariants = {
    none: "none",
    light: isMobile ? "none" : "0 2px 8px rgba(0, 0, 0, 0.04)",
    medium: isMobile ? "0 1px 3px rgba(0, 0, 0, 0.03)" : "0 4px 12px rgba(0, 0, 0, 0.06)",
    heavy: isMobile ? "0 2px 4px rgba(0, 0, 0, 0.04)" : "0 8px 20px rgba(0, 0, 0, 0.1)",
  };
 
  return (
    <Card
      sx={{
        borderRadius: { xs: "8px", sm: "12px", md: "16px" },
        mb: { xs: 1.5, sm: 2, md: 3 },
        background: currentColor.gradient,
        border: `1px solid ${currentColor.border}`,
        boxShadow: shadowVariants[shadow] || shadowVariants.medium,
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
 
        "&::before": {
          content: '""',
          position: "absolute",
          width: { xs: 100, sm: 150 },
          height: { xs: 100, sm: 150 },
          borderRadius: "50%",
          background: currentColor.glow,
          filter: "blur(80px)",
          opacity: 0.05,
          top: { xs: -60, sm: -80 },
          right: { xs: -60, sm: -80 },
          zIndex: 0,
        },
      }}
    >
      {title && (
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            pb: { xs: 1.5, md: 2 },
            px: { xs: 1, sm: 1.5, md: 2 },
            pt: { xs: 1, sm: 1.5, md: 2 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              fontWeight: 800,
              letterSpacing: "-0.3px",
              background: `linear-gradient(135deg, ${currentColor.glow}, ${currentColor.text})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "normal",
              wordBreak: "break-word",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                color: "#64748b",
                marginTop: { xs: "2px", md: "4px" },
                fontWeight: 500,
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
 
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          pt: title ? { xs: 1, sm: 1.5, md: 2 } : { xs: 1, sm: 1.5, md: 2 },
          pb: { xs: 1, sm: 1.5, md: 2 },
          px: { xs: 1, sm: 1.5, md: 2 },
 
          "& h1, & h2, & h3, & h4, & h5, & h6": {
            marginTop: { xs: "10px", md: "16px" },
            marginBottom: { xs: "8px", md: "12px" },
            fontWeight: 700,
          },
 
          "& p": {
            color: "#475569",
            lineHeight: 1.5,
            marginBottom: { xs: "8px", md: "12px" },
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 500,
            whiteSpace: "normal",
            wordBreak: "break-word",
          },
        }}
      >
        {children}
      </Box>
    </Card>
  );
}
 
// ============================================
// GenerateButton Component - Embedded
// ============================================
 
function GenerateButton({ onClick, disabled, children, sx }) {
  const [state, setState] = useState("idle");
 
  return (
    <Button
      onClick={async () => {
        setState("loading");
        try {
          await onClick();
          setState("success");
          setTimeout(() => setState("idle"), 2000);
        } catch (error) {
          setState("error");
          setTimeout(() => setState("idle"), 3000);
        }
      }}
      disabled={disabled || state !== "idle"}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 1, sm: 1.5, md: 1.8 },
        fontSize: { xs: "13px", md: "16px" },
        fontWeight: 700,
        borderRadius: "12px",
        textTransform: "none",
        transition: "all 0.3s ease",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
 
// ============================================
// PersonalInfo Component - Embedded
// ============================================
 
function PersonalInfo({ cv, handleChange }) {
  return (
    <CVCard
      title="👤 Personal Information"
      subtitle="Your basic details"
      color="blue"
    >
      <Grid container spacing={{ xs: 1.5, sm: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="full_name"
            value={cv.full_name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,130,246,0.1)", borderRadius: "6px", mr: 0.8 }}>
                    <Person sx={{ fontSize: 16, color: "#3b82f6" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "12px", md: "14px" },
                background: "#fafafa",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6", borderWidth: "2px" },
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={cv.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(236,72,153,0.1)", borderRadius: "6px", mr: 0.8 }}>
                    <Email sx={{ fontSize: 16, color: "#ec4899" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "12px", md: "14px" },
                background: "#fafafa",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6", borderWidth: "2px" },
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={cv.phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(16,185,129,0.1)", borderRadius: "6px", mr: 0.8 }}>
                    <Phone sx={{ fontSize: 16, color: "#10b981" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "12px", md: "14px" },
                background: "#fafafa",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6", borderWidth: "2px" },
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={cv.location}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box sx={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(249,115,22,0.1)", borderRadius: "6px", mr: 0.8 }}>
                    <LocationOn sx={{ fontSize: 16, color: "#f97316" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "12px", md: "14px" },
                background: "#fafafa",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6", borderWidth: "2px" },
                },
              },
            }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Professional Summary"
            name="summary"
            multiline
            rows={3}
            value={cv.summary}
            onChange={handleChange}
            placeholder="Write about yourself..."
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                fontSize: { xs: "12px", md: "14px" },
                background: "#fafafa",
                "&.Mui-focused": {
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3b82f6", borderWidth: "2px" },
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </CVCard>
  );
}
 
// ============================================
// ToastNotification Component - Embedded
// ============================================
 
function ToastNotification({ open, onClose, message, severity = "success" }) {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          fontSize: { xs: "12px", sm: "14px" },
          fontWeight: 500,
          borderRadius: 2,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
 
// ============================================
// StepIndicator Component - Embedded
// ============================================
 
function StepIndicator({ steps, currentStep }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  return (
    <Box sx={{ my: { xs: 2, sm: 3 } }}>
      {steps.map((step, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: { xs: 1.5, sm: 2 }, gap: { xs: 1, sm: 1.5 } }}>
          <Box
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              borderRadius: "50%",
              background: step.completed ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #3b82f6, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "18px" },
              flexShrink: 0,
            }}
          >
            {step.completed ? "✓" : index + 1}
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 600, whiteSpace: "normal", wordBreak: "break-word" }}>
              {step.label}
            </Typography>
            {step.active && !isMobile && (
              <Typography sx={{ fontSize: "12px", color: "#64748b", mt: 0.3 }}>
                {step.description}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
 
// ============================================
// LoadingScreen Component - Embedded
// ============================================
 
function LoadingScreen({ progress, steps, currentStepIndex }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 },
        position: "relative",
      }}
    >
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        {/* Icon */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 3, sm: 4 } }}>
          <Box
            sx={{
              position: "relative",
              width: { xs: 100, sm: 140 },
              height: { xs: 100, sm: 140 },
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "40px", sm: "60px" },
              boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            ✨
          </Box>
        </Box>
 
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "32px" },
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Generating Your Resume
        </Typography>
 
        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "#64748b",
            textAlign: "center",
            mb: { xs: 3, sm: 4 },
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Our AI is optimizing your resume for ATS systems...
        </Typography>
 
        {/* Progress Bar */}
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 4,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 4,
                background: "linear-gradient(90deg, #3b82f6, #2563eb)",
              },
            }}
          />
          <Typography sx={{ fontSize: "12px", color: "#64748b", mt: 1, textAlign: "center" }}>
            {progress}% Complete
          </Typography>
        </Box>
 
        {/* Steps */}
        <StepIndicator steps={steps} currentStep={currentStepIndex} />
      </Container>
    </Box>
  );
}
 
// ============================================
// MAIN CreateResume COMPONENT
// ============================================
 
export default function CreateResume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
 
  const [cv, setCv] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    job_title: "",
    summary: "",
    education: [],
    certificates: [],
    experience: [],
    skills: [],
    languages: [],
    projects: [],
    internships: [],
    workshops: [],
  });
 
  const [latex, setLatex] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });
 
  const steps = [
    { label: "Preparing", description: "Organizing your information", completed: progress > 15, active: currentStepIndex === 0 },
    { label: "Validating", description: "Checking data", completed: progress > 35, active: currentStepIndex === 1 },
    { label: "Optimizing", description: "Enhancing quality", completed: progress > 55, active: currentStepIndex === 2 },
    { label: "ATS Format", description: "Formatting document", completed: progress > 75, active: currentStepIndex === 3 },
    { label: "PDF Generation", description: "Creating PDF", completed: progress > 85, active: currentStepIndex === 4 },
    { label: "Download Ready", description: "Preparing file", completed: progress >= 100, active: currentStepIndex === 5 },
  ];
 
  useEffect(() => {
    if (!loading) return;
 
    const stages = [
      { target: 20, duration: 800, step: 0 },
      { target: 40, duration: 1200, step: 1 },
      { target: 60, duration: 1500, step: 2 },
      { target: 75, duration: 1200, step: 3 },
      { target: 85, duration: 1000, step: 4 },
      { target: 95, duration: 800, step: 5 },
    ];
 
    let stageIndex = 0;
 
    const runStage = () => {
      if (stageIndex >= stages.length) {
        setProgress(100);
        return;
      }
 
      const { target, duration, step } = stages[stageIndex];
      setCurrentStepIndex(step);
 
      const increment = (target - progress) / (duration / 50);
      let current = progress;
 
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setProgress(target);
          clearInterval(interval);
          stageIndex++;
          setTimeout(runStage, 200);
        } else {
          setProgress(Math.floor(current));
        }
      }, 50);
 
      return () => clearInterval(interval);
    };
 
    runStage();
  }, [loading, progress]);
 
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setCv((prev) => ({ ...prev, [name]: value }));
  }, []);
 
  const generateResume = async () => {
    try {
      setLoading(true);
      setProgress(0);
      setCurrentStepIndex(0);
 
      await new Promise((resolve) => setTimeout(resolve, 1000));
 
      const response = await api.post("/generate-cv", cv);
      setLatex(response.data.latex);
 
      await new Promise((resolve) => setTimeout(resolve, 500));
 
      const pdfResponse = await api.get("/download-pdf", { responseType: "blob" });
 
      const url = window.URL.createObjectURL(pdfResponse.data);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cv.full_name || "resume"}_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
 
      setProgress(100);
      setCurrentStepIndex(5);
 
      await new Promise((resolve) => setTimeout(resolve, 500));
 
      setLoading(false);
      setToast({ open: true, message: "✨ Resume generated successfully!", severity: "success" });
 
      setTimeout(() => {
        setProgress(0);
        setCurrentStepIndex(0);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setToast({ open: true, message: "❌ Error generating resume", severity: "error" });
    }
  };
 
  if (loading) {
    return <LoadingScreen progress={progress} steps={steps} currentStepIndex={currentStepIndex} />;
  }
 
  return (
    <Box sx={{ minHeight: "100vh", background: "#f9fafb", py: { xs: 3, sm: 4, md: 6 }, px: { xs: 2, sm: 3 } }}>
      <Container maxWidth="md" sx={{ px: { xs: 0, md: 3 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 2.5, sm: 3, md: 4 }, pb: { xs: 2, sm: 2.5, md: 3 }, borderBottom: "2px solid #e5e7eb" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "32px" },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 1,
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            Create Your Professional Resume
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#64748b", whiteSpace: "normal", wordBreak: "break-word" }}>
            Fill in your information below
          </Typography>
        </Box>
 
        {/* Personal Info Form */}
        <PersonalInfo cv={cv} handleChange={handleChange} />
 
        {/* Generate Button */}
        <Box sx={{ my: { xs: 3, sm: 4, md: 5 }, display: "flex", justifyContent: "center" }}>
          <GenerateButton
            onClick={generateResume}
            disabled={loading}
            sx={{
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
              color: "white",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {loading ? "Generating..." : "Generate & Download"}
          </GenerateButton>
        </Box>
 
        {/* LaTeX Output */}
        {latex && (
          <Paper sx={{ mt: { xs: 4, sm: 5, md: 6 }, p: { xs: 1.5, sm: 2, md: 3 }, borderRadius: 2, border: "2px solid #dbeafe" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <Typography sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "bold" }}>
                Generated LaTeX Code
              </Typography>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  navigator.clipboard.writeText(latex);
                  setToast({ open: true, message: "Code copied!", severity: "success" });
                }}
                sx={{ fontSize: { xs: "11px", sm: "14px" }, width: { xs: "100%", sm: "auto" }, mt: { xs: 1, sm: 0 } }}
              >
                Copy Code
              </Button>
            </Box>
            <Box component="pre" sx={{ bgcolor: "#1e1e1e", color: "#00ff88", p: { xs: 1.5, sm: 2 }, borderRadius: 1, overflow: "auto", maxHeight: { xs: 300, sm: 500 }, fontSize: { xs: 10, sm: 12 }, fontFamily: "monospace", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {latex}
            </Box>
          </Paper>
        )}
 
        {/* Toast */}
        <ToastNotification open={toast.open} onClose={() => setToast({ ...toast, open: false })} message={toast.message} severity={toast.severity} />
      </Container>
    </Box>
  );
}
 