import { useState } from "react";

import {
  Paper,
  Typography,
  Box,
  CircularProgress,
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

  const handleChange = (e) => {
    setCv({
      ...cv,
      [e.target.name]: e.target.value,
    });
  };

  const generateResume = async () => {
    try {
      setLoading(true);

      const response = await api.post("/generate-cv", cv);

      setLatex(response.data.latex);

      const pdfResponse = await api.get("/download-pdf", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(pdfResponse.data);

      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      setLoading(false);

      alert("Resume generated successfully!");
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 3,
          }}
        >
          <CircularProgress size={70} />

          <Typography
            variant="h4"
            fontWeight="bold"
            mt={4}
          >
            Your Resume Is Being Generated
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            mt={2}
            maxWidth={600}
          >
            Our AI is creating your professional ATS-friendly resume.
            Please wait a few seconds while we prepare your PDF.
          </Typography>

          <Box mt={5}>
            <Typography>✅ Optimizing resume content</Typography>
            <Typography>✅ Improving ATS compatibility</Typography>
            <Typography>✅ Generating professional PDF</Typography>
          </Box>
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PersonalInfo
        cv={cv}
        handleChange={handleChange}
      />

      <Experience
        cv={cv}
        setCv={setCv}
      />

      <Education
        cv={cv}
        setCv={setCv}
      />

      <Certificates
        cv={cv}
        setCv={setCv}
      />

      <Languages
        cv={cv}
        setCv={setCv}
      />

      <Skills
        cv={cv}
        setCv={setCv}
      />

      <Projects
        cv={cv}
        setCv={setCv}
      />

      <Internships
        cv={cv}
        setCv={setCv}
      />

      <Workshops
        cv={cv}
        setCv={setCv}
      />

      <GenerateButton onClick={generateResume} />

      {latex && (
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
          >
            Generated LaTeX
          </Typography>

          <Box
            component="pre"
            sx={{
              bgcolor: "#1e1e1e",
              color: "#00ff88",
              p: 2,
              borderRadius: 2,
              overflow: "auto",
              maxHeight: 500,
              fontSize: 13,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {latex}
          </Box>
        </Paper>
      )}
    </DashboardLayout>
  );
}