import { useState } from "react";

import {
  Paper,
  Typography,
  Box,
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
  });

  const [latex, setLatex] = useState("");

  const handleChange = (e) => {
    setCv({
      ...cv,
      [e.target.name]: e.target.value,
    });
  };

  const generateResume = async () => {
    try {
    // إنشاء الـ CV
       const response = await api.post("/generate-cv", cv);

       setLatex(response.data.latex);

    // تحميل الـ PDF
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

       alert("Resume generated successfully!");

  }    catch (error) {
       console.error(error);
       alert("Something went wrong.");
  }
};
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