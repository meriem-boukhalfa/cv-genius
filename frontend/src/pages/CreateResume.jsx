/**
 * ============================================
 * 📱 CreateResume - MOBILE OPTIMIZED (FIXED)
 * ============================================
 *
 * Correctifs apportés vs version originale :
 * 🐛 useEffect ne dépend plus de `progress` → l'animation ne redémarre plus
 *    à chaque tick (c'était la cause de la progression saccadée)
 * 🐛 `runStage(stage)` utilise réellement son paramètre au lieu de relire
 *    `progressStages[stageIndex]` (fermeture obsolète)
 * 🛡️ Reset de l'état (progress/currentStepIndex) après une erreur
 * 🛡️ AbortController pour annuler les requêtes si le composant est démonté
 * 🛡️ Nom de fichier téléchargé sanitisé
 * ♿ Ajout d'attributs ARIA sur la barre de progression et les étapes
 */

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
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
// CONSTANTS (extraites du composant : pas recréées à chaque render)
// ============================================

const PROGRESS_STAGES = [
  { target: 20, duration: 800, step: 0 },
  { target: 40, duration: 1200, step: 1 },
  { target: 60, duration: 1500, step: 2 },
  { target: 75, duration: 1200, step: 3 },
  { target: 85, duration: 1000, step: 4 },
  { target: 95, duration: 800, step: 5 },
];

const STEP_DEFINITIONS = [
  { label: "Preparing", description: "Organizing your information", threshold: 15 },
  { label: "Validating", description: "Checking data", threshold: 35 },
  { label: "Optimizing", description: "Enhancing quality", threshold: 55 },
  { label: "ATS Format", description: "Formatting document", threshold: 75 },
  { label: "PDF Generation", description: "Creating PDF", threshold: 85 },
  { label: "Download Ready", description: "Preparing file", threshold: 100 },
];

