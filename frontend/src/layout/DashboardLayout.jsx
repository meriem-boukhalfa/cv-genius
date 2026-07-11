import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          p: 4,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}