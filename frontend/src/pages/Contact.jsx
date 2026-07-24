import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email",
      description: "Send us an email and we'll respond within 24 hours.",
      value: "hello@cvgenius.com",
      color: "#2BE6C1",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Phone",
      description: "Call us during business hours (9 AM - 6 PM EST).",
      value: "+1 (555) 123-4567",
      color: "#60A5FA",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Office",
      description: "Visit us in person at our headquarters.",
      value: "San Francisco, CA 94102",
      color: "#F97316",
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, label: "LinkedIn", color: "#0077B5" },
    { icon: <TwitterIcon />, label: "Twitter", color: "#1DA1F2" },
    { icon: <FacebookIcon />, label: "Facebook", color: "#1877F2" },
  ];

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Yes! You can reach us by phone Monday-Friday, 9 AM to 6 PM EST. We also offer email and chat support.",
    },
    {
      question: "Can I schedule a demo or consultation?",
      answer:
        "Absolutely! Fill out the contact form mentioning you'd like to schedule a consultation, and our team will get back to you with available time slots.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include your name, email, and a detailed description of your inquiry. This helps us assist you better.",
    },
    {
      question: "Do you have a live chat option?",
      answer:
        "Yes, we offer live chat support on our website during business hours. Look for the chat icon in the bottom right corner.",
    },
  ];

  return (
    <Box sx={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* ============== HERO SECTION ============== */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2BE6C1 0%, #60A5FA 100%)",
          py: { xs: 8, sm: 12 },
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontWeight="800"
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", sm: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="h6"
            fontWeight="400"
            sx={{
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Have questions or need support? We're here to help and would love to hear from you.
          </Typography>
        </Container>
      </Box>

      {/* ============== CONTACT METHODS ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Grid container spacing={3}>
          {contactMethods.map((method, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2.5,
                  transition: "all 0.3s ease",
                  border: "1px solid #f0f0f0",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      background: `${method.color}20`,
                      borderRadius: 2,
                      mb: 2,
                      color: method.color,
                    }}
                  >
                    {method.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="700"
                    sx={{ mb: 1, color: "#1a1a1a" }}
                  >
                    {method.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#666",
                      lineHeight: 1.6,
                      mb: 1.5,
                      fontSize: "0.95rem",
                    }}
                  >
                    {method.description}
                  </Typography>

                  <Typography
                    sx={{
                      color: method.color,
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {method.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ============== CONTACT FORM SECTION ============== */}
      <Box sx={{ background: "white", py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              textAlign: "center",
              mb: 1,
              background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Send us a Message
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 4,
              fontSize: "1rem",
            }}
          >
            Fill out the form below and we'll get back to you as soon as possible.
          </Typography>

          {submitted && (
            <Card
              sx={{
                mb: 4,
                background: "#ecfdf5",
                border: "1px solid #10b981",
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
                <CheckCircleIcon sx={{ color: "#10b981", fontSize: 28 }} />
                <Box>
                  <Typography fontWeight="700" sx={{ color: "#10b981" }}>
                    Message Sent Successfully!
                  </Typography>
                  <Typography sx={{ color: "#059669", fontSize: "0.9rem" }}>
                    Thank you for reaching out. We'll be in touch soon.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              background: "#f8f9fa",
              p: { xs: 3, sm: 4 },
              borderRadius: 2.5,
              border: "1px solid #e0e0e0",
            }}
          >
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1.5,
                  },
                }}
              />

              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1.5,
                  },
                }}
              />

              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1.5,
                  },
                }}
              />

              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={6}
                fullWidth
                required
                placeholder="Tell us how we can help..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1.5,
                  },
                }}
              />

              <Button
                variant="contained"
                size="large"
                type="submit"
                endIcon={<SendIcon />}
                sx={{
                  background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                  textTransform: "none",
                  fontWeight: 700,
                  py: 1.8,
                  borderRadius: 1.5,
                  "&:hover": {
                    opacity: 0.9,
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ============== SOCIAL LINKS ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{ mb: 3, color: "#1a1a1a" }}
          >
            Follow Us on Social Media
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                sx={{
                  minWidth: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${link.color}20`,
                  color: link.color,
                  transition: "all 0.3s",
                  "&:hover": {
                    background: link.color,
                    color: "white",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {link.icon}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* ============== FAQ SECTION ============== */}
      <Box sx={{ background: "white", py: { xs: 6, sm: 8 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              textAlign: "center",
              mb: 2,
              background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#666",
              mb: 4,
              fontSize: "1rem",
            }}
          >
            Can't find the answer you're looking for? Feel free to contact us.
          </Typography>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  borderRadius: 1.5,
                  border: "1px solid #e0e0e0",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#2BE6C1" }} />}
                  sx={{
                    background: "#f8f9fa",
                    "&:hover": {
                      background: "#f0f0f0",
                    },
                  }}
                >
                  <Typography fontWeight="700" sx={{ color: "#1a1a1a" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ background: "#fafafa", p: 3 }}>
                  <Typography sx={{ color: "#666", lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ============== RESPONSE TIME SECTION ============== */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="700"
              sx={{ mb: 2, color: "#1a1a1a" }}
            >
              Quick Response Time
            </Typography>

            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2 }}>
              We understand that time is valuable. That's why we prioritize responding to your
              inquiries as quickly as possible.
            </Typography>

            <Stack spacing={2}>
              {[
                { time: "< 1 hour", type: "Emergency Issues" },
                { time: "< 24 hours", type: "General Inquiries" },
                { time: "< 48 hours", type: "Feature Requests" },
              ].map((item, index) => (
                <Box key={index} sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: 4,
                      background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                      borderRadius: 2,
                    }}
                  />
                  <Box>
                    <Typography fontWeight="700" sx={{ color: "#1a1a1a" }}>
                      {item.time}
                    </Typography>
                    <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                      {item.type}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailIcon sx={{ fontSize: 120, color: "white", opacity: 0.3 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ============== CTA SECTION ============== */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2BE6C1, #60A5FA)",
          py: { xs: 6, sm: 8 },
          textAlign: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            fontWeight="800"
            sx={{
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2.5rem" },
            }}
          >
            We're Here to Help
          </Typography>

          <Typography sx={{ mb: 4, fontSize: "1.1rem", opacity: 0.95 }}>
            Whether you have a question about features, pricing, or anything else, we're
            ready to answer all your questions.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "white",
              color: "#2BE6C1",
              textTransform: "none",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              "&:hover": {
                background: "#f0f0f0",
              },
            }}
          >
            Start a Conversation
          </Button>
        </Container>
      </Box>
    </Box>
  );
}