import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Stack,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArticleIcon from "@mui/icons-material/Article";

// Article content data
const ARTICLE_CONTENT = {
  1: {
    title: "How to Write an ATS-Friendly Resume",
    category: "Resume",
    date: "July 15, 2026",
    readTime: 5,
    author: "Sarah Johnson",
    color: "#2BE6C1",
    coverImage: "#2BE6C1",
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
    title: "Top 10 Resume Mistakes",
    category: "ATS",
    date: "July 10, 2026",
    readTime: 4,
    author: "Michael Chen",
    color: "#60A5FA",
    coverImage: "#60A5FA",
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
    title: "Best Resume Tips for 2026",
    category: "Career",
    date: "July 5, 2026",
    readTime: 6,
    author: "Emily Rodriguez",
    color: "#F97316",
    coverImage: "#F97316",
    content: `
    <h2>Modern Resume Trends That Actually Work</h2>
    <p>Resume standards evolve. Here's what's working in 2026 to help you stand out from the competition and land more interviews.</p>

    <h2>1. The Accomplishment-Focused Approach</h2>
    <p>Recruiters want to see results. Instead of listing responsibilities, focus on achievements. Use metrics and percentages to quantify your impact. Example: "Improved customer satisfaction from 78% to 92% through process optimization."</p>

    <h2>2. Tailored Resumes for Each Application</h2>
    <p>One-size-fits-all resumes are dead. Customize your resume for each job application. Highlight the skills and experiences most relevant to the specific role.</p>

    <h2>3. Professional Summary Over Objective</h2>
    <p>Replace the outdated objective statement with a compelling professional summary that positions you as the solution to the employer's needs.</p>

    <h2>4. Skills Section with Proficiency Levels</h2>
    <p>List not just skills, but indicate proficiency: Expert, Advanced, Intermediate. This gives employers a clear picture of your capabilities.</p>

    <h2>5. Include Relevant Certifications</h2>
    <p>Online certifications are valuable in 2026. Include Google Certifications, Microsoft, AWS, or industry-specific credentials relevant to the role.</p>

    <h2>6. Showcase Remote Work Experience</h2>
    <p>Highlight remote work successes, collaboration tools you're proficient with, and self-management abilities. Remote-friendly skills are highly valued.</p>

    <h2>7. LinkedIn URL Integration</h2>
    <p>Include your LinkedIn profile URL. Make sure your profile matches your resume and is completely filled out.</p>

    <h2>8. Quantify Everything</h2>
    <p>Numbers grab attention: "Led team of 8," "Managed $2M budget," "Increased efficiency by 40%," "Reduced costs by $150K annually."</p>

    <h2>9. Action-Oriented Language</h2>
    <p>Use power verbs: Accelerated, Amplified, Championed, Delivered, Engineered, Facilitated, Galvanized, Harmonized, Innovated, Jumpstarted.</p>

    <h2>10. Keep it Scannable</h2>
    <p>Use bullet points, bold key terms, and maintain white space. Recruiters scan—they don't read. Make important information pop.</p>

    <h2>2026 Bonus: AI Awareness</h2>
    <p>Many companies now use AI to screen resumes. Ensure your resume includes keywords from the job description and is formatted in a way AI can parse easily.</p>

    <h2>Conclusion</h2>
    <p>Your resume is your marketing tool. Make every word count, back claims with data, and tailor your approach to the modern job market. Success starts with a winning resume.</p>
    `,
  },
  4: {
    title: "Keywords That Pass ATS Systems",
    category: "ATS",
    date: "June 2026",
    readTime: 5,
    author: "David Park",
    color: "#60A5FA",
    coverImage: "#60A5FA",
    content: `
    <h2>Master the Art of ATS Keywords</h2>
    <p>Keywords are the lifeblood of ATS systems. Understanding which keywords to include can mean the difference between an interview request and a rejection. Let's dive into the keyword strategies that work.</p>

    <h2>Why Keywords Matter</h2>
    <p>ATS systems scan resumes for keywords that match the job description. If your resume doesn't contain the right keywords, the system will rank it lower, and you won't make the cut. It's that simple.</p>

    <h2>How to Find Keywords</h2>
    <p>Start by reading the job posting carefully. Look for technical skills, software, certifications, and industry-specific terms. These are your keywords. Create a list of 20-30 keywords from each job posting.</p>

    <h2>Strategic Keyword Placement</h2>
    <p>Place keywords naturally throughout your resume. Include them in your professional summary, job descriptions, and skills section. Don't just list keywords randomly—weave them into your accomplishment statements.</p>

    <h2>Technical Keywords</h2>
    <p>Include all relevant technical skills: programming languages, software platforms, tools, and frameworks. If the job asks for Python, make sure Python appears in your resume.</p>

    <h2>Soft Skills Keywords</h2>
    <p>Don't forget soft skills. Keywords like "Leadership," "Communication," "Project Management," "Problem-Solving," and "Teamwork" are frequently searched for by ATS systems.</p>

    <h2>Industry-Specific Terms</h2>
    <p>Use terminology specific to your industry. A healthcare professional should use medical terms; a marketer should use marketing metrics and platforms.</p>

    <h2>Keyword Density</h2>
    <p>Include keywords naturally but don't overdo it. Use each keyword 2-3 times throughout your resume. Too many repetitions look spammy and can trigger ATS filters.</p>

    <h2>Variations and Synonyms</h2>
    <p>Use variations of keywords. If the job says "project management," also include "project coordinator" or "project lead." This increases your matches.</p>

    <h2>Conclusion</h2>
    <p>Keywords are your gateway to the interview. Research them carefully, place them strategically, and watch your ATS ranking improve dramatically.</p>
    `,
  },
  5: {
    title: "Resume Format: Chronological vs Functional",
    category: "Resume",
    date: "June 2026",
    readTime: 6,
    author: "Jessica Lee",
    color: "#2BE6C1",
    coverImage: "#2BE6C1",
    content: `
    <h2>Choosing the Right Resume Format for Your Career</h2>
    <p>Not all resumes are created equal. Your resume format can make or break your chances of landing an interview. Let's explore the most effective formats.</p>

    <h2>Chronological Format</h2>
    <p>The chronological format lists your work experience in reverse order, starting with your most recent job. This is the most traditional and widely accepted format.</p>

    <h3>Pros:</h3>
    <ul>
    <li>Familiar to recruiters and ATS systems</li>
    <li>Shows career progression clearly</li>
    <li>Works well for those with consistent work history</li>
    </ul>

    <h3>Cons:</h3>
    <ul>
    <li>Gaps in employment are visible</li>
    <li>Career changes can be hard to explain</li>
    </ul>

    <h2>Functional Format</h2>
    <p>The functional format focuses on skills and accomplishments rather than job history. It organizes information by skills categories.</p>

    <h3>Pros:</h3>
    <ul>
    <li>Hides employment gaps</li>
    <li>Great for career changers</li>
    <li>Emphasizes skills over chronology</li>
    </ul>

    <h3>Cons:</h3>
    <ul>
    <li>Some ATS systems don't handle it well</li>
    <li>Recruiters may view it suspiciously</li>
    </ul>

    <h2>Combination Format</h2>
    <p>The combination format blends chronological and functional elements. It highlights skills first, then shows work history.</p>

    <p>This hybrid approach is becoming increasingly popular because it combines the benefits of both formats while minimizing their weaknesses.</p>

    <h2>Which Format Should You Choose?</h2>
    <p>Choose chronological if you have a steady work history. Choose functional if you're changing careers or have significant employment gaps. Choose combination if you want the best of both worlds.</p>

    <h2>Conclusion</h2>
    <p>Your resume format should highlight your strengths and minimize weaknesses. Choose wisely based on your unique career situation.</p>
    `,
  },
  6: {
    title: "How to Answer 'Tell Me About Yourself'",
    category: "Interview",
    date: "June 2026",
    readTime: 5,
    author: "Maria Garcia",
    color: "#EC4899",
    coverImage: "#EC4899",
    content: `
    <h2>Master This Common Interview Question</h2>
    <p>Almost every interview starts with "Tell me about yourself." This seemingly simple question is your chance to make a first impression. Let's craft your perfect answer.</p>

    <h2>The 60-Second Rule</h2>
    <p>Your answer should last 60-90 seconds. It should be conversational, not robotic. Practice until it sounds natural.</p>

    <h2>The Formula</h2>
    <p><strong>1. Your Background:</strong> Start with your current or most recent role. Where did you come from professionally?</p>
    <p><strong>2. Key Achievements:</strong> Highlight 2-3 major accomplishments that align with the job you're interviewing for.</p>
    <p><strong>3. Why You're Here:</strong> Explain why you're interested in this specific role and company.</p>

    <h2>Example Structure</h2>
    <p>"I'm a marketing manager with 5 years of experience in digital marketing. At my current company, I led a team that increased online engagement by 150% and generated $2M in revenue. I'm excited about this opportunity because I admire your company's innovative approach to customer engagement, and I believe my skills in team leadership and data-driven marketing can contribute to your goals."</p>

    <h2>What NOT to Do</h2>
    <ul>
    <li>Don't ramble or go over time</li>
    <li>Don't focus on personal life unless relevant</li>
    <li>Don't badmouth previous employers</li>
    <li>Don't sound scripted or rehearsed</li>
    </ul>

    <h2>Pro Tips</h2>
    <p>Research the company beforehand. Reference something specific about them in your answer. This shows genuine interest. Smile, make eye contact, and speak with confidence.</p>

    <h2>Conclusion</h2>
    <p>Your answer to "Tell me about yourself" sets the tone for the entire interview. Make it count with a clear, compelling 60-second story.</p>
    `,
  },
  7: {
    title: "Salary Negotiation Strategies",
    category: "Career",
    date: "May 2026",
    readTime: 7,
    author: "Robert Wilson",
    color: "#F97316",
    coverImage: "#F97316",
    content: `
    <h2>Negotiate Your Worth</h2>
    <p>Salary negotiation is one of the most important skills in your career. Many professionals leave thousands of dollars on the table by not negotiating. Let's change that.</p>

    <h2>Research Your Market Value</h2>
    <p>Before any negotiation, research your market value. Use websites like Glassdoor, Payscale, and LinkedIn Salary. Know the salary range for your role in your location.</p>

    <h2>The Art of the Ask</h2>
    <p>When asked about salary expectations, provide a range rather than a single number. Always aim high. The employer will likely negotiate down from your initial ask.</p>

    <h2>The Timing</h2>
    <p>Negotiate after they've made an offer, not before. Once they've decided they want you, you have more leverage.</p>

    <h2>Beyond Base Salary</h2>
    <p>Remember, total compensation includes bonuses, stock options, PTO, remote work flexibility, professional development budget, and more. Negotiate the total package, not just base salary.</p>

    <h2>Handling Pushback</h2>
    <p>If they say the budget is fixed, ask about performance bonuses, signing bonuses, additional vacation days, or future salary reviews. There's always room to negotiate something.</p>

    <h2>Know Your Value</h2>
    <p>You have value. If they've offered you the job, they believe you can do it. Don't be afraid to ask for what you deserve.</p>

    <h2>Conclusion</h2>
    <p>Salary negotiation is a normal part of the hiring process. Approach it professionally, armed with data, and confident in your worth. You might be surprised at what you can achieve.</p>
    `,
  },
  8: {
    title: "AI Tools That Improve Your Resume",
    category: "AI",
    date: "May 2026",
    readTime: 4,
    author: "Alex Chen",
    color: "#8B5CF6",
    coverImage: "#8B5CF6",
    content: `
    <h2>Leverage AI to Enhance Your Resume</h2>
    <p>Artificial intelligence has revolutionized resume writing. Whether you're starting from scratch or optimizing an existing resume, these AI tools can help you create a compelling document.</p>

    <h2>ChatGPT and Claude</h2>
    <p>Large language models can help you brainstorm achievements, rewrite bullet points, and tailor your resume for specific jobs. Use prompts like "Rewrite this achievement in a way that impresses recruiters" or "Suggest 5 strong action verbs for this role."</p>

    <h2>Resume Optimization Tools</h2>
    <p>Tools like Jobscan and Rezi analyze your resume against job descriptions and suggest improvements. They identify missing keywords and formatting issues.</p>

    <h2>Grammar and Style Checkers</h2>
    <p>Tools like Grammarly catch spelling and grammar errors, improve clarity, and ensure professional tone throughout your resume.</p>

    <h2>ATS Analysis Tools</h2>
    <p>AI-powered tools scan your resume to ensure it's ATS-friendly. They highlight compatibility issues and suggest fixes.</p>

    <h2>Design and Formatting AI</h2>
    <p>Tools like Canva and Adobe Express offer AI-powered design suggestions to make your resume visually appealing while maintaining ATS compatibility.</p>

    <h2>Interview Preparation AI</h2>
    <p>Tools like HireVue help you prepare for video interviews with AI feedback on your delivery, tone, and content.</p>

    <h2>The Human Touch</h2>
    <p>Remember, AI is a tool. Use it to enhance your resume, but ensure your unique voice comes through. The most effective resumes combine AI efficiency with human authenticity.</p>

    <h2>Conclusion</h2>
    <p>AI tools are here to help you. Use them strategically to create a resume that stands out and lands you interviews.</p>
    `,
  },
  9: {
    title: "Common Interview Questions & Answers",
    category: "Interview",
    date: "May 2026",
    readTime: 8,
    author: "Patricia Brown",
    color: "#EC4899",
    coverImage: "#EC4899",
    content: `
    <h2>Prepare for the Questions They'll Ask</h2>
    <p>There are certain interview questions that almost always come up. Preparing answers to these ahead of time will help you interview with confidence.</p>

    <h2>1. Why do you want to work here?</h2>
    <p>Answer: Research the company thoroughly. Reference specific projects, values, or achievements that resonate with you. Show genuine interest.</p>

    <h2>2. What are your strengths?</h2>
    <p>Answer: Pick 2-3 genuine strengths relevant to the role. Back them up with examples from your work history.</p>

    <h2>3. What are your weaknesses?</h2>
    <p>Answer: Choose a real but non-critical weakness. Explain how you've worked to improve it. Example: "I sometimes get too focused on details. I've learned to use checklists to stay on track."</p>

    <h2>4. Tell me about a time you failed</h2>
    <p>Answer: Choose a failure you've learned from. Explain what happened, what you learned, and how it made you better.</p>

    <h2>5. Where do you see yourself in 5 years?</h2>
    <p>Answer: Show growth ambitions while demonstrating commitment to the role. Connect your goals to the company's trajectory.</p>

    <h2>6. Why are you leaving your current job?</h2>
    <p>Answer: Stay positive. Focus on what you're moving toward, not what you're running from. Never badmouth your previous employer.</p>

    <h2>7. What's your salary expectation?</h2>
    <p>Answer: Provide a range based on market research. Let them make the first offer if possible.</p>

    <h2>8. Do you have any questions for us?</h2>
    <p>Answer: Always ask questions. This shows genuine interest. Ask about team dynamics, success metrics, or company culture.</p>

    <h2>Pro Tips</h2>
    <p>Use the STAR method for behavioral questions. Practice out loud. Make eye contact. Smile. Show enthusiasm.</p>

    <h2>Conclusion</h2>
    <p>With these answers prepared, you'll walk into your interview with confidence and ready to impress.</p>
    `,
  },
  10: {
    title: "How to Use AI to Build Your Resume",
    category: "AI",
    date: "April 2026",
    readTime: 5,
    author: "Thomas Anderson",
    color: "#8B5CF6",
    coverImage: "#8B5CF6",
    content: `
    <h2>Step-by-Step Guide to AI-Powered Resume Building</h2>
    <p>Building a resume from scratch can be daunting. Let's use AI to make it easier and faster.</p>

    <h2>Step 1: Gather Your Information</h2>
    <p>Collect all your work history, education, certifications, and accomplishments. Have concrete numbers ready.</p>

    <h2>Step 2: Use AI for Content Generation</h2>
    <p>Use ChatGPT to generate bullet points. Prompt: "I was responsible for managing a team of 5 developers. Write 3 impressive bullet points for my resume highlighting this responsibility and mentioning a successful project delivery."</p>

    <h2>Step 3: Optimize with Keywords</h2>
    <p>Find the job posting you're targeting. Ask AI to identify key skills and keywords. Then ask it to naturally incorporate these into your resume content.</p>

    <h2>Step 4: Format and Structure</h2>
    <p>Use AI formatting tools to ensure consistent formatting. Check that dates, punctuation, and structure are uniform throughout.</p>

    <h2>Step 5: Polish and Enhance</h2>
    <p>Use Grammarly or similar tools to catch errors. Ask AI to improve clarity and impact of your statements.</p>

    <h2>Step 6: ATS Testing</h2>
    <p>Run your resume through ATS scanners. Make adjustments based on feedback.</p>

    <h2>Step 7: Final Human Review</h2>
    <p>Have a trusted friend or mentor review your resume. Fresh eyes catch things you might miss.</p>

    <h2>Conclusion</h2>
    <p>AI makes resume building faster and more efficient. The combination of AI tools and human judgment creates the best results.</p>
    `,
  },
  11: {
    title: "Resume Action Verbs That Stand Out",
    category: "Resume",
    date: "April 2026",
    readTime: 4,
    author: "Victoria Martinez",
    color: "#2BE6C1",
    coverImage: "#2BE6C1",
    content: `
    <h2>Power Up Your Resume with Strong Verbs</h2>
    <p>The difference between a good resume and a great one often comes down to the verbs you use. Replace weak verbs with powerful action words.</p>

    <h2>Weak vs. Strong Verbs</h2>
    <p><strong>Weak:</strong> "Worked on marketing projects"</p>
    <p><strong>Strong:</strong> "Spearheaded marketing initiatives that increased brand awareness by 45%"</p>

    <h2>Top Action Verbs by Category</h2>
    <h3>Leadership:</h3>
    <p>Championed, Directed, Established, Facilitated, Guided, Headed, Led, Managed, Mentored, Organized, Orchestrated, Oversaw, Pioneered, Spearheaded, Stewarded</p>

    <h3>Achievement:</h3>
    <p>Accelerated, Accomplished, Achieved, Advanced, Amplified, Attained, Boosted, Delivered, Earned, Exceeded, Expanded, Generated, Increased, Maximized, Surpassed</p>

    <h3>Innovation:</h3>
    <p>Conceived, Conceptualized, Created, Designed, Developed, Engineered, Fabricated, Formulated, Invented, Launched, Originated, Pioneered, Produced, Shaped, Transformed</p>

    <h3>Improvement:</h3>
    <p>Ameliorated, Corrected, Elevated, Enhanced, Expanded, Improved, Optimized, Rebuilt, Refined, Reorganized, Revamped, Revitalized, Streamlined, Upgraded</p>

    <h2>Common Mistakes</h2>
    <p>Avoid repetitive verbs. Don't use the same verb more than once on your resume. Avoid weak verbs like "responsible for," "worked on," or "helped."</p>

    <h2>Pro Tip</h2>
    <p>Pair action verbs with quantifiable results. "Increased sales by 35%" is more impressive than just "increased sales."</p>

    <h2>Conclusion</h2>
    <p>Your choice of verbs has real impact. Use strong, varied action verbs throughout your resume to stand out from other candidates.</p>
    `,
  },
  12: {
    title: "Career Pivot: Switching Industries",
    category: "Career",
    date: "April 2026",
    readTime: 7,
    author: "Kevin Thompson",
    color: "#F97316",
    coverImage: "#F97316",
    content: `
    <h2>Successfully Transition to a New Industry</h2>
    <p>Changing careers can feel risky, but many professionals do it successfully. Here's how to make your transition smooth and compelling to employers.</p>

    <h2>Step 1: Identify Transferable Skills</h2>
    <p>List skills that apply across industries: project management, communication, problem-solving, leadership, technical skills, etc. These are your bridges to the new industry.</p>

    <h2>Step 2: Research Your Target Industry</h2>
    <p>Understand the industry deeply. Learn the jargon, key players, trends, and challenges. This shows genuine interest and commitment.</p>

    <h2>Step 3: Bridge the Gap with Credentials</h2>
    <p>Consider taking online courses, certifications, or bootcamps relevant to your target industry. These show commitment and bridge skill gaps.</p>

    <h2>Step 4: Tailor Your Resume</h2>
    <p>Reframe your experience in terms relevant to the new industry. Use industry keywords. Show how your past role prepared you for this new direction.</p>

    <h2>Step 5: Leverage Your Network</h2>
    <p>Connect with people in the target industry. Informational interviews can provide insights and potentially lead to opportunities.</p>

    <h2>Step 6: Tell a Compelling Story</h2>
    <p>In interviews, explain why you're making the change. A well-told narrative about your career evolution is more compelling than "I just want a change."</p>

    <h2>Step 7: Consider Starting Lower</h2>
    <p>You may need to take a lateral move or even a step back initially. This is normal when changing industries. Focus on getting your foot in the door.</p>

    <h2>Conclusion</h2>
    <p>Career pivots are increasingly common. With preparation, the right narrative, and strategic positioning, you can successfully transition to a new industry.</p>
    `,
  },
  13: {
    title: "Body Language Tips for Interviews",
    category: "Interview",
    date: "March 2026",
    readTime: 5,
    author: "Lisa Anderson",
    color: "#EC4899",
    coverImage: "#EC4899",
    content: `
    <h2>Non-Verbal Communication Matters</h2>
    <p>Research shows that 55% of communication is body language. In an interview, what you do speaks as loudly as what you say.</p>

    <h2>The Handshake</h2>
    <p>A firm handshake (not crushing, not limp) conveys confidence and professionalism. Make eye contact and smile. This is your first impression.</p>

    <h2>Posture</h2>
    <p>Sit upright. Lean slightly forward to show engagement. Avoid slouching or leaning back. Good posture conveys confidence and interest.</p>

    <h2>Eye Contact</h2>
    <p>Make consistent eye contact throughout the interview. Not staring, but regular, comfortable eye contact. This shows honesty and engagement.</p>

    <h2>Hand Gestures</h2>
    <p>Use natural hand gestures to emphasize points. Keep hands visible—avoid crossing arms or hiding hands in pockets. This shows openness.</p>

    <h2>Facial Expressions</h2>
    <p>Smile genuinely. Show interest and enthusiasm through your face. Nod occasionally to show you're following along.</p>

    <h2>What NOT to Do</h2>
    <ul>
    <li>Don't fidget with pens, hair, or jewelry</li>
    <li>Don't cross your arms (appears defensive)</li>
    <li>Don't look at your phone or watch</li>
    <li>Don't mirror the interviewer's negative body language</li>
    </ul>

    <h2>The Closing</h2>
    <p>Stand with good posture. Shake hands firmly. Maintain eye contact. Thank them for their time. Leave with confidence.</p>

    <h2>Conclusion</h2>
    <p>Your body language can make or break your interview. Practice these tips and walk in confident and prepared.</p>
    `,
  },
  14: {
    title: "ATS Scanners Explained: What They Look For",
    category: "ATS",
    date: "March 2026",
    readTime: 6,
    author: "Marcus Johnson",
    color: "#60A5FA",
    coverImage: "#60A5FA",
    content: `
    <h2>Understanding Applicant Tracking Systems</h2>
    <p>Understanding how ATS works will help you create a resume that gets through the system and into the hands of hiring managers.</p>

    <h2>How ATS Works</h2>
    <p>When you submit your resume, the ATS parses it and extracts information. It looks for specific formats, keywords, and structures. It ranks your application based on relevance to the job posting.</p>

    <h2>What ATS Looks For</h2>
    <h3>Keywords</h3>
    <p>The most important factor. The ATS searches for keywords from the job description. Match the language of the posting.</p>

    <h3>Standard Format</h3>
    <p>ATS prefers simple, clean formatting. It struggles with graphics, tables, unusual fonts, and complex layouts.</p>

    <h3>Proper Headings</h3>
    <p>Use standard section headings like "Experience," "Education," "Skills." Custom headings confuse the system.</p>

    <h3>Contact Information</h3>
    <p>Clear, complete contact information (name, phone, email, location) at the top of the resume.</p>

    <h3>Employment Dates</h3>
    <p>Consistent date formatting helps the ATS understand your timeline.</p>

    <h2>What Breaks ATS</h2>
    <ul>
    <li>Headers and footers with important info</li>
    <li>Unusual fonts or special characters</li>
    <li>Tables, columns, or text boxes</li>
    <li>Images or graphics (except your name)</li>
    <li>PDF files with poor formatting</li>
    </ul>

    <h2>Pro Tips</h2>
    <p>Save as .docx or .pdf. Use simple fonts. Include a skills section. Use job description language naturally. Test your resume with ATS scanners.</p>

    <h2>Conclusion</h2>
    <p>ATS systems are here to stay. Understanding how they work gives you a huge advantage in your job search.</p>
    `,
  },
  15: {
    title: "Personal Brand: Build Your Professional Profile",
    category: "Career",
    date: "March 2026",
    readTime: 6,
    author: "Sophia Williams",
    color: "#F97316",
    coverImage: "#F97316",
    content: `
    <h2>Build a Personal Brand That Attracts Opportunities</h2>
    <p>Your personal brand is how employers, recruiters, and colleagues perceive you professionally. A strong personal brand opens doors.</p>

    <h2>What is Personal Brand?</h2>
    <p>Your personal brand is your unique value proposition. It's the combination of your skills, experience, personality, and values that sets you apart from others in your field.</p>

    <h2>LinkedIn Profile Optimization</h2>
    <p>Your LinkedIn profile is often the first place recruiters look. Ensure your headline is clear and compelling. Write a professional summary that showcases your value. Include a professional photo. Highlight your top skills and endorsements.</p>

    <h2>Consistent Messaging</h2>
    <p>Whether on LinkedIn, your website, or in person, your professional message should be consistent. Tell the same story across all platforms.</p>

    <h2>Thought Leadership</h2>
    <p>Write articles or posts about your industry. Share insights. Engage with content in your field. Position yourself as knowledgeable and committed.</p>

    <h2>Network Strategically</h2>
    <p>Build relationships in your industry. Attend conferences. Join professional organizations. A strong network amplifies your personal brand.</p>

    <h2>Online Presence</h2>
    <p>Consider a personal website or blog. Share your work, projects, and insights. This demonstrates expertise and commitment.</p>

    <h2>Professional Reputation</h2>
    <p>Deliver excellent work. Ask for recommendations. Build a reputation for reliability and quality. Your reputation is your personal brand.</p>

    <h2>Conclusion</h2>
    <p>A strong personal brand makes you memorable and attractive to employers. Invest in building and maintaining it throughout your career.</p>
    `,
  },
  16: {
    title: "Automating Your Job Search with AI",
    category: "AI",
    date: "February 2026",
    readTime: 6,
    author: "Nathan Davis",
    color: "#8B5CF6",
    coverImage: "#8B5CF6",
    content: `
    <h2>Let AI Help You Find Your Dream Job</h2>
    <p>Job searching can be time-consuming. AI tools can automate and streamline the process, helping you find relevant opportunities more efficiently.</p>

    <h2>Job Matching Algorithms</h2>
    <p>Platforms like LinkedIn and Indeed use AI to match your profile with relevant jobs. Optimize your profile to improve matches.</p>

    <h2>Automated Application Tools</h2>
    <p>Tools like Zapier and IFTTT can automate job applications to multiple platforms. However, use with caution—personalized applications still perform better.</p>

    <h2>Email Alerts and Notifications</h2>
    <p>Set up automated email alerts for new job postings that match your criteria. This ensures you don't miss opportunities.</p>

    <h2>Company Research AI</h2>
    <p>Use AI to research companies. Tools can analyze company reviews, salary data, growth trends, and culture indicators in seconds.</p>

    <h2>Salary Negotiation AI</h2>
    <p>Some tools use AI to help you prepare for salary negotiations by analyzing market data and suggesting strategies.</p>

    <h2>Interview Preparation</h2>
    <p>AI-powered interview platforms help you practice with real questions specific to your target role. Get feedback on your delivery and content.</p>

    <h2>Time Management</h2>
    <p>Use AI to organize and prioritize job opportunities. Focus your efforts on the most promising leads.</p>

    <h2>Conclusion</h2>
    <p>AI can handle the repetitive, time-consuming parts of job searching, freeing you to focus on what matters: preparing to land your dream job.</p>
    `,
  },
  17: {
    title: "Cover Letter Secrets Recruiters Love",
    category: "Resume",
    date: "February 2026",
    readTime: 5,
    author: "Jennifer White",
    color: "#2BE6C1",
    coverImage: "#2BE6C1",
    content: `
    <h2>Write a Cover Letter That Gets Results</h2>
    <p>A well-written cover letter can complement your resume and strengthen your application. Here's what recruiters look for.</p>

    <h2>Keep It Brief</h2>
    <p>One page, three paragraphs. Recruiters spend seconds scanning cover letters. Make every word count.</p>

    <h2>Personalization</h2>
    <p>Address the hiring manager by name. Reference specific aspects of the company and role. Show that you've researched them specifically.</p>

    <h2>Strong Opening</h2>
    <p>Start with enthusiasm. Reference how you found the job or a mutual connection. Capture their attention immediately.</p>

    <h2>Body: Tell Your Story</h2>
    <p>Explain why you're interested in this role and company. Highlight relevant achievements. Show how your skills match their needs.</p>

    <h2>Closing: Call to Action</h2>
    <p>End with enthusiasm. Thank them for their consideration. Invite them to contact you. Make it easy for them to respond.</p>

    <h2>What NOT to Do</h2>
    <ul>
    <li>Don't repeat your resume verbatim</li>
    <li>Don't make excuses for gaps or changes</li>
    <li>Don't use generic templates</li>
    <li>Don't write more than one page</li>
    </ul>

    <h2>Pro Tip</h2>
    <p>Write a unique cover letter for each application. Personalization takes 15 minutes but significantly improves your chances.</p>

    <h2>Conclusion</h2>
    <p>Your cover letter is your chance to stand out. Use it to tell a compelling story and demonstrate genuine interest.</p>
    `,
  },
  18: {
    title: "STAR Method: Answer Behavioral Questions",
    category: "Interview",
    date: "February 2026",
    readTime: 5,
    author: "Christopher Gray",
    color: "#EC4899",
    coverImage: "#EC4899",
    content: `
    <h2>Master Behavioral Interview Questions</h2>
    <p>Behavioral questions ask you to recall past situations. The STAR method is the best way to answer them with clarity and impact.</p>

    <h2>What is STAR?</h2>
    <p>STAR stands for Situation, Task, Action, Result. It's a framework for structuring your answer to behavioral questions.</p>

    <h2>S - Situation</h2>
    <p>Set the scene. Describe the context briefly but clearly. Give the interviewer enough information to understand the scenario. Example: "I was working as a project manager for a tech startup with 5 developers."</p>

    <h2>T - Task</h2>
    <p>Explain the challenge or problem. What was your responsibility? What did you need to accomplish? Example: "We had a critical project deadline in 2 weeks, but our lead developer quit unexpectedly."</p>

    <h2>A - Action</h2>
    <p>Describe what YOU did specifically. Don't discuss what the team did—focus on your actions. What steps did you take? What decisions did you make? Example: "I immediately redistributed tasks, mentored the junior developers, and personally took on critical modules."</p>

    <h2>R - Result</h2>
    <p>Explain the outcome. Use numbers and specifics. How did your actions impact the situation? Example: "We delivered the project on time. Team morale remained high, and three junior developers were promoted based on their performance during this crisis."</p>

    <h2>Complete Example</h2>
    <p><strong>Question:</strong> "Tell me about a time you handled pressure."</p>
    <p><strong>Answer:</strong> "I was managing a product launch with multiple stakeholders (S). The launch date was non-negotiable, but we discovered critical bugs two weeks before launch (T). I organized daily standup meetings, prioritized bugs by severity, created a communication plan with stakeholders, and worked overtime to oversee testing (A). We launched on schedule with zero critical issues, and customer satisfaction was 4.8/5 stars (R)."</p>

    <h2>Pro Tips</h2>
    <p>Prepare 5-7 STAR stories ahead of time. Make sure they highlight different qualities: leadership, teamwork, problem-solving, resilience, etc. Practice out loud. Keep each story to about 2 minutes.</p>

    <h2>Conclusion</h2>
    <p>The STAR method transforms behavioral questions from scary moments into opportunities to showcase your skills. Practice it, and you'll interview with confidence.</p>
    `,
  },
};

// Single Article Page Component
export default function ArticleDetail({ articleId, onBack }) {
  const article = ARTICLE_CONTENT[articleId];

  if (!article) {
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Article not found
        </Typography>
        <Button onClick={onBack} startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
          Back to Articles
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ background: "#fafafa", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        {/* Back Button */}
        <Button
          onClick={onBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: "#666",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              background: "#f0f0f0",
            },
          }}
        >
          Back to Blog
        </Button>

        {/* Cover Image */}
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

        {/* Article Header */}
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
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  background: article.color,
                  color: "white",
                }}
              >
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

        {/* Article Content */}
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
            "& li": {
              mb: 1,
            },
            "& strong": {
              fontWeight: 700,
              color: "#1a1a1a",
            },
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Call to Action */}
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
            Apply these tips to your resume today and watch your interview requests increase. Remember, your resume is your first impression—make it count!
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: article.color,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                background: article.color,
                opacity: 0.9,
              },
            }}
          >
            Download Our Resume Template
          </Button>
        </Box>
      </Container>
    </Box>
  );
}