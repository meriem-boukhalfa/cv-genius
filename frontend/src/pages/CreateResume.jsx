import { useState, useCallback, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  CircularProgress,
  LinearProgress,
  Alert,
  Snackbar,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DashboardLayout from "../layout/DashboardLayout";
import PersonalInfo from "../components/PersonalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GenerateButton from "../components/GenerateButton";
import Certificates from "../components/Certificates";
import Languages from "../components/Languages";
import Internships from "../components/Internships";
import Workshops from "../components/Workshops";
import api from "../services/api";

// ============================================
// STEP INDICATOR COMPONENT - MOBILE OPTIMIZED
// ============================================

function StepIndicator({ steps, currentStep }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ my: { xs: 2, sm: 3, md: 4 } }}>
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 1.5, sm: 2 },
            opacity: step.completed ? 1 : 0.6,
            transition: "all 0.3s ease",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          {/* Step Circle - RESPONSIVE */}
          <Box
            sx={{
              width: { xs: 32, sm: 40 },
              height: { xs: 32, sm: 40 },
              borderRadius: "50%",
              background: step.completed
                ? "linear-gradient(135deg, #10b981, #059669)"
                : "linear-gradient(135deg, #3b82f6, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: step.completed
                ? "0 2px 8px rgba(16, 185, 129, 0.3)"
                : "0 2px 8px rgba(59, 130, 246, 0.3)",
              transition: "all 0.3s ease",
              animation: step.active ? "pulse 1.5s ease-in-out infinite" : "none",
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.1)" },
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "18px" },
              }}
            >
              {step.completed ? "✓" : index + 1}
            </Typography>
          </Box>

          {/* Step Content - RESPONSIVE */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: step.active || step.completed ? 600 : 500,
                color: step.completed ? "#10b981" : "inherit",
                fontSize: { xs: "12px", sm: "14px" },
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {step.label}
            </Typography>
            {step.active && !isMobile && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748b",
                  mt: 0.3,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {step.description}
              </Typography>
            )}
          </Box>

          {/* Step Status - HIDE ON MOBILE */}
          {step.completed && !isMobile && (
            <Typography sx={{ fontSize: "11px", color: "#10b981", fontWeight: 600 }}>
              Done
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

// ============================================
// PROFESSIONAL LOADING SCREEN - MOBILE OPTIMIZED
// ============================================

function ProfessionalLoadingScreen({ progress, steps, currentStepIndex }) {
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
        overflow: "hidden",
      }}
    >
      {/* Background Animated Circles - SMALLER ON MOBILE */}
      {!isMobile && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: { xs: 150, sm: 300 },
              height: { xs: 150, sm: 300 },
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.1)",
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(20px)" },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: { xs: 120, sm: 250 },
              height: { xs: 120, sm: 250 },
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.1)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />
        </>
      )}

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Icon - RESPONSIVE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, sm: 4 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 100, sm: 140 },
              height: { xs: 100, sm: 140 },
            }}
          >
            {/* Outer Ring */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid rgba(59, 130, 246, 0.2)",
              }}
            />

            {/* Animated Ring */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTop: "2px solid #3b82f6",
                borderRight: "2px solid #2563eb",
                animation: "spin 2s linear infinite",
                "@keyframes spin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />

            {/* Center Progress Circle */}
            <Box
              sx={{
                position: "absolute",
                inset: 10,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "24px", sm: "32px" },
                  color: "white",
                  lineHeight: 1,
                }}
              >
                {progress}%
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "11px" },
                  color: "rgba(255, 255, 255, 0.8)",
                  mt: 0.3,
                }}
              >
                Complete
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Title - RESPONSIVE */}
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "32px" },
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
            position: "relative",
            zIndex: 1,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Generating Your Resume
        </Typography>

        {/* Subtitle - RESPONSIVE */}
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "#64748b",
            textAlign: "center",
            mb: { xs: 3, sm: 4 },
            position: "relative",
            zIndex: 1,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Our AI is creating your professional ATS-friendly resume. Please wait...
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mb: { xs: 3, sm: 4 }, position: "relative", zIndex: 1 }}>
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
        </Box>

        {/* Step Indicators */}
        <StepIndicator steps={steps} currentStep={currentStepIndex} />

        {/* Tip - RESPONSIVE */}
        <Box
          sx={{
            mt: { xs: 3, sm: 4 },
            p: { xs: 1.5, sm: 2 },
            background: "rgba(59, 130, 246, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            borderRadius: 2,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "11px", sm: "12px" },
              color: "#3b82f6",
              fontWeight: 500,
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            💡 This usually takes 10-30 seconds. Please don't close this window.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function ToastNotification({ open, onClose, message, severity = "success" }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
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
// MAIN CREATE RESUME COMPONENT
// ============================================

export default function CreateResume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ============================================
  // STATE MANAGEMENT
  // ============================================

  const [cv, setCv] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    job_title: "",
    summary: "",
    education: [
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
    certificates: [
      {
        name: "",
        organization: "",
        issue_date: "",
        credential: "",
      },
    ],
    experience: [
      {
        company: "",
        position: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
      },
    ],
    skills: [],
    languages: [
      {
        name: "",
        level: "",
      },
    ],
    projects: [
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
    internships: [],
    workshops: [],
  });

  const [latex, setLatex] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Define loading steps
  const steps = [
    {
      label: "Preparing",
      description: "Organizing your information",
      completed: progress > 15,
      active: currentStepIndex === 0,
    },
    {
      label: "Validating",
      description: "Checking data",
      completed: progress > 35,
      active: currentStepIndex === 1,
    },
    {
      label: "Optimizing",
      description: "Enhancing quality",
      completed: progress > 55,
      active: currentStepIndex === 2,
    },
    {
      label: "ATS Format",
      description: "Formatting document",
      completed: progress > 75,
      active: currentStepIndex === 3,
    },
    {
      label: "PDF Generation",
      description: "Creating PDF",
      completed: progress > 85,
      active: currentStepIndex === 4,
    },
    {
      label: "Download Ready",
      description: "Preparing file",
      completed: progress >= 100,
      active: currentStepIndex === 5,
    },
  ];

  // ============================================
  // PROGRESS SIMULATION EFFECT
  // ============================================

  useEffect(() => {
    if (!loading) return;

    const intervals = [];

    const progressStages = [
      { target: 20, duration: 800, step: 0 },
      { target: 40, duration: 1200, step: 1 },
      { target: 60, duration: 1500, step: 2 },
      { target: 75, duration: 1200, step: 3 },
      { target: 85, duration: 1000, step: 4 },
      { target: 95, duration: 800, step: 5 },
    ];

    let stageIndex = 0;

    const runStage = (stage) => {
      if (stageIndex >= progressStages.length) {
        setProgress(100);
        setCurrentStepIndex(5);
        return;
      }

      const { target, duration, step } = progressStages[stageIndex];
      setCurrentStepIndex(step);

      const increment = (target - progress) / (duration / 50);
      let current = progress;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setProgress(target);
          clearInterval(interval);
          stageIndex++;
          setTimeout(() => runStage(stage), 200);
        } else {
          setProgress(Math.floor(current));
        }
      }, 50);

      intervals.push(interval);
    };

    runStage(0);

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [loading, progress]);

  // ============================================
  // EVENT HANDLERS
  // ============================================

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setCv((prevCv) => ({
      ...prevCv,
      [name]: value,
    }));
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

      const pdfResponse = await api.get("/download-pdf", {
        responseType: "blob",
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

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
      setToast({
        open: true,
        message: "✨ Resume generated and downloaded successfully!",
        severity: "success",
      });

      setTimeout(() => {
        setProgress(0);
        setCurrentStepIndex(0);
      }, 2000);
    } catch (error) {
      console.error("Resume generation error:", error);
      setLoading(false);
      setToast({
        open: true,
        message:
          error.response?.data?.message ||
          "❌ Error generating resume. Please try again.",
        severity: "error",
      });
    }
  };

  // ============================================
  // RENDER LOADING SCREEN
  // ============================================

  if (loading) {
    return (
      <DashboardLayout>
        <ProfessionalLoadingScreen
          progress={progress}
          steps={steps}
          currentStepIndex={currentStepIndex}
        />
      </DashboardLayout>
    );
  }

  // ============================================
  // RENDER MAIN FORM - MOBILE OPTIMIZED
  // ============================================

  return (
    <DashboardLayout>
      {/* Header Section - RESPONSIVE */}
      <Box
        sx={{
          mb: { xs: 2.5, sm: 3, md: 4 },
          pb: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: "2px solid #e5e7eb",
        }}
      >
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
            overflowWrap: "break-word",
            wordBreak: "break-word",
            maxWidth: "100%",
          }}
        >
          Create Your Professional Resume
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Fill in your information and generate your ATS-optimized resume
        </Typography>
      </Box>

      {/* Form Sections */}
      <PersonalInfo cv={cv} handleChange={handleChange} />
      <Experience cv={cv} setCv={setCv} />
      <Education cv={cv} setCv={setCv} />
      <Certificates cv={cv} setCv={setCv} />
      <Languages cv={cv} setCv={setCv} />
      <Skills cv={cv} setCv={setCv} />
      <Projects cv={cv} setCv={setCv} />
      <Internships cv={cv} setCv={setCv} />
      <Workshops cv={cv} setCv={setCv} />

      {/* Generate Button - RESPONSIVE */}
      <Box
        sx={{
          my: { xs: 3, sm: 4, md: 5 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <GenerateButton
          onClick={generateResume}
          disabled={loading}
          sx={{
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            width: { xs: "100%", sm: "auto" },
            "&:hover:not(:disabled)": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
            },
            "&:disabled": {
              opacity: 0.6,
            },
          }}
        >
          {loading ? "Generating..." : "Generate & Download"}
        </GenerateButton>
      </Box>

      {/* LaTeX Output Section - RESPONSIVE */}
      {latex && (
        <Paper
          elevation={3}
          sx={{
            mt: { xs: 4, sm: 5, md: 6 },
            p: { xs: 1.5, sm: 2, md: 3 },
            borderRadius: 2,
            border: "2px solid #dbeafe",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
              }}
            >
              Generated LaTeX Code
            </Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(latex);
                setToast({
                  open: true,
                  message: "LaTeX code copied!",
                  severity: "success",
                });
              }}
              sx={{
                fontSize: { xs: "11px", sm: "14px" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Copy Code
            </Button>
          </Box>

          <Box
            component="pre"
            sx={{
              bgcolor: "#1e1e1e",
              color: "#00ff88",
              p: { xs: 1.5, sm: 2 },
              borderRadius: 1,
              overflow: "auto",
              maxHeight: { xs: 300, sm: 500 },
              fontSize: { xs: 10, sm: 12 },
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              border: "1px solid #333",
            }}
          >
            {latex}
          </Box>
        </Paper>
      )}

      {/* Toast Notification */}
      <ToastNotification
        open={toast.open}
        onClose={() => setToast({ ...toast, open: false })}
        message={toast.message}
        severity={toast.severity}
      />
    </DashboardLayout>
  );
}