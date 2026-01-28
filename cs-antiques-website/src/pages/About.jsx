import { Box, Container, Typography, Grid, Stack, Button, Card } from "@mui/material";
import { CheckCircle, TrendingUp, Star, Handshake } from "@mui/icons-material";

function About() {
  const values = [
    {
      icon: CheckCircle,
      title: "Authenticity",
      description: "Genuine antiques with verified provenance and heritage",
    },
    {
      icon: Star,
      title: "Quality",
      description: "Premium craftsmanship that stands the test of time",
    },
    {
      icon: TrendingUp,
      title: "Trust",
      description: "Trusted by 700+ customers worldwide since 2019",
    },
    {
      icon: Handshake,
      title: "Excellence",
      description: "Dedicated service and unmatched customer support",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#0b0b0b", minHeight: "100vh", width: "100vw" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, md: 4 },
          width: "100%",
        }}
      >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 800,
                color: "#d4af37",
                mb: 2,
                letterSpacing: "0.02em",
              }}
            >
              About CS Antiques
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                color: "#b0b0b0",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Bringing the Unique Charm of Antiquity to Your Dream Home
            </Typography>
          </Box>
      </Box>

      {/* Our Story */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Grid container spacing={6} sx={{ alignItems: "center", maxWidth: "1400px", mx: "auto" }}>
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
                Our Heritage
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  fontWeight: 800,
                  color: "#eaeaea",
                  mb: 4,
                  lineHeight: 1.3,
                }}
              >
                Established in 2019 with Passion for Antiquity
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                CS Antiques was founded on a simple yet powerful vision: to preserve the beauty and craftsmanship of antique furniture while making these treasures accessible to those who appreciate true heritage. For over five years, we've been dedicated to sourcing, restoring, and delivering premium antique and reproduction furniture that tells a story.
              </Typography>

              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Our showrooms in Panadura and Rajagiriya showcase a carefully curated collection of pettagams (traditional storage chests), gramophones, cabinets, and meticulously reproduced pieces that honor traditional Sri Lankan craftsmanship.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d4af37",
                  color: "#0b0b0b",
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
                  },
                }}
              >
                Visit Our Showrooms
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)",
                borderRadius: "20px",
                p: 4,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212, 175, 55, 0.1)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 1,
                }}
              >
                5+ Years
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#b0b0b0",
                  mb: 4,
                }}
              >
                of Excellence in Antique Furniture
              </Typography>

              <Stack spacing={3}>
                <Box sx={{ pb: 2, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 1 }}>
                    2 Premium Showrooms
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                    Panadura & Rajagiriya branches serving your convenience
                  </Typography>
                </Box>

                <Box sx={{ pb: 2, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 1 }}>
                    400+ Pettagams Sold
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                    Traditional storage furniture loved by collectors
                  </Typography>
                </Box>

                <Box sx={{ pb: 2, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 1 }}>
                    200+ Gramophones Sold
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                    Vintage audio equipment connecting to the past
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 1 }}>
                    700+ Happy Customers
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}>
                    Trusted worldwide for authenticity and quality
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Values Section */}
      <Box sx={{ backgroundColor: "rgba(212, 175, 55, 0.03)", py: { xs: 8, md: 12 }, borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
              Our Core Values
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.75rem", md: "2.5rem" },
                fontWeight: 800,
                color: "#eaeaea",
              }}
            >
              What We Stand For
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      background: "rgba(212, 175, 55, 0.08)",
                      border: "1px solid rgba(212, 175, 55, 0.15)",
                      backdropFilter: "blur(10px)",
                      p: 3,
                      height: "100%",
                      textAlign: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        borderColor: "#d4af37",
                        boxShadow: "0 20px 50px rgba(212, 175, 55, 0.2)",
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: "3rem",
                        color: "#d4af37",
                        mb: 2,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#eaeaea",
                        mb: 1,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "#b0b0b0",
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {/* Antiques vs Reproductions */}
      <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Our Collections
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#eaeaea",
            }}
          >
            Authentic Antiques vs Premium Reproductions
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                border: "2px solid rgba(212, 175, 55, 0.3)",
                borderRadius: "20px",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 4,
                }}
              >
                Authentic Antiques
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Original pieces crafted decades or centuries ago, each bearing the marks of history and time. Our authentic antiques are:
              </Typography>

              <Stack spacing={2}>
                {[
                  "Verified original with documented history",
                  "Unique craftsmanship from past eras",
                  "Inherent value that appreciates over time",
                  "One-of-a-kind pieces with soul and character",
                  "Premium investment for collectors",
                ].map((item, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2 }}>
                    <CheckCircle sx={{ color: "#d4af37", flexShrink: 0 }} />
                    <Typography sx={{ color: "#eaeaea" }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
                border: "2px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "20px",
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 4,
                }}
              >
                Premium Reproductions
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Faithfully recreated designs using traditional methods and materials. Our reproductions offer:
              </Typography>

              <Stack spacing={2}>
                {[
                  "Authentic design with modern durability",
                  "Traditional craftsmanship at accessible prices",
                  "Consistent quality and availability",
                  "Perfect for those discovering antique style",
                  "Same premium materials and techniques",
                ].map((item, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2 }}>
                    <CheckCircle sx={{ color: "#d4af37", flexShrink: 0 }} />
                    <Typography sx={{ color: "#eaeaea" }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
