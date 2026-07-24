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
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// ============================================
// CATEGORY ICONS & DATA
// ============================================

const CATEGORY_ICONS = {
  Resume: <ArticleIcon />,
  ATS: <AutoAwesomeIcon />,
  AI: <SchoolIcon />,
  Career: <TrendingUpIcon />,
  Interview: <WorkIcon />,
};

const CATEGORIES = Object.keys(CATEGORY_ICONS);

// ============================================
// ARTICLE DATA WITH CONTENT
// ============================================

const ARTICLES_DATA = {
  1: {
    id: 1,
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume",
    date: "July 15, 2026",
    readTime: 5,
    author: "Sarah Johnson",
    description: "Learn how to create a professional ATS-friendly resume that passes applicant tracking systems with flying colors.",
    featured: true,
    color: "#2BE6C1",
    content: `
    <h2>Introduction</h2>
    <p>In today's competitive job market, your resume needs to pass through Applicant Tracking Systems (ATS) before a human even sees it. An ATS-friendly resume is the first step to getting your application noticed. This comprehensive guide will teach you everything you need to know about creating a resume that both machines and humans will appreciate.</p>

    <h2>What is an ATS?</h2>
    <p>An Applicant Tracking System is software that scans resumes for keywords, skills, and formatting that match the job description. Many Fortune 500 companies use ATS to filter thousands of applications automatically. If your resume doesn't pass the ATS scan, you'll never get a chance to interview, regardless of your qualifications.</p>

    <h2>Key Elements of an ATS-Friendly Resume</h2>
    <h3>1. Simple Formatting</h3>
    <p>Avoid fancy fonts, graphics, and complex layouts. Use standard fonts like Arial, Calibri, or Times New Roman. Stick to .docx or .pdf formats that ATS can easily read. Never use tables, headers, footers, or columns as these confuse the scanning software.</p>

    <h3>2. Keyword Optimization</h3>
    <p>Mirror the keywords from the job description in your resume. If the job posting mentions "project management," make sure your resume includes that exact phrase. The ATS looks for keyword matches to rank your application higher. Create a list of keywords from the job posting and naturally incorporate them throughout your resume.</p>

    <h3>3. Standard Section Headings</h3>
    <p>Use standard headings like "Professional Experience," "Education," "Skills," and "Certifications." Avoid creative headings like "My Journey" or "Work History Highlights." ATS software looks for standard headings to parse information correctly.</p>

    <h3>4. Consistent Date Format</h3>
    <p>Use a consistent date format throughout your resume. Examples: "January 2022 - December 2023" or "01/2022 - 12/2023." Inconsistent formatting confuses the ATS parser.</p>

    <h2>What to Avoid</h2>
    <ul>
      <li>Graphics, images, and logos (except your name at the top)</li>
      <li>Tables and text boxes</li>
      <li>Headers and footers containing important information</li>
      <li>Symbols like "&" instead of "and"</li>
      <li>Abbreviations that aren't commonly used</li>
      <li>Multiple columns or creative layouts</li>
      <li>Unusual fonts or formatting</li>
    </ul>

    <h2>Practical Example</h2>
    <p><strong>Job Posting Keywords:</strong> "Project Management, Leadership, Agile, Budget Planning, Team Coordination"</p>
    <p><strong>Your Resume Should Include:</strong> "Managed cross-functional teams of 8+ members using Agile methodology. Led project planning and budget allocation for $500K+ projects."</p>

    <h2>Conclusion</h2>
    <p>Creating an ATS-friendly resume doesn't mean sacrificing quality. It means being strategic about formatting and language. Follow these guidelines, and you'll ensure your resume gets past the ATS screening and lands in the hands of a real hiring manager who can appreciate your qualifications.</p>
    `,
  },
  2: {
    id: 2,
    title: "Top 10 Resume Mistakes",
    category: "ATS",
    date: "July 10, 2026",
    readTime: 4,
    author: "Michael Chen",
    description: "Avoid the most common resume mistakes recruiters notice immediately and increase your chances of getting an interview.",
    featured: false,
    color: "#60A5FA",
    content: `
    <h2>Common Resume Mistakes That Cost You Interviews</h2>
    <p>Your resume is your first impression. Small mistakes can cost you big opportunities. Here are the top 10 mistakes recruiters see daily and how to fix them.</p>

    <h2>1. Typos and Grammar Errors</h2>
    <p>Nothing screams carelessness like a typo. Use spell-check, read your resume aloud, and have someone else review it. Even one error can eliminate your candidacy.</p>

    <h2>2. Irrelevant Work Experience</h2>
    <p>Don't list every job you ever had. Focus on roles relevant to the position you're applying for. Highlight accomplishments that demonstrate skills needed for the target role.</p>

    <h2>3. Generic Objective Statements</h2>
    <p>Avoid vague objectives like "Seeking a challenging position." Instead, write a targeted summary that highlights your value proposition for this specific role.</p>

    <h2>4. Using Personal Pronouns</h2>
    <p>Never use "I" or "me" in your resume. Start bullet points with action verbs: "Managed," "Created," "Developed," not "I managed," or "I created."</p>

    <h2>5. Poor Formatting and Readability</h2>
    <p>Use consistent formatting, clear headings, and adequate white space. Recruiters spend 6 seconds scanning a resume. Make it easy to read.</p>

    <h2>6. Unreliable Contact Information</h2>
    <p>Include a professional email address and working phone number. Check that your voicemail is set up and your email is monitored regularly.</p>

    <h2>7. Highlighting Duties Instead of Achievements</h2>
    <p>Don't just list what you did. Show the impact: "Increased sales by 25%" not "Responsible for sales."</p>

    <h2>8. Including Personal Information</h2>
    <p>Don't include age, photo, marital status, or personal hobbies unless relevant. Keep it professional and focused on job qualifications.</p>

    <h2>9. Lying or Exaggerating</h2>
    <p>Be honest about your skills and experience. Employers verify information, and dishonesty is grounds for immediate termination, even after hiring.</p>

    <h2>10. Too Long or Too Short</h2>
    <p>For early career professionals: 1 page. For experienced professionals: 1-2 pages. Don't exceed 2 pages unless you have exceptional experience.</p>

    <h2>Final Thoughts</h2>
    <p>Avoid these mistakes and you'll be ahead of most candidates. Your resume is a marketing document—use it to showcase your best self professionally.</p>
    `,
  },
  3: {
    id: 3,
    title: "Best Resume Tips for 2026",
    category: "Career",
    date: "July 5, 2026",
    readTime: 6,
    author: "Emily Rodriguez",
    description: "Discover modern resume trends and strategies that actually work in today's competitive job market.",
    featured: false,
    color: "#F97316",
    content: `
    <h2>Modern Resume Trends That Actually Work</h2>
    <p>Resume standards evolve. Here's what's working in 2026 to help you stand out from the competition and land more interviews.</p>

    <h2>1. The Accomplishment-Focused Approach</h2>
    <p>Recruiters want to see results. Instead of listing responsibilities, focus on achievements. Use metrics and percentages to quantify your impact.</p>

    <h2>2. Tailored Resumes for Each Application</h2>
    <p>One-size-fits-all resumes are dead. Customize your resume for each job application. Highlight the skills most relevant to the specific role.</p>

    <h2>3. Professional Summary Over Objective</h2>
    <p>Replace the outdated objective statement with a compelling professional summary that positions you as the solution to the employer's needs.</p>

    <h2>4. Skills Section with Proficiency Levels</h2>
    <p>List skills with proficiency: Expert, Advanced, Intermediate. This gives employers a clear picture of your capabilities.</p>

    <h2>5. Include Relevant Certifications</h2>
    <p>Online certifications are valuable in 2026. Include Google Certifications, Microsoft, AWS, or industry-specific credentials.</p>

    <h2>Conclusion</h2>
    <p>Your resume is your marketing tool. Make every word count and tailor your approach to the modern job market.</p>
    `,
  },
  4: {
    id: 4,
    title: "Keywords That Pass ATS Systems",
    category: "ATS",
    date: "June 2026",
    readTime: 5,
    author: "David Park",
    description: "Master the right keywords and phrases to include in your resume to beat ATS filters.",
    featured: false,
    color: "#60A5FA",
    content: `
    <h2>Master the Art of ATS Keywords</h2>
    <p>Keywords are the lifeblood of ATS systems. Understanding which keywords to include can mean the difference between an interview request and a rejection.</p>

    <h2>Why Keywords Matter</h2>
    <p>ATS systems scan resumes for keywords that match the job description. If your resume doesn't contain the right keywords, the system will rank it lower.</p>

    <h2>How to Find Keywords</h2>
    <p>Read the job posting carefully. Look for technical skills, software, certifications, and industry-specific terms. Create a list of 20-30 keywords from each job posting.</p>

    <h2>Strategic Keyword Placement</h2>
    <p>Place keywords naturally throughout your resume. Include them in your professional summary, job descriptions, and skills section.</p>

    <h2>Conclusion</h2>
    <p>Keywords are your gateway to the interview. Research them carefully and place them strategically.</p>
    `,
  },
  5: {
    id: 5,
    title: "Resume Format: Chronological vs Functional",
    category: "Resume",
    date: "June 2026",
    readTime: 6,
    author: "Jessica Lee",
    description: "Understand the pros and cons of different resume formats and choose the best one for your career.",
    featured: false,
    color: "#2BE6C1",
    content: `
    <h2>Choosing the Right Resume Format</h2>
    <p>Not all resumes are created equal. Your resume format can make or break your chances of landing an interview.</p>

    <h2>Chronological Format</h2>
    <p>Lists your work experience in reverse order. This is the most traditional and widely accepted format. Great for showing career progression.</p>

    <h2>Functional Format</h2>
    <p>Focuses on skills and accomplishments rather than job history. Great for career changers or those with employment gaps.</p>

    <h2>Combination Format</h2>
    <p>Blends chronological and functional elements. Highlights skills first, then shows work history. Increasingly popular.</p>

    <h2>Conclusion</h2>
    <p>Choose the format that highlights your strengths and minimizes weaknesses based on your unique career situation.</p>
    `,
  },
  6: {
    id: 6,
    title: "How to Answer 'Tell Me About Yourself'",
    category: "Interview",
    date: "June 2026",
    readTime: 5,
    author: "Maria Garcia",
    description: "Craft a compelling 60-second response that showcases your strengths and captures attention.",
    featured: false,
    color: "#EC4899",
    content: `
    <h2>Master This Common Interview Question</h2>
    <p>Almost every interview starts with "Tell me about yourself." This is your chance to make a first impression.</p>

    <h2>The 60-Second Rule</h2>
    <p>Your answer should last 60-90 seconds and sound natural, not robotic.</p>

    <h2>The Formula</h2>
    <p><strong>1. Your Background:</strong> Start with your current or most recent role.</p>
    <p><strong>2. Key Achievements:</strong> Highlight 2-3 major accomplishments aligned with the role.</p>
    <p><strong>3. Why You're Here:</strong> Explain why you're interested in this specific role and company.</p>

    <h2>Conclusion</h2>
    <p>Your answer sets the tone for the entire interview. Make it count with a clear, compelling 60-second story.</p>
    `,
  },
  7: {
    id: 7,
    title: "Salary Negotiation Strategies",
    category: "Career",
    date: "May 2026",
    readTime: 7,
    author: "Robert Wilson",
    description: "Learn proven tactics to negotiate your salary confidently and get what you deserve.",
    featured: false,
    color: "#F97316",
    content: `
    <h2>Negotiate Your Worth</h2>
    <p>Salary negotiation is one of the most important skills in your career. Many professionals leave thousands on the table by not negotiating.</p>

    <h2>Research Your Market Value</h2>
    <p>Before any negotiation, research your market value using Glassdoor, Payscale, and LinkedIn Salary.</p>

    <h2>The Art of the Ask</h2>
    <p>When asked about salary expectations, provide a range rather than a single number. Always aim high.</p>

    <h2>Conclusion</h2>
    <p>Salary negotiation is normal. Approach it professionally with data and confidence in your worth.</p>
    `,
  },
  8: {
    id: 8,
    title: "AI Tools That Improve Your Resume",
    category: "AI",
    date: "May 2026",
    readTime: 4,
    author: "Alex Chen",
    description: "Discover cutting-edge AI tools and apps that help optimize your resume.",
    featured: false,
    color: "#8B5CF6",
    content: `
    <h2>Leverage AI to Enhance Your Resume</h2>
    <p>Artificial intelligence has revolutionized resume writing. Whether starting from scratch or optimizing, these tools help.</p>

    <h2>ChatGPT and Claude</h2>
    <p>Large language models help you brainstorm achievements, rewrite bullet points, and tailor resumes for specific jobs.</p>

    <h2>Resume Optimization Tools</h2>
    <p>Tools like Jobscan and Rezi analyze your resume against job descriptions and suggest improvements.</p>

    <h2>Conclusion</h2>
    <p>AI tools enhance your resume. Use them strategically while maintaining your unique voice.</p>
    `,
  },
  9: {
    id: 9,
    title: "Common Interview Questions & Answers",
    category: "Interview",
    date: "May 2026",
    readTime: 8,
    author: "Patricia Brown",
    description: "Prepare for your interview with detailed answers to top questions hiring managers ask.",
    featured: false,
    color: "#EC4899",
    content: `
    <h2>Prepare for the Questions They'll Ask</h2>
    <p>Certain interview questions almost always come up. Preparing answers ahead helps you interview with confidence.</p>

    <h2>Common Questions</h2>
    <p><strong>1. Why do you want to work here?</strong> Research thoroughly and reference specific projects.</p>
    <p><strong>2. What are your strengths?</strong> Pick relevant strengths and back with examples.</p>
    <p><strong>3. Tell me about a time you failed.</strong> Choose a failure you've learned from.</p>
    <p><strong>4. Where do you see yourself in 5 years?</strong> Show growth ambitions and commitment.</p>

    <h2>Conclusion</h2>
    <p>With these answers prepared, you'll walk in confident and ready to impress.</p>
    `,
  },
  10: {
    id: 10,
    title: "How to Use AI to Build Your Resume",
    category: "AI",
    date: "April 2026",
    readTime: 5,
    author: "Thomas Anderson",
    description: "Step-by-step guide on using ChatGPT to write impactful resume content.",
    featured: false,
    color: "#8B5CF6",
    content: `
    <h2>Step-by-Step Guide to AI-Powered Resume Building</h2>
    <p>Building a resume from scratch can be daunting. AI makes it easier and faster.</p>

    <h2>Steps</h2>
    <p><strong>1. Gather Information:</strong> Collect work history, education, and accomplishments.</p>
    <p><strong>2. Use AI for Content:</strong> Use ChatGPT to generate compelling bullet points.</p>
    <p><strong>3. Optimize Keywords:</strong> Incorporate relevant keywords naturally.</p>
    <p><strong>4. Format and Structure:</strong> Ensure consistent formatting throughout.</p>
    <p><strong>5. Polish and Enhance:</strong> Use Grammarly to improve clarity.</p>

    <h2>Conclusion</h2>
    <p>AI combined with human judgment creates the best results.</p>
    `,
  },
  11: {
    id: 11,
    title: "Resume Action Verbs That Stand Out",
    category: "Resume",
    date: "April 2026",
    readTime: 4,
    author: "Victoria Martinez",
    description: "Replace weak verbs with powerful action words that showcase your achievements.",
    featured: false,
    color: "#2BE6C1",
    content: `
    <h2>Power Up Your Resume with Strong Verbs</h2>
    <p>The difference between a good and great resume often comes down to the verbs you use.</p>

    <h2>Top Action Verbs</h2>
    <p><strong>Leadership:</strong> Championed, Directed, Established, Facilitated, Guided, Led, Managed, Mentored.</p>
    <p><strong>Achievement:</strong> Accelerated, Accomplished, Achieved, Advanced, Boosted, Delivered, Increased, Surpassed.</p>
    <p><strong>Innovation:</strong> Conceived, Created, Designed, Developed, Engineered, Invented, Launched, Pioneered.</p>

    <h2>Conclusion</h2>
    <p>Strong, varied action verbs make your resume stand out.</p>
    `,
  },
  12: {
    id: 12,
    title: "Career Pivot: Switching Industries",
    category: "Career",
    date: "April 2026",
    readTime: 7,
    author: "Kevin Thompson",
    description: "Complete guide to successfully transitioning while highlighting transferable skills.",
    featured: false,
    color: "#F97316",
    content: `
    <h2>Successfully Transition to a New Industry</h2>
    <p>Career changes feel risky, but many professionals do it successfully. Here's how.</p>

    <h2>Steps</h2>
    <p><strong>1. Identify Transferable Skills:</strong> List skills that apply across industries.</p>
    <p><strong>2. Research Target Industry:</strong> Understand the industry deeply.</p>
    <p><strong>3. Bridge Gaps with Credentials:</strong> Take relevant courses or certifications.</p>
    <p><strong>4. Tailor Your Resume:</strong> Reframe experience in industry-relevant terms.</p>

    <h2>Conclusion</h2>
    <p>Career pivots are increasingly common. With preparation, you can successfully transition.</p>
    `,
  },
  13: {
    id: 13,
    title: "Body Language Tips for Interviews",
    category: "Interview",
    date: "March 2026",
    readTime: 5,
    author: "Lisa Anderson",
    description: "Master non-verbal communication to make a lasting positive impression.",
    featured: false,
    color: "#EC4899",
    content: `
    <h2>Non-Verbal Communication Matters</h2>
    <p>55% of communication is body language. In an interview, what you do speaks as loudly as what you say.</p>

    <h2>Key Elements</h2>
    <p><strong>Handshake:</strong> Firm, confident handshake conveys professionalism.</p>
    <p><strong>Posture:</strong> Sit upright and lean slightly forward to show engagement.</p>
    <p><strong>Eye Contact:</strong> Consistent eye contact shows honesty and engagement.</p>
    <p><strong>Gestures:</strong> Use natural hand gestures to emphasize points.</p>

    <h2>Conclusion</h2>
    <p>Body language makes or breaks interviews. Master these tips for success.</p>
    `,
  },
  14: {
    id: 14,
    title: "ATS Scanners Explained: What They Look For",
    category: "ATS",
    date: "March 2026",
    readTime: 6,
    author: "Marcus Johnson",
    description: "Deep dive into how ATS works and what formatting helps your resume rank higher.",
    featured: false,
    color: "#60A5FA",
    content: `
    <h2>Understanding Applicant Tracking Systems</h2>
    <p>Understanding ATS will help you create resumes that get through screening and into hiring managers' hands.</p>

    <h2>How ATS Works</h2>
    <p>The ATS parses your resume and extracts information. It looks for keywords, formats, and structures. It ranks applications based on relevance.</p>

    <h2>What ATS Looks For</h2>
    <p><strong>Keywords:</strong> Most important. Search for keywords from the job description.</p>
    <p><strong>Format:</strong> Prefers simple, clean formatting.</p>
    <p><strong>Headings:</strong> Standard section headings work best.</p>
    <p><strong>Dates:</strong> Consistent date formatting helps parsing.</p>

    <h2>Conclusion</h2>
    <p>ATS understanding gives you a huge advantage in your job search.</p>
    `,
  },
  15: {
    id: 15,
    title: "Personal Brand: Build Your Professional Profile",
    category: "Career",
    date: "March 2026",
    readTime: 6,
    author: "Sophia Williams",
    description: "Create a strong personal brand to attract recruiters and career opportunities.",
    featured: false,
    color: "#F97316",
    content: `
    <h2>Build a Personal Brand That Attracts Opportunities</h2>
    <p>Your personal brand is your unique value proposition. A strong brand opens doors.</p>

    <h2>Key Elements</h2>
    <p><strong>LinkedIn:</strong> Optimize your profile thoroughly.</p>
    <p><strong>Messaging:</strong> Keep your message consistent across platforms.</p>
    <p><strong>Thought Leadership:</strong> Write articles and share insights.</p>
    <p><strong>Network:</strong> Build relationships strategically in your industry.</p>

    <h2>Conclusion</h2>
    <p>Invest in building your personal brand throughout your career.</p>
    `,
  },
  16: {
    id: 16,
    title: "Automating Your Job Search with AI",
    category: "AI",
    date: "February 2026",
    readTime: 6,
    author: "Nathan Davis",
    description: "Leverage AI tools to automate job applications and research companies efficiently.",
    featured: false,
    color: "#8B5CF6",
    content: `
    <h2>Let AI Help You Find Your Dream Job</h2>
    <p>Job searching is time-consuming. AI tools streamline the process and help find relevant opportunities.</p>

    <h2>Tools and Strategies</h2>
    <p><strong>Job Matching:</strong> Platforms use AI to match your profile with jobs.</p>
    <p><strong>Email Alerts:</strong> Set up automated alerts for matching jobs.</p>
    <p><strong>Company Research:</strong> AI analyzes company data in seconds.</p>
    <p><strong>Interview Prep:</strong> Practice with real questions specific to your role.</p>

    <h2>Conclusion</h2>
    <p>AI handles repetitive tasks, freeing you to focus on landing your dream job.</p>
    `,
  },
  17: {
    id: 17,
    title: "Cover Letter Secrets Recruiters Love",
    category: "Resume",
    date: "February 2026",
    readTime: 5,
    author: "Jennifer White",
    description: "Write a cover letter that complements your resume and gets you noticed.",
    featured: false,
    color: "#2BE6C1",
    content: `
    <h2>Write a Cover Letter That Gets Results</h2>
    <p>A well-written cover letter strengthens your application and captures attention.</p>

    <h2>Key Elements</h2>
    <p><strong>Length:</strong> One page, three paragraphs.</p>
    <p><strong>Personalization:</strong> Address hiring manager by name and research the company.</p>
    <p><strong>Opening:</strong> Start with enthusiasm and capture attention.</p>
    <p><strong>Body:</strong> Explain why you want this role and highlight relevant achievements.</p>
    <p><strong>Closing:</strong> End with enthusiasm and invite them to contact you.</p>

    <h2>Conclusion</h2>
    <p>Personalize each cover letter to significantly improve your chances.</p>
    `,
  },
  18: {
    id: 18,
    title: "STAR Method: Answer Behavioral Questions",
    category: "Interview",
    date: "February 2026",
    readTime: 5,
    author: "Christopher Gray",
    description: "Master the STAR technique to answer behavioral questions like a pro.",
    featured: false,
    color: "#EC4899",
    content: `
    <h2>Master Behavioral Interview Questions</h2>
    <p>The STAR method is the best way to answer behavioral questions with clarity and impact.</p>

    <h2>STAR Framework</h2>
    <p><strong>S - Situation:</strong> Set the scene and describe context.</p>
    <p><strong>T - Task:</strong> Explain the challenge or problem you faced.</p>
    <p><strong>A - Action:</strong> Describe what YOU did specifically.</p>
    <p><strong>R - Result:</strong> Explain the outcome with numbers and specifics.</p>

    <h2>Pro Tips</h2>
    <p>Prepare 5-7 STAR stories highlighting different qualities. Practice out loud. Keep each story to about 2 minutes.</p>

    <h2>Conclusion</h2>
    <p>The STAR method transforms scary interview moments into opportunities to showcase skills.</p>
    `,
  },
};

