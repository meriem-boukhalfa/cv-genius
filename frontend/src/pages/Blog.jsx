import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Chip,
  Button,
  Stack,
} from "@mui/material";

const posts = [
  {
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume",
    date: "July 2026",
    readTime: "5 min read",
    description:
      "Learn how to create a professional ATS-friendly resume that passes applicant tracking systems.",
  },
  {
    title: "Top 10 Resume Mistakes",
    category: "ATS",
    date: "July 2026",
    readTime: "4 min read",
    description:
      "Avoid the most common resume mistakes recruiters notice immediately.",
  },
  {
    title: "Best Resume Tips for 2026",
    category: "Career",
    date: "July 2026",
    readTime: "6 min read",
    description:
      "Discover modern resume trends that increase your interview chances.",
  },
];

export default function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Hero */}

      <Box textAlign="center" mb={6}>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            background:
              "linear-gradient(90deg,#2BE6C1,#60A5FA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CV Genius Blog
        </Typography>

        <Typography
          color="text.secondary"
          mt={2}
          mb={4}
        >
          Resume Tips • ATS • AI • Career Advice
        </Typography>

        <TextField
          placeholder="Search articles..."
          fullWidth
          sx={{
            maxWidth: 600,
            mx: "auto",
            bgcolor: "white",
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Categories */}

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
        mb={5}
      >
        <Chip label="Resume" color="primary" />
        <Chip label="ATS" color="primary" />
        <Chip label="AI" color="primary" />
        <Chip label="Career" color="primary" />
        <Chip label="Interview" color="primary" />
      </Stack>

      {/* Articles */}

      {posts.map((post, index) => (
        <Card
          key={index}
          sx={{
            mb: 4,
            borderRadius: 4,
            transition: ".3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 8,
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {post.title}
            </Typography>

            <Typography
              color="primary"
              mt={1}
              mb={2}
            >
              {post.category} • {post.date} • {post.readTime}
            </Typography>

            <Typography color="text.secondary">
              {post.description}
            </Typography>

            <Button
              sx={{ mt: 3 }}
              variant="contained"
            >
              Read More →
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}