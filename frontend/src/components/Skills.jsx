import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
} from "@mui/material";

export default function Skills({ cv, setCv }) {

  const [skill, setSkill] = useState("");

  const addSkill = () => {

    if (!skill.trim()) return;

    setCv({
      ...cv,
      skills: [...cv.skills, skill],
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
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          🛠 Skills
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          mb={3}
        >

          <TextField
            fullWidth
            label="New Skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

          <Button
            variant="contained"
            onClick={addSkill}
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

          {cv.skills.map((item, index) => (

            <Chip
              key={index}
              label={item}
              color="primary"
              onDelete={() => deleteSkill(index)}
            />

          ))}

        </Stack>

      </CardContent>
    </Card>
  );
}