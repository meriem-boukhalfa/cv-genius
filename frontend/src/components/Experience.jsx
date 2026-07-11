import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

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
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          💼 Experience
        </Typography>

        {cv.experience.map((exp, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{ p: 2, mb: 3 }}
          >
            <Typography fontWeight="bold" mb={2}>
              Experience {index + 1}
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company"
                  value={exp.company}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "company",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Position"
                  value={exp.position}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "position",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  value={exp.location}
                  onChange={(e) =>
                    handleExperienceChange(
                      index,
                      "location",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  placeholder="01/2022"
                  value={exp.start_date}
                  onChange={(e) =>
                    handleExperienceChange(
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
                  value={exp.end_date}
                  onChange={(e) =>
                    handleExperienceChange(
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
                  value={exp.description}
                  onChange={(e) =>
                    handleExperienceChange(
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
          onClick={addExperience}
        >
          + Add Experience
        </Button>
      </CardContent>
    </Card>
  );
}