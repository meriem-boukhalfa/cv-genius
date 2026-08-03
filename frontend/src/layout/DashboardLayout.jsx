import { useState } from "react";
import { Box, Drawer } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "100vh",
        width: "100%",
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
          zIndex: 0,
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
          zIndex: 0,
        },
      }}
    >
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 320,
          flexShrink: 0,
          height: "100vh",
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
            width: 300,
            maxWidth: "80%",
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
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Header onMenuClick={() => setOpen(true)} />

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}