import { Box, Container, Typography, Grid, Stack, Button, Card } from "@mui/material";
import { CheckCircle, TrendingUp, Star, Handshake } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import chairmanImg from "../assets/images/leadership/chairman.png";
import managerImg from "../assets/images/leadership/manager.png";

function About() {
  const navigate = useNavigate();
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(212,175,55,0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(212,175,55,0.6);
          }
        }
      `}</style>
      {/* Our Story */}
      <Box sx={{ 
        py: { xs: 5, md: 8 }, 
        px: { xs: 2, md: 4 }, 
        width: "100%", 
        borderBottom: "1px solid rgba(212,175,55,0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          opacity: 0.5,
        }
      }}>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ alignItems: "flex-start", maxWidth: "1400px", mx: "auto" }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ animation: "fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards", opacity: 0 }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#d4af37",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 1.5,
                  fontFamily: '"Poppins", sans-serif',
                  animation: "fadeInDown 0.6s ease-out 0.1s forwards",
                  opacity: 0,
                }}
              >
                Our Heritage
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.8rem" },
                  fontWeight: 800,
                  color: "#eaeaea",
                  mb: 3,
                  lineHeight: 1.2,
                  fontFamily: '"Playfair Display", serif',
                  animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards",
                  opacity: 0,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #eaeaea 0%, #d4af37 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards, shimmer 3s ease-in-out 1s infinite",
                }}
              >
                Established in 2019 with Passion for Antiquity
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 2,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards",
                  opacity: 0,
                }}
              >
                CS Antiques was founded on a simple yet powerful vision: to preserve the beauty and craftsmanship of antique furniture while making these treasures accessible to those who appreciate true heritage. For over five years, we've been dedicated to sourcing, restoring, and delivering premium antique and reproduction furniture that tells a story.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "#b0b0b0",
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards",
                  opacity: 0,
                }}
              >
                Our showrooms in Panadura and Rajagiriya showcase a carefully curated collection of pettagams (traditional storage chests), gramophones, cabinets, and meticulously reproduced pieces that honor traditional Sri Lankan craftsmanship.
              </Typography>

            </Box>
          </Grid>

          {/* Statistics Box - Left */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.1) 100%)",
                borderRadius: "20px",
                p: { xs: 3, md: 4.5 },
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(212, 175, 55, 0.3)",
                boxShadow: "0 20px 60px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                animation: "scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards",
                opacity: 0,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                  opacity: 0.5,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.2rem" },
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 0.5,
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "-0.02em",
                }}
              >
                5+ Years
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "#b0b0b0",
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                }}
              >
                of Excellence in Antique Furniture
              </Typography>

              <Stack spacing={2}>
                <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(212,175,55,0.2)", animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards", opacity: 0 }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 0.5, fontSize: "1rem", fontFamily: '"Poppins", sans-serif' }}>
                    2 Premium Showrooms
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
                    Panadura & Rajagiriya branches
                  </Typography>
                </Box>

                <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(212,175,55,0.2)", animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards", opacity: 0 }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 0.5, fontSize: "1rem", fontFamily: '"Poppins", sans-serif' }}>
                    400+ Pettagams Sold
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
                    Traditional storage furniture
                  </Typography>
                </Box>

                <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(212,175,55,0.2)", animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards", opacity: 0 }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 0.5, fontSize: "1rem", fontFamily: '"Poppins", sans-serif' }}>
                    200+ Gramophones Sold
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
                    Vintage audio equipment
                  </Typography>
                </Box>

                <Box sx={{ animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards", opacity: 0 }}>
                  <Typography sx={{ color: "#d4af37", fontWeight: 700, mb: 0.5, fontSize: "1rem", fontFamily: '"Poppins", sans-serif' }}>
                    700+ Happy Customers
                  </Typography>
                  <Typography sx={{ color: "#b0b0b0", fontSize: "0.9rem", fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}>
                    Trusted worldwide
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Leadership Section - Right */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, ml: { xs: 0, md: 12 }, mt: { xs: 2, md: -4 }, animation: "fadeInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards", opacity: 0 }}>
              {/* Leadership Title */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", md: "0.8rem" },
                    fontWeight: 700,
                    color: "#d4af37",
                    mb: { xs: 0.8, md: 1 },
                    letterSpacing: "0.15em",
                    fontFamily: '"Poppins", sans-serif',
                    textTransform: "uppercase",
                    animation: "fadeInDown 0.6s ease-out 0.5s forwards",
                    opacity: 0,
                  }}
                >
                  MEET OUR LEADERSHIP
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.6rem", md: "2.2rem" },
                    fontWeight: 800,
                    color: "#eaeaea",
                    mb: { xs: 1.5, md: 2 },
                    lineHeight: 1.3,
                    fontFamily: '"Playfair Display", serif',
                    animation: "fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards",
                    opacity: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Visionary Leaders Shaping Excellence
                </Typography>
              </Box>

              {/* Leadership Photos Side by Side */}
              <Grid container spacing={{ xs: 2, md: 8 }}>
                {/* Chairman */}
                <Grid item xs={6}>
                  <Box
                    sx={{
                      textAlign: "center",
                      background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                      border: "2px solid rgba(212, 175, 55, 0.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      p: { xs: 1.5, md: 2.5 },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: "scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards",
                      opacity: 0,
                      "&:hover": {
                        transform: "translateY(-12px) scale(1.02)",
                        boxShadow: "0 30px 70px rgba(212, 175, 55, 0.35)",
                        borderColor: "rgba(212, 175, 55, 0.5)",
                        background: "linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.1) 100%)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={chairmanImg}
                      alt="Chairman"
                      sx={{
                        height: { xs: "160px", md: "300px" },
                        width: { xs: "160px", md: "300px" },
                        borderRadius: "12px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        objectFit: "contain",
                        mb: { xs: 0.8, md: 1.5 },
                        mx: "auto",
                        display: "block",
                        transition: "all 0.4s ease",
                        animation: "fadeInUp 0.8s ease 0.8s forwards",
                        opacity: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                        fontWeight: 800,
                        color: "#d4af37",
                        mb: 0.2,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Chairman
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.9rem" },
                        fontWeight: 600,
                        color: "#eaeaea",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Founder & Visionary
                    </Typography>
                  </Box>
                </Grid>

                {/* Manager */}
                <Grid item xs={6}>
                  <Box
                    sx={{
                      textAlign: "center",
                      background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                      border: "2px solid rgba(212, 175, 55, 0.3)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      p: { xs: 1.5, md: 2.5 },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: "scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards",
                      opacity: 0,
                      "&:hover": {
                        transform: "translateY(-12px) scale(1.02)",
                        boxShadow: "0 30px 70px rgba(212, 175, 55, 0.35)",
                        borderColor: "rgba(212, 175, 55, 0.5)",
                        background: "linear-gradient(135deg, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.1) 100%)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={managerImg}
                      alt="Manager"
                      sx={{
                        height: { xs: "160px", md: "300px" },
                        width: { xs: "160px", md: "300px" },
                        borderRadius: "12px",
                        border: "2px solid rgba(212, 175, 55, 0.3)",
                        objectFit: "contain",
                        mb: { xs: 0.8, md: 1.5 },
                        mx: "auto",
                        display: "block",
                        transition: "all 0.4s ease",
                        animation: "fadeInUp 0.8s ease 0.8s forwards",
                        opacity: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1.1rem" },
                        fontWeight: 800,
                        color: "#d4af37",
                        mb: 0.2,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Manager
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.9rem" },
                        fontWeight: 600,
                        color: "#eaeaea",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Operations & Excellence
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Button
                onClick={() => navigate("/locations")}
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #d4af37 0%, #e8c547 100%)",
                  color: "#0b0b0b",
                  px: { xs: 4, md: 8 },
                  py: { xs: 1.5, md: 2 },
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "block",
                  mx: "auto",
                  mt: 5,
                  mb: 3,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  textTransform: "uppercase",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 15px 45px rgba(212,175,55,0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
                  border: "none",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    transition: "left 0.6s",
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 25px 60px rgba(212,175,55,0.8), inset 0 1px 0 rgba(255,255,255,0.3)",
                    "::before": {
                      left: "100%",
                    },
                  },
                  "&:active": {
                    transform: "translateY(-2px)",
                  },
                  animation: "slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards",
                  "@keyframes slideInUp": {
                    from: {
                      opacity: 0,
                      transform: "translateY(40px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                Visit Our Showrooms
              </Button>
      </Box>

      {/* Values Section */}
      <Box sx={{ backgroundColor: "rgba(212, 175, 55, 0.05)", py: { xs: 5, md: 7 }, borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", px: { xs: 2, md: 4 }, width: "100%", position: "relative", overflow: "hidden" }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 6, animation: "fadeInDown 0.8s ease-out 0.2s forwards", opacity: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                fontWeight: 700,
                color: "#d4af37",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mb: 1.5,
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                color: "#eaeaea",
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #eaeaea 0%, #d4af37 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "fadeInUp 0.8s ease 0.3s forwards",
                opacity: 0,
              }}
            >
              What We Stand For
            </Typography>
          </Box>

          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      background: "rgba(212, 175, 55, 0.08)",
                      border: "2px solid rgba(212, 175, 55, 0.15)",
                      backdropFilter: "blur(10px)",
                      p: 3,
                      height: "100%",
                      textAlign: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s forwards`,
                      opacity: 0,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                      },
                      "&:hover": {
                        transform: "translateY(-16px) scale(1.02)",
                        borderColor: "#d4af37",
                        boxShadow: "0 30px 70px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                        background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                        "::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: "3.5rem",
                        color: "#d4af37",
                        mb: 2,
                        transition: "all 0.3s ease",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        fontWeight: 800,
                        color: "#eaeaea",
                        mb: 1.5,
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        color: "#b0b0b0",
                        lineHeight: 1.7,
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 400,
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
      <Box sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 4 }, width: "100%" }}>
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 6, animation: "fadeInDown 0.8s ease-out 0.2s forwards", opacity: 0 }}>
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", md: "0.85rem" },
              fontWeight: 700,
              color: "#d4af37",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Our Collections
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              color: "#eaeaea",
              fontFamily: '"Playfair Display", serif',
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #eaeaea 0%, #d4af37 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeInUp 0.8s ease 0.3s forwards",
              opacity: 0,
            }}
          >
            Authentic Antiques vs Premium Reproductions
          </Typography>
        </Box>

        <Grid container spacing={6} sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          <Box
              sx={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
                border: "2px solid rgba(212, 175, 55, 0.3)",
                borderRadius: "20px",
                p: 4,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                animation: "fadeInLeft 0.8s ease-out 0.4s forwards",
                opacity: 0,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                  opacity: 0.5,
                },
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 30px 70px rgba(212, 175, 55, 0.3)",
                  borderColor: "rgba(212, 175, 55, 0.5)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 4,
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "-0.01em",
                }}
              >
                Authentic Antiques
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.9,
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 400,
                }}
              >
                Original pieces crafted decades or centuries ago, each bearing the marks of history and time. Our authentic antiques are:
              </Typography>

              <Stack spacing={2.5}>
                {[
                  "Verified original with documented history",
                  "Unique craftsmanship from past eras",
                  "Inherent value that appreciates over time",
                  "One-of-a-kind pieces with soul and character",
                  "Premium investment for collectors",
                ].map((item, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2, animation: `fadeInUp 0.6s ease-out ${0.5 + index * 0.08}s forwards`, opacity: 0 }}>
                    <CheckCircle sx={{ color: "#d4af37", flexShrink: 0, fontSize: "1.3rem" }} />
                    <Typography sx={{ color: "#eaeaea", fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.02) 100%)",
              border: "2px solid rgba(212, 175, 55, 0.2)",
              borderRadius: "20px",
              p: 4,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              animation: "fadeInRight 0.8s ease-out 0.5s forwards",
              opacity: 0,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
                opacity: 0.3,
              },
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 30px 70px rgba(212, 175, 55, 0.2)",
                borderColor: "rgba(212, 175, 55, 0.4)",
                background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)",
              },
            }}
          >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 800,
                  color: "#d4af37",
                  mb: 4,
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "-0.01em",
                }}
              >
                Premium Reproductions
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.9,
                  mb: 3,
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 400,
                }}
              >
                Faithfully recreated designs using traditional methods and materials. Our reproductions offer:
              </Typography>

              <Stack spacing={2.5}>
                {[
                  "Authentic design with modern durability",
                  "Traditional craftsmanship at accessible prices",
                  "Consistent quality and availability",
                  "Perfect for those discovering antique style",
                  "Same premium materials and techniques",
                ].map((item, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 2, animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.08}s forwards`, opacity: 0 }}>
                    <CheckCircle sx={{ color: "#d4af37", flexShrink: 0, fontSize: "1.3rem" }} />
                    <Typography sx={{ color: "#eaeaea", fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
        </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