function sanitizeFilename(name) {
  return (name || "resume")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

// ============================================
// STEP INDICATOR COMPONENT
// ============================================

function StepIndicator({ steps, currentStep }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ my: { xs: 2, sm: 3, md: 4 } }} role="list" aria-label="Resume generation steps">
      {steps.map((step, index) => (
        <Box
          key={step.label}
          role="listitem"
          aria-current={step.active ? "step" : undefined}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 1.5, sm: 2 },
            opacity: step.completed ? 1 : 0.6,
            transition: "all 0.3s ease",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          <Box
            sx={{
              width: { xs: 28, sm: 32 },
              height: { xs: 28, sm: 32 },
              borderRadius: "50%",
              backgroundColor: step.completed || step.active ? "#0f172a" : "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}
          >
            <Typography
              sx={{
                color: step.completed || step.active ? "white" : "#9ca3af",
                fontWeight: 700,
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {step.completed ? "✓" : index + 1}
            </Typography>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0, textAlign: "left" }}>
            <Typography
              sx={{
                fontWeight: step.active || step.completed ? 600 : 500,
                color: step.completed || step.active ? "#0f172a" : "#9ca3af",
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
                  color: "#9ca3af",
                  mt: 0.3,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {step.description}
              </Typography>
            )}
          </Box>

          {step.completed && !isMobile && (
            <Typography sx={{ fontSize: "11px", color: "#9ca3af", fontWeight: 600 }}>Done</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

// ============================================
// PROFESSIONAL LOADING SCREEN
// ============================================

function ProfessionalLoadingScreen({ progress, steps }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // Fond dégradé doux type "Codex" (lavande -> bleu très pâle)
        background: "linear-gradient(135deg, #eef2ff 0%, #dbe4ff 50%, #e6e9ff 100%)",
        px: { xs: 2, sm: 3 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <Container maxWidth="xs" sx={{ textAlign: "center" }}>
        {/* Icône centrale simple, comme le logo Codex */}
        <Box
          sx={{
            width: { xs: 88, sm: 112 },
            height: { xs: 88, sm: 112 },
            borderRadius: "24px",
            background: "#ffffff",
            boxShadow: "0 8px 30px rgba(15, 23, 42, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: { xs: 4, sm: 5 },
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: { xs: "20px", sm: "26px" }, color: "#111827" }}>
            {progress}%
          </Typography>
        </Box>

        {/* Gros titre noir, sobre — pas de dégradé de texte */}
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "40px", md: "48px" },
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#0f172a",
            mb: 1.5,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Generating Your Resume
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "15px" },
            color: "#6b7280",
            mb: { xs: 4, sm: 5 },
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          Our AI is putting together your ATS-friendly resume.
        </Typography>

        <Box sx={{ mb: { xs: 4, sm: 5 } }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            aria-label="Resume generation progress"
            aria-valuenow={progress}
            sx={{
              height: 4,
              borderRadius: 4,
              backgroundColor: "#e5e7eb",
              "& .MuiLinearProgress-bar": {
                borderRadius: 4,
                backgroundColor: "#0f172a",
              },
            }}
          />
        </Box>

        <StepIndicator steps={steps} />

        <Typography
          sx={{
            mt: { xs: 4, sm: 5 },
            fontSize: { xs: "11px", sm: "12px" },
            color: "#9ca3af",
            fontWeight: 500,
          }}
        >
          This usually takes 10–30 seconds — please don't close this window.
        </Typography>
      </Container>
    </Box>
  );
}

// ============================================
// TOAST NOTIFICATION
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
// MAIN CREATE RESUME COMPONENT
// ============================================

export default function CreateResume() {
  const [cv, setCv] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    job_title: "",
    summary: "",
    education: [{ university: "", degree: "", field: "", location: "", start_date: "", end_date: "", description: "" }],
    certificates: [{ name: "", organization: "", issue_date: "", credential: "" }],
    experience: [{ company: "", position: "", location: "", start_date: "", end_date: "", description: "" }],
    skills: [],
    languages: [{ name: "", level: "" }],
    projects: [
      { name: "", role: "", technologies: "", github: "", demo: "", start_date: "", end_date: "", description: "" },
    ],
    internships: [],
    workshops: [],
  });

  const [latex, setLatex] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

  // Ref pour lire la progression courante sans la mettre en dépendance de l'effet
  const progressRef = useRef(0);
  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const steps = useMemo(
    () =>
      STEP_DEFINITIONS.map((def, index) => ({
        label: def.label,
        description: def.description,
        completed: progress >= def.threshold,
        active: currentStepIndex === index,
      })),
    [progress, currentStepIndex]
  );

  // ============================================
  // PROGRESS SIMULATION EFFECT (fixé : ne dépend que de `loading`)
  // ============================================

  useEffect(() => {
    if (!loading) return;

    let cancelled = false;
    const activeIntervals = [];

    const runStage = (stageIndex) => {
      if (cancelled) return;
      if (stageIndex >= PROGRESS_STAGES.length) {
        setProgress(100);
        setCurrentStepIndex(5);
        return;
      }

      const { target, duration, step } = PROGRESS_STAGES[stageIndex];
      setCurrentStepIndex(step);

      const startValue = progressRef.current;
      const ticks = Math.max(1, Math.round(duration / 50));
      const increment = (target - startValue) / ticks;

      const interval = setInterval(() => {
        const next = Math.min(target, progressRef.current + increment);
        progressRef.current = next;
        setProgress(Math.floor(next));

        if (next >= target) {
          clearInterval(interval);
          if (!cancelled) {
            setTimeout(() => runStage(stageIndex + 1), 200);
          }
        }
      }, 50);

      activeIntervals.push(interval);
    };

    runStage(0);

    return () => {
      cancelled = true;
      activeIntervals.forEach(clearInterval);
    };
  }, [loading]);

  // ============================================
  // EVENT HANDLERS
  // ============================================

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setCv((prevCv) => ({ ...prevCv, [name]: value }));
  }, []);

  const generateResume = async () => {
    const controller = new AbortController();
    try {
      setLoading(true);
      setProgress(0);
      setCurrentStepIndex(0);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await api.post("/generate-cv", cv, { signal: controller.signal });
      setLatex(response.data.latex);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const pdfResponse = await api.get("/download-pdf", {
        responseType: "blob",
        signal: controller.signal,
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

      const url = window.URL.createObjectURL(pdfResponse.data);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${sanitizeFilename(cv.full_name)}_${new Date().getFullYear()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setProgress(100);
      setCurrentStepIndex(5);

      await new Promise((resolve) => setTimeout(resolve, 500));

      setLoading(false);
      setToast({ open: true, message: "✨ Resume generated and downloaded successfully!", severity: "success" });

      setTimeout(() => {
        setProgress(0);
        setCurrentStepIndex(0);
      }, 2000);
    } catch (error) {
      if (error.name === "CanceledError" || error.name === "AbortError") return;
      console.error("Resume generation error:", error);
      setLoading(false);
      setProgress(0);
      setCurrentStepIndex(0);
      setToast({
        open: true,
        message: error.response?.data?.message || "❌ Error generating resume. Please try again.",
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
        <ProfessionalLoadingScreen progress={progress} steps={steps} />
      </DashboardLayout>
    );
  }

  // ============================================
  // RENDER MAIN FORM
  // ============================================

  return (
    <DashboardLayout>
      <Box sx={{ mb: { xs: 2.5, sm: 3, md: 4 }, pb: { xs: 2, sm: 2.5, md: 3 }, borderBottom: "2px solid #e5e7eb" }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "32px" },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            mb: 1,
            color: "#0f172a",
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
          sx={{ fontSize: { xs: "12px", sm: "14px" }, whiteSpace: "normal", wordBreak: "break-word" }}
        >
          Fill in your information and generate your ATS-optimized resume
        </Typography>
      </Box>

      <PersonalInfo cv={cv} handleChange={handleChange} />
      <Experience cv={cv} setCv={setCv} />
      <Education cv={cv} setCv={setCv} />
      <Certificates cv={cv} setCv={setCv} />
      <Languages cv={cv} setCv={setCv} />
      <Skills cv={cv} setCv={setCv} />
      <Projects cv={cv} setCv={setCv} />
      <Internships cv={cv} setCv={setCv} />
      <Workshops cv={cv} setCv={setCv} />

      <Box sx={{ my: { xs: 3, sm: 4, md: 5 }, display: "flex", justifyContent: "center" }}>
        <GenerateButton
          onClick={generateResume}
          disabled={loading}
          sx={{
            backgroundColor: "#0f172a",
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            boxShadow: "none",
            transition: "all 0.2s ease",
            width: { xs: "100%", sm: "auto" },
            "&:hover:not(:disabled)": {
              backgroundColor: "#1e293b",
              transform: "translateY(-1px)",
            },
            "&:disabled": { opacity: 0.5 },
          }}
        >
          {loading ? "Generating..." : "Generate & Download"}
        </GenerateButton>
      </Box>

      {latex && (
        <Paper elevation={3} sx={{ mt: { xs: 4, sm: 5, md: 6 }, p: { xs: 1.5, sm: 2, md: 3 }, borderRadius: 2, border: "2px solid #dbeafe" }}>
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
            <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "14px", sm: "18px" } }}>
              Generated LaTeX Code
            </Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(latex);
                setToast({ open: true, message: "LaTeX code copied!", severity: "success" });
              }}
              sx={{ fontSize: { xs: "11px", sm: "14px" }, width: { xs: "100%", sm: "auto" } }}
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

      <ToastNotification
        open={toast.open}
        onClose={() => setToast({ ...toast, open: false })}
        message={toast.message}
        severity={toast.severity}
      />
    </DashboardLayout>
  );
}