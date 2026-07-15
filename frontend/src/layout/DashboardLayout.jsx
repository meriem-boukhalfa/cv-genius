import { useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
      }}
    >
      {/* زر القائمة للهاتف */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          position: "fixed",
          top: 15,
          left: 15,
          zIndex: 2000,
          bgcolor: "#111827",
          color: "#fff",
          "&:hover": {
            bgcolor: "#1f2937",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar للحاسوب */}
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

      {/* Sidebar للهاتف */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: "#111827",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Sidebar />
      </Drawer>

      {/* المحتوى */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          p: {
            xs: 2,
            md: 4,
          },
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}