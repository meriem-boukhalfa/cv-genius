import { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Skills({ cv, setCv }) {


  const [skill, setSkill] = useState("");



  const addSkill = () => {

    if (!skill.trim()) return;


    setCv({
      ...cv,
      skills: [
        ...cv.skills,
        skill,
      ],
    });


    setSkill("");

  };



  const deleteSkill = (index) => {

    const updated = [...cv.skills];


    updated.splice(index, 1);


    setCv({
      ...cv,
      skills: updated,
    });

  };



  return (

    <CVCard>



      <Typography
        sx={{
          fontSize: 34,
          fontWeight: 800,
          mb: 3,
          color: "#111827",
        }}
      >
        🛠 Skills
      </Typography>




      <Stack
        direction={{
          xs:"column",
          md:"row",
        }}
        spacing={2}
        mb={3}
      >


        <TextField
          fullWidth
          label="New Skill"
          value={skill}
          onChange={(e)=>
            setSkill(e.target.value)
          }
        />



        <Button
          variant="contained"
          onClick={addSkill}
          sx={{
            px:4,
            borderRadius:"12px",
            textTransform:"none",
            fontWeight:700
          }}
        >
          Add
        </Button>



      </Stack>




      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >


        {cv.skills.map((item,index)=>(


          <Chip
            key={index}
            label={item}
            color="primary"
            onDelete={()=>
              deleteSkill(index)
            }

            sx={{
              borderRadius:"12px",
              fontWeight:600,
            }}
          />


        ))}



      </Stack>



    </CVCard>

  );
}