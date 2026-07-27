import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  Box,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CVCard from "./CVCard";

// ============================================
// SKILL CATEGORIES WITH COLORS
// ============================================

const SKILL_CATEGORIES = {
  technical: {
    color: "#2563eb",
    label: "Technical",
    icon: "💻",
  },
  soft: {
    color: "#7c3aed",
    label: "Soft Skills",
    icon: "🤝",
  },
  tools: {
    color: "#059669",
    label: "Tools & Software",
    icon: "🔧",
  },
  language: {
    color: "#d97706",
    label: "Languages",
    icon: "🌐",
  },
  other: {
    color: "#64748b",
    label: "Other",
    icon: "⭐",
  },
};

// ============================================
// POPULAR SKILLS SUGGESTIONS
// ============================================

const POPULAR_SKILLS = {
  technical: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "SQL",
    "MongoDB",
    "AWS",
  ],
  soft: [
    "Leadership",
    "Communication",
    "Problem Solving",
    "Project Management",
    "Team Collaboration",
  ],
  tools: [
    "Git",
    "Docker",
    "Figma",
    "VS Code",
    "Adobe Creative Suite",
    "Jira",
  ],
};

export default function Skills({ cv, setCv }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [skill, setSkill] = useState("");

  // ============================================
  // HANDLERS
  // ============================================

  const addSkill = () => {
    if (!skill.trim()) return;

    // Prevent duplicates
    if (cv.skills.includes(skill.trim())) {
      setSkill("");
      return;
    }

    setCv({
      ...cv,
      skills: [...cv.skills, skill.trim()],
    });

    setSkill("");
  };

  const deleteSkill = (index) => {
    const updated = [...cv.skills];
    updated.splice(index, 1);
    setCv({
      ...cv,
      skills: updated,
    });
  };

  const addSuggestedSkill = (suggestedSkill) => {
    if (!cv.skills.includes(suggestedSkill)) {
      setCv({
        ...cv,
        skills: [...cv.skills, suggestedSkill],
      });
    }
  };

  // ============================================
  // HELPER FUNCTIONS
  // ============================================

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSkill();
    }
  };

  const getSkillColor = (skillName) => {
    const lowerSkill = skillName.toLowerCase();

    // Determine category based on keywords
    if (
      lowerSkill.includes("react") ||
      lowerSkill.includes("node") ||
      lowerSkill.includes("python") ||
      lowerSkill.includes("javascript") ||
      lowerSkill.includes("typescript") ||
      lowerSkill.includes("java") ||
      lowerSkill.includes("sql") ||
      lowerSkill.includes("aws") ||
      lowerSkill.includes("docker") ||
      lowerSkill.includes("api")
    ) {
      return SKILL_CATEGORIES.technical.color;
    }

    if (
      lowerSkill.includes("leadership") ||
      lowerSkill.includes("communication") ||
      lowerSkill.includes("collaboration") ||
      lowerSkill.includes("management")
    ) {
      return SKILL_CATEGORIES.soft.color;
    }

    if (
      lowerSkill.includes("git") ||
      lowerSkill.includes("figma") ||
      lowerSkill.includes("jira") ||
      lowerSkill.includes("code") ||
      lowerSkill.includes("adobe")
    ) {
      return SKILL_CATEGORIES.tools.color;
    }

    return SKILL_CATEGORIES.other.color;
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <CVCard
      title="🛠️ Skills"
      subtitle="Highlight your key competencies and expertise"
      color="slate"
      variant="default"
      shadow="medium"
    >
      {/* Section Description */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{
            color: "#64748b",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: 1.6,
          }}
        >
          Add the skills that are most relevant to your target position. Focus on both technical
          skills and soft skills that employers value. Be specific and honest about your abilities.
        </Typography>
      </Box>

      {/* Add Skill Input */}
      <Box sx={{ mb: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            mb: 3,
          }}
        >
          <TextField
            fullWidth
            label="Add a new skill"
            placeholder="e.g., React, Project Management, Adobe XD"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      background: "rgba(71, 85, 105, 0.1)",
                      mr: 1,
                    }}
                  >
                    <EmojiObjectsIcon sx={{ color: "#475569" }} />
                  </Box>
                </InputAdornment>
              ),
            }}
            helperText="Type a skill and press Enter or click Add"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                background: "#ffffff",

                "&:hover": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#475569",
                  },
                },

                "&.Mui-focused": {
                  background: "#ffffff",
                  boxShadow: "0 0 0 3px rgba(71, 85, 105, 0.1)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#475569",
                    borderWidth: "2px",
                  },
                },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(71, 85, 105, 0.2)",
              },

              "& .MuiInputLabel-root": {
                fontWeight: 600,
                color: "#475569",

                "&.Mui-focused": {
                  color: "#475569",
                  fontWeight: 700,
                },
              },

              "& .MuiFormHelperText-root": {
                fontSize: "12px",
                color: "#64748b",
              },
            }}
          />

          <Button
            variant="contained"
            onClick={addSkill}
            startIcon={<AddIcon />}
            sx={{
              px: { xs: 2, sm: 4 },
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: { xs: "14px", md: "16px" },
              background: "linear-gradient(135deg, #475569, #334155)",
              boxShadow: "0 8px 20px rgba(71, 85, 105, 0.3)",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              whiteSpace: "nowrap",

              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 12px 28px rgba(71, 85, 105, 0.4)",
                background: "linear-gradient(135deg, #334155, #1e293b)",
              },

              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Add
          </Button>
        </Stack>

        {/* Popular Skills Suggestions */}
        {cv.skills.length === 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#64748b",
                mb: 1.5,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Quick Add - Popular Skills
            </Typography>

            {/* Technical Skills */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: SKILL_CATEGORIES.technical.color,
                  mb: 1,
                }}
              >
                💻 Technical
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {POPULAR_SKILLS.technical.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    variant="outlined"
                    onClick={() => addSuggestedSkill(s)}
                    sx={{
                      borderColor: SKILL_CATEGORIES.technical.color,
                      color: SKILL_CATEGORIES.technical.color,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "12px",

                      "&:hover": {
                        background: `${SKILL_CATEGORIES.technical.color}10`,
                        borderColor: SKILL_CATEGORIES.technical.color,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Soft Skills */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: SKILL_CATEGORIES.soft.color,
                  mb: 1,
                }}
              >
                🤝 Soft Skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {POPULAR_SKILLS.soft.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    variant="outlined"
                    onClick={() => addSuggestedSkill(s)}
                    sx={{
                      borderColor: SKILL_CATEGORIES.soft.color,
                      color: SKILL_CATEGORIES.soft.color,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "12px",

                      "&:hover": {
                        background: `${SKILL_CATEGORIES.soft.color}10`,
                        borderColor: SKILL_CATEGORIES.soft.color,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Tools */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: SKILL_CATEGORIES.tools.color,
                  mb: 1,
                }}
              >
                🔧 Tools & Software
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {POPULAR_SKILLS.tools.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    variant="outlined"
                    onClick={() => addSuggestedSkill(s)}
                    sx={{
                      borderColor: SKILL_CATEGORIES.tools.color,
                      color: SKILL_CATEGORIES.tools.color,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "12px",

                      "&:hover": {
                        background: `${SKILL_CATEGORIES.tools.color}10`,
                        borderColor: SKILL_CATEGORIES.tools.color,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        )}
      </Box>

      {/* Skills Display */}
      {cv.skills && cv.skills.length > 0 ? (
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              pb: 2,
              borderBottom: "2px solid rgba(71, 85, 105, 0.2)",
            }}
          >
            <LocalOfferIcon
              sx={{
                color: "#475569",
                mr: 1,
                fontSize: "20px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#475569",
              }}
            >
              {cv.skills.length} Skill{cv.skills.length !== 1 ? "s" : ""} Added
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
            {cv.skills.map((item, index) => (
              <Chip
                key={index}
                label={item}
                onDelete={() => deleteSkill(index)}
                deleteIcon={<ClearIcon />}
                sx={{
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "14px",
                  px: 1,
                  py: 3,
                  background: `${getSkillColor(item)}15`,
                  color: getSkillColor(item),
                  border: `2px solid ${getSkillColor(item)}40`,
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",

                  "&:hover": {
                    background: `${getSkillColor(item)}25`,
                    border: `2px solid ${getSkillColor(item)}60`,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 16px ${getSkillColor(item)}20`,
                  },

                  "& .MuiChip-deleteIcon": {
                    color: getSkillColor(item),
                    marginRight: "4px",
                    fontSize: "18px",

                    "&:hover": {
                      color: "#ef4444",
                    },
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      ) : (
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
            borderRadius: "12px",
            border: "2px dashed rgba(71, 85, 105, 0.3)",
            mb: 3,
          }}
        >
          <EmojiObjectsIcon
            sx={{
              fontSize: 48,
              color: "#475569",
              mb: 2,
              opacity: 0.5,
            }}
          />
          <Typography
            sx={{
              color: "#475569",
              fontWeight: 600,
              mb: 1,
            }}
          >
            No skills added yet
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Start adding your skills to highlight your expertise
          </Typography>
        </Box>
      )}

      {/* Pro Tips */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
          border: "1px solid rgba(71, 85, 105, 0.3)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#475569",
            fontSize: "13px",
            fontWeight: 600,
            mb: 1,
          }}
        >
          💡 Pro Tips for Your Skills:
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Include 8-15 relevant skills that match the job description
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
            mb: 1,
          }}
        >
          ✓ Mix technical skills with soft skills for a well-rounded profile
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          ✓ Only list skills you can genuinely explain and demonstrate
        </Typography>
      </Box>
    </CVCard>
  );
}