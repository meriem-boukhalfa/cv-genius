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
        py: 1.5,
        px: 5,
        borderRadius: 3,
      }}
    >
      Generate ATS Resume
    </Button>
  );
}