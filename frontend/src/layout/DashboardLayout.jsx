import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          p: {
            xs: 2,
            md: 4,
          },
          overflowY: "auto",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}