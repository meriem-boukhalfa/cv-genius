import { Box, Container, Typography, Card, CardContent } from "@mui/material";

export default function Blog() {
  const posts = [
    {
      title: "How to Write an ATS-Friendly Resume",
      description:
        "Learn how to create a resume that passes Applicant Tracking Systems.",
    },
    {
      title: "Top 10 Resume Mistakes",
      description:
        "Avoid the most common mistakes recruiters notice immediately.",
    },
    {
      title: "Best Resume Tips for 2026",
      description:
        "Discover the latest resume trends to increase your interview chances.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        CV Genius Blog
      </Typography>

      <Typography color="text.secondary" mb={5}>
        Career advice, resume tips and AI-powered job search resources.
      </Typography>

      {posts.map((post, index) => (
        <Card key={index} sx={{ mb: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {post.title}
            </Typography>

            <Typography color="text.secondary" mt={1}>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}