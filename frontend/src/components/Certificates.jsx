import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

export default function Certificates({ cv, setCv }) {

  const addCertificate = () => {
    setCv({
      ...cv,
      certificates: [
        ...cv.certificates,
        {
          name: "",
          organization: "",
          issue_date: "",
          credential: "",
        },
      ],
    });
  };

  const handleCertificateChange = (index, field, value) => {
    const updated = [...cv.certificates];
    updated[index][field] = value;

    setCv({
      ...cv,
      certificates: updated,
    });
  };

  return (
    <Card sx={{ borderRadius: 4, mb: 3 }}>
      <CardContent>

        <Typography variant="h6" fontWeight="bold" mb={3}>
          📜 Certificates
        </Typography>

        {cv.certificates.map((certificate, index) => (

          <Card
            key={index}
            variant="outlined"
            sx={{ p: 2, mb: 3 }}
          >

            <Typography fontWeight="bold" mb={2}>
              Certificate {index + 1}
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Certificate Name"
                  value={certificate.name}
                  onChange={(e) =>
                    handleCertificateChange(
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
                  label="Organization"
                  value={certificate.organization}
                  onChange={(e) =>
                    handleCertificateChange(
                      index,
                      "organization",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Issue Date"
                  placeholder="06/2025"
                  value={certificate.issue_date}
                  onChange={(e) =>
                    handleCertificateChange(
                      index,
                      "issue_date",
                      e.target.value
                    )
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Credential URL"
                  value={certificate.credential}
                  onChange={(e) =>
                    handleCertificateChange(
                      index,
                      "credential",
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
          onClick={addCertificate}
        >
          + Add Certificate
        </Button>

      </CardContent>
    </Card>
  );
}