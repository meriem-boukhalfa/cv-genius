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
  Grid,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

// Category icons mapping
const CATEGORY_ICONS = {
  Resume: <ArticleIcon />,
  ATS: <AutoAwesomeIcon />,
  AI: <SchoolIcon />,
  Career: <TrendingUpIcon />,
  Interview: <WorkIcon />,
};

const CATEGORIES = Object.keys(CATEGORY_ICONS);

const POSTS = [
  {
    id: 1,
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume",
    date: "July 2026",
    readTime: 5,
    description:
      "Learn how to create a professional ATS-friendly resume that passes applicant tracking systems with flying colors.",
    featured: true,
    color: "#2BE6C1",
  },
  {
    id: 2,
    title: "Top 10 Resume Mistakes",
    category: "ATS",
    date: "July 2026",
    readTime: 4,
    description:
      "Avoid the most common resume mistakes recruiters notice immediately and increase your chances of getting an interview.",
    featured: false,
    color: "#60A5FA",
  },
  {
    id: 3,
    title: "Best Resume Tips for 2026",
    category: "Career",
    date: "July 2026",
    readTime: 6,
    description:
      "Discover modern resume trends and strategies that actually work in today's competitive job market.",
    featured: false,
    color: "#F97316",
  },
];

// Featured Article Component
function FeaturedArticle({ post, onCategoryClick }) {
  return (
    <Card
      sx={{
        mb: 8,
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
        "&:hover": {
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Grid container>
        {/* Image Section */}
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              height: { xs: 250, sm: 300 },
              background: `linear-gradient(135deg, ${post.color}, ${post.color}99)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArticleIcon sx={{ fontSize: 80, color: "white", opacity: 0.3 }} />
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={7}>
          <CardContent
            sx={{
              height: { xs: "auto", sm: 300 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: { xs: 3, sm: 4 },
            }}
          >
            <Box>
              <Chip
                icon={CATEGORY_ICONS[post.category]}
                label={post.category}
                size="small"
                onClick={() => onCategoryClick(post.category)}
                sx={{
                  background: `${post.color}20`,
                  color: post.color,
                  fontWeight: 600,
                  mb: 2,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    background: `${post.color}35`,
                  },
                }}
              />

              <Typography
                variant="h4"
                fontWeight="700"
                sx={{
                  lineHeight: 1.3,
                  mb: 2,
                  color: "#1a1a1a",
                }}
              >
                {post.title}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {post.description}
              </Typography>
            </Box>

            <Stack direction="row" spacing={3} alignItems="center">
              <Typography variant="caption" sx={{ color: "#999" }}>
                {post.date} • {post.readTime} min read
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: post.color,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    background: post.color,
                    opacity: 0.9,
                  },
                }}
              >
                Read Article →
              </Button>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

// Post Grid Card Component
function PostGridCard({ post, onCategoryClick }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2.5,
        transition: "all 0.3s ease",
        border: "1px solid #f0f0f0",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      {/* Image Placeholder */}
      <Box
        sx={{
          height: 180,
          background: `linear-gradient(135deg, ${post.color}, ${post.color}80)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ArticleIcon sx={{ fontSize: 60, color: "white", opacity: 0.2 }} />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 2.5,
        }}
      >
        {/* Category Badge */}
        <Stack direction="row" spacing={1} mb={1.5}>
          <Chip
            icon={CATEGORY_ICONS[post.category]}
            label={post.category}
            size="small"
            onClick={() => onCategoryClick(post.category)}
            sx={{
              background: `${post.color}15`,
              color: post.color,
              fontWeight: 600,
              height: 28,
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                background: `${post.color}30`,
              },
            }}
          />
        </Stack>

        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="700"
          sx={{
            mb: 1.5,
            lineHeight: 1.4,
            color: "#1a1a1a",
            flex: 1,
          }}
        >
          {post.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            mb: 2,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          {post.description}
        </Typography>

        {/* Meta & CTA */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" sx={{ color: "#999" }}>
            {post.readTime} min
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Button
            size="small"
            sx={{
              color: post.color,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: `${post.color}10`,
              },
            }}
          >
            Read →
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

// Related Articles Component
function RelatedArticles({ currentPost, allPosts, onCategoryClick }) {
  const relatedPosts = allPosts
    .filter((p) => p.category === currentPost.category && p.id !== currentPost.id)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <Box sx={{ mt: 10, pt: 6, borderTop: "1px solid #e0e0e0" }}>
      <Typography
        variant="h5"
        fontWeight="700"
        sx={{ mb: 4, color: "#1a1a1a" }}
      >
        More from {currentPost.category}
      </Typography>

      <Grid container spacing={3}>
        {relatedPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostGridCard post={post} onCategoryClick={onCategoryClick} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="outlined"
          onClick={() => onCategoryClick(currentPost.category)}
          sx={{
            borderColor: currentPost.color,
            color: currentPost.color,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: currentPost.color,
              background: `${currentPost.color}10`,
            },
          }}
        >
          View all {currentPost.category} articles →
        </Button>
      </Box>
    </Box>
  );
}

// Hero Section Component
function HeroSection({ searchValue, onSearchChange }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 8,
        pt: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          fontWeight: 800,
          background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
          letterSpacing: "-0.02em",
        }}
      >
        CV Genius
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "#666",
          mb: 1,
          fontWeight: 500,
        }}
      >
        Career insights and resume strategies
      </Typography>

      <Typography
        sx={{
          fontSize: "0.9rem",
          color: "#999",
          mb: 4,
        }}
      >
        Curated tips to land your dream job
      </Typography>

      <Box sx={{ maxWidth: 500, mx: "auto" }}>
        <TextField
          placeholder="Search articles..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#f8f8f8",
              border: "1px solid #e0e0e0",
              transition: "all 0.2s",
              "&:hover": {
                borderColor: "#ddd",
              },
              "&.Mui-focused": {
                backgroundColor: "white",
                borderColor: "#2BE6C1",
                boxShadow: "0 0 0 3px rgba(43, 230, 193, 0.1)",
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#999" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
    </Box>
  );
}

