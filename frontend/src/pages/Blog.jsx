
import { useState, useMemo } from "react";
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
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
 
// Constants
const CATEGORIES = ["Resume", "ATS", "AI", "Career", "Interview"];
 
const POSTS = [
  {
    id: 1,
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume",
    date: "July 2026",
    readTime: "5 min read",
    description:
      "Learn how to create a professional ATS-friendly resume that passes applicant tracking systems.",
  },
  {
    id: 2,
    title: "Top 10 Resume Mistakes",
    category: "ATS",
    date: "July 2026",
    readTime: "4 min read",
    description:
      "Avoid the most common resume mistakes recruiters notice immediately.",
  },
  {
    id: 3,
    title: "Best Resume Tips for 2026",
    category: "Career",
    date: "July 2026",
    readTime: "6 min read",
    description:
      "Discover modern resume trends that increase your interview chances.",
  },
];
 
// Post Card Component
function PostCard({ post }) {
  return (
    <Card
      sx={{
        mb: 4,
        borderRadius: 4,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
 
        <Typography color="primary" mt={1} mb={2} variant="caption">
          {post.category} • {post.date} • {post.readTime}
        </Typography>
 
        <Typography color="text.secondary" mb={3}>
          {post.description}
        </Typography>
 
        <Button
          variant="contained"
          endIcon="→"
          href={`/blog/${post.id}`}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
 
// Hero Section Component
function HeroSection({ searchValue, onSearchChange }) {
  return (
    <Box textAlign="center" mb={6}>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg, #2BE6C1, #60A5FA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        CV Genius Blog
      </Typography>
 
      <Typography color="text.secondary" mb={4} variant="subtitle1">
        Resume Tips • ATS • AI • Career Advice
      </Typography>
 
      <TextField
        placeholder="Search articles..."
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        fullWidth
        sx={{
          maxWidth: 500,
          mx: "auto",
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
 
// Category Filter Component
function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      flexWrap="wrap"
      mb={5}
      sx={{ gap: 1 }}
    >
      <Chip
        label="All"
        onClick={() => onCategoryChange(null)}
        color={activeCategory === null ? "primary" : "default"}
        variant={activeCategory === null ? "filled" : "outlined"}
      />
      {CATEGORIES.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onCategoryChange(category)}
          color={activeCategory === category ? "primary" : "default"}
          variant={activeCategory === category ? "filled" : "outlined"}
        />
      ))}
    </Stack>
  );
}
 
// Main Blog Component
export default function Blog() {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
 
  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase());
 
      const matchesCategory = activeCategory === null || post.category === activeCategory;
 
      return matchesSearch && matchesCategory;
    });
  }, [searchValue, activeCategory]);
 
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <HeroSection searchValue={searchValue} onSearchChange={setSearchValue} />
 
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
 
      {/* Articles */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <Box textAlign="center" py={6}>
          <Typography color="text.secondary">
            No articles found. Try adjusting your search or filters.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
 