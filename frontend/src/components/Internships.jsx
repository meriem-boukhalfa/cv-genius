import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Internships({ cv, setCv }) {


  const addInternship = () => {
    setCv({
      ...cv,
      internships: [
        ...cv.internships,
        {
          company: "",
          role: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };



  const handleInternshipChange = (index, field, value) => {

    const updated = [...cv.internships];

    updated[index][field] = value;

    setCv({
      ...cv,
      internships: updated,
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
        🏢 Internships
      </Typography>



      {cv.internships.map((internship, index) => (

        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Internship {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Company"
                value={internship.company}
                onChange={(e)=>
                  handleInternshipChange(
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
                label="Role / Position"
                value={internship.role}
                onChange={(e)=>
                  handleInternshipChange(
                    index,
                    "role",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="Location"
                value={internship.location}
                onChange={(e)=>
                  handleInternshipChange(
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
                placeholder="06/2025"
                value={internship.start_date}
                onChange={(e)=>
                  handleInternshipChange(
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
                placeholder="08/2025"
                value={internship.end_date}
                onChange={(e)=>
                  handleInternshipChange(
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
                value={internship.description}
                onChange={(e)=>
                  handleInternshipChange(
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
        onClick={addInternship}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700,
        }}
      >
        + Add Internship
      </Button>



    </CVCard>

  );
}