// Category Filter Component
function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        <Chip
          label="All Articles"
          onClick={() => onCategoryChange(null)}
          sx={{
            background: activeCategory === null ? "#2BE6C1" : "#f0f0f0",
            color: activeCategory === null ? "white" : "#666",
            fontWeight: 600,
            height: 36,
            "&:hover": {
              background: activeCategory === null ? "#2BE6C1" : "#e8e8e8",
            },
          }}
        />
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const color = POSTS.find((p) => p.category === category)?.color;
          return (
            <Chip
              key={category}
              icon={CATEGORY_ICONS[category]}
              label={category}
              onClick={() => onCategoryChange(category)}
              sx={{
                background: isActive ? color : "#f0f0f0",
                color: isActive ? "white" : "#666",
                fontWeight: 600,
                height: 36,
                "& .MuiChip-icon": {
                  color: isActive ? "white" : color,
                },
                "&:hover": {
                  background: isActive ? color : "#e8e8e8",
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

// Main Blog Component
export default function Blog() {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchValue("");
  };

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase());

      const matchesCategory =
        activeCategory === null || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchValue, activeCategory]);

  const featuredPost = filteredPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <Box sx={{ background: "#fafafa", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        <HeroSection searchValue={searchValue} onSearchChange={setSearchValue} />

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryClick}
        />

        {/* Featured Article */}
        {featuredPost && (
          <FeaturedArticle post={featuredPost} onCategoryClick={handleCategoryClick} />
        )}

        {/* Articles Grid */}
        {regularPosts.length > 0 ? (
          <Grid container spacing={3}>
            {regularPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostGridCard 
                  post={post} 
                  onCategoryClick={handleCategoryClick}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" py={8}>
            <Typography color="#999" sx={{ fontSize: "1.1rem" }}>
              {featuredPost ? "No more articles match your criteria." : "No articles found."}
            </Typography>
            <Typography color="#ccc" sx={{ mt: 1, fontSize: "0.9rem" }}>
              Try adjusting your search or filters.
            </Typography>
          </Box>
        )}

        {/* Related Articles Section - Show when viewing a specific category */}
        {activeCategory && featuredPost && (
          <RelatedArticles 
            currentPost={featuredPost} 
            allPosts={POSTS}
            onCategoryClick={handleCategoryClick}
          />
        )}
      </Container>
    </Box>
  );
}