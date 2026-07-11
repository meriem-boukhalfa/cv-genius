import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";

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
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>

        <Typography variant="h6" fontWeight="bold" mb={3}>
          🌍 Languages
        </Typography>

        {cv.languages.map((language, index) => (

          <Card
            key={index}
            variant="outlined"
            sx={{ p: 2, mb: 3 }}
          >

            <Typography fontWeight="bold" mb={2}>
              Language {index + 1}
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Language"
                  value={language.name}
                  onChange={(e) =>
                    handleLanguageChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Level"
                  value={language.level}
                  onChange={(e) =>
                    handleLanguageChange(
                      index,
                      "level",
                      e.target.value
                    )
                  }
                >
                  <MenuItem value="Native">Native</MenuItem>
                  <MenuItem value="Fluent">Fluent</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Beginner">Beginner</MenuItem>
                </TextField>
              </Grid>

            </Grid>

          </Card>

        ))}

        <Button
          variant="contained"
          onClick={addLanguage}
        >
          + Add Language
        </Button>

      </CardContent>
    </Card>
  );
}