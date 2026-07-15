import {
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

import CVCard from "./CVCard";


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

    <CVCard>


      <Typography
        sx={{
          fontSize: 34,
          fontWeight: 800,
          mb: 3,
          color: "#111827",
        }}
      >
        📜 Certificates
      </Typography>



      {cv.certificates.map((certificate, index) => (

        <div key={index}>


          <Typography
            fontWeight="bold"
            mb={2}
          >
            Certificate {index + 1}
          </Typography>



          <Grid container spacing={2}>


            <Grid size={{ xs:12 }}>
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



            <Grid size={{ xs:12 }}>
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



            <Grid size={{ xs:12, md:6 }}>
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



            <Grid size={{ xs:12, md:6 }}>
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


        </div>

      ))}



      <Button
        variant="contained"
        onClick={addCertificate}
        sx={{
          mt:3,
          borderRadius:"12px",
          textTransform:"none",
          fontWeight:700
        }}
      >
        + Add Certificate
      </Button>


    </CVCard>

  );
}