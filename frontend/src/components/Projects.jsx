import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import CVCard from "./CVCard";


export default function Projects({ cv, setCv }) {


  const addProject = () => {
    setCv({
      ...cv,
      projects: [
        ...cv.projects,
        {
          name: "",
          role: "",
          technologies: "",
          github: "",
          demo: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };



  const handleProjectChange = (index, field, value) => {

    const updated = [...cv.projects];

    updated[index][field] = value;

    setCv({
      ...cv,
      projects: updated,
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
        🚀 Projects
      </Typography>



      {cv.projects.map((project, index) => (


        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Project {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="Project Name"
                value={project.name}
                onChange={(e)=>
                  handleProjectChange(
                    index,
                    "name",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="Role"
                value={project.role}
                onChange={(e)=>
                  handleProjectChange(
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
                label="Technologies"
                placeholder="React, FastAPI, Python..."
                value={project.technologies}
                onChange={(e)=>
                  handleProjectChange(
                    index,
                    "technologies",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="GitHub"
                value={project.github}
                onChange={(e)=>
                  handleProjectChange(
                    index,
                    "github",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12 }}>
              <TextField
                fullWidth
                label="Live Demo"
                value={project.demo}
                onChange={(e)=>
                  handleProjectChange(
                    index,
                    "demo",
                    e.target.value
                  )
                }
              />
            </Grid>



            <Grid size={{ xs:12, md:6 }}>
              <TextField
                fullWidth
                label="Start Date"
                placeholder="01/2024"
                value={project.start_date}
                onChange={(e)=>
                  handleProjectChange(
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
                value={project.end_date}
                onChange={(e)=>
                  handleProjectChange(
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
                value={project.description}
                onChange={(e)=>
                  handleProjectChange(
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
        onClick={addProject}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700
        }}
      >
        + Add Project
      </Button>



    </CVCard>

  );
}