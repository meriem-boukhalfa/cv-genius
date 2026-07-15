import { Button } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function GenerateButton({ onClick }) {
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<AutoAwesomeIcon />}
      onClick={onClick}
      sx={{
        mt: 4,

        py: 1.6,
        px: 6,

        borderRadius: "18px",

        fontSize: "16px",
        fontWeight: 800,

        textTransform: "none",

        background:
          "linear-gradient(135deg,#60A5FA 0%,#2BE6C1 100%)",

        boxShadow:
          "0 15px 35px rgba(96,165,250,.35)",

        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-3px)",

          boxShadow:
            "0 20px 45px rgba(96,165,250,.45)",

          background:
            "linear-gradient(135deg,#3B82F6 0%,#14B8A6 100%)",
        },
      }}
    >
      Generate ATS Resume
    </Button>
  );
}