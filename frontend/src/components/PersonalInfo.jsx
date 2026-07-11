import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function PersonalInfo({ cv, handleChange }) {
  return (
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          👤 Personal Information
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="full_name"
              value={cv.full_name}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={cv.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={cv.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={cv.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="LinkedIn"
              name="linkedin"
              value={cv.linkedin}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="GitHub"
              name="github"
              value={cv.github}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label="Job Title"
              name="job_title"
              value={cv.job_title}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Professional Summary"
              name="summary"
              value={cv.summary}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}