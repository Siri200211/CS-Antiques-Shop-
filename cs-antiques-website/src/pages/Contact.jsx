import { Box, Container, Typography, Grid, Card, Stack, Button, TextField, Divider, IconButton } from "@mui/material";
import { Phone, Email, WhatsApp, Facebook, Send, LocationOn } from "@mui/icons-material";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Facebook,
      label: "CS Antiques",
      url: "https://www.facebook.com/share/1Fu3caXyrp/",
      color: "#1877F2",
    },
    {
      icon: Facebook,
      label: "CS Pettagam Paradise",
      url: "https://www.facebook.com/share/1QS9BdpFX6/",
      color: "#1877F2",
    },
    {
      icon: Facebook,
      label: "CS Antiques Rajagiriya",
      url: "https://www.facebook.com/share/187hg525rG/",
      color: "#1877F2",
    },
    {
      icon: Facebook,
      label: "CS Gramophones",
      url: "https://www.facebook.com/share/1EwrqcfaMG/",
      color: "#1877F2",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            fontWeight: 800,
            color: "#d4af37",
            mb: 2,
            letterSpacing: "0.02em",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#b0b0b0",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Get in touch with us for inquiries, appointments, or custom orders
        </Typography>
      </Box>

      {/* Quick Contact Options */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {/* Email */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                  backdropFilter: "blur(10px)",
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "#d4af37",
                    boxShadow: "0 20px 50px rgba(212, 175, 55, 0.25)",
                  },
                }}
              >
                <Email sx={{ fontSize: "3rem", color: "#d4af37", mb: 2 }} />
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#eaeaea",
                    mb: 1,
                  }}
                >
                  Email Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#b0b0b0",
                    mb: 2,
                  }}
                >
                  For detailed inquiries
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="mailto:csantiquespanadura@gmail.com"
                  sx={{
                    backgroundColor: "#d4af37",
                    color: "#0b0b0b",
                    fontWeight: 700,
                  }}
                >
                  csantiquespanadura@gmail.com
                </Button>
              </Card>
            </Grid>

            {/* WhatsApp */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  background: "rgba(37, 211, 102, 0.08)",
                  border: "1px solid rgba(37, 211, 102, 0.2)",
                  backdropFilter: "blur(10px)",
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "#25D366",
                    boxShadow: "0 20px 50px rgba(37, 211, 102, 0.25)",
                  },
                }}
              >
                <WhatsApp sx={{ fontSize: "3rem", color: "#25D366", mb: 2 }} />
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#eaeaea",
                    mb: 1,
                  }}
                >
                  WhatsApp Chat
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#b0b0b0",
                    mb: 2,
                  }}
                >
                  For quick response
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="https://wa.me/+9471882809"
                  target="_blank"
                  sx={{
                    backgroundColor: "#25D366",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  071 882 0809
                </Button>
              </Card>
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  background: "rgba(212, 175, 55, 0.08)",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                  backdropFilter: "blur(10px)",
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "#d4af37",
                    boxShadow: "0 20px 50px rgba(212, 175, 55, 0.25)",
                  },
                }}
              >
                <Phone sx={{ fontSize: "3rem", color: "#d4af37", mb: 2 }} />
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#eaeaea",
                    mb: 1,
                  }}
                >
                  Call Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "#b0b0b0",
                    mb: 2,
                  }}
                >
                  For immediate assistance
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="tel:+94752644606"
                  sx={{
                    backgroundColor: "#d4af37",
                    color: "#0b0b0b",
                    fontWeight: 700,
                  }}
                >
                  075 264 4606
                </Button>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.1)", my: 4 }} />

          {/* Contact Form & Info */}
          <Grid container spacing={6}>
            {/* Form */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#d4af37",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Send Us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#eaeaea",
                          "& fieldset": {
                            borderColor: "rgba(212, 175, 55, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#909090",
                          opacity: 1,
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0b0b0",
                          "&.Mui-focused": {
                            color: "#d4af37",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#eaeaea",
                          "& fieldset": {
                            borderColor: "rgba(212, 175, 55, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0b0b0",
                          "&.Mui-focused": {
                            color: "#d4af37",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#eaeaea",
                          "& fieldset": {
                            borderColor: "rgba(212, 175, 55, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0b0b0",
                          "&.Mui-focused": {
                            color: "#d4af37",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#eaeaea",
                          "& fieldset": {
                            borderColor: "rgba(212, 175, 55, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0b0b0",
                          "&.Mui-focused": {
                            color: "#d4af37",
                          },
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "#eaeaea",
                          "& fieldset": {
                            borderColor: "rgba(212, 175, 55, 0.3)",
                          },
                          "&:hover fieldset": {
                            borderColor: "#d4af37",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#d4af37",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: "#b0b0b0",
                          "&.Mui-focused": {
                            color: "#d4af37",
                          },
                        },
                      }}
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      endIcon={<Send />}
                      sx={{
                        backgroundColor: "#d4af37",
                        color: "#0b0b0b",
                        fontWeight: 700,
                        py: 1.5,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#d4af37",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={4}>
                  {/* Panadura */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#eaeaea",
                        mb: 2,
                      }}
                    >
                      Panadura Branch
                    </Typography>
                    <Stack spacing={1.5}>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <LocationOn sx={{ color: "#d4af37", flexShrink: 0 }} />
                        <Box>
                          <Typography sx={{ fontSize: "0.8rem", color: "#909090", mb: 0.3 }}>
                            Address
                          </Typography>
                          <Typography sx={{ color: "#eaeaea" }}>
                            123 Main Street, Panadura
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Phone sx={{ color: "#d4af37", flexShrink: 0 }} />
                        <Box>
                          <Typography sx={{ fontSize: "0.8rem", color: "#909090", mb: 0.3 }}>
                            Phone
                          </Typography>
                          <Typography sx={{ color: "#eaeaea", fontWeight: 600 }}>
                            075 264 4606
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }} />

                  {/* Rajagiriya */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#eaeaea",
                        mb: 2,
                      }}
                    >
                      Rajagiriya Branch
                    </Typography>
                    <Stack spacing={1.5}>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <LocationOn sx={{ color: "#d4af37", flexShrink: 0 }} />
                        <Box>
                          <Typography sx={{ fontSize: "0.8rem", color: "#909090", mb: 0.3 }}>
                            Address
                          </Typography>
                          <Typography sx={{ color: "#eaeaea" }}>
                            456 Gem Street, Rajagiriya
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Phone sx={{ color: "#d4af37", flexShrink: 0 }} />
                        <Box>
                          <Typography sx={{ fontSize: "0.8rem", color: "#909090", mb: 0.3 }}>
                            Phone
                          </Typography>
                          <Typography sx={{ color: "#eaeaea", fontWeight: 600 }}>
                            078 783 5304
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }} />

                  {/* Other Numbers */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#eaeaea",
                        mb: 2,
                      }}
                    >
                      Other Numbers
                    </Typography>
                    <Stack spacing={1}>
                      {["075 169 8620", "071 442 4606", "077 396 3489"].map((number, idx) => (
                        <Button
                          key={idx}
                          fullWidth
                          href={`tel:${number.replace(/\s/g, "")}`}
                          sx={{
                            color: "#d4af37",
                            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
                            justifyContent: "flex-start",
                            textTransform: "none",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            "&:hover": {
                              backgroundColor: "rgba(212, 175, 55, 0.1)",
                            },
                          }}
                        >
                          {number}
                        </Button>
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Social Media Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(212,175,55,0.1)",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Follow Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 800,
              color: "#eaeaea",
            }}
          >
            Connect on Social Media
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: social.color,
                  borderRadius: "50%",
                  border: `2px solid ${social.color}`,
                  p: 2,
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2) rotateZ(10deg)",
                    backgroundColor: `${social.color}20`,
                    boxShadow: `0 10px 30px ${social.color}40`,
                  },
                }}
              >
                <Icon fontSize="large" />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
