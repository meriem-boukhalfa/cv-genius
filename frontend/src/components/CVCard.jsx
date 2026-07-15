import { Card, CardContent } from "@mui/material";

export default function CVCard({ children }) {
  return (
    <Card
      sx={{
        borderRadius: "28px",
        mb: 4,

        background:
          "linear-gradient(135deg,#FFFFFF 0%,#F5FBFF 45%,#ECFEFF 100%)",

        border: "1px solid rgba(96,165,250,.18)",

        boxShadow: "0 18px 45px rgba(96,165,250,.12)",

        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "#60A5FA",
          filter: "blur(120px)",
          opacity: 0.15,
          top: -120,
          right: -120,
          animation: "blobMove 10s ease-in-out infinite alternate",
        },

        "@keyframes blobMove": {
          from: {
            transform: "translate(0px,0px)",
          },
          to: {
            transform: "translate(-50px,50px)",
          },
        },
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}