// Get all posts as array
const POSTS = Object.values(ARTICLES_DATA);

// ============================================
// FEATURED ARTICLE COMPONENT
// ============================================

function FeaturedArticle({ post, onCategoryClick, onArticleClick }) {
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

              <Typography sx={{ color: "#666", mb: 2, lineHeight: 1.6 }}>
                {post.description}
              </Typography>
            </Box>

            <Stack direction="row" spacing={3} alignItems="center">
              <Typography variant="caption" sx={{ color: "#999" }}>
                {post.date} • {post.readTime} min read
              </Typography>
              <Button
                variant="contained"
                onClick={() => onArticleClick(post.id)}
                sx={{
                  background: post.color,
                  textTransform: "none",
                  fontWeight: 600,
                  cursor: "pointer",
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

// ============================================
// POST GRID CARD COMPONENT
// ============================================

function PostGridCard({ post, onCategoryClick, onArticleClick }) {
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
      <Box
        sx={{
          height: 180,
          background: `linear-gradient(135deg, ${post.color}, ${post.color}80)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" sx={{ color: "#999" }}>
            {post.readTime} min
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Button
            size="small"
            onClick={() => onArticleClick(post.id)}
            sx={{
              color: post.color,
              textTransform: "none",
              fontWeight: 600,
              cursor: "pointer",
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

// ============================================
// HERO SECTION COMPONENT
// ============================================

function HeroSection({ searchValue, onSearchChange }) {
  return (
    <Box textAlign="center" mb={6} pt={2}>
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

      <Typography sx={{ fontSize: "0.9rem", color: "#999", mb: 4 }}>
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
              "&:hover": { borderColor: "#ddd" },
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

// ============================================
// CATEGORY FILTER COMPONENT
// ============================================

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
            cursor: "pointer",
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
                cursor: "pointer",
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

// ============================================
// BLOG HOME PAGE
// ============================================

function BlogHome({ onArticleClick = () => {} }) {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSearchValue("");
  };

  const handleReadClick = (articleId) => {
    console.log("Clicking article:", articleId);
    onArticleClick(articleId);
  };

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase());

      const matchesCategory = activeCategory === null || post.category === activeCategory;

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

        {featuredPost && (
          <FeaturedArticle
            post={featuredPost}
            onCategoryClick={handleCategoryClick}
            onArticleClick={handleReadClick}
          />
        )}

        {regularPosts.length > 0 ? (
          <Grid container spacing={3}>
            {regularPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostGridCard
                  post={post}
                  onCategoryClick={handleCategoryClick}
                  onArticleClick={handleReadClick}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" py={8}>
            <Typography color="#999" sx={{ fontSize: "1.1rem" }}>
              {featuredPost ? "No more articles match your criteria." : "No articles found."}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

// ============================================
// ARTICLE DETAIL PAGE
// ============================================

function ArticleDetailPage({ articleId, onBack }) {
  const article = ARTICLES_DATA[articleId];

  console.log("Article ID:", articleId);
  console.log("Article found:", !!article);

  if (!article) {
    return (
      <Box sx={{ background: "#fafafa", minHeight: "100vh", py: 6 }}>
        <Container sx={{ py: 6, textAlign: "center" }}>
          <Typography variant="h5" color="error">
            Article not found (ID: {articleId})
          </Typography>
          <Button 
            onClick={onBack} 
            startIcon={<ArrowBackIcon />} 
            sx={{ mt: 2, cursor: "pointer" }}
          >
            Back to Articles
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ background: "#fafafa", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <Button
          onClick={() => {
            console.log("Back button clicked");
            onBack();
          }}
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: "#666",
            textTransform: "none",
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": { background: "#f0f0f0" },
          }}
        >
          Back to Blog
        </Button>

        <Box
          sx={{
            height: 300,
            background: `linear-gradient(135deg, ${article.color}, ${article.color}99)`,
            borderRadius: 3,
            mb: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArticleIcon sx={{ fontSize: 100, color: "white", opacity: 0.3 }} />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Chip
            label={article.category}
            sx={{
              background: `${article.color}20`,
              color: article.color,
              fontWeight: 600,
              mb: 2,
            }}
          />

          <Typography
            variant="h2"
            fontWeight="800"
            sx={{
              mb: 2,
              lineHeight: 1.2,
              color: "#1a1a1a",
            }}
          >
            {article.title}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 40, height: 40, background: article.color, color: "white" }}>
                {article.author[0]}
              </Avatar>
              <Box>
                <Typography fontWeight="600" sx={{ color: "#1a1a1a" }}>
                  {article.author}
                </Typography>
                <Typography variant="caption" sx={{ color: "#999" }}>
                  Author
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayIcon sx={{ color: "#999", fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                {article.date}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon sx={{ color: "#999", fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                {article.readTime} min read
              </Typography>
            </Stack>
          </Stack>

          <Divider />
        </Box>

        <Box
          sx={{
            "& h2": {
              fontSize: "1.8rem",
              fontWeight: 700,
              mt: 4,
              mb: 2,
              color: "#1a1a1a",
            },
            "& h3": {
              fontSize: "1.3rem",
              fontWeight: 600,
              mt: 3,
              mb: 1.5,
              color: "#333",
            },
            "& p": {
              fontSize: "1.1rem",
              lineHeight: 1.8,
              mb: 2,
              color: "#555",
            },
            "& ul, & ol": {
              fontSize: "1.1rem",
              lineHeight: 1.8,
              mb: 2,
              paddingLeft: 3,
              color: "#555",
            },
            "& li": { mb: 1 },
            "& strong": { fontWeight: 700, color: "#1a1a1a" },
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: "1px solid #e0e0e0",
            background: "#fff",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
            Ready to land your dream job?
          </Typography>
          <Typography sx={{ color: "#666", mb: 3 }}>
            Apply these tips to your resume today and watch your interview requests increase.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                background: article.color,
                textTransform: "none",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { background: article.color, opacity: 0.9 },
              }}
            >
              Download Our Resume Template
            </Button>
            <Button
              variant="outlined"
              onClick={onBack}
              sx={{
                borderColor: article.color,
                color: article.color,
                textTransform: "none",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { background: `${article.color}10` },
              }}
            >
              ← Back to Blog
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================

export default function CompleteBlogSystem() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const handleArticleClick = (articleId) => {
    console.log("Article clicked in main:", articleId);
    setSelectedArticleId(articleId);
    setCurrentView(articleId);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const handleBackToBlog = () => {
    console.log("Back to blog clicked");
    setCurrentView("home");
    setSelectedArticleId(null);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <Box>
      {currentView === "home" ? (
        <BlogHome onArticleClick={handleArticleClick} />
      ) : (
        <ArticleDetailPage articleId={selectedArticleId} onBack={handleBackToBlog} />
      )}
    </Box>
  );
}