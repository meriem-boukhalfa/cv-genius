import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Workshops({ cv, setCv }) {


  const addWorkshop = () => {

    setCv({
      ...cv,
      workshops: [
        ...cv.workshops,
        {
          name: "",
          organization: "",
          date: "",
          description: "",
        },
      ],
    });

  };



  const handleWorkshopChange = (index, field, value) => {

    const updated = [...cv.workshops];

    updated[index][field] = value;


    setCv({
      ...cv,
      workshops: updated,
    });

  };



  return (

    <CVCard>


      <Typography
        sx={{
          fontSize:34,
          fontWeight:800,
          mb:3,
          color:"#111827",
        }}
      >
        🎤 Workshops
      </Typography>



      {cv.workshops.map((workshop,index)=>(


        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Workshop {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{xs:12}}>
              <TextField
                fullWidth
                label="Workshop Name"
                value={workshop.name}
                onChange={(e)=>
                  handleWorkshopChange(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{xs:12}}>
              <TextField
                fullWidth
                label="Organization"
                value={workshop.organization}
                onChange={(e)=>
                  handleWorkshopChange(
                    index,
                    "organization",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{xs:12, md:6}}>
              <TextField
                fullWidth
                label="Date"
                placeholder="05/2025"
                value={workshop.date}
                onChange={(e)=>
                  handleWorkshopChange(
                    index,
                    "date",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{xs:12}}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={workshop.description}
                onChange={(e)=>
                  handleWorkshopChange(
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
        onClick={addWorkshop}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700,
        }}
      >
        + Add Workshop
      </Button>



    </CVCard>

  );
}