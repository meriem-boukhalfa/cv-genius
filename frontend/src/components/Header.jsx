import {
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";


export default function Header({ onMenuClick }) {
  return (
    <Box sx={{ mb: 4 }}>

      <Box
        sx={{
          background:
            "linear-gradient(135deg,#0F172A,#111827,#1E293B)",

          borderRadius: "24px",

          px: {
            xs: 2,
            md: 3,
          },

          py: 2.5,

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          boxShadow:
            "0 15px 35px rgba(0,0,0,.25)",

          border:
            "1px solid rgba(255,255,255,.08)",
        }}
      >


        <Box
          sx={{
            display:"flex",
            alignItems:"center",
            gap:2,
          }}
        >


          <IconButton
            onClick={onMenuClick}
            sx={{
              display:{
                xs:"flex",
                md:"none",
              },

              width:56,
              height:56,

              borderRadius:"18px",

              background:
                "linear-gradient(135deg,#2BE6C1,#60A5FA)",

              color:"#fff",

              boxShadow:
                "0 8px 25px rgba(43,230,193,.35)",

              "&:hover":{
                transform:"scale(1.05)",
                background:
                  "linear-gradient(135deg,#60A5FA,#2BE6C1)",
              },

              transition:"0.3s",
            }}
          >
            <MenuRoundedIcon sx={{fontSize:30}}/>
          </IconButton>



          <Box>

            <Typography
              sx={{
                fontWeight:900,
                lineHeight:1,
                letterSpacing:1,

                fontSize:{
                  xs:30,
                  md:44,
                },

                background:
                  "linear-gradient(90deg,#2BE6C1,#60A5FA)",

                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
              }}
            >
              CV GENIUS
            </Typography>



            <Typography
              sx={{
                color:"#CBD5E1",

                fontSize:{
                  xs:13,
                  md:16,
                },

                mt:.6,

                fontWeight:500,
              }}
            >
              Build your professional ATS resume
            </Typography>


          </Box>

        </Box>




        <Avatar
          sx={{
            width:{
              xs:58,
              md:68,
            },

            height:{
              xs:58,
              md:68,
            },

            background:
              "linear-gradient(135deg,#2BE6C1,#60A5FA)",

            color:"#fff",

            boxShadow:
              "0 10px 25px rgba(96,165,250,.35)",
          }}
        >

          <AutoAwesomeRoundedIcon
            sx={{
              fontSize:35
            }}
          />

        </Avatar>



      </Box>

    </Box>
  );
}