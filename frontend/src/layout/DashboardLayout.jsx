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
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F4F7FB",
      }}
    >
      {/* ================= Sidebar للحاسوب ================= */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Box>

      {/* ================= Sidebar للهاتف ================= */}

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

      {/* ================= Main ================= */}

      <Box
        sx={{
          flex: 1,
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