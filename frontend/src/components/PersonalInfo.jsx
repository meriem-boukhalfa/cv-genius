import {
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import CVCard from "./CVCard";


export default function PersonalInfo({ cv, handleChange }) {
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

    </CVCard>
  );
}