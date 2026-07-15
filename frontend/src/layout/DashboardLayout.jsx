import { useState } from "react";

import {
  Box,
  Drawer,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "#2BE6C1",
          filter: "blur(180px)",
          opacity: 0.18,
          top: -120,
          left: -120,
          animation: "blob1 18s ease-in-out infinite alternate",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "#60A5FA",
          filter: "blur(180px)",
          opacity: 0.18,
          bottom: -120,
          right: -120,
          animation: "blob2 20s ease-in-out infinite alternate",
        },

        "@keyframes blob1": {
          "0%": {
            transform: "translate(0px,0px)",
          },
          "100%": {
            transform: "translate(180px,120px)",
          },
        },

        "@keyframes blob2": {
          "0%": {
            transform: "translate(0px,0px)",
          },
          "100%": {
            transform: "translate(-180px,-120px)",
          },
        },
      }}
    >
      {/* Desktop Sidebar */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Sidebar />
      </Box>

      {/* Mobile Sidebar */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            bgcolor: "#111827",
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}

      <Box
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Header onMenuClick={() => setOpen(true)} />

        {children}
      </Box>
    </Box>
  );
}