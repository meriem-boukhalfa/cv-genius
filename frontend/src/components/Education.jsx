import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

export default function Education({ cv, setCv }) {

  const addEducation = () => {
    setCv({
      ...cv,
      education: [
        ...cv.education,
        {
          university: "",
          degree: "",
          field: "",
          location: "",
          start_date: "",
          end_date: "",
          description: "",
        },
      ],
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...cv.education];
    updated[index][field] = value;

    setCv({
      ...cv,
      education: updated,
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
          🎓 Education
        </Typography>

        {cv.education.map((edu, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{ p: 2, mb: 3 }}
          >

            <Typography fontWeight="bold" mb={2}>
              Education {index + 1}
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="University"
                  value={edu.university}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "university",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "degree",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Field of Study"
                  value={edu.field}
                  onChange={(e) =>
                    handleEducationChange(
                      index,
                      "field",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  value={edu.location}
                  onChange={(e) =>
                    handleEducationChange(
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
                  placeholder="09/2020"
                  value={edu.start_date}
                  onChange={(e) =>
                    handleEducationChange(
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
                  placeholder="06/2024"
                  value={edu.end_date}
                  onChange={(e) =>
                    handleEducationChange(
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
                  value={edu.description}
                  onChange={(e) =>
                    handleEducationChange(
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
          onClick={addEducation}
        >
          + Add Education
        </Button>

      </CardContent>
    </Card>
  );
}