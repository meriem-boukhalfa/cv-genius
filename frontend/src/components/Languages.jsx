import {
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Languages({ cv, setCv }) {


  const addLanguage = () => {
    setCv({
      ...cv,
      languages: [
        ...cv.languages,
        {
          name: "",
          level: "",
        },
      ],
    });
  };



  const handleLanguageChange = (index, field, value) => {

    const updated = [...cv.languages];

    updated[index][field] = value;

    setCv({
      ...cv,
      languages: updated,
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
        🌍 Languages
      </Typography>



      {cv.languages.map((language, index) => (


        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Language {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Language"
                value={language.name}
                onChange={(e)=>
                  handleLanguageChange(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12, md:6 }}>
              <TextField
                select
                fullWidth
                label="Level"
                value={language.level}
                onChange={(e)=>
                  handleLanguageChange(
                    index,
                    "level",
                    e.target.value
                  )
                }
              >

                <MenuItem value="Native">
                  Native
                </MenuItem>

                <MenuItem value="Fluent">
                  Fluent
                </MenuItem>

                <MenuItem value="Advanced">
                  Advanced
                </MenuItem>

                <MenuItem value="Intermediate">
                  Intermediate
                </MenuItem>

                <MenuItem value="Beginner">
                  Beginner
                </MenuItem>

              </TextField>
            </Grid>


          </Grid>


        </div>


      ))}




      <Button
        variant="contained"
        onClick={addLanguage}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700
        }}
      >
        + Add Language
      </Button>



    </CVCard>

  );
}