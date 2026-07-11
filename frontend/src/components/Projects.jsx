import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

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
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>

        <Typography variant="h6" fontWeight="bold" mb={3}>
          🚀 Projects
        </Typography>

        {cv.projects.map((project, index) => (

          <Card
            key={index}
            variant="outlined"
            sx={{ p: 2, mb: 3 }}
          >

            <Typography fontWeight="bold" mb={2}>
              Project {index + 1}
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Name"
                  value={project.name}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Role"
                  value={project.role}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "role",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Technologies"
                  placeholder="React, FastAPI, Python..."
                  value={project.technologies}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "technologies",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="GitHub"
                  value={project.github}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "github",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Live Demo"
                  value={project.demo}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "demo",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  placeholder="01/2024"
                  value={project.start_date}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "start_date",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  placeholder="Present"
                  value={project.end_date}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "end_date",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  value={project.description}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "description",
                      e.target.value
                    )
                  }
                />
              </Grid>

            </Grid>

          </Card>

        ))}

        <Button
          variant="contained"
          onClick={addProject}
        >
          + Add Project
        </Button>

      </CardContent>
    </Card>
  );
}