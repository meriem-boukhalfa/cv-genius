import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Experience({ cv, setCv }) {


  const addExperience = () => {
    setCv({
      ...cv,
      experience: [
        ...cv.experience,
        {
          company: "",
          position: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };



  const handleExperienceChange = (index, field, value) => {

    const updated = [...cv.experience];

    updated[index][field] = value;

    setCv({
      ...cv,
      experience: updated,
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
        💼 Experience
      </Typography>



      {cv.experience.map((exp, index) => (

        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Experience {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Company"
                value={exp.company}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "company",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Position"
                value={exp.position}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "position",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="Location"
                value={exp.location}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "location",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Start Date"
                placeholder="01/2022"
                value={exp.start_date}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "start_date",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="End Date"
                placeholder="Present"
                value={exp.end_date}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "end_date",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={exp.description}
                onChange={(e)=>
                  handleExperienceChange(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
            </Grid>


          </Grid>


        </div>

      ))}



      <Button
        variant="contained"
        onClick={addExperience}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700
        }}
      >
        + Add Experience
      </Button>



    </CVCard>

  );
}