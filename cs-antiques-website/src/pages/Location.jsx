import { Box, Container, Typography, Grid, Card, Stack, Button, Divider } from "@mui/material";
import { LocationOn, Phone, AccessTime, Map, Navigation } from "@mui/icons-material";
import { useEffect, useState } from "react";

function Location() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
  };

  const getMapsEmbedUrl = (address) => {
    return `https://www.google.com/maps/embed/v1/search?key=AIzaSyDu3Ej7pE5A3C7XQB7nP5K8Q3F0G2H1I4J&q=${encodeURIComponent(address)}`;
  };

  const branches = [
    {
      name: "Panadura Branch",
      address: "214A Horana Rd, Panadura 12500",
      phone: "075 264 4606",
      hours: "Monday - Saturday: 10:00 AM - 6:00 PM",
      hours2: "Sunday: By Appointment",
      latitude: 6.7296,
      longitude: 79.9112,
      description: "Our main showroom featuring the complete collection",
    },
    {
      name: "Rajagiriya Branch",
      address: "456 Gem Street, Rajagiriya",
      phone: "078 783 5304",
      hours: "Monday - Saturday: 10:00 AM - 6:00 PM",
      hours2: "Sunday: By Appointment",
      latitude: 6.8961,
      longitude: 80.0869,
      description: "Premium collection center with specialized pieces",
    },
  ];

  const otherNumbers = [
    { number: "075 169 8620", type: "General Inquiry" },
    { number: "071 442 4606", type: "Customer Support" },
    { number: "077 396 3489", type: "Appointments" },
  ];

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      <style>{animationStyles}</style>
      
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            animation: isVisible ? "fadeInUp 0.8s ease-out 0.1s both" : "none",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Find Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              color: "#d4af37",
              mb: 2,
              letterSpacing: "0.02em",
              background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Our Locations
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#b0b0b0",
              maxWidth: "700px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Visit us at either of our premium showrooms across Sri Lanka
          </Typography>
        </Box>
      </Box>

      {/* Showroom Cards */}
      <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 0.5, sm: 1, md: 4 }, width: "100%", overflow: "hidden" }}>
        <Box sx={{ maxWidth: "100vw", mx: "auto" }}>
          <Grid container spacing={{ xs: 0.5, sm: 2, md: 6 }} sx={{ justifyContent: "center" }}>
            {branches.map((branch, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    transition: "all 0.4s ease",
                    animation: isVisible ? `fadeInUp 0.8s ease-out ${0.2 + index * 0.2}s both` : "none",
                    "&:hover": {
                      borderColor: "#d4af37",
                      boxShadow: "0 30px 80px rgba(212, 175, 55, 0.3)",
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                {/* Map Placeholder */}
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "120px", sm: "180px", md: "300px" },
                    background: "linear-gradient(135deg, rgba(30, 40, 80, 0.4) 0%, rgba(50, 60, 100, 0.3) 50%, rgba(30, 50, 90, 0.4) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "2px solid rgba(212, 175, 55, 0.15)",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: "20%",
                      left: "30%",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#ff6b6b",
                      boxShadow: "0 0 20px rgba(255, 107, 107, 0.5)",
                    },
                    "&:hover": {
                      background: "linear-gradient(135deg, rgba(40, 50, 90, 0.5) 0%, rgba(60, 70, 110, 0.4) 50%, rgba(40, 60, 100, 0.5) 100%)",
                      "&::after": {
                        opacity: 1,
                      },
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: { xs: 0.5, md: 1 },
                    }}
                    onClick={() => window.open(getGoogleMapsUrl(branch.address), "_blank")}
                  >
                    <Map sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, color: "#d4af37" }} />
                    <Box>
                      <Typography sx={{ color: "#d4af37", fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" }, fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
                        {branch.name}
                      </Typography>
                      <Typography sx={{ color: "#909090", fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" }, fontFamily: "'Poppins', sans-serif", mt: 0.3 }}>
                        Click to open on Google Maps
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                  {/* Content */}
                  <Box sx={{ p: { xs: 1.5, sm: 2.5, md: 4 } }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        fontWeight: 800,
                        color: "#d4af37",
                        mb: 1,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {branch.name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                        color: "#b0b0b0",
                        mb: 3,
                        lineHeight: 1.6,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {branch.description}
                    </Typography>

                    <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)", mb: 3 }} />

                    {/* Address */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mb: 3,
                        animation: isVisible ? `slideInLeft 0.8s ease-out ${0.3 + index * 0.2}s both` : "none",
                      }}
                    >
                      <LocationOn sx={{ color: "#d4af37", flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            color: "#909090",
                            mb: 0.5,
                            fontFamily: "'Poppins', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Address
                        </Typography>
                        <Typography sx={{ color: "#eaeaea", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
                          {branch.address}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Phone */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mb: 3,
                        animation: isVisible ? `slideInLeft 0.8s ease-out ${0.35 + index * 0.2}s both` : "none",
                      }}
                    >
                      <Phone sx={{ color: "#d4af37", flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            color: "#909090",
                            mb: 0.5,
                            fontFamily: "'Poppins', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Phone
                        </Typography>
                        <Typography
                          component="a"
                          href={`tel:${branch.phone.replace(/\s/g, "")}`}
                          sx={{
                            color: "#eaeaea",
                            fontWeight: 600,
                            fontFamily: "'Poppins', sans-serif",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "#d4af37",
                            },
                          }}
                        >
                          {branch.phone}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Hours */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mb: 3,
                        animation: isVisible ? `slideInLeft 0.8s ease-out ${0.4 + index * 0.2}s both` : "none",
                      }}
                    >
                      <AccessTime sx={{ color: "#d4af37", flexShrink: 0, mt: 0.5 }} />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            color: "#909090",
                            mb: 0.5,
                            fontFamily: "'Poppins', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Hours
                        </Typography>
                        <Typography sx={{ color: "#eaeaea", mb: 0.5, fontFamily: "'Poppins', sans-serif", fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                          {branch.hours}
                        </Typography>
                        <Typography sx={{ color: "#b0b0b0", fontSize: { xs: "0.8rem", md: "0.85rem" }, fontFamily: "'Poppins', sans-serif" }}>
                          {branch.hours2}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ backgroundColor: "rgba(212, 175, 55, 0.15)", mb: 3 }} />

                    {/* Buttons */}
                    <Stack
                      spacing={2}
                      sx={{
                        animation: isVisible ? `fadeInUp 0.8s ease-out ${0.45 + index * 0.2}s both` : "none",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        startIcon={<Phone />}
                        sx={{
                          background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                          color: "#0b0b0b",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 15px 40px rgba(212, 175, 55, 0.5)",
                          },
                        }}
                      >
                        Call Now
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => window.open(getGoogleMapsUrl(branch.address), "_blank")}
                        startIcon={<Navigation />}
                        sx={{
                          borderColor: "#d4af37",
                          color: "#d4af37",
                          fontWeight: 700,
                          fontFamily: "'Poppins', sans-serif",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "rgba(212, 175, 55, 0.15)",
                            borderColor: "#e8c547",
                            color: "#e8c547",
                            transform: "translateY(-3px)",
                          },
                        }}
                      >
                        View on Google Maps
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Alternative Numbers */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid rgba(212,175,55,0.1)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                fontWeight: 700,
                color: "#d4af37",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 2,
                fontFamily: "'Playfair Display', serif",
                animation: isVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none",
              }}
            >
              Additional Contact
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: 800,
                color: "#eaeaea",
                fontFamily: "'Playfair Display', serif",
                animation: isVisible ? "fadeInUp 0.8s ease-out 0.25s both" : "none",
              }}
            >
              Quick Contact Info
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {otherNumbers.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.15)",
                    backdropFilter: "blur(10px)",
                    p: { xs: 2.5, md: 3 },
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.4s ease",
                    animation: isVisible ? `scaleIn 0.8s ease-out ${0.3 + index * 0.15}s both` : "none",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      borderColor: "#d4af37",
                      boxShadow: "0 25px 60px rgba(212, 175, 55, 0.25)",
                    },
                  }}
                >
                  <Phone sx={{ fontSize: "2.5rem", color: "#d4af37", mb: 2 }} />
                  <Typography
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      fontWeight: 700,
                      color: "#eaeaea",
                      mb: 1,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", mb: 2.5, fontFamily: "'Poppins', sans-serif", fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                    {item.type}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    href={`tel:${item.number.replace(/\s/g, "")}`}
                    sx={{
                      background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                      color: "#0b0b0b",
                      fontWeight: 700,
                      fontFamily: "'Poppins', sans-serif",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 30px rgba(212, 175, 55, 0.4)",
                      },
                    }}
                  >
                    Call
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Location;
