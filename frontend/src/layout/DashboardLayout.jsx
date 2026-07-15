import { useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Sidebar from "../components/Sidebar";

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
      {/* ================= زر القائمة للهاتف ================= */}

      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },

          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 3000,

          width: 58,
          height: 58,

          borderRadius: "18px",

          background:
            "linear-gradient(135deg,#2BE6C1,#60A5FA)",

          color: "#fff",

          boxShadow:
            "0 10px 30px rgba(43,230,193,.35)",

          transition: "0.3s",

          "&:hover": {
            transform: "scale(1.08)",
            background:
              "linear-gradient(135deg,#60A5FA,#2BE6C1)",
          },
        }}
      >
        <MenuRoundedIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {/* ================= Sidebar للحاسوب ================= */}

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },

          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      {/* ================= Sidebar للهاتف ================= */}

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 290,
            bgcolor: "#111827",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "#fff",
              bgcolor: "rgba(255,255,255,.08)",

              "&:hover": {
                bgcolor: "#2BE6C1",
                color: "#111827",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Sidebar />
      </Drawer>

      {/* ================= المحتوى ================= */}

      <Box
        sx={{
          flex: 1,
          width: "100%",

          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          pt: {
            xs: 11,
            md: 4,
          },

          overflowY: "auto",

          transition: ".3s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}