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
// STEP INDICATOR COMPONENT
// ============================================

function StepIndicator({ steps, currentStep }) {
  return (
    <Box sx={{ my: 4 }}>
      {steps.map((step, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            opacity: step.completed ? 1 : 0.6,
            transition: "all 0.3s ease",
          }}
        >
          {/* Step Circle */}
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: step.completed
                ? "linear-gradient(135deg, #10b981, #059669)"
                : "linear-gradient(135deg, #3b82f6, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
              boxShadow: step.completed
                ? "0 5px 15px rgba(16, 185, 129, 0.3)"
                : "0 5px 15px rgba(59, 130, 246, 0.3)",
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
                fontSize: "18px",
              }}
            >
              {step.completed ? "✓" : index + 1}
            </Typography>
          </Box>

          {/* Step Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontWeight: step.active || step.completed ? 600 : 500,
                color: step.completed ? "#10b981" : "inherit",
                fontSize: "14px",
              }}
            >
              {step.label}
            </Typography>
            {step.active && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#64748b",
                  mt: 0.5,
                }}
              >
                {step.description}
              </Typography>
            )}
          </Box>

          {/* Step Status */}
          {step.completed && (
            <Typography sx={{ fontSize: "12px", color: "#10b981", fontWeight: 600 }}>
              Done
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

// ============================================
// PROFESSIONAL LOADING SCREEN
// ============================================

function ProfessionalLoadingScreen({ progress, steps, currentStepIndex }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        px: 3,
        py: 6,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Animated Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "300px",
          height: "300px",
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
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(16, 185, 129, 0.1)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Main Content */}
      <Container maxWidth="sm">
        {/* Header Icon */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 4,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 140,
              height: 140,
            }}
          >
            {/* Outer Ring */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "3px solid rgba(59, 130, 246, 0.2)",
              }}
            />

            {/* Animated Ring */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "3px solid transparent",
                borderTop: "3px solid #3b82f6",
                borderRight: "3px solid #2563eb",
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
                boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "32px",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                {progress}%
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "rgba(255, 255, 255, 0.8)",
                  mt: 0.5,
                }}
              >
                Complete
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          Generating Your Resume
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#64748b",
            textAlign: "center",
            mb: 4,
            position: "relative",
            zIndex: 1,
          }}
        >
          Our AI is creating your professional ATS-friendly resume. Please wait...
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mb: 4, position: "relative", zIndex: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
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

        {/* Tip */}
        <Box
          sx={{
            mt: 4,
            p: 2,
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
              fontSize: "12px",
              color: "#3b82f6",
              fontWeight: 500,
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
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
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
      label: "Preparing Document",
      description: "Organizing your information",
      completed: progress > 15,
      active: currentStepIndex === 0,
    },
    {
      label: "Validating Information",
      description: "Checking data accuracy",
      completed: progress > 35,
      active: currentStepIndex === 1,
    },
    {
      label: "Optimizing Content",
      description: "Enhancing resume quality",
      completed: progress > 55,
      active: currentStepIndex === 2,
    },
    {
      label: "Improving ATS Compatibility",
      description: "Formatting for ATS systems",
      completed: progress > 75,
      active: currentStepIndex === 3,
    },
    {
      label: "Creating PDF",
      description: "Generating your document",
      completed: progress > 85,
      active: currentStepIndex === 4,
    },
    {
      label: "Finalizing Download",
      description: "Preparing for download",
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

    // Simulate natural progress curve
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

      // Simulate API call with progress
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await api.post("/generate-cv", cv);
      setLatex(response.data.latex);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const pdfResponse = await api.get("/download-pdf", {
        responseType: "blob",
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

      // Download PDF
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

      // Reset after 2 seconds
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
  // RENDER MAIN FORM
  // ============================================

  return (
    <DashboardLayout>
      {/* Header Section */}
      <Box
        sx={{
          mb: 4,
          pb: 3,
          borderBottom: "2px solid #e5e7eb",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          Create Your Professional Resume
        </Typography>
        <Typography variant="body2" color="text.secondary">
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

      {/* Generate Button */}
      <Box sx={{ my: 4 }}>
        <GenerateButton
          onClick={generateResume}
          disabled={loading}
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            "&:hover:not(:disabled)": {
              transform: "translateY(-2px)",
              boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)",
            },
            "&:disabled": {
              opacity: 0.6,
            },
          }}
        >
          {loading ? "Generating Resume..." : "Generate & Download Resume"}
        </GenerateButton>
      </Box>

      {/* LaTeX Output Section */}
      {latex && (
        <Paper
          elevation={3}
          sx={{
            mt: 6,
            p: 3,
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
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Generated LaTeX Code
            </Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(latex);
                setToast({
                  open: true,
                  message: "LaTeX code copied to clipboard!",
                  severity: "success",
                });
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
              p: 2,
              borderRadius: 1,
              overflow: "auto",
              maxHeight: 500,
              fontSize: 12,
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